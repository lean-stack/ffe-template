<template>
  <div>
    <app-hero>
      <h2>Computed</h2>
      <p>
        Computed Eigenschaften stellen ein Werte-Caching bereit. D.h. wenn eine
        Eigenschaft aus "etwas anderem" berechnet wird, wird diese Berechnung
        nur dann neu ausgeführt, wenn die zugrunde liegenden Daten sich ändern.
      </p>
    </app-hero>
    <div @mousemove="x = $event.offsetX" class="container mt-4">
      <input type="text" v-model="vorname" />
      <br />
      Zähler: {{ counter }}
      <b-btn @click="++counter" variant="primary">Inc</b-btn>
      <br />
      Doppelter Wert: {{ doppeltFalsch() }} {{ doppeltRichtig }}
      <br />
      Position: {{ x }}
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
export default {
  components: { AppHero },
  data: () => ({
    counter: 0,
    vorname: 'Timo',
    x: 0,
  }),
  methods: {
    doppeltFalsch() {
      console.log('Falsche, weil ab und an unötige, Berechnung');
      return this.counter * 2;
    },
  },
  computed: {
    doppeltRichtig() {
      console.log('Jetzt notwendige Berechnung');
      return this.counter * 2;
    },
  },
};
</script>

<style></style>
