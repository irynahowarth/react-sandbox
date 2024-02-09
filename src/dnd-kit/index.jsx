import React from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Board from "./Board";

// export default function DndKit() {
//   const [isDropped, setIsDropped] = React.useState(false);
//   const draggableMarkup = <Draggable>Drag me</Draggable>;

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!isDropped ? draggableMarkup : null}
//       <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
//     </DndContext>
//   );
//   function handleDragEnd(event) {
//     if (event.over && event.over.id === "droppable") {
//       setIsDropped(true);
//     }
//   }
// }

export default function DndKit() {
  return <Board />;
}
