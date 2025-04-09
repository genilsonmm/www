<template>
    <h1>Página sobre</h1>
    <input type="text" v-model="nome" />
    <button class="btn btn-primary" @click="add" >Adicionar</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const nome = ref('')

function add() {
    //const valor = nome.value
    nome.value = "dfdsfdsfdsdsd"
}

</script>