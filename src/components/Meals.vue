<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array
  }
});
</script>

<template>
  <div class="grid grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-if="meals.length === 0" class="flex justify-center text-gray-600">
    Meals Not Found
  </div>
</template>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
