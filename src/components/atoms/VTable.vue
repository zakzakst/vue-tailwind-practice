<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead v-if="headers.length" class="text-xs text-gray-700 bg-gray-100 border-b">
        <tr>
          <th v-for="(item, index) in headers" :key="index" class="px-6 py-3">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody v-if="items.length">
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="bg-white"
          :class="{'border-b border-dotted': index !== items.length - 1}"
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
export default {
  name: 'VTable',

  props: {
    items: {
      type: Array,
      default: [],
    },
    headers: {
      type: Array,
      default: [],
    },
  },
}
</script>