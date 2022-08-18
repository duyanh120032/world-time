<script setup lang="ts"></script>

<template>
  <div relative select-none>
    <div
      absolute left--6 top-0 bottom-0
      flex="~ col"
    >
      <div
        v-for="zone, idx of zones"
        :key="zone.name"
        flex="~ col none" text-xl justify-center items-center
        :style="{ height: `${timezoneItemHeight}px` }"
      >
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-ri-arrow-up-s-fill
          title="Move up"
        />

        <button

          icon-btn m--1px i-ri-home-2-fill scale-75
          title="Set to home zone"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn m--1px i-ri-arrow-down-s-fill
          title="Move down"
        />
      </div>
    </div>
  </div>
  <div of-x-auto of-visible relative>
    <div
      v-for="(item) in zones"
      :key="item.name"
      p2
      relative
      flex
      items-center
      gap2
      w-max
    >
      <TimezoneItem :timezone="item" />
      <TimeDial :timezone="item" />
    </div>
  </div>
</template>

<style scoped></style>
