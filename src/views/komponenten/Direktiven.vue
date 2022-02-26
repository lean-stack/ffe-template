<template>
  <div>
    <app-hero>
      <h2 v-html="title"></h2>
      <ul>
        <li>v-on: Event-Binding (Kurzform: @click)</li>
        <li>v-bind: Attribut-Binding (Kurzform: :src)</li>
        <li>
          v-text: Text-Content setzen (vgl. mit <span v-pre>{{ ... }}</span> )
        </li>
        <li>v-html: Html-Content setzen</li>
        <li>v-pre: schaltet Vue-Template Engine aus</li>
        <li>v-if: Bedingtes Rendern (und v-else bzw. v-else-if)</li>
        <li>v-for: Wiederholtes Rendern (mit key-Attribut)</li>
        <li>v-model: Two-Way Binding für input-Tags</li>
        <li>v-slot: Componenten mit Content befüllen</li>
      </ul>

      <p>
        <a class="text-light d-block mt-2" target="_blank" v-bind:href="docUrl"
          >Link zur Doc</a
        >
      </p>
      <h3 v-if="zeit.getMinutes() > 39 && zeit.getMinutes() < 59">
        Frühstückspause
      </h3>
      Vorname:
      <input
        type="text"
        :value="vorname"
        @input="vorname = $event.target.value"
      />
      Hallo {{ vorname }}
      <br />
      Nachname:
      <input type="text" v-model.lazy="nachname" />
      Hallo {{ nachname }}
    </app-hero>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';

export default {
  components: {
    AppHero,
  },
  // Vorsicht beim Fat-Arrow: geht nur solange kein this benutzt wird.
  data: () => ({
    docUrl: 'https://v2.vuejs.org/v2/api/#Directives',
    title: 'Direktiven <small> - die Template-Befehle</small>',
    zeit: new Date(),
    vorname: 'Micha',
    nachname: 'Alt',
    primzahlen: [2, 3, 5, 7],
  }),
};
</script>

<style></style>
