import { kv } from "@vercel/kv";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function CratePost() {
  let lists = (await kv.get("posts")) || ([] as any);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const newPost = {
      id: randomUUID(),
      title: formData.get("title"),
    };
    const updatedPosts = [...lists, newPost];
    await kv.set("posts", JSON.stringify(updatedPosts));
    revalidatePath("/posts");
    redirect("/posts");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form action={handleSubmit}>
        <div>
          <label className="pr-2">Title</label>
          <input
            className="rounded h-10 text-black p-2 outline-none"
            defaultValue=""
            name="title"
            autoFocus
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <button className="p-2 bg-white text-black rounded">Submit</button>
          <Link href="/posts" className="bg-blue-300 text-black p-2 rounded">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
