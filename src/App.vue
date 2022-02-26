<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader },
  name: 'App',
};
</script>

<template>
  <div class="root">
    <app-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style></style>
