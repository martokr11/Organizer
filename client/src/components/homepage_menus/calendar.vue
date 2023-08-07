<template>
  <div class="q-pa-md row" style="justify-content: center;">
    <div class="q-gutter-md">
      <q-date 
        v-model="date"
        :events="events"
        mask="DD/MM/YYYY" 
        style="width: 500px;"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import moment from 'moment'
  let today = moment(new Date()).format("DD/MM/YYYY");
  console.log(today)

  const date = ref(today);
  const events = [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ];

  console.log(date.value)

  function eventsFn (date) {
    const parts = date.split('/')
    return parts[ 2 ] % 2 === 0
  }
</script>