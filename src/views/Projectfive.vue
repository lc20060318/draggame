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

</script>
<template>
  <Scale  :designDraftWidth="1440" :designDraftHeight="1804">
<div class="fiveproject" ref="container">
<div class="title">固晶机顶针系统结构</div>
<div class="restart" @click="handleReset">
   <div class="restart-1">
    <div class="restart-2">重新开始</div> <div class="circle" ></div>
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
      
      <div class="s1-1" v-show="!correctSelection.has(selection[0].id)" >
        <div class="s1-2">
          <div class="s1-3"v-drag :data-id="selection[0].id" >{{ selection[0].id }}</div>
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
      <!-- HTML 结构 -->
<div class="diamond1"></div>
<div class="diamond2"></div>
<div class="diamond3"></div>
<div class="diamond4"></div>
<div class="diamond5"></div>


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
  transform-origin: top right;
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
font-weight: 400;
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
  cursor:pointer;
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
  top: 0;
  left: 150px;
  width: 72px;  /* 固定宽度，与图标尺寸匹配 */
  height: 72px; /* 固定高度，与图标尺寸匹配 */
  background: url('../assets/restart.png') no-repeat center center;
  background-size: contain;
  cursor: pointer; /* 直接在这里加cursor，hover时也会生效 */

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
.diamond1{
  position: absolute;
  left:430.5px;
  top:442px;
  width: 10px;
  height: 10px;
  background-color:  #497FED; 
  transform: rotate(45deg);
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
top: 500px;
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
top: 540px;
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
  color:white;
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
top: 54px;
width: 108px;
height: 50px;
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
.snap-hover .text-content {
  display: flex !important;
  align-items: center !important; /* 垂直居中 */
  justify-content: center !important; /* 水平居中 */
  width: 100% !important;
  height: 100% !important;
  white-space: nowrap !important; /* 不换行 */
  font-size: 24px !important; /* 确保文字大小一致 */
  color: #497FED !important; /* 文字颜色与背景区分 */
}

/* 确保目标区域本身也是flex容器 */
.one, .two, .three, .four, .five {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
/* 拖拽元素样式 */
.dragging {
  pointer-events: none;
  opacity: 0.8;
  z-index: 9999;
  transition: transform 0.1s ease-out; 
  font-size: smaller;
  
}
.matched {
  background-color:#497FED;
  border-style: solid;
  color:white
}
.s1-3, .s2-3, .s3-3, .s4-3, .s5-3 {
  /* 强制一行显示且完整显示 */
  white-space: nowrap;
  overflow: visible;
  
  /* 优化水平居中方式 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 水平和垂直居中 */
  text-align: center;
  
  /* 文字大小根据内容长度自适应 */
  font-size: 24px;
  width: auto;
  max-width: 240px; /* 限制最大宽度，防止超长文字破坏布局 */
  padding: 0 10px;
  
  /* 确保文字在各种状态下都能正常显示 */
  box-sizing: border-box;
}


/* 调整盒子容器样式 */
.s1-2, .s2-2, .s3-2, .s4-2, .s5-2 {
  position: relative;
  width: 268px;
  height: 72px;
  background: #E0EAFF;
}

/* 外层容器调整 */
.s1-1, .s2-1, .s3-1, .s4-1, .s5-1 {
  padding: 5px; /* 减小内边距，使整体布局更紧凑 */
}
/* 数字2对应的菱形：left=1186px，top=459px */
.diamond2 {
  position: absolute;
  left: 1186px;
  top: 380px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
  z-index: 2;
}

/* 数字3对应的菱形：left=1196px，top=530px */
.diamond3 {
  position: absolute;
  left: 1196px;
  top: 537px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字4对应的菱形：left=641px，top=757px */
.diamond4 {
  position: absolute;
  left: 641px;
  top: 757px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字5对应的菱形：left=754px，top=878px */
.diamond5 {
  position: absolute;
  left: 430px;
  top: 700px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}
</style>
<style>
html, body {
  overflow: hidden !important; 
  height: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>