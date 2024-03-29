import React from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";

import { useRecipes } from "./recipes";
import Spinner from "./spinner";
import Modal from "./modal";

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
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow">
      <div>
        <p>{recipe.name}</p>
        <p className="text-sm text-gray-500">{recipe.addInfo}</p>
      </div>
      <div>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Button className="rounded p-2 hover:bg-gray-200">
            <Pencil1Icon />
          </Modal.Button>
          <Modal.Content title="Edit recipe">
            <RecipeForm recipe={recipe} afterSave={() => setOpen(false)} />
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

function RecipeForm({ recipe, afterSave }) {
  const { updateRecipe } = useRecipes();
  const [saving, setSaiving] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setSaiving(true);
    await updateRecipe(recipe.id, data);
    afterSave();
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset disabled={saving} className="group">
        <div className="mt-8 group-disabled:opacity-50">
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
        </div>

        <div className="text-right mt-8 space-x-6">
          <Modal.Close className="px-4 py-2  text-sm font-medium text-gray-500 rounded hover:text-gray-600">
            Cancel
          </Modal.Close>
          <button className="inline-flex justify-center items-center px-4 py-2 bg-green-500 text-sm font-medium text-white rounded hover:bg-green-600 group-disabled:pointer-events-none">
            <Spinner className="h-4 absolute group-enabled:opacity-0" />
            <span className="group-disabled:opacity-0">Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}
