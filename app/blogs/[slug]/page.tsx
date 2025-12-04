// app/blogs/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`);

  return slugs.map((s: any) => ({ slug: s.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      description,
      image,
      content,
      author->{
        name,
        image
      }
    }`,
    { slug: params.slug }
  );

  if (!post) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.image && (
        <img
          src={urlForImage(post.image).url()}
          alt={post.title}
          className="rounded-lg mb-4"
        />
      )}

      <div className="text-gray-600 mb-6">
        <span>By {post.author?.name}</span>
      </div>

      <div className="prose">
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
