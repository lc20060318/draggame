<template>
  <div class="image-modal" v-if="visible">
    <div class="modal-content">
      <button class="close-button" @click="handleClose">
        <span class="close-icon">&times;</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['exit', 'update:visible'])

const handleClose = () => {
  emit('update:visible', false)
  emit('exit')
}
</script>

<style scoped>
.image-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 85vh;
  background: url('../assets/灌胶机工作台上的各零部件例图.png') no-repeat center center;
  background-size: contain;
  border-radius: 14px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s ease-out;
}

.close-button {
  position: absolute;
  top: -25px;
  left: -15px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff5252, #ff1744);
  color: white;
  font-size: 36px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(255, 23, 68, 0.4);
  transition: all 0.25s ease;
  z-index: 10;
}

.close-button:hover {
  background: linear-gradient(135deg, #ff7676, #ff5252);
  transform: scale(1.12);
  box-shadow: 0 10px 30px rgba(255, 23, 68, 0.5);
}

.close-button:active {
  transform: scale(0.95);
  box-shadow: 0 4px 16px rgba(255, 23, 68, 0.4);
}

.close-icon {
  transform: translateY(-2px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>