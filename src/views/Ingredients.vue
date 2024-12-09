<script setup>

import { ref, onMounted, computed } from 'vue'
import useAPI from '@/composables/useAPI';

const { api } = useAPI()

const keyword = ref('') 
const Ingreadients = ref([])

onMounted(() => {
    api.get('list.php?i=list')
        .then(({ data }) => {
        Ingreadients.value = data.meals
    })
})


</script>
<template>
      <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4"> Search Meals By Ingreadients</h1>
    </div>
    
    {{ Ingreadients }}
    
</template>