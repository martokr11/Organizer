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
        dueDate: '21.07.2023',
        typeClass: 'Math',
        status: 'active',
        description: 'aaa',
        taskRequirements: 'asd',

        },
        {
        id: 'Aerodynamics',
        dueDate: '22.07.2023',
        typeClass: 'Fluid Mechanics',
        status: 'active',
        description: 'aaa',
        taskRequirements: 'asd',
        },
        {
        id: 'Kinetics',
        dueDate: '23.07.2023',
        typeClass: 'Mechanics',
        status: 'active',
        description: 'aaa',
        taskRequirements: 'asd',
        },
    ];


</script>