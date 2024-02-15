import { createGlobalState } from "react-hooks-global-state";

const seeds = [
  {
    id: 1,
    name: "Chili con carne",
    addInfo: "Rice+Garlic bread",
  },
  {
    id: 2,
    name: "Massaman Curry",
    addInfo: "Beef+Rice",
  },
  {
    id: 3,
    name: "Chicken Fajitas",
    addInfo: "Veg+Wraps",
  },
  {
    id: 4,
    name: "Pasta Bolognese",
    addInfo: "Pasta",
  },
  {
    id: 5,
    name: "Pesto Chicken Pasta",
    addInfo: "Pasta",
  },
];

const initialState = { recipes: seeds };
const { useGlobalState } = createGlobalState(initialState);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function useRecipes() {
  const [recipes, setRecipes] = useGlobalState("recipes");

  async function updateRecipe(id, attrs) {
    const newRecipes = recipes.map((rec) => {
      if (rec.id === id) {
        return { id, ...attrs };
      } else {
        return rec;
      }
    });

    await sleep(1000);

    setRecipes(newRecipes);
  }

  return {
    recipes,
    updateRecipe,
  };
}
