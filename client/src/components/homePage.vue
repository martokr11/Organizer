<template>
  <q-layout view="hHh LpR fFf">
    <topMenu/>
    <leftDrawer/>

    <q-page-container>
    <q-page>
        <div class='grid-container'>
            <taskList class="taskListStyle"/>
            <div class="grid-container2">
                <div class="bg-pink-6"> <calendar/> </div>
                <div class="bg-blue-6">3</div>
            </div>
        </div>
    </q-page>
  </q-page-container>
  </q-layout>
</template>

<script setup>
  import Utils   from "../utils/utils.js";
  import topMenu from './homepage_menus/topMenu.vue'
  import leftDrawer from './homepage_menus/leftDrawer.vue'
  import taskList from './homepage_menus/taskList.vue'
  import calendar from './homepage_menus/calendar.vue'

</script>

<style scoped>
.grid-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.grid-container2{
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.taskListStyle{
  overflow:scroll;
  overflow-x:hidden;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #cdfc8f;
  border-radius: 10px;
}
</style>