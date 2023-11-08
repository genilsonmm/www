<template>
  <div>
   
  </div>
</template>

<script setup>
import useEventBus from '../useEventBus'
const { onEvent } = useEventBus()

onEvent('myEvent', (payload) => {
  console.log(payload)
  alert(payload)
})

</script>
