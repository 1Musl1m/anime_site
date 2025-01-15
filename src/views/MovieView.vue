<script setup lang="ts">
import axios from "axios";
import { provide, ref, watch } from "vue";
import AnimeCard from "@/components/movie/AnimeCard.vue";
import Filter from "@/components/movie/Filter.vue";

const page = ref<number>(1);
const animes = ref<any>([]);
const loading = ref<boolean>(false);

const name = ref<string>('')

provide('name', name)

console.log(name.value)

const fetchAnimes = async (page: number): Promise<void> => {
    loading.value = true;
    try {
        const response = await axios.get(
            `https://shikimori.one/api/animes/?page=${page}&limit=25`
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

fetchAnimes(page.value);
</script>


<template>
    <div class="p-10 sm:px-5 md:px-7 sm:py-5">
        <div v-if="loading" class="flex items-center justify-center">
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <div class="grid grid-cols-4 gap-8">
            <div>
                <Filter />
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-5 gap-3">
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