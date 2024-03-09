// ui.js

function displayMeals(mealData, mealListElement) {
  let html = "";
  if (mealData.meals) {
    mealData.meals.forEach((meal) => {
      html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
    });
    mealListElement.classList.remove("notFound");
  } else {
    html = "Sorry, we didn't find any meal!";
    mealListElement.classList.add("notFound");
  }
  mealListElement.innerHTML = html;
}

function mealRecipeModal(meal) {
  meal = meal[0];
  let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
  document.querySelector(".meal-details-content").innerHTML = html;
  document.querySelector(".meal-details").classList.add("showRecipe");
}

export { displayMeals, mealRecipeModal };
