"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function Title({}: Props) {
  let router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center py-5 gap-48">
      <p className="text-lg uppercase">Posts</p>
      <button
        className="rounded bg-gray-400 p-3"
        onClick={() => router.push("/posts/create")}
      >
        Add post
      </button>
    </div>
  );
}
