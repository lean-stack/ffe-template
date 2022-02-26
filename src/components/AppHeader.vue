<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/">
      <img height="30" src="/img/logo.svg" />
    </b-navbar-brand>
    <b-navbar-toggle target="app-nav" />
    <b-collapse id="app-nav" is-nav>
      <b-navbar-nav class="ml-auto level-1">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item-dropdown right text="D3">
          <b-dropdown-item to="/d3/lcd">Line Chart Static</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right text="Komponenten">
          <b-dropdown-item to="/komponenten/data-methods"
            >Daten und Methoden</b-dropdown-item
          >
          <b-dropdown-item to="/komponenten/directives"
            >Direktiven</b-dropdown-item
          >
          <b-dropdown-item :to="{ name: 'computed' }">Computed</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'props' }">Properties</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'slots' }">Slots</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'refs' }">Refs</b-dropdown-item>
        </b-nav-item-dropdown>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
#app-nav .level-1 > li > a {
  position: relative;
  margin: 0 0.5rem;
}
#app-nav .level-1 > li > a:hover {
  color: #3795d5;
}

@media (min-width: 992px) {
  #app-nav .level-1 > li > a:hover {
    color: #3795d5;
    border-bottom: 3px solid #3795d5;
  }
  #app-nav .level-1 > li > .router-link-exact-active {
    border-bottom: 3px solid #3795d5;
  }
  #app-nav .b-nav-dropdown.show > a {
    border-bottom: 3px solid #3795d5;
  }
}
</style>
