import { useEffect, useState } from "react";

export function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-j78o.onrender.com/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section id="blogs-section" className="my-10 px-4 text-foreground">
      <h1 className="text-3xl font-bold mb-6">My Blogs</h1>
      <div className="grid gap-6">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="blog-post border p-6 rounded bg-card text-foreground"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
