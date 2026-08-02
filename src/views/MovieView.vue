<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import AnimeCard from "@/components/movie/AnimeCard.vue";
import Filter from "@/components/movie/Filter.vue";
import { useInfiniteScroll } from "@vueuse/core";

const api = import.meta.env.VITE_API_URL;

const page = ref<number>(1);
const animes = ref<any>([]);
const loading = ref<boolean>(false);
const noMoreData = ref<boolean>(false);

const fetchAnimes = async (page: number): Promise<void> => {
    loading.value = true;
    try {
        const response = await axios.get(
            `${api}/animes/?page=${page}&limit=28`
        );

        if (response.data.length === 0) {
            noMoreData.value = true;
        } else {
            // Фильтруем данные перед добавлением в массив
            const filteredAnimes = response.data.filter((anime: any) => {
                return anime.image.original !== "/assets/globals/missing_original.jpg"
            });

            animes.value = [...animes.value, ...filteredAnimes];
        }
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};

fetchAnimes(page.value);

useInfiniteScroll(
    document,
    async () => {
        if (!loading.value && !noMoreData.value) {
            page.value += 1;
            await fetchAnimes(page.value);
        }
    },
    { distance: 500 }
);

console.log()
</script>

<template>
    <div class="p-10 sm:px-5 md:px-7 sm:py-5">
        <div v-if="loading" class="flex items-center justify-center">
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <div class="grid grid-cols-4 gap-8">
            <div class="sm:hidden">
                <Filter />
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                    <AnimeCard
                        v-for="anime in animes"
                        :key="anime.id"
                        :anime="anime"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
