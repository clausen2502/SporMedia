// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import globalAPI from "../services/globalAPI";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import fadedForrest from "../assets/faded-forrest.png";

const MEDIA_URL = "http://localhost:1337";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    globalAPI.getPost
      .then((resp) => {
        const items = resp?.data?.data ?? [];
        const result = items.map((item) => ({
          id: item?.id,
          slug: item?.slug,
          title: item?.title ?? "Untitled",
          desc: item?.Description ?? item?.description ?? "",
          tag: item?.tag ?? "Allt",
          coverImage: item?.Image?.url ? MEDIA_URL + item.Image.url : null,
          pictures: (item?.Pictures ?? [])
            .map((p) => (p?.url ? MEDIA_URL + p.url : null))
            .filter(Boolean),
        }));
        setAllPosts(result);
        setPosts(result);
      })
      .catch(() => {});
  }, []);

  const filterPost = (tag) => {
    if (tag === "Allt") setPosts(allPosts);
    else setPosts(allPosts.filter((p) => p.tag === tag));
  };

  const intro = posts[0];
  const rest = posts.slice(1);

  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${fadedForrest})` }}
    >
      {/* White overlay to fade the forest more */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <Search selectedTag={filterPost} />
        {intro && <IntroPost post={intro} />}
        {rest.length > 0 && <Blogs posts={rest} />}
      </div>
    </section>
  );
}

export default Blog;
