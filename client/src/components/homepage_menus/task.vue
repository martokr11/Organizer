<template>
    <q-card class="cardLayout">
      <q-card-section class="cardHeader">
        <div class="textTask"> {{ task.id }} </div>
        <q-btn round color="amber" glossy text-color="black" icon="layers_clear" class="editBtn"/>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-card-section flat> {{ task.typeClass }} </q-card-section>
        <q-card-section flat> {{ task.date }} </q-card-section>
      </q-card-actions>
    </q-card>
</template>

<script setup>
import '../../assets/card.css';

    const props = defineProps({
        task: Object,
    })
</script>

<style></style>