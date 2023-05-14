import { kv } from "@vercel/kv";
import { Post } from "../types";
import { redirect } from "next/navigation";

export const EditPostForm = ({ post }: { post: Post }) => {
  const handleSavePost = async (formData: FormData) => {
    "use server";
    let posts = await kv.get<Post[]>("posts");
    let updatedList = posts?.find((p) => p.id === formData.get("id"));
    if (updatedList) {
      updatedList.title = (formData.get("title") as string) || post.title;
    }
    await kv.set("posts", posts);
    redirect("/posts");
  };

  return (
    <div>
      <form
        action={handleSavePost}
        className="flex w-full justify-between gap-10"
      >
        <input
          className="text-black p-4"
          name="title"
          defaultValue={post.title}
        />
        <input hidden className="text-black" name="id" defaultValue={post.id} />
        <button className="p-2 bg-white text-black rounded">Save</button>
      </form>
      <div className="flex gap-10 mt-10">
        <button>👍</button>
        <button>👎</button>
      </div>
    </div>
  );
};
