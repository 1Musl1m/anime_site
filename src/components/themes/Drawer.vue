<script setup lang="ts">
import { FeTv, BsChat, LaUserFriendsSolid, BxUserCircle, PhNewspaper, FlVideoClip, HiUserGroup } from "@kalimahapps/vue-icons";
import { ref } from "vue";

const items = ref([
    {
        id: 1,
        icon: BxUserCircle,
        name: "Профиль",
    },
    {
        id: 2,
        icon: PhNewspaper,
        name: "Новости",
    },
    {
        id: 3,
        icon: BsChat,
        name: "Мессенджер",
    },
    {
        id: 4,
        icon: LaUserFriendsSolid,
        name: "Друзья",
    },
    {
        id: 5,
        icon: HiUserGroup,
        name: "Сообщества",
    },
    {
        id: 6,
        icon: FeTv,
        name: "Фильмы",
    },
    {
        id: 7,
        icon: FlVideoClip,
        name: "Видео",
    },
]);
</script>

<template>
    <div>
        <div class="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <label for="my-drawer-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentcolor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </label>
            </div>

            <div class="drawer-side">
                <label
                    for="my-drawer-4"
                    aria-label="close sidebar"
                    class="drawer-overlay"
                ></label>
                <ul
                    class="menu bg-base-200 text-base-content min-h-full w-80 sm:w-52 p-1"
                >
                    <li v-for="item in items" :key="item.id">
                        <div>
                            <component :is="item.icon" />
                            <span>{{ item.name }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
