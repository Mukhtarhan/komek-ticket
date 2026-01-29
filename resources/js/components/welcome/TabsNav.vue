<template>
    <div class="bg-white px-4 sm:px-12">
        <div class="flex w-full items-center flex-wrap">
            <nav class="flex gap-6">
                <a
                    v-for="tab in tabs"
                    :key="tab"
                    href="#"
                    @click.prevent="setTab(tab)"
                    class="border-b-3 px-1 sm:px-2 py-2 sm:py-4 text-sm font-medium transition hover:border-(--myred) hover:text-(--myred)"
                    :class="
                        activeTab === tab
                            ? 'border-(--myred)'
                            : 'border-transparent'
                    "
                >
                    {{ tab }}
                </a>
            </nav>

            <div class="ml-8 flex gap-6 my-4 sm:my-0">
                <Button>Войти</Button>
                <Button>Написать отзыв</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/welcome/Button.vue';

const activeTab = ref('Афиша');

const tabs = ['Афиша', 'Сеансы', 'Кинотеатры', 'Контакты'];

const setTab = (tab) => {
    activeTab.value = tab;
};
</script>
