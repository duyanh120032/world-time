<script setup lang="ts">
import { format } from 'date-fns'
import type { Timezone } from '~/types'
const { timezone } = defineProps<{ timezone: Timezone }>()

const hours = computed(() =>
  Array.from({ length: 24 }, (_, i) => i + timezone.offset + 1),
)
const days = computed(() => [
  hours.value.filter(i => i < 0).map(i => (i + 24) % 24),
  hours.value.filter(i => i >= 0 && i < 24),
  hours.value.filter(i => i >= 24).map(i => i % 24),
])

const isMidnight = (h: number) => {
  return h <= 5 || h >= 22
}
const isNight = (h: number) => {
  return h <= 7 || h >= 18
}
</script>

<template>
  <div flex>
    <template v-for="(day, idx) in days">
      <div v-if="day.length" :key="idx" flex="~" border="~ sky7/30 rounded">
        <div
          v-for="i in day"
          :key="i"
          flex
          items-center
          justify="center"
          h8
          :style="`width:${dayCellWidth}px`"
          :class="[
            isMidnight(i) ? 'bg-sky/40' : '',
            isNight(i) ? 'bg-sky/10' : '',
          ]"
        >
          <div v-if="i">
            {{ i }}
          </div>
          <div v-else text="xs center">
            {{ format(timeNow, "MMM") }}
            {{ format(timeNow, "dd") }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
