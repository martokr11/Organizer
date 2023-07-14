<template>
  <task v-for="task in TaskList" :key="task.id" :task = "task"/>
</template>

<script setup>
    import task from './task.vue';

    const TaskList = [
        {
        id: '1',
        date: '21.07.2023',
        typeClass: 'Math'
        },
        {
        id: '2',
        date: '22.07.2023',
        typeClass: 'Fluid Mechanics' 
        },
        {
        id: '3',
        date: '23.07.2023',
        typeClass: 'Mechanics' 
        }
    ];


</script>