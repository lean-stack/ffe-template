<template>
  <div>
    <app-hero>
      <h2>Template Refs</h2>
      <p>
        In bestimmten Fällen muss ich aus dem Komponenten-Code auf den DOM-Baum
        zugreifen können. Dazu benötigen wir in Vue keine Standard-DOM-API,
        sondern das geht auch einfacher mit Template-Referenzen.
      </p>
      <p>
        <a
          ref="docLink"
          class="text-white"
          href="https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"
          >Link zur Doc</a
        >
      </p>
    </app-hero>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
export default {
  components: { AppHero },
  mounted() {
    this.$refs.docLink.classList.remove('text-white');
    this.$refs.docLink.classList.add('text-light');
    console.log(this.$el);
  },
};
</script>

<style></style>
