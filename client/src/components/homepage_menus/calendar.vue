<template>
    <div class="calendar">
      <div class="calendarHeader">
        <p class="calendarMonth">{{ currentMonth }}</p>
        <div class="moveBtns">
            <q-btn @click="prevMonth" class="moveMonth" icon="arrow_left" rounded></q-btn>
            <q-btn @click="nextMonth" class="moveMonth" icon="arrow_right"></q-btn>
        </div>
        </div>    
      <div class="days">
        <div v-for="day in daysInMonth" :key="day" @click="test" class="day">{{ day }}</div>
      </div>
    </div>
  </template>
  



<script setup>
import '../../assets/calendar.css'
import { ref, computed } from 'vue';

// Get the current date
const currentDate = new Date();

// Reactive variables
const currentMonthIndex = ref(currentDate.getMonth());
const currentYear = ref(currentDate.getFullYear());

// Compute the number of days in the current month
const daysInMonth = computed(() => {
  const lastDay = new Date(currentYear.value, currentMonthIndex.value + 1, 0).getDate();
  return Array.from({ length: lastDay }, (_, index) => index + 1);
});

// Compute the current month name
const currentMonth = computed(() => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[currentMonthIndex.value];
});

// Function to navigate to the previous month
const prevMonth = () => {
  if (currentMonthIndex.value === 0) {
    currentYear.value--;
    currentMonthIndex.value = 11;
  } else {
    currentMonthIndex.value--;
  }
};

// Function to navigate to the next month
const nextMonth = () => {
  if (currentMonthIndex.value === 11) {
    currentYear.value++;
    currentMonthIndex.value = 0;
  } else {
    currentMonthIndex.value++;
  }
};

const test = (day) => {
  console.log(day.target);
}
</script>
  
<style>

button {
  cursor: pointer;
}
</style>
  