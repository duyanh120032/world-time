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
  <div flex="~" items-center gap2 bg-transparent font="semibold" w-full w="[280px]">
    <div w-12 text-center text-blue-500>
      {{ offset }}
    </div>
    <div flex="~ 1" justify="between" items-center>
      <div flex="~ col" text-left relative>
        <div text-lg>
          <span>{{ city }}</span>
          <sup rounded border="~ gray/20" px1 ml1> {{ timezone.abbr }}</sup>
        </div>
        <div op50 leading-1rem font-medium text-xs text="overflow-ellipsis">
          {{ state }}
        </div>
      </div>
      <div font="tabular-nums" mr3>
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
