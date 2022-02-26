<template>
  <div class="hero">
    <div class="hero-container text-light">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background: linear-gradient(136.11deg, #5988b4 -1.06%, #214f7a 98.37%);
}
.hero-container {
  padding: 2rem;
}
</style>
