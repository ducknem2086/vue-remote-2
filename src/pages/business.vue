<template>
  <div>
    <h1>business work !</h1>
    <v-btn v-on:click="testing">
      test click
    </v-btn>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
function testing() {
  console.log('testing');
}

export default {
  name: 'BusinessComponent',
  click: testing,
}
</script>