<template>
    <nav class="text-gray-700 bg-white dark:bg-gray-700 dark:text-white shadow-md shadow-red-900/40 dark:shadow-red-500/40">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                        <a href="#" class="flex items-center py-4 px-2">
                            <img class="h-10 w-10 mr-2" v-bind:src="props.logo" />
                            <span class="font-bold text-2xl">{{ props.title }}</span>
                        </a>

                    </div>
                    <!-- primary nav -->
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="#" class="py-4 px-3">About</a>
                        <a href="#" class="py-4 px-3">Docs</a>
                        <a href="#" class="py-4 px-3">Specifications</a>
                    </div>
                </div>

                <!-- secondary nav -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="#" class="py-2 px-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">Get
                        started</a>
                </div>

                <!-- mobile menu -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleShow"
                        class="py-2 px-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
                </div>
            </div>

            <!-- mobile menu -->
            <div v-if="show" class="md:hidden">
                <a href="#" class="block py-5 px-3 text-md hover:bg-gray-400 dark:hover:bg-gray-800">About</a>
                <a href="#" class="block py-5 px-3 text-md hover:bg-gray-400 dark:hover:bg-gray-800">Docs</a>
                <a href="#" class="block py-5 px-3 text-md hover:bg-gray-400 dark:hover:bg-gray-800">Specifications</a>
            </div>

        </div>



    </nav>
</template>
<script setup>
import { ref } from 'vue'

let show = ref(false);

let props = defineProps({
  title: String,
  logo: String
});

const toggleShow = () => {
    show.value = show.value ? false : true;
}

function ping() {
    alert("HI");
}
</script>