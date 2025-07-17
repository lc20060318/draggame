<template>
  <Scale  :designDraftWidth="1440" :designDraftHeight="1804">
  <div class="fourproject" ref="container">
    <div class="title">晶片台结构</div>
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
      <div class="main-part">
      </div> 
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
      
      <div class="six" :data-id="targets[5].id" :class="{ matched: correctSelection.has(targets[5].id) }">
        <span class="text-content">{{ getAnswerText(targets[5].id) }}</span>
      </div>
      <div class="route6"></div>
      
      <div class="seven" :data-id="targets[6].id" :class="{ matched: correctSelection.has(targets[6].id) }">
        <span class="text-content-1">{{ getAnswerText(targets[6].id) }}</span>
      </div>
      <div class="route7"></div>
      
      <div class="eight" :data-id="targets[7].id" :class="{ matched: correctSelection.has(targets[7].id) }">
        <span class="text-content-1">{{ getAnswerText(targets[7].id) }}</span>
      </div>
      <div class="route8"></div>
      
      <div class="nine" :data-id="targets[8].id" :class="{ matched: correctSelection.has(targets[8].id) }">
        <span class="text-content-1">{{ getAnswerText(targets[8].id) }}</span>
      </div>
      <div class="route9"></div>
      
      <div class="ten" :data-id="targets[9].id" :class="{ matched: correctSelection.has(targets[9].id) }">
        <span class="text-content-1">{{ getAnswerText(targets[9].id) }}</span>
      </div>
      <div class="route10"></div>
      <div class="eleven" :data-id="targets[10].id" :class="{ matched: correctSelection.has(targets[10].id)}">
        <span class="text-content-1">{{ getAnswerText(targets[10].id) }}</span></div>
      <!-- 可拖拽选项区域（10个部件名称） -->
       <div class="route11"></div>
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
      
      <div class="s6-1" v-show="!correctSelection.has(selection[5].id)">
        <div class="s6-2">
          <div class="s6-3" v-drag :data-id="selection[5].id">{{ selection[5].id }}</div>
        </div>
      </div>
      
      <div class="s7-1" v-show="!correctSelection.has(selection[6].id)">
        <div class="s7-2">
          <div class="s7-3" v-drag :data-id="selection[6].id">{{ selection[6].id }}</div>
        </div>
      </div>
      
      <div class="s8-1" v-show="!correctSelection.has(selection[7].id)">
        <div class="s8-2">
          <div class="s8-3" v-drag :data-id="selection[7].id">{{ selection[7].id }}</div>
        </div>
      </div>
      
      <div class="s9-1" v-show="!correctSelection.has(selection[8].id)">
        <div class="s9-2">
          <div class="s9-3" v-drag :data-id="selection[8].id">{{ selection[8].id }}</div>
        </div>
      </div>
      
      <div class="s10-1" v-show="!correctSelection.has(selection[9].id)">
        <div class="s10-2">
          <div class="s10-3" v-drag :data-id="selection[9].id">{{ selection[9].id }}</div>
        </div>
      </div>
      <div class="s11-1" v-show="!correctSelection.has(selection[10].id)">
        <div class="s11-2">
          <div class="s11-3" v-drag :data-id="selection[10].id">{{ selection[10].id }}</div>
        </div>
      </div>
      <success v-model:visible="finishDialogVisible"@play-again="handlePlayAgain"
          @exit="handleExit">
      </success>
     
      </div>
       <example v-model:visible="finishExample" @exit="handleExit1"></example>
      </div>
      </Scale>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import {ref,reactive,computed,onMounted,watch} from 'vue'
import example from '@/components/example.vue'
import success from '@/components/sucess.vue'
import Scale from '@/components/Scale.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const finishDialogVisible = ref(false)
const finishExample = ref(false)
const selection = reactive([
  { id: '翻晶膜载具' },
  { id:  'Y轴原点感应器' },
  { id:  'Y轴解码器' },
  { id: 'Y轴轨道'},
  { id:  'X轴光栅'},
  { id: 'X轴解码器' },
  { id:  'X轴原点感受器'},
  { id:  'Y轴光栅'},
  { id:  'X轴电机'},
  { id:  'Y轴电机'},
  { id:   'X轴轨道'}
])
const targets = reactive([
  { id: 'X轴轨道' },
  { id: 'X轴电机' },
  { id: 'X轴原点感受器' },
  { id: 'X轴解码器' },
  { id: 'X轴光栅' },
  { id: 'Y轴轨道' },
  { id: 'Y轴光栅' },
  { id: 'Y轴解码器' },
  { id: 'Y轴原点感应器' },
  { id: 'Y轴电机' },
  { id: '翻晶膜载具'}
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
  router.replace({ name: 'project4' }).then(() => {
    router.push({ name: 'project4' })
  })
}

const handlePlayAgain = () => {
  correctSelection.clear()
 router.replace({ name: 'project4' }).then(() => {
    router.push({ name: 'project4' })
})
 correctSelection.clear()
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
<style scoped>
.fourproject {
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

.title {
  position: absolute;
  left: 560px;
  top: 53px;
  width: 250px;
  font-family: "Source Han Sans";
  font-size: 50px;
  font-weight: 300;
  color: #3D3D3D;
}
 
.main-content {
  position: absolute;
  left: 62px;
  top: 179px;
  width: 1316px;
  height: 1578px;
  background: #FFFFFF;
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
  cursor: pointer;
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

.main-part {
  position: absolute;
  left: 346px;
  top: 292px;
  width: 623px;
  height: 543px;
  background: #f0f0f0; 
  background: url('../assets/晶片台结构.png');
  background-size: cover; /* 确保图片覆盖容器 */
}
.one{
    position: absolute;
left: 640px;
top: 165px;
width: 280px;
height: 80px;
transform: rotate(180deg);
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route1{
 position: absolute;
left: 780px;
top: 248px;
width: 0px;
height: 191px;
transform: rotate(180deg);
opacity: 1;
border: 3px dashed #497FED;
	
}
.two{
position: absolute;
left: 1000px;
top: 264px;
width: 280px;
height: 80px;
transform: rotate(180deg);
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
left: 846px;
top: 302px;
width: 154px;
height: 180px;
transform: rotate(180deg);
opacity: 1;
	
border-width: 0px 3px 3px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.three{
    position: absolute;
left: 1000px;
top: 394px;
width: 280px;
height: 80px;
transform: rotate(180deg);
opacity: 1;
	
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route3{
   position: absolute;
left: 923px;
top: 428px;
width: 77px;
height: 100px;
transform: rotate(180deg);
opacity: 1;
border-width: 0px 3px 3px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.four{
  position: absolute;
left: 1000px;
top: 531px;
width: 280px;
height: 80px;
transform: rotate(180deg);
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route4{
  position: absolute;
left: 785px;
top: 563px;
width: 215px;
height: 36px;
transform: rotate(180deg);
opacity: 1;
border-width: 0px 3px 3px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.five{
  position: absolute;
left: 1000px;
top: 668px;
width: 280px;
height: 80px;
transform: rotate(180deg);
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route5{
  position: absolute;
left: 712px;
top: 646px;
width: 288px;
height: 60px;
transform: rotate(180deg);
opacity: 1;
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.six{
  position: absolute;
left: 889px;
top: 852px;
width: 280px;
height: 80px;
transform: rotate(180deg);
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route6{
  position: absolute;
left: 738px;
top: 725px;
width: 145px;
height: 167px;
transform: rotate(180deg);
opacity: 1;
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;
	
}
.seven{
  position: absolute;
left: 345px;
top: 852px;
width: 280px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route7{
  position: absolute;
left: 625px;
top: 734px;
width: 68px;
height: 158px;
opacity: 1;
border-width: 0px 3px 3px 0px;
border-style: dashed;
border-color: #497FED;
	
	
}
.eight{
  position: absolute;
left: 36px;
top: 701px;
width: 280px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route8{
  position: absolute;
left: 316px;
top: 670px;
width: 213px;
height: 73px;
opacity: 1;
border-width: 0px 3px 3px 0px;
border-style: dashed;
border-color: #497FED;;
	
}
.nine{
  position: absolute;
left: 36px;
top: 538px;
width: 280px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route9{
  position: absolute;
left: 316px;
top: 580px;
width: 139px;
height: 66px;
opacity: 1;
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;;
	
}
.ten{
position: absolute;
left: 37px;
top: 359px;
width: 280px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route10{
position: absolute;
left: 316px;
top: 399px;
width: 106px;
height: 149px;
opacity: 1;
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;;
}
.eleven{
  position: absolute;
left: 36px;
top: 190px;
width: 280px;
height: 80px;
opacity: 1;
box-sizing: border-box;
border: 3px dashed #497FED;
	
}
.route11{
  position: absolute;
left: 316px;
top: 230px;
width: 261px;
height: 174px;
opacity: 1;
border-width: 3px 3px 0px 0px;
border-style: dashed;
border-color: #497FED;;
}
.s1-1{
position: absolute;
left: 87px;
top: 1022px;
width: 300px;
height: 100px;
opacity: 1;
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;	
}
.s1-2{
  /* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 280px;
height: 80px;
opacity: 1;
background: #E0EAFF;
z-index: 0;
}
.s1-3{
  /* 自动布局子元素 */
position: absolute;
left: 50px;
top: 14px;
width: 180px;
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
left: 507px;
top: 1022px;
width: 300px;
height: 100px;
opacity: 1;
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;	
}
.s2-2{
position: absolute;
left: 10px;
top: 10px;
width: 280px;
height: 80px;
opacity: 1;
background: #E0EAFF;
z-index: 0;
}
.s2-3{
  /* 自动布局子元素 */
position: absolute;
left: 22px;
top: 13px;
width: 236px;
height: 54px;
opacity: 1;
	
font-family: SourceHanSansCN;
font-size: 36px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
color: #497FED;
	
z-index: 0;
}
.s3-1{
position: absolute;
left: 927px;
top: 1022px;
width: 299px;
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
width: 279px;
height: 80px;
opacity: 1;
background: #E0EAFF;
z-index: 0;
}
.s3-3{
/* 自动布局子元素 */
position: absolute;
left: 57px;
top: 14px;
width: 164px;
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
left: 87px;
top: 1162px;
width: 299px;
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
width: 279px;
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
left: 75px;
top: 14px;
width: 128px;
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
.s5-1{
position: absolute;
left: 506px;
top: 1162px;
width: 300px;
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
width: 280px;
height: 80px;
opacity: 1;
	
/* 自动布局 */

background: #E0EAFF;
z-index: 0;
}
.s5-3{
/* 自动布局子元素 */
position: absolute;
left: 75px;
top: 14px;
width: 129px;
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
.s6-1{
position: absolute;
left: 926px;
top: 1162px;
width: 300px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s6-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 280px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;

	
background: #E0EAFF;
	
z-index: 0;
}
.s6-3{
/* 自动布局子元素 */
position: absolute;
left: 57px;
top: 14px;
width: 165px;
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
.s7-1{
position: absolute;
left: 87px;
top: 1302px;
width: 300px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s7-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 280px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s7-3{
/* 自动布局子元素 */
position: absolute;
left: 22px;
top: 13px;
width: 237px;
height: 54px;
opacity: 1;
	
font-family: SourceHanSansCN;
font-size: 36px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
color: #497FED;
	
z-index: 0;
}
.s8-1{
  position: absolute;
left: 507px;
top: 1302px;
width: 299px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s8-2{
  /* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 279px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s8-3{
  /* 自动布局子元素 */
position: absolute;
left: 75px;
top: 14px;
width: 128px;
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
.s9-1{
position: absolute;
left: 926px;
top: 1302px;
width: 300px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s9-2{
/* 自动布局子元素 */
position: absolute;
left: 10px;
top: 10px;
width: 280px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
background: #E0EAFF;
	
z-index: 0;
}
.s9-3{
/* 自动布局子元素 */
position: absolute;
left: 75px;
top: 14px;
width: 129px;
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
.s10-1{
position: absolute;
left: 87px;
top: 1442px;
width: 299px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
	
}
.s10-2{
/* 自动布局子元素 */
position:absolute;
left: 10px;
top: 10px;
width: 279px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s10-3{
/* 自动布局子元素 */
position: absolute;
left: 75px;
top: 14px;
width: 128px;
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
/* 吸附热区的视觉反馈 */
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
.text-content {
  display: inline-block; /* 确保旋转生效 */
  transform: rotate(180deg); /* 与容器旋转方向相反，抵消旋转效果 */
  width: 100%; /* 确保文字占满容器宽度 */
  height: 100%; /* 确保文字占满容器高度 */
  display: flex;
  align-items: center;
  justify-content: center; /* 文字居中显示 */
  font-family: Source Han Sans;
  font-size: 36px;
  color: #3D3D3D;
}
.text-content-1{
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
.s11-1{
position: absolute;
left: 507px;
top: 1442px;
width: 299px;
height: 100px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
}
.s11-2{
position:absolute;
left: 10px;
top: 10px;
width: 279px;
height: 80px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
	
background: #E0EAFF;
	
z-index: 0;
}
.s11-3{
position: absolute;
left: 75px;
top: 14px;
width: 128px;
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
.s1-3, .s2-3, .s3-3, .s4-3, .s5-3, 
.s6-3, .s7-3, .s8-3, .s9-3, .s10-3, .s11-3 {
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
.s1-2, .s2-2, .s3-2, .s4-2, .s5-2, 
.s6-2, .s7-2, .s8-2, .s9-2, .s10-2, .s11-2,
.s12-2, .s13-2, .s14-2, .s15-2, .s16-2 {
  position: relative;
  width: 268px;
  height: 72px;
  background: #E0EAFF;
}

/* 外层容器调整 */
.s1-1, .s2-1, .s3-1, .s4-1, .s5-1, 
.s6-1, .s7-1, .s8-1, .s9-1, .s10-1, .s11-1 {
  padding: 5px; /* 减小内边距，使整体布局更紧凑 */
}
.matched .text-content,
.matched .text-content-1 {
  color: white !important; /* 使用 !important 确保覆盖原有颜色 */
}

</style>
<style>
/* 禁用整个页面的滚动条和滚动行为 */
html, body {
  overflow: hidden !important; /* 隐藏滚动条 */
  height: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
