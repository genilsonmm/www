<template>
    <p>Exibidor De Valores</p>
    <div>
        {{ valor }}
    </div>
    <button class="btn btn-primary" @click="emit('emitFilho')">Decrementar</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(["valor"])
const emit = defineEmits(["emitFilho"])
</script>

<style scoped>
div{
    border: 1px solid rgba(60, 60, 59, 0);
    padding: 10px;
    border-radius: 5px;
}
</style>