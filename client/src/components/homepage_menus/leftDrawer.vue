<template>
<q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-light-green-12"
        style="justify-content: center;"
      >

  <q-btn class="drawerBtn" round color="cyan-14" icon="task"/>
  <q-btn class="drawerBtn" round color="teal-10" icon="event"/>

      </q-drawer>
</template>

<script setup>

  import { ref } from 'vue';

  const drawer = ref(false);
  const miniState = ref(true);

</script>

<style scoped>
.drawerBtn{
  margin-left: 5px;
  margin-top: 10px;
}
</style>