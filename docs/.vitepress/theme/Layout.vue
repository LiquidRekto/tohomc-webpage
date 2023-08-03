<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress'
import Error404 from './pages/Error404.vue'
import Page from './pages/Page.vue';
import NavBar from './components/NavBar.vue';

const { site, page, frontmatter } = useData()
</script>

<template>
    <NavBar title="TOHOMC Project" logo="assets/tohomc_logo.png"/>
        <div v-if="page.isNotFound">
            <Error404 />
        </div>
        <Page v-else /> <!-- Make sure to include markdown outlet-->
</template>

