import type { Timezone } from '~/types'

export const timeNow = useNow({ interval: 30000 })
export const zones = useStorage<Timezone[]>('world-time-zones', [])
export const addToTimeZone = (timezone: Timezone) => {
  zones.value.push(timezone)
}
export const removeFromTimeZone = (index) => {
  zones.value.splice(index, 1)
}
export const moveUpTimeZone = (index) => {
  if (index > 0) {
    const temp = zones.value[index]
    zones.value[index] = zones.value[index - 1]
    zones.value[index - 1] = temp
  }
}
export const moveDownTimeZone = (index) => {
  if (index < zones.value.length - 1) {
    const temp = zones.value[index]
    zones.value[index] = zones.value[index + 1]
    zones.value[index + 1] = temp
  }
}
