<template>
  <div class="flex gap-2 mb-6 flex-wrap bg-[#F2F2F5] px-4 sm:px-12 py-2">
    <button
      v-for="day in days"
      :key="day"
      @click="setActiveDay(day)"
      class="px-4 py-1.5 rounded-full text-sm border cursor-pointer
             hover:bg-(--myred) hover:text-white transition"
      :class="day === activeDay
        ? 'bg-(--myred) text-white border-(--myred)'
        : 'bg-white text-gray-600'"
    >
      {{ day }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeDay = ref('Сегодня');
const days = [
  'Сегодня',
  'Завтра',
  'Воскресенье, 10 сент.',
  'Понедельник, 11 сент.',
  'Вторник, 12 сент.',
  'Среда, 13 сент.',
]

const setActiveDay = (day) => {
  activeDay.value = day;
};
</script>
