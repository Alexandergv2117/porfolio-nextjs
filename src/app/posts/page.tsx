import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import Card from "../components/ui/card";
import DateFormatter from "../components/date-formatter";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full mt-28 sm:mt-32 gap-10 font-sans">
      <h1>Blogs</h1>
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:underline text-blue-600"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-1" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <DateFormatter dateString={post.date} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
