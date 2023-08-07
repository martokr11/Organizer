<template>
    <div>
        <task v-for="task in TaskList" :key="task.id" :task = "task"/>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Utils   from '../../utils/utils.js';    
  import task from '../homepage_menus/task.vue';

  const TaskList = ref([]);

  // created async
  (async () => {
    TaskList.value = (await Utils.Post('/Org/GetTasks', 1000)).data;
  })();
</script>