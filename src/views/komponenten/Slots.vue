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
    </app-hero>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
export default {
  components: { AppHero },
};
</script>

<style></style>
