const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Utility function to simulate network delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchMealsByIngredient(ingredient) {
  await delay(500); // Simulate a 1-second network delay
  const url = `${API_BASE_URL}/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching meals by ingredient: ", error);
    throw error;
  }
}

async function fetchMealById(id) {
  await delay(500); // Simulate a 1-second network delay
  const url = `${API_BASE_URL}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching meal by ID: ", error);
    throw error;
  }
}

export { fetchMealsByIngredient, fetchMealById };
