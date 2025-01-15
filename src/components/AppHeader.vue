<script setup lang="ts">
import ColorComponent from './themes/ColorComponent.vue';
import Drawer from './themes/Drawer.vue';
</script>

<template>
    <nav>
        <div
            class="flex items-center justify-between pt-2 px-20 sm:px-5 md:px-7"
        >
            <RouterLink
                to="/"
                class="flex items-center"
            >
                <img src="/logo.svg" class="w-7 h-7" />
                <span
                    class="self-center text-2xl sm:text-xl font-semibold whitespace-nowrap hover:text-red-600 active:text-red-900 transition-colors"
                    >Ashanti</span
                >
            </RouterLink>
            <div class="sm:hidden">
                <ul
                    class="flex items-center gap-14 font-medium md:gap-6"
                >
                    <li>
                        <RouterLink
                            to="/"
                            class="block px-3 text-2xl hover:text-red-600 active:text-red-900 transition-colors"
                        >
                            Главная
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/movie"
                            class="block px-3 text-2xl hover:text-red-600 active:text-red-900 transition-colors"
                        >
                            Фильмы
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/news"
                            class="block px-3 text-2xl hover:text-red-600 active:text-red-900 transition-colors"
                        >
                            Новости
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/about"
                            class="block px-3 text-2xl hover:text-red-600 active:text-red-900 transition-colors"
                        >
                            О нас
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <ColorComponent class="sm:hidden"/>
            <Drawer class="hidden sm:block"/>
        </div>
        <div class="divider m-0"></div>
    </nav>
</template>
