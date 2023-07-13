<template>
<q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-light-green-12"
      >
      aaaaa
      </q-drawer>
</template>

<script setup>

import { ref } from 'vue';

const drawer = ref(false);
const miniState = ref(true);

</script>