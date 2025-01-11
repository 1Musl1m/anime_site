<script setup lang="ts">
defineProps<{
    anime: {
        id: number;
        name: string;
        russian: string;
        score: string;
        image: {
            original: string;
        };
    };
}>();
</script>

<template>
    <div class="card bg-base-100 w-52 shadow-xl hover:scale-105 duration-200">
        <figure>
            <img
                :src="'https://shikimori.one' + anime.image.original"
                :alt="anime.russian"
                class="w-full h-80"
            />
        </figure>
        <div class="card-body p-2 justify-between">
            <h2 class="card-title truncate">{{ anime.russian || anime.name }}</h2>
            <div class="card-actions items-center justify-between">
                <div
                    v-if="anime.score === '0.0'"
                    class="flex items-center gap-1"
                >
                    <svg
                        class="w-4 h-4 text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                        />
                    </svg>
                    <span>{{ anime.score }}</span>
                </div>
                <div v-else class="flex items-center gap-2">
                    <span>{{ anime.score }}</span>
                    <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                        />
                    </svg>
                </div>
                <router-link to="/"
                    ><button class="btn btn-outline">
                        Подробнее
                    </button></router-link
                >
            </div>
        </div>
    </div>
</template>