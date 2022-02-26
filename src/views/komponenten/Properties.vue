<template>
  <div>
    <app-hero>
      <h2>Properties</h2>
      <p>
        Komponenten können eigene Properties definieren. Properties sind Werte,
        die das "Eltern"-Element bzw die "Eltern"-Komponente übergeben kann
        (natürlich auch dynamisch gebunden über v-bind).
      </p>
    </app-hero>
    <div class="container mt-4">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nr</th>
            <th>Vorname</th>
            <th>Nachname</th>
          </tr>
        </thead>
        <tbody>
          <teilnehmer
            v-for="(t, ix) in teilnehmer"
            :key="ix"
            :nr="ix + 1"
            :name="t"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
import Teilnehmer from './Teilnehmer.vue';
export default {
  components: { AppHero, Teilnehmer },
  data: () => ({
    teilnehmer: [
      { vorname: 'Joachim', nachname: 'Müller' },
      { vorname: 'Timo', nachname: 'Meier' },
      { vorname: 'Jeremias', nachname: 'Meyer' },
      { vorname: 'Adrian', nachname: 'Schmidt' },
      { vorname: 'Andreas', nachname: 'Schmitt' },
    ],
  }),
};
</script>

<style></style>
