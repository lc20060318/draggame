<script setup>
import { ElMessage } from 'element-plus'
import {ref,reactive,computed,onMounted,watch} from 'vue'
import example1 from '@/components/example1.vue'
import success from '@/components/sucess.vue'
import Scale from '@/components/Scale.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const finishDialogVisible = ref(false)
const finishExample = ref(false)
const selection = reactive([
  { id: '顶针帽' },
  { id: '顶针' },
  { id: 'Y轴位置调节旋钮' },
  { id: 'X轴位置调节旋钮' },
  { id: '推顶马达' },
])
const targets = reactive([
  { id: '推顶马达' },
  { id: '顶针帽' },
  { id: '顶针' },
  { id: 'Y轴位置调节旋钮' },
  { id: 'X轴位置调节旋钮' },
])
const getAnswerText = (id) => (correctSelection.has(id) ? id : '')

 const correctSelection = reactive(new Set())
 const correctCount = computed(() => correctSelection.size)

const shuffleSelection = () => {
  for (let i = selection.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[selection[i], selection[j]] = [selection[j], selection[i]]
  }
}
 // 处理拖拽匹配
const handleDragMatch = (event) => {
  const { dragId, targetId } = event.detail
  if (dragId === targetId) {
    correctSelection.add(dragId)
    
  }
  else{
   ElMessage.warning('选择错误，再仔细检查一下')
  }
}
// 重置游戏
const handleReset = () => {
  correctSelection.clear()
  finishDialogVisible.value = false
  shuffleSelection()
  // 刷新组件
  router.replace({ name: 'project5' }).then(() => {
    router.push({ name: 'project5' })
  })
}

const handlePlayAgain = () => {
  correctSelection.clear()
 router.replace({ name: 'project5' }).then(() => {
    router.push({ name: 'project5' })
})
 correctSelection.clear()
  shuffleSelection()
}


const handleExit = () => (finishDialogVisible.value = false)
const handleExit1 = () =>(finishExample.value = false)
watch(correctCount, (newCount) => {
  // 当匹配数量等于可拖拽选项数量时，显示对话框
  if (newCount === selection.length) {
    finishDialogVisible.value = true
  }
})
const handleExample= ()=>{
finishExample.value = true
}

onMounted(() => {
  shuffleSelection()
})
const container = ref(null)
const scaleFactor = ref(1)

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

const updateScale = () => {
  if (!container.value) return
  
  const designWidth = 1804
  const designHeight = 1440
  
  // 计算基于视口的缩放比例
  const widthScale = window.innerWidth / designWidth
  const heightScale = window.innerHeight / designHeight
  
  // 使用较小的缩放比例确保内容完整显示
  let targetScale = Math.min(widthScale, heightScale)
  
  // 设置最小缩放限制（确保内容可读）
  const minScale = 0.6 // 
  targetScale = Math.max(targetScale, minScale)
  
  // 设置最大缩放限制（避免内容过大）
  const maxScale = 1.0
  targetScale = Math.min(targetScale, maxScale)
  
  scaleFactor.value = targetScale
  container.value.style.transform = `scale(${targetScale})`
  
  // 计算偏移量使内容居中显示
  const translateX = (window.innerWidth - designWidth * targetScale) / 2
  const translateY = (window.innerHeight - designHeight * targetScale) / 2
  
  container.value.style.transform = `scale(${targetScale}) translate(${translateX / targetScale}px, ${translateY / targetScale}px)`
  container.value.style.transformOrigin = '0 0'
}

// 监听容器元素变化，初始化时更新缩放
watch(container, (newVal) => {
  if (newVal) {
    updateScale()
  }
})
</script>
<template>
  <Scale  :designDraftWidth="1440" :designDraftHeight="1024">
<div class="fiveproject" ref="container">
<div class="title">固晶机顶针系统结构</div>
<div class="restart">
   <div class="restart-1">
    <div class="restart-2">重新开始</div> <div class="circle" @click="handleReset"></div>
   </div>
      </div>
    <div class="main-content"@dragMatch="handleDragMatch" >
      <div class="content-title">
        <span>请拖动部件名称至图中的正确位置</span>
        <div class="mention" @click="handleExample"></div>
      </div>
      <div class="main-part"></div>
      <div class="main-part2"></div>
       <div class="one" :data-id="targets[0].id" :class="{ matched: correctSelection.has(targets[0].id) }">
        <span class="text-content">{{ getAnswerText(targets[0].id) }}</span>
      </div>
      <div class="route1"></div>
      
      <div class="two" :data-id="targets[1].id" :class="{ matched: correctSelection.has(targets[1].id) }">
        <span class="text-content">{{ getAnswerText(targets[1].id) }}</span>
      </div>
     
      
      <div class="route2"></div>
      
      <!-- 其余目标区域类似，均添加span包裹文字 -->
      <div class="three" :data-id="targets[2].id" :class="{ matched: correctSelection.has(targets[2].id) }">
        <span class="text-content">{{ getAnswerText(targets[2].id) }}</span>
      </div>
      <div class="route3"></div>
      
      <div class="four" :data-id="targets[3].id" :class="{ matched: correctSelection.has(targets[3].id) }">
        <span class="text-content">{{ getAnswerText(targets[3].id) }}</span>
      </div>
      <div class="route4"></div>
      
      <!-- 其他目标区域 (five 到 eleven) 保持相同结构 -->
      <div class="five" :data-id="targets[4].id" :class="{ matched: correctSelection.has(targets[4].id) }">
        <span class="text-content">{{ getAnswerText(targets[4].id) }}</span>
      </div>
      <div class="route5"></div>
      
      <div class="s1-1" v-show="!correctSelection.has(selection[0].id)">
        <div class="s1-2">
          <div class="s1-3" v-drag :data-id="selection[0].id">{{ selection[0].id }}</div>
        </div>
      </div>
      
      <div class="s2-1" v-show="!correctSelection.has(selection[1].id)">
        <div class="s2-2">
          <div class="s2-3" v-drag :data-id="selection[1].id">{{ selection[1].id }}</div>
        </div>
      </div>
      
      <div class="s3-1" v-show="!correctSelection.has(selection[2].id)">
        <div class="s3-2">
          <div class="s3-3" v-drag :data-id="selection[2].id">{{ selection[2].id }}</div>
        </div>
      </div>
      
      <div class="s4-1" v-show="!correctSelection.has(selection[3].id)">
        <div class="s4-2">
          <div class="s4-3" v-drag :data-id="selection[3].id">{{ selection[3].id }}</div>
        </div>
      </div>
      
      <div class="s5-1" v-show="!correctSelection.has(selection[4].id)">
        <div class="s5-2">
          <div class="s5-3" v-drag :data-id="selection[4].id">{{ selection[4].id }}</div>
        </div>
      </div>
      <success v-model:visible="finishDialogVisible"@play-again="handlePlayAgain"
          @exit="handleExit">
      </success>
      
</div> 
<example1 v-model:visible="finishExample" @exit="handleExit1"></example1>
</div>
</Scale>
</template>
<style scoped>
.fiveproject{
 position: absolute;
  left: 0;
  top: 0;
  width: 1440px;
  height: 1804px;
  background: #F3F7FD;
  transform: scale(min(100vw / 1440, 100vh / 1804));
  transform-origin: top left;
  overflow: hidden;
}
.title{
position: absolute;
left: 496px;
top: 53px;
width: 450px;
height: 72px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 50px;
font-weight: 300;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
color: #3D3D3D;
	
}
.restart {
  position: absolute;
  left: 1103px;
  top: 38px;
  width: 285px;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.restart-1{
  /* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 265px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.restart-2{
  /* 自动布局子元素 */
position:absolute;
left: 36px;
top: 14px;
width: 144px;
height: 52px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 30px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
color: #497FED;
	
z-index: 0;
}
.circle {
  position: absolute;
  top:0px;
  left:60px;
   width: 100%;
  height:72px;
  background: url('../assets/restart.png') no-repeat center center;
  background-size: contain; /* 或 cover，控制图片适配方式 */
  background-position: center; /* 确保居中显示 */
}
.main-content {
  position: absolute;
  left: 62px;
  top: 179px;
  width: 1316px;
  height: 1578px;
  background: #FFFFFF;
}
.content-title {
  position: absolute;
  left: 392px;
  top: 50px;
  width: 540px;
  height: 52px;
  font-family: "Source Han Sans";
  font-size: 30px;
  color: #3D3D3D;
}
.mention {
  position: absolute;
  top:0px;
  left:210px;
  width:100%;
  height:100%;
  background: url('../assets/mention.png') no-repeat center center;
   background-size: contain;
}
.main-part{
position: absolute;
left: 364px;
top: 372px;
width: 414px;
height: 451px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('../assets/固晶机.png');
	
}
.main-part2{
    position: absolute;
left: 1145px;
top: 317px;
width: 123px;
height: 580px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('../assets/顶针.png');
	
}
.one{
position: absolute;
left: 36px;
top: 230px;
width: 316px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route1{
position: absolute;
left: 354px;
top: 279px;
width: 79px;
height: 168px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;
	
	
}
.two{
position: absolute;
left: 773px;
top: 342px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 0px;
gap: 10px;
	
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route2{
    position: absolute;
left: 1089px;
top: 382px;
width: 87px;
height: 0px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border: 3px dashed #497FED;
	
}
.three{
    position: absolute;
left: 773px;
top: 546px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 0px;
gap: 10px;
	
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route3{
      position: absolute;
left: 1089px;
top: 586px;
width: 107px;
height: 0px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border: 3px dashed #497FED;
	 
}
.four{
    position: absolute;
left: 759px;
top: 838px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 0px;
gap: 10px;
	
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route4{
    position: absolute;
left: 646px;
top: 762px;
width: 113px;
height: 116px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
border-width: 0px 0px 3px 3px;
border-style: dashed;
border-color: #497FED;
	
}
.five{
    position: absolute;
left: 36px;
top: 567px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 0px;
gap: 10px;
	
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route5{
position: absolute;
left: 352px;
top: 607px;
width: 81px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.text-content {
  display: inline-block; /* 确保旋转生效 */
  width: 100%; /* 确保文字占满容器宽度 */
  height: 100%; /* 确保文字占满容器高度 */
  display: flex;
  align-items: center;
  justify-content: center; /* 文字居中显示 */
  font-family: Source Han Sans;
  font-size: 36px;
  color: #3D3D3D;
}
.s1-1{
    position: absolute;
left: 33px;
top: 1063px;
width: 336px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s1-2{
 /* 自动布局子元素 */
position:absolute;
left: 10px;
top: 10px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
background: #E0EAFF;
	
z-index: 0;   
}
.s1-3{
    /* 自动布局子元素 */
position:absolute;
left: 104px;
top: 14px;
width: 108px;
height: 52px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 36px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
color: #497FED;
	
z-index: 0;
}
.s2-1{
position: absolute;
left: 489px;
top: 1063px;
width: 336px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s2-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s2-3{

/* 自动布局子元素 */
position: absolute;
left: 22px;
top: 13px;
width: 272px;
height: 54px;
opacity: 1;
	
font-family: SourceHanSansCN;
font-size: 36px;
font-weight: normal;
line-height: normal;
text-align: center;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
color: #497FED;
	
z-index: 0;
}
.s3-1{
position: absolute;
left: 945px;
top: 1063px;
width: 336px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s3-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s3-3{
/* 自动布局子元素 */
position: absolute;
left: 122px;
top: 14px;
width: 72px;
height: 52px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 36px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
color: #497FED;
	
z-index: 0;
}
.s4-1{
position: absolute;
left: 33px;
top: 1203px;
width: 336px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s4-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;

	
background: #E0EAFF;
	
z-index: 0;
}
.s4-3{
/* 自动布局子元素 */
position: absolute;
left: 22px;
top: 13px;
width: 273px;
height: 54px;
opacity: 1;
	
font-family: SourceHanSansCN;
font-size: 36px;
font-weight: normal;
line-height: normal;
text-align: center;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
color: #497FED;
	
z-index: 0;
}
.s5-1{
    position: absolute;
left: 489px;
top: 1193px;
width: 336px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s5-2{
    /* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 316px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
background: #E0EAFF;
	
z-index: 0;
}
.s5-3{
    /* 自动布局子元素 */
position: absolute;
left: 86px;
top: 14px;
width: 144px;
height: 52px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 36px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
color: #497FED;
	
z-index: 0;
}
.snap-hover {
  background-color: rgba(73, 127, 237, 0.2) !important;
  border-color: #497FED !important;
  border-width: 2px !important;
}

/* 拖拽元素样式 */
.dragging {
  pointer-events: none;
  opacity: 0.8;
  z-index: 9999;
  transition: transform 0.1s ease-out; /* 添加平滑过渡效果 */
}
.matched {
  background-color:#497FED;
  border-style: solid;
  color:white
}
.matched .text-content
{
  color: white !important; /* 使用 !important 确保覆盖原有颜色 */
}/* 1. 中层盒子（.sX-2）使用flex布局，负责文字居中 */
/* 核心优化：拖拽选项文字样式 */
.s1-3, .s2-3, .s3-3, .s4-3, .s5-3 {
  /* 强制单行显示 */
  white-space: nowrap;
  overflow: hidden; /* 超出容器部分隐藏（配合text-overflow更友好） */
  text-overflow: ellipsis; /* 超长文字显示省略号（可选，避免完全看不见） */
  
  /* 优化居中方式（兼容拖拽定位） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 精确居中，不受文字长度影响 */
  
  /* 自适应容器宽度 */
  width: auto;
  max-width: 280px; /* 小于盒子宽度316px，预留边距 */
  padding: 0 12px; /* 左右留白，避免文字贴边框 */
  
  /* 文字样式统一 */
  font-family: Source Han Sans;
  color: #497FED;
  z-index: 1; /* 确保文字在盒子上方 */
}

/* 按文字长度分级设置字号（关键：解决溢出） */
.s1-3, .s3-3, .s5-3 {
  /* 短文字：如“顶针”“推顶马达” */
  font-size: 30px;
}
.s2-3, .s4-3 {
  /* 长文字：如“Y轴位置调节旋钮”“X轴位置调节旋钮” */
  font-size: 24px; /* 比短文字小6px，避免溢出 */
}

/* 选项盒子容器样式（辅助居中） */
.s1-2, .s2-2, .s3-2, .s4-2, .s5-2 {
  position: relative; /* 作为文字定位基准 */
  width: 316px;
  height: 80px;
  background: #E0EAFF;
  /* 可选：添加圆角和阴影提升美观度 */
}

/* 外层容器调整（不影响居中） */
.s1-1, .s2-1, .s3-1, .s4-1, .s5-1 {
  padding: 10px;
  position: absolute;
  width: 336px;
  height: 100px;
}
</style>