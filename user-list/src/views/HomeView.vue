<template>
  <h1>Component home</h1>
  <FilhoComponent :valor="count" @eventoDoFilho="evento"/>
  <OutroComponent/>
  <button @click="incrementar">Incrementar</button>

  {{ count }} 
  <p>{{ temp  }}</p>
 
  <hr>
  <button @click="add">Adicionar novo aluno</button>

  <table v-show="dados.length > 0">
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
  <h4>
    Sem alunos cadastrados
  </h4>
  <hr>

  <input type="text" v-model="dadosDoInput" />
  {{ dadosDoInput }}
</template>

<script setup lang="ts">
import FilhoComponent from "@/components/FilhoComponent.vue";
import OutroComponent from "@/components/OutroComponent.vue";
import { ref, reactive } from "vue";

const temp = 'Ola'
const count = ref(0)
const dadosDoInput = ref('') 
const teste = true

const dados = []
const alunos = reactive(dados)

function incrementar() {
  count.value++
}

function add() {
  alunos.push({cpf: 2222, nome: dadosDoInput.value})
  dadosDoInput.value = ''
}

function remover(index) {
  alert(index)
}

function evento(dado) {
  alunos.push(dado)
}
</script>
