<template>
    <div>
        <h1>{{ valor }}</h1>
        <button @click="meusEmits('eventoDoFilho', {cpf: 2222, nome: `Fulano_${new Date().getTime()}`})">
            Disparar evento
        </button>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, onMounted } from 'vue';
import EventBus from '../config/EventBus';

defineProps(['valor'])
const meusEmits = defineEmits(['eventoDoFilho'])


onMounted(()=>{
    EventBus.$on('meu_emit_global', (msg)=> {
        alert(msg)
    })
})

</script>

<style>
div {
    border: 1px solid #000;
}
</style>