<template>
    <footer class="text-white">
        <div class="mx-auto max-w-[1240px]">
            <!-- TOP -->
            <div class="bg-(--mygreen) px-4 sm:px-12 py-6">
                <!-- Logo + contacts -->
                <div class="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                    <div>
                        <img
                            src="@/assets/logo.png"
                            alt="logo"
                            height="45"
                            class=""
                        />
                    </div>

                    <div class="text-white">
                        <p>admin@example.com</p>
                        <p>ticket@example.com</p>
                        <p class="text-sm text-(--mygray1)">улица Тестовая 1</p>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex items-center gap-1">
                            <p class="text-white">+7 (775) 000 00 01</p>

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

                    <div class="flex flex-col">
                        <p class="text-white">08:00 - 22:00 с пн.-пт.</p>
                        <p class="text-sm text-(--mygray1)">Касса</p>
                    </div>
                </div>
            </div>
            <!-- Menu -->
            <div class="w-full bg-[#0C3542]">
                <div class="flex flex-col sm:flex-row gap-6 sm:gap-0 border-b border-white/20 px-4 sm:px-12 py-6">
                    <div class="w-1/2">
                        <p class="mb-4">Меню</p>

                        <ul class="space-y-2 text-(--mygray1)">
                            <li
                                v-for="item in menu"
                                :key="item"
                                class="cursor-pointer transition hover:text-white"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <!-- Payments -->
                    <div class="ml-0 sm:ml-12 w-1/2">
                        <p class="mb-4 ">Способы оплаты:</p>
                        <div class="flex gap-6">
                            <img
                                src="@/assets/mastercard.png"
                                alt="payments"
                                class="h-16 w-auto"
                            />
                            <img
                                src="@/assets/Visa.png"
                                alt="payments"
                                class="h-16 w-auto"
                            />
                        </div>

                        <p class="mt-12 text-xs text-(--mygray1)">
                            Все сеансы начинаются с рекламно-информационного
                            блока. Точную продолжительность сеансов можно
                            уточнить в кинотеатре.
                        </p>
                    </div>
                </div>

                <!-- BOTTOM -->
                <div
                    class="mt-6 pb-16 flex px-4 sm:px-12 flex-col sm:items-center justify-between gap-4 md:flex-row"
                >
                    <!-- Socials -->
                    <div class="flex gap-4 text-lg">
                        <a
                            v-for="icon in socials"
                            :key="icon.icon"
                            :href="icon.link"
                            target="_blank"
                            class="flex h-9 w-9 items-center justify-center rounded-full bg-(--mygray1) text-(--mygreen) transition hover:scale-110"
                        >
                            <i :class="icon.icon"></i>
                        </a>
                    </div>

                    <!-- Copyright -->
                    <p class="text-sm text-(--mygray1)">
                        © 2025 Все права защищены
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const menu = ['Афиша', 'Сеансы', 'Пушкинская карта', 'Кинотеатр', 'Контакты'];

const socials = [
    { icon: 'fa-brands fa-facebook-f', link: 'https://facebook.com' },
    { icon: 'fa-brands fa-instagram', link: 'https://instagram.com' },
    { icon: 'fa-brands fa-youtube', link: 'https://youtube.com' },
    { icon: 'fa-brands fa-vk', link: 'https://vk.com' },
];
</script>
