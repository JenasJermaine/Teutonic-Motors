<script setup>
    import Navbar from "./components/Navbar.vue"
</script>

<template style="color: color=#0FF;">
<v-app>
    <Navbar/>
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>


