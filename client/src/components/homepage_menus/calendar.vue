<template>
    <div class="calendar">
      <div class="calendarHeader">
        <h2 class="calendarMonth">{{ currentMonth }}</h2>
        <div class="moveBtns">
            <q-btn @click="prevMonth" class="moveMonth" icon="arrow_left" rounded></q-btn>
            <q-btn @click="nextMonth" class="moveMonth" icon="arrow_right"></q-btn>
        </div>
        </div>    
      <div class="days">
        <div v-for="day in daysInMonth" :key="day">{{ day }}</div>
      </div>
    </div>
  </template>
  
  <script>
import '../../assets/calendar.css'

  export default {
    data() {
      return {
        currentDate: new Date(),
      };
    },
    computed: {
      currentMonth() {
        const options = { month: 'long', year: 'numeric' };
        return this.currentDate.toLocaleDateString('en-US', options);
      },
      daysInMonth() {
        const days = [];
        const totalDays = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth() + 1,
          0
        ).getDate();
        for (let i = 1; i <= totalDays; i++) {
          days.push(i);
        }
        return days;
      },
    },
    methods: {
      prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      },
      nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      },
    },
  };
  </script>
  
  <style>
  .header {  
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    margin-top: 10px;
  }
  
  .days > div {
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  