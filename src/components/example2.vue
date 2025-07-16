<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits([ 'exit', 'update:visible'])
const handleClose = () => {
  emit('update:visible', false)
}

</script>
<template>
    <div class="main" v-if="visible">
        <div class="img">
            <div class="leave" @click="$emit('exit'),handleClose()">X</div>
</div>
    </div>

</template>
<style scoped>
.main{
     position:relative;
    left:500px;
    top:350px;
    width: 519px;
height:330px;
}
.img{
     width: 100%;
  height: 100%;
background: url('src/assets/p9.png') no-repeat center center;
  background-size: contain; 
}
.leave{
   
   font-size: larger;
   color: red;
}
</style>