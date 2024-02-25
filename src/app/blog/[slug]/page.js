import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";


async function getSingleBlog(slug) {
  const query = `
  *[_type == 'blogs' && slug.current == '${slug}'] {
    title,
      body,
      description,
      "currentSlug": slug.current,
  }[0]
  `
  const data = await client.fetch(query);
  return data
}


export default async function BlogPage({ params }) {

const blog = await getSingleBlog(params.slug);
  return (
    <section className="h-screen">
    <p>
      {blog.title}
      {blog.body}
      {blog.description}
    </p>
    
    </section>
  )
}