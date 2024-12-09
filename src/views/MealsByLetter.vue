<script setup>
import { computed, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') // Array of letters
const meals = computed(() => store.state.mealsByLetter)

// Watch for changes in the route and dispatch the action to search meals by letter
watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4"> Search Meals By Letter</h1>
    </div>

    <div class="flex justify-center gap-2 mt-2">
        <!-- Render a link for each letter -->
        <router-link :to="{ name: 'MealsByLetter', params: { letter } }" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>

    <!-- Display the meals -->
    <Meals :meals="meals"></Meals> <!-- Fixed the closing tag -->
</template>
