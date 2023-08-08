<template>
    <q-dialog v-model="isActive" persistent>
      <q-card class="q-pa-md">
        <q-card-section class="row items-center">
          <span class="dialogTitle">Create new Task</span>
        </q-card-section>

        <span>Task name:</span>
        <q-input rounded outlined v-model="title" />    

        <q-card-actions>
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);
defineExpose({isActive});

const task = ref({
    id: 0,
    name: "",
    dueDate: "",
    status: "active",
    priority: "",
});

</script>

<style scoped>
.dialogTitle{
    font-size: 25px;
    font-family: cursive;
}
</style>