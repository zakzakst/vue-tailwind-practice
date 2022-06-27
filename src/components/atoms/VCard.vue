<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link || null"
    :target="link && targetBlank ? '_blank' : null"
    class="overflow-hidden flex flex-col bg-white rounded-lg shadow-md"
    :class="{'duration-300 hover:shadow-xl': link}"
  >
    <div class="flex-shrink-0">
      <slot name="head" />
    </div>
    <div class="p-4 flex-grow">
      <slot />
    </div>
    <div class="flex-shrink-0">
      <slot name="foot" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'VCard',

  props: {
    link: {
      type: String,
      default: '',
    },
    targetBlank: {
      type: Boolean,
      default: false,
    },
  },
}
</script>