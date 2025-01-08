const API_KEY = 'your_api_key_here';
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
