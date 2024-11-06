<template>
    <div>
        <h1>Filho</h1>
        {{ msg }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['msg'])
</script>

<style scoped>
    div {
        border: 1px solid #000;
    }
</style>