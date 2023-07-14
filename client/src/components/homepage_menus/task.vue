<template>
    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6"> {{ task.id }} </div>
        <div class="text-subtitle2"> {{ task.date }} </div>
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script setup>
    const props = defineProps({
        task: Object,
    })
</script>