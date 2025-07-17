<template>
  <div class="image-viewer" v-if="visible">
    <div class="viewer-container">
      <button class="close-btn" @click="handleClose">
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
.image-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease-out;
}

.viewer-container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 85vh;
  background: url('../assets/ZY0808FG自动分选机各部件例图.png') no-repeat center center;
  background-size: contain;
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  /* 移除overflow: hidden，避免裁剪按钮 */
}

.close-btn {
  position: absolute;
  top: -24px; /* 增加顶部距离 */
  left: 10px; /* 增加右侧距离 */
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF5252 0%, #F44336 100%);
  color: white;
  font-size: 28px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(244, 67, 54, 0.4);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.close-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(244, 67, 54, 0.5);
  background: linear-gradient(135deg, #FF7043 0%, #F44336 100%);
}

.close-btn:active {
  transform: scale(0.95);
  box-shadow: 0 4px 16px rgba(244, 67, 54, 0.4);
}

.close-icon {
  transform: translateY(-1px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
</style>