<template>
    <h1>Minha página</h1>
    {{ count }}
    <button @click="incrementar" >Incrementar</button>
    <hr>
    <ExibidorDeValores :valor="count" @emitFilho="decrementar" />


    <h1 v-for="(item, index) in nomes" :key="index">
        {{ index }} | {{ item }}
    </h1>

</template>

<script setup>
import { ref } from 'vue';
import ExibidorDeValores from '@/components/ExibidorDeValores.vue'

let count = ref(0)

const nomes = ref(["Maria", "João", "Daniel"])

function incrementar(){
    count.value = count.value + 1
}

function decrementar(){
    count.value = count.value - 1
}

</script>