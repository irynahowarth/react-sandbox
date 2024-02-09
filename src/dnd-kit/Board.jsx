import React from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import Column from "./Column";

export default function Board() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [doneItems, setDoneItems] = React.useState([]);
  const [inProgressItems, setInProgressItems] = React.useState([]);
  const [uItems, setuItems] = React.useState([
    { title: "Hello there" },
    { title: "Another card" },
    { title: "No 3" },
    { title: "And another one" },
  ]);

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";

        if (container === "ToDo") {
          setTodoItems([...todoItems, { title }]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
        } else if (container === "Unassigned") {
          setuItems([...uItems, { title }]);
        } else {
          setInProgressItems([...inProgressItems, { title }]);
        }

        if (parent === "ToDo") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else if (parent === "Unassigned") {
          setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <div className="flex gap-3">
        <Column title="ToDo" items={todoItems} />
        <Column title="In Progress" items={inProgressItems} />
        <Column title="Done" items={doneItems} />
        <Column title="Unassigned" items={uItems} />
      </div>
    </DndContext>
  );
}
