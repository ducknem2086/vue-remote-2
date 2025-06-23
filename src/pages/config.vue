<template>
  <div class="px-4 py-4 ">
    <h1>config work  !</h1>
    <v-btn color="primary" v-on:click="clickEvent">test btn click</v-btn>
  </div>
</template>
<style lang="scss" scoped>

</style>

<script>

import { onBeforeMount, onBeforeUnmount, onUpdated } from "vue";

export default {
  name: 'ConfigComponent',
  setup() {
    onBeforeMount(() => {
      console.log('onMounted()');
    })

    onUpdated(() => {
      console.log('component has rendered !');
    })
    onBeforeUnmount(() => {
      console.log('component will unmounted !');
    })
  },
  methods: {
    clickEvent() {
      console.log('clickEvent()');
    }
  }
}
</script>