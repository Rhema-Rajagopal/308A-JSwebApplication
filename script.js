import { fetchMealsByIngredient, fetchMealById } from "./api.js";
import { displayMeals, mealRecipeModal } from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

const searchButton = document.getElementById("searchButton");
const ingredientInput = document.getElementById("ingredientInput");

// event listener
// searchBtn.addEventListener("click", getMealList);
// mealList.addEventListener("click", getMealRecipe);
recipeCloseBtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});

document.getElementById("search-btn").addEventListener("click", async () => {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  try {
    const data = await fetchMealsByIngredient(searchInputTxt);
    displayMeals(data, document.getElementById("meal"));
  } catch (error) {
    console.error("Failed to fetch meals: ", error);
  }
});

document.getElementById("meal").addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    try {
      const data = await fetchMealById(mealItem.dataset.id);
      mealRecipeModal(data.meals);
    } catch (error) {
      console.error("Failed to fetch meal recipe: ", error);
    }
  }
});

// Function to initiate search
function initiateSearch() {
  const ingredient = ingredientInput.value.trim();
  if (ingredient) {
    searchMeals(ingredient);
  }
}

// Event listener for the search button click
searchButton.addEventListener("click", initiateSearch);

// Event listener for the 'Enter' key in the input field
ingredientInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the form from submitting if it's part of a form
    initiateSearch();
  }
});

// Make sure `searchMeals` is defined or imported if it's defined in another module
