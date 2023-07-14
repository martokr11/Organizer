<template>
    <div>
        <task v-for="task in TaskList" :key="task.id" :task = "task"/>
    </div>
</template>

<script setup>
    import task from './task.vue';

    const TaskList = [
        {
        id: 'Algebra',
        date: '21.07.2023',
        typeClass: 'Math'
        },
        {
        id: 'Aerodynamics',
        date: '22.07.2023',
        typeClass: 'Fluid Mechanics' 
        },
        {
        id: 'Kinetics',
        date: '23.07.2023',
        typeClass: 'Mechanics' 
        }
    ];


</script>