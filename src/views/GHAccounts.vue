<template>
  <div>
    <app-hero>
      <h2>GitHub Browser</h2>
    </app-hero>
    <div class="content mt-4 text-center">
      <div class="d-flex align-items-center">
        <span>Auswahl:</span>
        <select v-model="selectedAccount">
          <option v-for="acc in accounts" :key="acc" :value="acc">
            {{ acc }}
          </option>
        </select>
        <ul v-if="account">
          <li>Name: {{ account.name }}</li>
          <li>
            Angelegt:
            {{ new Date(account.created_at).toLocaleDateString('de') }}
          </li>
          <li>Repos: {{ account.public_repos }}</li>
        </ul>
        <span style="display: none">{{ dummyName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';

const baseUrl = 'https://api.github.com/users/';

async function getData(acc) {
  // new XMLHttpRequest()
  // Bibliotheken: jQuery, axios, got, (request)
  // API modern: fetch

  const response = await fetch(baseUrl + acc);
  const data = await response.json();
  return data;
}

export default {
  components: { AppHero },
  data: () => ({
    account: undefined,
    selectedAccount: 'vuejs',
    accounts: ['vuejs', 'facebook', 'angular', 'lean-stack'],
  }),
  methods: {},
  watch: {
    selectedAccount: {
      handler(acc, oldAcc) {
        getData(acc).then((d) => {
          this.account = d;
        });
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
