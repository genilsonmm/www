<template>
    <button @click="chamarEmit">Chamar emit global</button>
</template>

<script setup lang="ts">

import EventBus from '../config/EventBus';

function chamarEmit(){
    EventBus.$emit('meu_emit_global', 'Msg do emit global')
}

</script>