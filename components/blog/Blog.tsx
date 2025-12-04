"use client";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const query = `*[_type == "post"]{
  _id,
  title,
  description,
  slug,
  image,
  author->{
    name,
    image
  }
}`;

export default async function BlogList() {
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div className="p-6 my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post: any) => (
        <Link key={post._id} href={`/blogs/${post.slug.current}`}>
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white flex flex-col h-full">
            {post.image && (
              <Image
                src={urlForImage(post.image).url()}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="flex flex-col gap-3 p-4 flex-1">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 text-sm">
                {post.description.slice(0, 100)}...
              </p>

              {/* AUTHOR SECTION */}
              <div className="flex items-center gap-3 mt-auto">
                {post.author?.image && (
                  <Image
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    width={35}
                    height={35}
                    className="rounded-full object-cover"
                  />
                )}
                <span className="text-sm font-medium text-gray-700">
                  {post.author?.name}
                </span>
              </div>

              <p className="text-sm text-blue-600 font-medium mt-1">
                Read more →
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
