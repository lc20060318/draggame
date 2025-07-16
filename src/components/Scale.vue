<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'

const props = defineProps({
  designDraftWidth: {
    type: Number,
    default: 375,
  },
  designDraftHeight: {
    type: Number,
    default: 700,
  },
})

const screenRef = ref(null)

const screenStyle = computed(() => ({
  width: props.designDraftWidth + 'px',
  height: props.designDraftHeight + 'px',
}))

const handleScreenAuto = () => {
  if (!screenRef.value) return
  // 计算缩放比例
  const clientHeight = document.documentElement.clientHeight // 初始高度
  const clientWidth = document.documentElement.clientWidth // 初始宽度
  const scale =
    clientWidth / clientHeight < props.designDraftWidth / props.designDraftHeight
      ? clientWidth / props.designDraftWidth
      : clientHeight / props.designDraftHeight // 缩放比例
  screenRef.value.style.transform = `scale(${scale}) translate(-50%, -50%)`
}

onMounted(() => {
  handleScreenAuto()
  window.addEventListener('resize', () => {
    handleScreenAuto()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    handleScreenAuto()
  })
})
</script>

<template>
  <div class="screen-root">
    <div ref="screenRef" :style="screenStyle" class="screen">
      <slot />
    </div>
  </div>
</template>
<style>
.screen-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  position: relative;
}

.screen-root .screen {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
}
</style>