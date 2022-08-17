<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'
import { timezones } from '../composables/data'
import { addToTimeZone } from '../composables/state'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const input = ref('')
const searchResults = computed(() => {
  return fuse.search(input.value)
})
const add = (i: Timezone) => {
  addToTimeZone(i)
  input.value = ''
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="Search timezone...."
      px2 py-1 bg-transparent border="~ gray/15 rounded"
    >
    <div absolute top-full bg-gray-900 left-0 right-0>
      <button
        v-for="item of searchResults"
        :key="item.refIndex"
        flex gap2
        @click="add(item.item)"
      >
        <div font-mono w-10 text-right>
          {{ item.item.offset }}
        </div>
        <div>
          {{ item.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>
