<template>
    <q-card class="cardLayout" style="float: left;">
      <q-card-section class="cardHeader">
        <div class="textTask"> {{ task.id }} </div>
        <q-btn round color="secondary" size="sm" icon="done" class="doneBtn"/>
        <q-btn round color="amber" size="sm" glossy text-color="black" icon="settings" class="editBtn"/>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-card-section flat> Subject: {{ task.typeClass }} </q-card-section>
        <q-card-section flat> Status: {{ task.status }} </q-card-section>
        <q-card-section flat> Due: {{ task.dueDate }} </q-card-section>
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