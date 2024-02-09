import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Card({ title, index, parent }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className="p-3 m-2 bg-white border rounded-xl border-gray-300"
    >
      {title}
    </div>
  );
}
