<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Header from '@/components/welcome/Header.vue';
import TabsNav from '@/components/welcome/TabsNav.vue';
import DateTabs from '@/components/welcome/DateTabs.vue';
import { movies } from '@/mocks/movies';
import MovieCard from '@/components/welcome/MovieCard.vue';
import Footer from '@/components/welcome/Footer.vue';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div
        class="flex min-h-screen bg-black w-full flex-col items-center bg-[url('@/assets/background-poster.png')] bg-top bg-no-repeat text-[#1b1b18]"
    >
        <img src="@/assets/preview.png" alt="" height="400" width="1240" />
        <div class="mx-auto w-full max-w-[1240px] bg-white">
            <Header />
            <div class="shadow">
                <TabsNav />
              
            </div>
            <div class="">
                <DateTabs />
                  <div
                    class="px-4 sm:px-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <MovieCard
                        v-for="movie in movies"
                        :key="movie.id"
                        :movie="movie"
                    />
                </div>
            </div>
            <div class="h-[300px]"> </div>
            <Footer />
        </div>
    </div>
</template>
