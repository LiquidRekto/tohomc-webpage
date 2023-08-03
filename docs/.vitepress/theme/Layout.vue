<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress'
import Error404 from './pages/Error404.vue'
import Page from './pages/Page.vue';
import NavBar from './components/NavBar.vue';

const { site, page, theme } = useData()
</script>

<template>
    <NavBar v-if="theme.nav" :title="site.title" :logo="theme.logo"/>
        <div v-if="page.isNotFound">
            <Error404 />
        </div>
        <Page v-else /> <!-- Make sure to include markdown outlet-->
</template>

