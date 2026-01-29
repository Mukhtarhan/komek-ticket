
<template>
    <header
        class="flex w-full items-center justify-between bg-(--mygreen) px-4 sm:px-12 py-4 sm:py-6"
    >
        <img
            src="@/assets/logo.png"
            alt="Komek Ticket Logo"
            height="45"
            width="169"
            class="cursor-pointer transition hover:scale-105"
        />

        <div class="hidden sm:flex flex-col">
            <p class="text-white">Казахстан</p>
            <p class="text-sm text-(--mygray1)">улица Тестовая 1</p>
        </div>

        <div class="flex flex-col">
            <div class="flex items-center gap-1">
                <p class="text-white sm:text-base text-sm">+7 (775) 000 00 01</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    class="text-(--mygray1)"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            <p class="text-sm text-(--mygray1)">Касса</p>
        </div>

        <div class=" items-center hidden sm:flex gap-4">
            <router-link
                to="https://facebook.com"
                target="_blank"
                class="cursor-pointer rounded-full bg-(--mygray1) p-1 text-xl text-(--mygreen) transition hover:scale-115"
            >
                <i class="fa-brands fa-facebook-f"></i>
            </router-link>

            <router-link
                to="https://instagram.com"
                target="_blank"
                class="cursor-pointer rounded-full bg-(--mygray1) p-1 text-xl text-(--mygreen) transition hover:scale-115"
            >
                <i class="fa-brands fa-instagram"></i>
            </router-link>

            <router-link
                to="https://youtube.com"
                target="_blank"
                class="cursor-pointer rounded-full bg-(--mygray1) p-1 text-xl text-(--mygreen) transition hover:scale-115"
            >
                <i class="fa-brands fa-youtube"></i>
            </router-link>

            <router-link
                to="https://vk.com"
                target="_blank"
                class="cursor-pointer rounded-full bg-(--mygray1) p-1 text-xl text-(--mygreen) transition hover:scale-115"
            >
                <i class="fa-brands fa-vk"></i>
            </router-link>

            <Button > Мне пришёл билет </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
import Button from '@/components/welcome/Button.vue';
</script>
