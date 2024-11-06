<template>
  <h1>Home</h1>
  <Filho :msg="valor" />

  <h1 v-show="teste">
    É verdadeiro
  </h1>

  <p v-for="(item, index) in nomes" :key="index">

     {{ index  }} - {{ item }}
     <buttom @click="editar(index)">Editar</buttom>
  </p>
 
<!--
  <h1 v-if="teste">
    É verdadeiro
  </h1>
  <p v-else>
    É falso
  </p>
-->
</template>

<script setup>
import {ref} from 'vue'
import Filho from '../components/Filho.vue'

const valor = "Eu vim do componente pai."
const teste = ref(false)
const nomes = ref(["Maria", "João", "Pedro"])

</script>
