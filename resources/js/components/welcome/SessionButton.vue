<template>
    <button
        class="cursor-pointer rounded transition active:scale-105 disabled:opacity-50"
    >
        <div class="bg-(--myred) text-[15px] py-1 font-medium text-white">
            {{ session.time }}
        </div>
        <div class="border border-(--myred) text-[10px] opacity-80">
            <span class="mr-2">2D</span> {{ session.price }} ₸
        </div>
        <p class="text-[10px]">{{ session.hall }}</p>
    </button>
</template>

<script setup>
defineProps({ session: Object });
</script>
