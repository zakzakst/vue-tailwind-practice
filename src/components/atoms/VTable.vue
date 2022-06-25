<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 bg-gray-100 border-b">
        <tr>
          <th v-for="(item, index) in state.headers" :key="index" class="px-6 py-3">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in state.items"
          :key="index"
          class="bg-white"
          :class="{'border-b border-dotted': index !== state.items.length - 1}"
        >
          <th
            v-for="(entry, entryIndex) in Object.entries(item)"
            :key="entryIndex"
            class="px-6 py-4"
          >
            {{ item[entry[0]] }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VTable',

  setup() {
    const state = reactive({
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
      ],
    });

    return {
      state,
    };
  },
}
</script>