<template>
  <v-app>
    <v-main>
      <dashboard-component>

      </dashboard-component>
    </v-main>
  </v-app>
</template>

<script>
import DashboardComponent from "@/pages/dashboard.vue";

export default {
  name: 'App',
  components: {DashboardComponent},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
