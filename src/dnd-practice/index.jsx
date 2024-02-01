import React from "react";

export default function Dnd() {
  // groups to be dragged between
  const groups = ["todo", "doing", "done", "none"];
  //items to be dragged
  const initialItems = [
    { id: 1, group: "todo", title: "do something first" },
    { id: 2, group: "todo", title: "do something second" },
    { id: 3, group: "doing", title: "do it again" },
    { id: 4, group: "done", title: "num 4" },
    { id: 5, group: "doing", title: "num 5" },
  ];

  const [items, setItems] = React.useState(initialItems);
  const [dragData, setDragData] = React.useState({});
  const [noDrop, setNoDrop] = React.useState("");

  const handleDragStart = (e, id, group) => {
    setDragData({ id: id, initialGroup: group });
  };

  //if enter noDrag zone the state will be updated
  //used for styling
  const handleDragEnter = (e, group) => {
    if (group === "none") {
      setNoDrop("none");
    }
  };

  //dnd will not work without this
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //setNoDrop to nothing to return styling to normal
  const handleDragLeave = (e) => {
    setNoDrop("");
  };

  // 1. makes copy of items (newItems)
  // 2. changes category of the item to its new group
  // 3. setItems to our newItems
  const changeCategory = (itemId, group) => {
    const newItems = [...items];
    newItems[itemId - 1].group = group;
    setItems([...newItems]);
  };

  // 1. setNoDrop in case item was dropped in noDrop
  // 2. gets the item id
  // 3. doesn't allow drop in noDrop
  // 4. change category
  const handleDrop = (e, group) => {
    setNoDrop("");
    const selected = dragData.id;
    if (group === "none") {
      console.log("not allowed");
    } else {
      changeCategory(selected, group);
    }
  };

  return (
    <>
      <div className="flex m-5 p-5 flex-wrap">
        {/* iterate over groups */}
        {groups.map((group) => (
          <div
            className="m-2 p-10 min-h-16 bg-green-400"
            key={group}
            //event handlers
            onDragEnter={(e) => handleDragEnter(e, group)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, group)}
          >
            <h1 className="text-xl text-white uppercase p-0 mt-0">{group}</h1>
            <div>
              {items
                .filter((item) => item.group === group)
                .map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-green-100 text-green-900 m-2 p-2 border-2 border-green-900 cursor-grab"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id, group)}
                  >
                    {item.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
