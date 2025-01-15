<template>
    <main class="p-20 md:p-7 sm:px-6 sm:py-0">
        <div class="flex items-start justify-between">
            <div class="flex flex-col gap-16 md:gap-8 sm:gap-4">
                <h1 class="text-6xl tracking-widest md:text-3xl sm:text-2xl">
                    Фильмы, <span class="text-red-600">сериалы</span>,<br />
                    мультфильмы в <span class="text-red-600">одном месте</span>!
                </h1>
                <p class="text-xl sm:text-sm">
                    Всегда хотели узнать где можно дешевле посмотреть то или
                    иное произведение исскуства? Просто обсудить какую-либо
                    кинофраншизу? А может просто посмотреть последние новости в
                    сфере кино? Тогда, данный сайт был сделан для вас!
                </p>
                <div>
                    <RouterLink to="/movie"
                        ><button
                            class="btn btn-outline btn-lg w-1/2 sm:btn-sm rounded-2xl sm:rounded-xl"
                        >
                            Смотреть
                        </button></RouterLink
                    >
                </div>
            </div>
            <img
                src="../assets/images/anime.png"
                class="object-contain min-w-[34rem] sm:hidden md:min-w-[23rem] lg:min-w-[30rem]"
            />
        </div>
    </main>
</template>
