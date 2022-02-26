<template>
  <tr>
    <td>{{ nr }}</td>
    <td>{{ name.vorname }}</td>
    <td>{{ name.nachname }}</td>
  </tr>
</template>

<script>
export default {
  props: ['nr', 'name'],
};
</script>

<style></style>
