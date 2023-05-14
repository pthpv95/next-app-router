import { kv } from "@vercel/kv";
import { Post } from "../types";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center justify-between border-solid rounded p-4 bg-blue-300 mb-3">
      <p className="font-bold">{post.title}</p>
      <Link
        href={`/posts/edit/${post.id}`}
        className="bg-blue-300 text-black p-2 rounded"
      >
        Edit
      </Link>
    </div>
  );
};

const Card = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <Image className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export async function PostList() {
  // simulate slow query
  // await new Promise((res) => setTimeout(res, 500));
  let lists = await kv.get<Post[]>("posts");
  if (!lists) return <h3>No post</h3>;

  return (
    <div className="max-w-s">
      {lists.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
