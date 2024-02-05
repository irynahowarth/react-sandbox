import React from "react";

export default function Mealplan() {
  return (
    <div className="flex">
      <div className="sidebar h-screen relative">
        <header className="border border-gray-200 h-[70px] flex items-center pl-5">
          <h1 className="font-extrabold">MealPlan</h1>
        </header>
        <div className="category-wrapper border border-gray-200 p-5 border-t-0 border-b-0 h-5/6">
          <h2>Category</h2>
          <ul>
            <li>All meals</li>
            <li>Kids Fav</li>
            <li>Family meals</li>
            <li>Adults meals</li>
          </ul>
        </div>
        <div className="switch-wrapper border border-gray-200 p-5 absolute bottom-0 left-0">
          <span>Dark mode</span>
          <button
            type="button"
            className="switch bg-white w-14 h-6 border rounded-full cursor-pointer box-content outline-offset-[6px p-0.5"
            onClick={() => console.log("switch Mode")}
          >
            <span
              className="switch-ball h-full aspect-square bg-gray-300 block rounded-full"
              style={{
                transition: "transform 300ms",
                transform: `translateX(${"year" === "year" ? "130%" : "0%"})`,
              }}
            />
          </button>
        </div>
      </div>
      <main className="flex flex-col bg-blue-50 w-full">
        <div className="top-bar flex bg-white border border-gray-200 border-l-0 h-[70px]  w-full items-center">
          <h2>Top bar</h2>
          <button className="border rounded p-1 ml-auto">+ New recipe</button>
        </div>
        <div className="main-wrapper">
          <div className="board-nav ">Board Nav</div>
          <div className="board-wrapper">
            <div className="rec-list">Recipes list</div>
            <div className="board-main">Board</div>
          </div>
        </div>
      </main>
    </div>
  );
}
