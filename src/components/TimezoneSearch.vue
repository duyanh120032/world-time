<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const input = ref('')
const index = ref(0)
const searchResults = computed(() => {
  return fuse.search(input.value)
})
const add = (i: Timezone) => {
  addToTimeZone(i)
  input.value = ''
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown')
    index.value = Math.min(index.value + 1, searchResults.value.length - 1)
  else if (e.key === 'ArrowUp')
    index.value = Math.max(index.value - 1, 0)
  else if (e.key === 'Enter' && input.value)
    add(searchResults.value[index.value].item)
}
const refEl = ref<HTMLDivElement | null>(null)
onMounted(() => {
  setTimeout(() => {
    refEl.value.scrollTop = 200
  }, 2000)
})
</script>

<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="Search timezone...."
      p2
      bg-transparent
      border="~ base rounded"
      w-full
      outline="none"
      @keydown="onKeyDown"
    >
    <div
      v-show="input"
      ref="refEl"
      absolute
      top-full
      bg-gray-200
      dark:bg-truegray-800
      left-0
      z-10
      right-0
      pt-4
      max-h-70
      overflow-auto
    >
      <button
        v-for="(item, idx) of searchResults"
        :key="item.refIndex"
        flex
        gap2
        w-full
        pb-2
        :class="{ 'bg-gray:40 dark:bg-truegray-700': idx === index }"
        @click="add(item.item)"
      >
        <TimezoneItem :timezone="item.item" />
      </button>
    </div>
  </div>
</template>
