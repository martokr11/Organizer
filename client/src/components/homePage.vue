<template>
  <q-layout view="hHh LpR fFf">
    <topMenu/>
    <leftDrawer/>

    <q-page-container>
    <q-page>
        <div class="row">
            <taskList class="column col-6"/>
            <div class="column col-6">
                <div class="bg-pink-6">2</div>
                <div class="bg-blue-6">3</div>
            </div>
        </div>
    </q-page>
  </q-page-container>
  </q-layout>
</template>

<script setup>

    import topMenu from './homepage_menus/topMenu.vue'
    import leftDrawer from './homepage_menus/leftDrawer.vue'
    import taskList from './homepage_menus/taskList.vue'

</script>

<style scoped>

</style>