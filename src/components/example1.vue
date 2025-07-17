<template>
  <!-- 新增遮罩层容器，包裹原有内容 -->
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
/* 新增遮罩层样式 */
.overlay {
  position: fixed;
  inset: 0; /* 覆盖整个视口 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色遮罩 */
  backdrop-filter: blur(2px); /* 磨砂玻璃效果，增强层次感 */
  z-index: 99; /* 确保在图片容器下方，作为背景 */
  display: flex;
  align-items: center;
  justify-content: center; /* 使内部内容居中 */
  animation: overlayFadeIn 0.3s ease-out; /* 遮罩淡入动画 */
}

/* 原有主容器保持不变，调整层级 */
.main {
  position: relative; /* 改为相对定位，由遮罩层控制居中 */
  width: 80%;
  max-width: 1000px;
  height: 80vh;
  z-index: 100; /* 确保在遮罩层上方 */
}

.img-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/固晶机顶针系统结构例图.png') no-repeat center center;
  background-size: contain;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
  animation: fadeIn 0.3s ease-out;
}

/* 关闭按钮样式保持不变 */
.close-btn {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: #ff4d4f;
  color: white;
  font-size: 32px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 77, 79, 0.35);
  transition: all 0.25s ease;
  z-index: 10;
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

/* 新增遮罩层动画 */
@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 原有图片容器动画保持不变 */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}
</style>