<template>
  <div class="q-pa-md row" style="justify-content: center;">
    <div class="q-gutter-md">
      <q-date 
        v-model="date"
        :events="events"
        mask="MM/DD/YYYY" 
        style="width: 500px;"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  let today = new Date().toLocaleDateString();

  const p1 = '0' + today.split('/')[0];
  const p2 = '0' + today.split('/')[1];
  const p3 =       today.split('/')[2];

  today = `${p1}/${p2}/${p3}`;

 
  const date = ref(today);
  const events = [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ];

  console.log(date.value)

  function eventsFn (date) {
    const parts = date.split('/')
    return parts[ 2 ] % 2 === 0
  }
</script>