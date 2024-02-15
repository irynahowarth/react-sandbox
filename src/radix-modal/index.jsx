import React from "react";
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useRecipes } from "./recipes";

export default function RadixModal() {
  const { recipes } = useRecipes();
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

function RecipeCard({ recipe }) {
  const { updateRecipe } = useRecipes();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log(data);
    await updateRecipe(recipe.id, data);
  }
  return (
    <div className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow">
      <div>
        <p>{recipe.name}</p>
        <p className="text-sm text-gray-500">{recipe.addInfo}</p>
      </div>
      <div>
        <Dialog.Root>
          <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
            <Pencil1Icon />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow w-full max-w-md">
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-xl">Edit recipe</Dialog.Title>
                <Dialog.Close className="text-gray-400 hover:text-gray-500">
                  <Cross1Icon />
                </Dialog.Close>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="mt-8">
                  <RecipeFields recipe={recipe} />
                </div>

                <div className="text-right mt-8 space-x-6">
                  <Dialog.Close className="px-4 py-2  text-sm font-medium text-gray-500 rounded hover:text-gray-600">
                    Cancel
                  </Dialog.Close>
                  <button className="px-4 py-2 bg-green-500 text-sm font-medium text-white rounded hover:bg-green-600">
                    Save
                  </button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

function RecipeFields({ recipe }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={recipe.name}
          name="name"
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Additional Info
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={recipe.addInfo}
          name="addInfo"
        />
      </div>
    </div>
  );
}
