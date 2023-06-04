<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oooopss...</p>
    <p class="mt-7">{{ error.message }}</p>
    <div class="m-7">
      <button class="btn" @click="handleError">Clear Error</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
