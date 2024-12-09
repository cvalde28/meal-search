import useAPI from "@/composables/useAPI";

const { api } = useAPI();

export function searchMeals({ commit }, keyword) {
  api.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals);
    })
    .catch((error) => {
      console.error("Error fetching meals by keyword:", error);
      commit('setSearchedMeals', []); // Optionally clear previous results or show error state
    });
}

export function searchMealsByLetter({ commit }, letter) {
  api.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals);
    })
    .catch((error) => {
      console.error("Error fetching meals by letter:", error);
      commit('setMealsByLetter', []); // Optionally clear previous results or show error state
    });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  api.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      commit('setMealsByIngredient', data.meals);
    })
    .catch((error) => {
      console.error("Error fetching meals by ingredient:", error);
      commit('setMealsByIngredient', []); // Optionally clear previous results or show error state
    });
}
