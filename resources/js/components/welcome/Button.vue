<template>
    <button
        :class="[
            'cursor-pointer rounded-2xl bg-(--myred) px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-105 disabled:opacity-50',
        ]"
    >
        <slot />
    </button>
</template>

