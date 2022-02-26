<template>
  <app-hero>
    <h2 style="height: 300px">About</h2>
    <p>Aktuelle Uhrzeit {{ zeit }}</p>
  </app-hero>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
let timer;

export default {
  components: { AppHero },
  data: () => ({
    zeit: new Date().toLocaleTimeString('de'),
  }),
  mounted() {
    timer = setInterval(() => {
      console.log('Zeit');
      this.zeit = new Date().toLocaleTimeString('de');
    }, 1000);
  },
  destroyed() {
    console.log('Aufräumarbeiten');
    clearInterval(timer);
  },
};
</script>

<style></style>
