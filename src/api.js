import API_URL from './config';

const getMealById = async (id) => {
  try {
    const result = await fetch(`${API_URL}/lookup.php?i=${id}`);
    const json = await result.json();
    return json;
  } catch (error) {
    return error;
  }
};

const getAllCategories = async () => {
  try {
    const result = await fetch(`${API_URL}/categories.php`);
    const json = await result.json();
    return json;
  } catch (error) {
    return error;
  }
};

const getFilteredCategories = async (category) => {
  try {
    const result = await fetch(`${API_URL}/filter.php?c=${category}`);
    const json = await result.json();
    return json;
  } catch (error) {
    return error;
  }
};

export { getAllCategories, getMealById, getFilteredCategories };
