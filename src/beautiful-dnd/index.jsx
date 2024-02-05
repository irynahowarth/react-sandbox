import React from "react";
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

export default function BeautifulDnd() {
  let state = initialData;
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskId.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
