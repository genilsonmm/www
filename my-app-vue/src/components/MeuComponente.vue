<template>
    <h1>Meu componente</h1>
    {{ count }}
    <button @click="increment">Incrementar</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)


function increment() {
    count.value++
}

</script>