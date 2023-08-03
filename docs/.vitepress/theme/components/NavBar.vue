<script setup>

</script>
<template>
    <nav class="text-gray-700 bg-white dark:bg-gray-700 dark:text-white shadow-md shadow-red-900/40 dark:shadow-red-500/40">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                        <a href="#" class="flex items-center py-4 px-2">
                            <img class="h-10 w-10 mr-2" src="../../../assets/tohomc_logo.png" />
                            <span class="font-bold text-2xl">TOHOMC Project</span>
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
                    mobile thing goes here
                </div>
            </div>

            <!-- mobile menu -->
            <div class="md:hidden flex items-center">
                mobile thing goes here
            </div>

        </div>



    </nav>
</template>