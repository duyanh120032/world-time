<script setup lang="ts">
import type { Timezone } from '~/types'

const { timezone } = defineProps<{ timezone: Timezone }>()

const state = computed(() => timezone.name.split('/')[0])
const city = computed(() => timezone.name.split('/')[1])
const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
const time = computed(() => timeNow.value.toLocaleTimeString('en-US', {
  timeZone: timezone.name,
  hour: '2-digit',
  minute: '2-digit',
}))
</script>

<template>
  <div flex="~" items-center gap2 bg-transparent font="semibold">
    <div w-12 text-center text-blue-500>
      {{ offset }}
    </div>
    <div flex="~ 1" justify="between" items-center>
      <div flex="~ col" text-left relative>
        <div text-lg>
          <span>{{ city }}</span>
          <sup rounded bg-gray-200 dark:bg-truegray-800 p-1 ml1> {{ timezone.abbr }}</sup>
        </div>
        <div op50 leading-1rem font-medium>
          {{ state }}
        </div>
      </div>
      <div font="tabular-nums">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
