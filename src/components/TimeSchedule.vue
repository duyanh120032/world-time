<script setup lang="ts"></script>

<template>
  <div relative select-none>
    <div absolute left--6 top-0 bottom-0 flex="~ col" py-4>
      <div
        v-for="(zone, idx) of zones"
        :key="zone.name"
        flex="~ col none"
        text-xl
        justify-center
        items-center
        :style="{ height: `${timezoneItemHeight}px` }"
      >
        <button
          v-if="idx !== 0"
          icon-btn
          m--1px
          i-carbon:caret-up
          title="Move up"
        />

        <button
          icon-btn
          m--1px
          i-carbon:close
          scale-75
          title="Set to home zone"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn
          m--1px
          i-carbon:caret-down
          title="Move down"
        />
      </div>
    </div>
  </div>
  <div of-x-auto relative py-4>
    <div
      v-for="item in zones"
      :key="item.name"
      p2
      relative
      flex="~ wrap"
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
