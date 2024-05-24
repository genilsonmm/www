<template>
    <h1>Minha página</h1>
    {{ count }}
    <button @click="incrementar" >Incrementar</button>
    <hr>
    <ExibidorDeValores :valor="count" @emitFilho="decrementar" />


    <h1 v-for="(item, index) in nomes" :key="index">
        {{ index+1 }} | {{ item }}
    </h1>


    <input type="text" v-model="nome" />

    <h1 class="nome">{{ nome }}</h1>

    <div v-if="isTrue">
        É verdadeiro
    </div>
    <h2 v-else>
        É falso
    </h2>


    <div v-show="isTrue">
        Sou visível
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ExibidorDeValores from '@/components/ExibidorDeValores.vue'

const isTrue = ref(true)
isTrue.value = false

let count = ref(0)
let nome = ref('Genilson')
const nomes = ref(["Maria", "João", "Daniel"])

function incrementar(){
    count.value = count.value + 1
}

function decrementar(){
    count.value = count.value - 1
}

</script>

<style>
.nome{
    color: blue;
}
</style>