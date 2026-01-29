<template>
    <div class="flex flex-col items-center sm:items-start w-full">
        <!-- Poster -->
        <div class="relative">
            <img :src="movie.poster" class="h-[384px] cursor-pointer hover:opacity-75 rounded object-cover" />
        </div>

        <!-- Info -->
        <h3 class="mt-2 text-2xl text-center sm:text-left ">
            {{ movie.title }}
        </h3>

        <div class="flex flex-wrap gap-2 mt-2">
            <span
                class="bg-[#F2F2F5] py-1 px-2 rounded text-xs text-gray-500"
                v-for="genre in movie.genres"
                :key="genre"
            >
                {{ genre }}
            </span>
        </div>

        <!-- Sessions -->
        <div class="mt-4 grid grid-cols-3 gap-2 w-3/4 sm:w-full">
            <SessionButton
                v-for="(s, index) in movie.sessions"
                :key="index"
                :session="s"
            />
        </div>
    </div>
</template>

<script setup>
import SessionButton from './SessionButton.vue';
defineProps({ movie: Object });
</script>
