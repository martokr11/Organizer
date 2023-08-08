<template>
    <q-dialog v-model="isActive" persistent>
      <q-card class="q-pa-md" style="background-color: #f5ebe0; width: 550px; border-radius: 20px;">  
        <q-card-section class="row items-center">
          <span class="dialogTitle">Create new Task</span>
        </q-card-section>

        <span class="inputSpan">Task name:</span>
        <q-input rounded outlined v-model="task.name" style="margin-bottom: 10px;"/>

        <span class="inputSpan">Subject:</span>
        <q-input rounded outlined v-model="task.subject" style="margin-bottom: 10px;"/>

        <span class="inputSpan">Due date:</span>
        <q-input rounded outlined v-model="task.dueDate" style="margin-bottom: 10px;"/>

        <div>
        <span class="inputSpan" style="margin-right: 15px; margin-bottom: 10px;">Priority:</span>
          <q-btn-dropdown rounded label="Pick Priority" style="background-color: #FFD4B2; margin-bottom: 10px;" v-model="task.priority">
            <q-list>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>High</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Medium</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Low</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>

        <span class="inputSpan">Description:</span>
        <q-input rounded outlined v-model="task.description" style="margin-bottom: 10px;"/> 

        <span class="inputSpan">Requirements:</span>
        <q-input rounded outlined v-model="task.requirements" style="margin-bottom: 10px;"/> 

        <span class="inputSpan">Team members:</span>
        <q-input rounded outlined v-model="task.teamMembers" style="margin-bottom: 10px;"/> 

        <q-card-actions>
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" />
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
    subject: "",
    dueDate: "",
    status: "active",
    priority: "",
    description: "",
    requirements: "",
    teamMembers: "",    
});

</script>

<style scoped>
.dialogTitle{
    font-size: 25px;
    font-family: cursive;
}
.inputSpan{
  font-size: 15px;
  font-family: cursive;
}
</style>