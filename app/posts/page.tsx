import { PostList } from "./components/PostList";
import Title from "./components/Title";

export default async function Posts() {
  return (
    <div>
      <Title />
      {/* @ts-expect-error Server Component */}
      <PostList />
    </div>
  );
}
