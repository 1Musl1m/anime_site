<script setup lang="ts">
defineProps<{
    page: number;
    prevPage: () => void;
    nextPage: () => void;
}>();
</script>

<template>
    <div>
        <button @click="prevPage" :disabled="page === 1">
            Предыдущая страница
        </button>
        <button @click="nextPage">Следующая страница</button>
    </div>
</template>
