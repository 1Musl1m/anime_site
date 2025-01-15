<script setup lang="ts">
import { BxMoviePlay } from "@kalimahapps/vue-icons";
import { inject, ref, watch } from "vue";

const inputData = inject('inputData')
const inputValue = ref('')

watch(inputValue, (newValue) => {
  if (inputData) {
    inputData.value = newValue
  }
})
</script>

<template>
    <div class="bg-base-200 p-6 rounded-2xl">
        <div class="flex flex-col gap-4">
            <h2 class="text-3xl text-center font-mono font-semibold">Фильтр</h2>
            <div>
                <h2 class="text-lg font-mono font-semibold ml-1">Поиск</h2>
                <form
                    class="flex items-center max-w-sm mx-auto"
                >
                    <div class="relative w-full">
                        <div
                            class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none"
                        >
                            <BxMoviePlay class="w-6 h-6" />
                        </div>
                        <input
                            type="text"
                            v-model="inputValue"
                            class="border border-gray-600 rounded-lg block w-full ps-10 p-2 hover:border-gray-500 transition-colors duration-200"
                            placeholder="Поиск по названию"
                        />
                    </div>
                </form>
            </div>
            <div>
                <label for="newest" class="block text-gray-700">Новинки</label>
                <input id="newest" type="checkbox" class="w-5 h-5" />
                <span class="ml-2">Показывать только новинки</span>
            </div>
            <div>
                <button
                    class="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                >
                    Применить фильтры
                </button>
            </div>
        </div>
    </div>
</template>
