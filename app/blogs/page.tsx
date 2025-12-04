// app/blog/page.tsx or pages/blog/index.tsx

import Link from "next/link";
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
  // console.log(posts);
  return (
    <div className="flex flex-col container gap-5 min-h-[90vh] bg-[#eaffe3]  ">
      <div className="flex my-1 px-3">
        <h1 className="text-4xl font-bold ">Latest Blog Posts</h1>
      </div>
      <div className="p-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link key={post._id} href={`/blogs/${post.slug.current}`}>
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              {post.image && (
                <img
                  src={urlForImage(post.image).url()}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className=" flex flex-col gap-4 p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">
                  {post.description.slice(0, 100)}...
                </p>
                <p className="text-sm text-blue-600 mt-2">Read more →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>{" "}
    </div>
  );
}
