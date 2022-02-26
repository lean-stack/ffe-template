<template>
  <div>
    <app-hero>
      <template #default>
        <h2>Home</h2>
      </template>
      <template #footer>
        Kleine Anwendung mit diversen Vue-Beispielen
      </template>
    </app-hero>
    <div class="content mt-4 text-center">
      <button
        v-if="!cookieConsent"
        @click="allowCookies"
        class="btn btn-primary btn-large"
      >
        Erlaube Cookies
      </button>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
export default {
  components: { AppHero },
  data: () => ({
    cookieConsent: JSON.parse(localStorage.consent || 'false'),
  }),
  methods: {
    allowCookies() {
      this.$matomo.rememberConsentGiven();
      localStorage.consent = true;
      this.cookieConsent = true;
    },
  },
};
</script>

<style></style>
