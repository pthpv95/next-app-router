import { kv } from "@vercel/kv";
import { Post } from "../../types";
import { EditPostForm } from "../../components/EditPostForm";

export default async function Page({ params }: { params: { id: string } }) {
  let posts = await kv.get<Post[]>("posts");
  let matchPost = posts?.find((p) => p.id === params.id);
  if (matchPost) {
    return (
      <div>
        <EditPostForm post={matchPost} />
      </div>
    );
  }
  return <div>Not found</div>;
}
