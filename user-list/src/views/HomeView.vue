<template>
  <h1>Component home</h1>

  <button @click="incrementar">Incrementar</button>

  {{ count }} 
  <p>{{ temp  }}</p>
 
  <hr>
  <button @click="add">Adicionar novo aluno</button>
  <table>
    <tr>
      <td></td>
      <td>CPF</td>
      <td>Nome</td>
      <td>Ações</td>
    </tr>
    <tr v-for="(aluno, index) in alunos" :key="index">
      <td>{{ index }}</td>
      <td>{{ aluno.cpf }}</td>
      <td>{{ aluno.nome }}</td>
      <td>
        <button @click="remover(index)">Remover</button>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const temp = 'Ola'
const count = ref(0)

const dados = [
  {
    cpf: '1234',
    nome: 'Maria da Silva'
  },
  {
    cpf: '43535',
    nome: 'João da Silva'
  }
]
const alunos = reactive(dados)

function incrementar() {
  count.value++
}

function add() {
  alunos.push({cpf: 2222, nome: 'Daniel'})
}

function remover(index) {
  alert(index)
}
</script>
