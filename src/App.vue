<script setup lang="ts">

</script>

<template>
  <div font-sans h-screen bg-gray:10>
    <Navbar />
    <div border="~ base" bg-white dark:bg-truegray-900 rounded shadow mx8>
      <ActionBar />
      <TimeSchedule />
    </div>
  </div>
</template>

<style>
html.dark{
  background-color: #222;
  color: #fff;
  transition: color 0.5s ease-in-out;
}
</style>
