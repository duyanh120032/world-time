import type { Timezone } from '~/types'

export const zones = ref<Timezone[]>([])
export const addToTimeZone = (timezone: Timezone) => {
  zones.value.push(timezone)
}
