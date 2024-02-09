import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";

export default function Column({ title, items }) {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <div className="flex flex-col bg-gray-200 border rounded p-3  min-h-10">
      <h2 className="text-bold">{title}</h2>
      <div ref={setNodeRef} className="flex flex-col ">
        {items.map(({ title: cardTitle }, key) => (
          <Card title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </div>
    </div>
  );
}
