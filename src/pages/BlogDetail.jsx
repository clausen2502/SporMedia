// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import globalAPI from "../services/globalAPI";
import fadedForrest from "../assets/faded-forrest.png";

const MEDIA_URL = "http://localhost:1337";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    globalAPI
      .getPostBySlug(slug)
      .then((resp) => {
        const item = resp?.data?.data;
        if (!item) return;
        setPost({
          id: item.id,
          slug: item.slug,
          title: item.title,
          desc: item.Description ?? item.description ?? "",
          tag: item.tag,
          createdAt: item.createdAt,
          coverImage: item.Image?.url ? `${MEDIA_URL}${item.Image.url}` : undefined,
          pictures:
            (item.Pictures ?? [])
              .map((p) => (p?.url ? `${MEDIA_URL}${p.url}` : null))
              .filter(Boolean) || [],
        });
      })
      .catch(() => {});
  }, [slug]);

  if (!post) return null;

  // Minimal wrapper with background + EDIT OVERLAY HERE (bg-white/50)
  const Content = ({ children }) => (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${fadedForrest})` }}
    >
      {/* ▼▼ Change this to /70, /85, /90 to adjust fade */}
      <div className="absolute inset-0 bg-white/50" />
      <article className="relative z-10 px-6 md:px-20 lg:px-56 pt-[120px] pb-16 max-w-5xl mx-auto">
        {children}
      </article>
    </section>
  );

  return (
    <Content>
      <div className="text-sm text-[#5a3d2b]/60 mb-2">
        <Link to="/blog" className="hover:underline">Blogg</Link>
        <span className="mx-1">/</span>
        <span>{post.tag}</span>
      </div>

      <div className="flex items-center gap-3 text-[12px] text-[#5a3d2b]/70">
        <time dateTime={post.createdAt}>{post.createdAt?.slice(0, 10)}</time>
        <span className="mx-1">|</span>
        <span className="inline-flex items-center rounded-full border border-[#5a3d2b]/20 px-2.5 py-1 text-xs">
          {post.tag}
        </span>
      </div>

      <h1 className="text-[28px] md:text-[36px] font-extrabold text-[#5a3d2b] mt-2">
        {post.title}
      </h1>

      {post.coverImage && (
        <figure className="mt-6 mb-8 overflow-hidden rounded-2xl bg-[#5a3d2b]/5">
          <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover" />
        </figure>
      )}

      <div className="text-[#5a3d2b]/90 leading-8">
        <ReactMarkdown>{post.desc}</ReactMarkdown>
      </div>

      {post.pictures.length > 0 && <div className="mt-12 mb-8 h-px bg-[#5a3d2b]/15" />}

      {post.pictures.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#5a3d2b] mb-4">Myndir</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {post.pictures.map((src, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl border border-[#5a3d2b]/15 bg-[var(--color--cream)] shadow-sm">
                <img src={src} alt={`mynd ${i + 1}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}
    </Content>
  );
}
