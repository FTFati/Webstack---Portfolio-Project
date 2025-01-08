const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const recipeContainer = document.getElementById('recipeContainer');

searchButton.addEventListener('click', async () => {
    const ingredient = searchInput.value;
    if (!ingredient) {
        alert('Please enter an ingredient.');
        return;
    }

    const recipes = await fetchRecipes(ingredient);
    displayRecipes(recipes);
});

function displayRecipes(recipes) {
    recipeContainer.innerHTML = ''; // Clear previous results

    if (!recipes || recipes.length === 0) {
        recipeContainer.innerHTML = '<p>No recipes found. Try another ingredient!</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <a href="https://spoonacular.com/recipes/${recipe.id}" target="_blank">View Recipe</a>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}
