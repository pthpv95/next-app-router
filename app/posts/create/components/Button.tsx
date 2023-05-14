"use client";

import { redirect } from "next/navigation";

type Props = {
  to?: string;
  children: any;
};

export default function Button({ children, to }: Props) {
  return (
    <button className="p-2 mt-5 bg-white text-black rounded">{children}</button>
  );
}
