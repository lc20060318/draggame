<template>
  <div class="overlay" v-if="visible">
    <div class="image-container">
      <button class="close-button" @click="handleClose">
        <span class="close-icon">&times;</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 定义接收的属性，控制遮罩层及图片是否显示
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

// 定义触发的事件，用于关闭遮罩层等操作
const emit = defineEmits(['exit', 'update:visible'])

// 处理关闭逻辑，通知父组件更新 visible 状态并触发 exit 事件
const handleClose = () => {
  emit('update:visible', false)
  emit('exit')
}
</script>

<style scoped>
/* 遮罩层样式，覆盖整个视口，实现半透明背景和磨砂效果 */
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


.image-container {
  position: relative; 
  width: 80%; 
  max-width: 1000px; 
  height: 0; 
  padding-bottom: 75%; 
  background: url('../assets/晶片台结构例图.png') no-repeat center center; 
  background-size: contain; 
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18); 
  animation: fadeIn 0.3s ease-out; 
}


.close-button {
  position: absolute;
  top: 19%; 
  left: -3%; 
  width: 6%; 
  height: 6%; 
  min-width: 36px; 
  min-height: 36px;
  border: none;
  border-radius: 50%;
  background-color: #ff4d4f; 
  color: white; 
  font-size: clamp(18px, 3vw, 28px); 
  display: flex;
  align-items: center;
  justify-content: center; 
  cursor: pointer; 
  box-shadow: 0 6px 20px rgba(255, 77, 79, 0.35); 
  transition: all 0.25s ease; 
  z-index: 100; 
}


.close-button:hover {
  background-color: #ff7875; 
  transform: scale(1.1); 
}


.close-button:active {
  transform: scale(0.96); 
}


.close-icon {
  transform: translateY(-2px); 
}

/* 遮罩层淡入动画 */
@keyframes overlayFadeIn {
  from {
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }
}

/* 图片容器淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.97); 
  }
  to {
    opacity: 1;
    transform: scale(1); 
  }
}
</style>