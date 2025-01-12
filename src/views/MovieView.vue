<template>
    <div class="py-10 sm:py-5">
        <div v-if="loading" class="flex items-center justify-center">
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <div v-else class="flex flex-wrap gap-3">
            <AnimeCard v-for="anime in animes" :key="anime.id" :anime="anime" />
        </div>

        <Pagination :page="page" :prevPage="prevPage" :nextPage="nextPage" />
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import AnimeCard from "@/components/movie/AnimeCard.vue";
import Pagination from "@/components/themes/Pagination.vue";

const page = ref<number>(1);
const animes = ref<any>([]);
const loading = ref<boolean>(false);

const fetchAnimes = async (page: number): Promise<void> => {
    loading.value = true;
    try {
        const response = await axios.get(
            `https://shikimori.one/api/animes/?page=${page}&limit=24`
        );
        animes.value = response.data;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};

watch(page, (newPage) => {
    fetchAnimes(newPage);
});

const nextPage = (): void => {
    page.value++;
};

const prevPage = (): void => {
    if (page.value > 1) {
        page.value--;
    }
};

fetchAnimes(page.value);
</script>