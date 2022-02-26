<template>
  <div>
    <app-hero>
      <h2>Daten und Methoden</h2>
      <p>
        Vue-Komponenten halten ihre eigenen Daten (lokalen Komponenten-State)
        und haben Methoden, mit denen dieser State manipuliert werden kann. Vue
        verwendet eine JavaScript-Technik, um diesen State zu überwachen! Das
        führt zu dieser sogenannten Reaktivität.
        <br />
        <a class="text-light d-block mt-2" target="_blank" v-bind:href="docUrl"
          >Link zur Doc</a
        >
        <a
          class="text-light"
          target="_blank"
          href="https://v2.vuejs.org/v2/guide/reactivity.html"
        >
          Reaktivität
        </a>
      </p>
    </app-hero>
    <div class="container mt-4">
      <div class="demo">
        <span v-bind:class="{ 'text-danger': counter < 0 }"
          >Zähler: {{ counter }}</span
        >
        <b-button @click="inc" variant="primary">Inc</b-button>
        <b-btn @click="dec()" variant="primary">Dec</b-btn>
        <button @click="reset($event)" class="btn btn-primary">Inc</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';

export default {
  components: { AppHero },
  // State ist das Rückgabe-Objekt der data()-Funktion
  data() {
    return {
      counter: 0,
      docUrl: 'https://v2.vuejs.org/v2/guide/instance.html#Data-and-Methods',
    };
  },
  methods: {
    inc() {
      this.counter += 1;
    },
    dec() {
      --this.counter;
    },
    reset() {
      this.counter = 0;
    },
  },
};
</script>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
