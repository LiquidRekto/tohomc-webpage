<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';
import THButton from './THButton.vue';

const { theme, site } = useData();

let show = ref(false);

let props = defineProps({
  title: String,
  logo: String
});

const toggleShow = () => {
    show.value = show.value ? false : true;
}
</script>
<template>
    <nav class="text-gray-700 bg-white dark:bg-gray-700 dark:text-white shadow-md shadow-red-900/40 dark:shadow-red-500/40">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                        <a :href="site.base" class="flex items-center py-4 px-2">
                            <img class="h-10 w-10 mr-2" :src="props.logo" />
                            <span class="font-bold text-2xl">{{ props.title }}</span>
                        </a>

                    </div>
                    <!-- primary nav -->
                    <div v-for="item in theme.nav" class="hidden md:flex items-center space-x-1">
                        <a :href="item.link" class="py-4 px-3">{{ item.text }}</a>
                    </div>
                </div>

                <!-- secondary nav -->
                <div v-for="item in theme.actionButtons" v-if="theme.actionButtons" class="hidden md:flex items-center space-x-1">
                    <THButton :link="item.link" :color="item.color">{{ item.text }}</THButton>
                </div>

                <!-- mobile menu -->
                <div class="md:hidden flex items-center">
                    <THButton @click="toggleShow"
                        color="red">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </THButton>
                </div>
            </div>

            <!-- mobile menu -->
            <div v-for="item in theme.nav" v-if="show" class="md:hidden">
                <a @click="toggleShow" :href="item.link" class="block py-5 px-3 text-md hover:bg-gray-400 dark:hover:bg-gray-800">{{item.text}}</a>
            </div>

        </div>



    </nav>
</template>
