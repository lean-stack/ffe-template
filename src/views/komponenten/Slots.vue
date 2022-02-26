<template>
  <div>
    <app-hero>
      <h2>Slots</h2>
      <p>
        Mit Slots können von der Eltern-Komponente aus Inhalte in
        Kind-Komponenten projeziert werden. Einfachstes Beispiel ist diese
        app-hero Komponente die ihren Inhalt von hier bekommt.
      </p>
      <p>
        Eine Komponente kann auch mehrer Slots haben, die jeweils einen Namen
        haben. Und von der Elternkomponente lassen sich diese jeweils über die
        v-slot - Direktive füllen.
      </p>
      <p>
        <a
          class="text-white"
          href="https://v2.vuejs.org/v2/guide/components-slots.html"
          >Link zu Doc</a
        >
      </p>
      <template v-slot:footer>Das steht unterm Strich</template>
    </app-hero>
    <div class="container mt-4 text-center">
      <slot-button>
        <b-icon-app-indicator />
        <span class="ml-2">Icon Demo </span>
      </slot-button>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
import SlotButton from './SlotButton.vue';
export default {
  components: { AppHero, SlotButton },
};
</script>

<style></style>
