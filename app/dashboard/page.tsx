import kv from "@vercel/kv";

export default async function Page() {
  let username = (await kv.get("user:name")) as string;
  return <h1>hello {username}</h1>;
}
