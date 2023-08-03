<script setup>
    let props = defineProps({
        color: String,
        link: String
    });

    const redirect = () => {
        if (props.link) {
            window.location.href = props.link;
        }
    };
</script>
<template>
    <button @click="redirect" :class="'th-button-'+props.color">
        <slot></slot>
    </button>
</template>