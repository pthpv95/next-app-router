"use client";
import { useState } from "react";
import { EditPostForm } from "./EditPostForm";

export const InlineEditPost = ({ post, onSave, children }: any) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <EditPostForm post={post} />
      ) : (
        <>
          {children}
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="p-2 bg-white text-black rounded"
          >
            {!isEdit ? "Edit" : "Save"}
          </button>
        </>
      )}
    </>
  );
};
