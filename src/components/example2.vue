<template>
  <div class="image-modal" v-if="visible">
    <div class="modal-content">
      <button class="close-button" @click="handleClose">×</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ visible: Boolean })
const emit = defineEmits(['exit', 'update:visible'])
const handleClose = () => emit('update:visible', false)
</script>

<style scoped>
.image-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(2px);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 85vh;
  /* 关键：锁定背景图尺寸和位置 */
  background: url('../assets/灌胶机工作台上的各零部件例图.png') no-repeat 0 0;
  background-size: contain;
  border-radius: 14px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  animation: fadeIn 0.3s;
}

/* 关闭按钮：相对于背景图左上角定位 */
.close-button {
  position: absolute;
  /* 关键：与背景图左上角对齐 */
  top: -20px;  
  left: -20px; 
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff5252, #ff1744);
  color: white;
  font-size: 36px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(255,23,68,0.4);
  transition: all 0.25s;
  z-index: 10;
}

/* 自适应调整：小屏幕设备 */
@media (max-width: 768px) {
  .close-button {
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    font-size: 28px;
  }
}

.close-button:hover {
  transform: scale(1.12);
  box-shadow: 0 10px 30px rgba(255,23,68,0.5);
}

.close-button:active {
  transform: scale(0.95);
  box-shadow: 0 4px 16px rgba(255,23,68,0.4);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>