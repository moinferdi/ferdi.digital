<template>
  <div>
    <section-hero id="home" />
    <section-quick-facts />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ferdinand Niemann - Developer Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Welcome to the portfolio of Ferdinand Niemann, a passionate developer from Lübeck, specializing in modern web applications and innovative app solutions.'
    }
  ]
})
</script>

<style scoped>
div {
  --margin-block: 8rem;

  @media screen and (min-width: 768px) {
    --margin-block: 16rem;
  }
}
</style>