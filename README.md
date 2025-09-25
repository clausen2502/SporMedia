Spormedia Website

A modern marketing site built with Vite + React, React Router, and Tailwind CSS.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




SporMedia — Setup Notes (Frontend + Backend)

This README is a quick self-memo of what I installed and how to spin everything up again.

Tested on Node.js 20.x.

Frontend — SporMedia-website/
Tech

Vite 7 + React 19

React Router v7

Tailwind CSS v4 with @tailwindcss/vite (no PostCSS config needed)

Axios (API)

React Markdown (render post body)

Icon libs: react-icons, lucide-react

(Present but optional in code): localforage, match-sorter, sort-by

1) Install (exact versions I used)

From SporMedia-website/:

# Runtime deps
npm i \
  react@19.1.1 \
  react-dom@19.1.1 \
  react-router-dom@7.9.1 \
  axios@1.12.2 \
  react-markdown@10.1.0 \
  react-icons@5.5.0 \
  lucide-react@0.540.0 \
  localforage@1.10.0 \
  match-sorter@8.1.0 \
  sort-by@1.2.0 \
  tailwindcss@4.1.11 \
  @tailwindcss/vite@4.1.11

# Dev deps
npm i -D \
  vite@7.1.0 \
  @vitejs/plugin-react@4.7.0 \
  eslint@9.32.0 \
  @eslint/js@9.32.0 \
  eslint-plugin-react-hooks@5.2.0 \
  eslint-plugin-react-refresh@0.4.20 \
  globals@16.3.0 \
  @types/react@19.1.9 \
  @types/react-dom@19.1.7


Optional add-on (if I want GitHub-style markdown tables/lists later):

npm i remark-gfm


Usage:

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>

2) Tailwind v4 (what I’m using)

Tailwind v4 with the official Vite plugin: @tailwindcss/vite

In vite.config.ts/js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})


In src/index.css:

@import "tailwindcss";

:root {
  --color--brown: #5a3d2b;
  --color--cream: #fbf3ea;
}

/* helpers */
.nav-link { color: var(--color--brown); }

3) Env (optional but nice)

Create SporMedia-website/.env:

VITE_API_URL=http://localhost:1337
VITE_MEDIA_URL=http://localhost:1337

4) Run
npm run dev
# Local: http://localhost:5173 (Vite may choose 5174, etc.)

Backend — SporMedia-backend/ (Strapi v5)
Tech

Strapi 5.23.5

SQLite (better-sqlite3)

Custom slug lifecycle using @sindresorhus/slugify

(Currently installed but not required for backend): react, react-dom, react-router-dom, styled-components

I can remove them later to keep backend lean.

1) Install (exact versions I used)

From SporMedia-backend/:

# Core Strapi + plugins + DB + slug helper
npm i \
  @strapi/strapi@5.23.5 \
  @strapi/plugin-cloud@5.23.5 \
  @strapi/plugin-users-permissions@5.23.5 \
  better-sqlite3@11.3.0 \
  @sindresorhus/slugify@3.0.0

# (Currently installed but optional/unnecessary for backend code)
npm i \
  react@18.0.0 \
  react-dom@18.0.0 \
  react-router-dom@6.0.0 \
  styled-components@6.0.0

# Dev types + TS
npm i -D \
  typescript@~5.4 \
  @types/node@20 \
  @types/babel__core@7.20.5 \
  @types/babel__generator@7.27.0 \
  @types/babel__traverse@7.28.0 \
  @types/estree@1.0.8 \
  @types/json-schema@7.0.15 \
  @types/react@18 \
  @types/react-dom@18.3.7


Note: The React packages above aren’t needed for Strapi’s server; Strapi ships/admin-bundles its own.
To slim the backend later:
npm remove react react-dom react-router-dom styled-components @types/react @types/react-dom

2) Slug lifecycle (Icelandic-friendly)

src/api/<your-type>/content-types/<your-type>/lifecycles.js:

'use strict';
const slugify = require('@sindresorhus/slugify');

const SLUG_OPTS = {
  separator: '-',
  lowercase: true,
  decamelize: false,
  customReplacements: [
    ['þ','th'], ['Þ','Th'],
    ['ð','d'],  ['Ð','D'],
    ['æ','ae'], ['Æ','Ae'],
    ['ö','o'],  ['Ö','O'],
  ],
};

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (!data.slug && data.title) data.slug = slugify(data.title, SLUG_OPTS);
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.title && (data.slug === undefined || data.slug === null || data.slug === '')) {
      data.slug = slugify(data.title, SLUG_OPTS);
    }
    // If I ever want slug to always follow title:
    // if (data.title) data.slug = slugify(data.title, SLUG_OPTS);
  },
};

3) (Optional) Find-by-slug route

If I need /api/posts/slug/:slug:

src/api/<your-type>/routes/<your-type>.js

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/posts/slug/:slug',
      handler: 'post.findBySlug',
      config: { auth: false },
    },
  ],
};


src/api/<your-type>/controllers/<your-type>.js

'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const result = await strapi.entityService.findMany('api::post.post', {
      filters: { slug: { $eq: slug } },
      populate: '*',
      limit: 1,
    });
    ctx.body = { data: result?.[0] ?? null };
  },
}));

4) Permissions to enable (Public role)

In Settings → Users & Permissions → Roles → Public

For the collection: find, findOne

For custom slug route (if added): enable it too

5) Run
npm run develop
# Admin: http://localhost:1337/admin
# API:   http://localhost:1337/api

Frontend ↔ Backend wiring (what I used)
Service (frontend)

src/services/globalAPI.js

import axios from "axios";
const API  = import.meta.env.VITE_API_URL  || "http://localhost:1337";
const MEDIA = import.meta.env.VITE_MEDIA_URL || "http://localhost:1337";
const BASE = `${API}/api`;

const getPost        = axios.get(`${BASE}/posts?populate=*`);
const getPostBySlug  = (slug) => axios.get(`${BASE}/posts/slug/${slug}?populate=*`);

export default { getPost, getPostBySlug };
export { MEDIA };

Mapping (frontend)

I map flat Strapi v5 fields like this:

const MEDIA_URL = "http://localhost:1337";
const items = resp?.data?.data ?? [];
const posts = items.map(item => ({
  id: item.id,
  slug: item.slug,
  title: item.title ?? "Untitled",
  desc: item.Description ?? item.description ?? "",
  tag: item.tag ?? "Allt",
  coverImage: item.Image?.url ? MEDIA_URL + item.Image.url : null,
  pictures: (item.Pictures ?? []).map(p => p?.url ? MEDIA_URL + p.url : null).filter(Boolean),
}));

Useful one-liners (to audit/repair)
See declared deps
npm pkg get dependencies devDependencies

See installed top-level tree
npm ls --depth=0

Find unused deps
npx depcheck

Clean, lockfile-accurate install
rm -rf node_modules
npm ci

Scripts I use
Frontend

npm run dev — Vite dev server

npm run build — build

npm run preview — preview production build

Backend

npm run develop — Strapi dev (admin + API)

npm run build — build Strapi admin

npm run start — run in production

Notes to future me

I keep one collection type for posts (with a tag field: “Íþróttalið”, “Fyrirtæki”) so filtering is easy in the UI.

Detail pages use slug in the URL; after fetching by slug I still get id back for any related queries.

If the frontend shows blank lists, check Public role permissions and that entries are Published.

If images don’t show, confirm VITE_MEDIA_URL and that I prefix media paths with it.

💡 If I ever rename the collection (e.g., fyrirtaeki → posts), update:

Frontend endpoints in globalAPI.js

Slug route paths (if used)

Permissions for the new UID in Strapi.
