const API_KEY = 'f884b7ff00ec4c448873fed5048e444d';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

async function fetchRecipes(ingredient) {
    try {
        const response = await fetch(`${BASE_URL}?query=${ingredient}&number=10&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}
