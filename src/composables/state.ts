import type { Timezone } from '~/types'

export const timeNow = useNow({ interval: 30000 })
export const zones = useStorage<Timezone[]>('world-time-zones', [])
export const addToTimeZone = (timezone: Timezone) => {
  zones.value.push(timezone)
}
export const removeFromTimeZone = (index) => {
  zones.value.splice(index, 1)
}
