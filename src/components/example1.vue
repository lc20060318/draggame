<template>
  <div class="overlay" v-if="visible">
    <div class="main">
      <div class="img-container">
        <button class="close-btn" @click="handleClose">
          <span class="close-icon">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ visible: { type: Boolean, required: true } })
const emit = defineEmits(['exit', 'update:visible'])
const handleClose = () => { 
  emit('update:visible', false); 
  emit('exit') 
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: overlayFadeIn 0.3s ease-out;
}

.main {
  position: relative;
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  z-index: 100;
}

.img-container {
  position: relative; 
  width: 100%;
  height: 100%;
  /* 关键调整：让背景图左上角与容器左上角对齐 */
  background: url('../assets/固晶机顶针系统结构例图.png') no-repeat 0 0; 
  background-size: contain;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
  animation: fadeIn 0.3s ease-out;
}

.close-btn {
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

/* 针对移动设备（安卓端等小屏幕）微调 */
@media (max-width: 768px) {
  .close-btn {
    top: -2.5%; 
    left: -2.5%; 
    width: 8%; 
    height: 8%; 
    font-size: clamp(20px, 4vw, 30px); 
  }
}

.close-btn:hover {
  background-color: #ff7875;
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(255, 77, 79, 0.45);
}

.close-btn:active {
  transform: scale(0.96);
  box-shadow: 0 4px 16px rgba(255, 77, 79, 0.3);
}

.close-icon {
  transform: translateY(-2px);
}

@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}
</style>