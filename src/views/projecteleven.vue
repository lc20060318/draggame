<script setup>
import { ElMessage } from 'element-plus'
import {ref,reactive,computed,onMounted,watch} from 'vue'
import example4 from '@/components/example4.vue'
import success from '@/components/sucess.vue'
import Scale from '@/components/Scale.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const finishDialogVisible = ref(false)
const finishExample = ref(false)
const selection = reactive([
{ id: '信号灯' },
  { id: '封带安装盘' },
  { id: '外观检测CCD' },
  { id:'取料分度盘' },
  { id: '手动单步运行按钮' },
  { id:'空戴带'},
  { id:'复位、自动运行按钮'},
  { id:'触摸屏'},
  {id:'圆振、平振控'},
  { id:'鼠标和键盘抽屉'},
  { id:'急停开关'},
  { id:'工控机开机按钮'},
  { id:'温控器'},
  { id:'振动盘'},
  { id:'离子风扇'},
])
const targets = reactive([
  { id: '信号灯' },
  { id: '封带安装盘' },
  { id: '外观检测CCD' },
  { id:'取料分度盘' },
  { id: '手动单步运行按钮' },
  { id:'空戴带'},
  { id:'复位、自动运行按钮'},
  { id:'触摸屏'},
  {id:'圆振、平振控'},
  { id:'鼠标和键盘抽屉'},
  { id:'急停开关'},
  { id:'工控机开机按钮'},
  { id:'温控器'},
  { id:'振动盘'},
  { id:'离子风扇'},
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
  router.replace({ name: 'project11' }).then(() => {
    router.push({ name: 'project11' })
  })
}

const handlePlayAgain = () => {
  correctSelection.clear()
 router.replace({ name: 'project11' }).then(() => {
    router.push({ name: 'project11' })
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
  <Scale :designDraftWidth="1440" :designDraftHeight="1804">
<div class="elevenproject"  ref="container">
<div class="title">ZY1010-2.5BD编带机正面外观</div>
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
      <div class="one" :data-id="targets[0].id" :class="{ matched: correctSelection.has(targets[0].id) }">
  <span class="text-content">{{ getAnswerText(targets[0].id) }}</span>
</div>
<div class="route1"></div>

<!-- 2 -->
<div class="two" :data-id="targets[1].id" :class="{ matched: correctSelection.has(targets[1].id) }">
  <span class="text-content">{{ getAnswerText(targets[1].id) }}</span>
</div>
<div class="route2"></div>

<!-- 3 -->
<div class="three" :data-id="targets[2].id" :class="{ matched: correctSelection.has(targets[2].id) }">
  <span class="text-content">{{ getAnswerText(targets[2].id) }}</span>
</div>
<div class="route3"></div>

<!-- 4 -->
<div class="four" :data-id="targets[3].id" :class="{ matched: correctSelection.has(targets[3].id) }">
  <span class="text-content">{{ getAnswerText(targets[3].id) }}</span>
</div>
<div class="route4"></div>

<!-- 5 -->
<div class="five" :data-id="targets[4].id" :class="{ matched: correctSelection.has(targets[4].id) }">
  <span class="text-content">{{ getAnswerText(targets[4].id) }}</span>
</div>
<div class="route5"></div>

<!-- 6 -->
<div class="six" :data-id="targets[5].id" :class="{ matched: correctSelection.has(targets[5].id) }">
  <span class="text-content">{{ getAnswerText(targets[5].id) }}</span>
</div>
<div class="route6"></div>

<!-- 7 -->
<div class="seven" :data-id="targets[6].id" :class="{ matched: correctSelection.has(targets[6].id) }">
  <span class="text-content">{{ getAnswerText(targets[6].id) }}</span>
</div>
<div class="route7"></div>

<!-- 8 -->
<div class="eight" :data-id="targets[7].id" :class="{ matched: correctSelection.has(targets[7].id) }">
  <span class="text-content">{{ getAnswerText(targets[7].id) }}</span>
</div>
<div class="route8"></div>

<!-- 9 -->
<div class="nine" :data-id="targets[8].id" :class="{ matched: correctSelection.has(targets[8].id) }">
  <span class="text-content">{{ getAnswerText(targets[8].id) }}</span>
</div>
<div class="route9"></div>

<!-- 10 -->
<div class="ten" :data-id="targets[9].id" :class="{ matched: correctSelection.has(targets[9].id) }">
  <span class="text-content">{{ getAnswerText(targets[9].id) }}</span>
</div>
<div class="route10"></div>

<!-- 11 -->
<div class="eleven" :data-id="targets[10].id" :class="{ matched: correctSelection.has(targets[10].id) }">
  <span class="text-content">{{ getAnswerText(targets[10].id) }}</span>
</div>
<div class="route11"></div>

<!-- 12 -->
<div class="twelve" :data-id="targets[11].id" :class="{ matched: correctSelection.has(targets[11].id) }">
  <span class="text-content">{{ getAnswerText(targets[11].id) }}</span>
</div>
<div class="route12"></div>

<!-- 13 -->
<div class="thirteen" :data-id="targets[12].id" :class="{ matched: correctSelection.has(targets[12].id) }">
  <span class="text-content">{{ getAnswerText(targets[12].id) }}</span>
</div>
<div class="route13"></div>

<!-- 14 -->
<div class="fourteen" :data-id="targets[13].id" :class="{ matched: correctSelection.has(targets[13].id) }">
  <span class="text-content">{{ getAnswerText(targets[13].id) }}</span>
</div>
<div class="route14"></div>

<!-- 15 -->
<div class="fifteen" :data-id="targets[14].id" :class="{ matched: correctSelection.has(targets[14].id) }">
  <span class="text-content">{{ getAnswerText(targets[14].id) }}</span>
</div>
<div class="route15"></div>
<div class="s1-1" v-show="!correctSelection.has(selection[0].id)">
        <div class="s1-2">
          <div class="s1-3" v-drag :data-id="selection[0].id">{{ selection[0].id }}</div>
        </div>
      </div>
<!-- 2 -->
<div class="s2-1" v-show="!correctSelection.has(selection[1].id)">
  <div class="s2-2">
    <div class="s2-3" v-drag :data-id="selection[1].id">{{ selection[1].id }}</div>
  </div>
</div>

<!-- 3 -->
<div class="s3-1" v-show="!correctSelection.has(selection[2].id)">
  <div class="s3-2">
    <div class="s3-3" v-drag :data-id="selection[2].id">{{ selection[2].id }}</div>
  </div>
</div>

<!-- 4 -->
<div class="s4-1" v-show="!correctSelection.has(selection[3].id)">
  <div class="s4-2">
    <div class="s4-3" v-drag :data-id="selection[3].id">{{ selection[3].id }}</div>
  </div>
</div>

<!-- 5 -->
<div class="s5-1" v-show="!correctSelection.has(selection[4].id)">
  <div class="s5-2">
    <div class="s5-3" v-drag :data-id="selection[4].id">{{ selection[4].id }}</div>
  </div>
</div>

<!-- 6 -->
<div class="s6-1" v-show="!correctSelection.has(selection[5].id)">
  <div class="s6-2">
    <div class="s6-3" v-drag :data-id="selection[5].id">{{ selection[5].id }}</div>
  </div>
</div>

<!-- 7 -->
<div class="s7-1" v-show="!correctSelection.has(selection[6].id)">
  <div class="s7-2">
    <div class="s7-3" v-drag :data-id="selection[6].id">{{ selection[6].id }}</div>
  </div>
</div>

<!-- 8 -->
<div class="s8-1" v-show="!correctSelection.has(selection[7].id)">
  <div class="s8-2">
    <div class="s8-3" v-drag :data-id="selection[7].id">{{ selection[7].id }}</div>
  </div>
</div>

<!-- 9 -->
<div class="s9-1" v-show="!correctSelection.has(selection[8].id)">
  <div class="s9-2">
    <div class="s9-3" v-drag :data-id="selection[8].id">{{ selection[8].id }}</div>
  </div>
</div>

<!-- 10 -->
<div class="s10-1" v-show="!correctSelection.has(selection[9].id)">
  <div class="s10-2">
    <div class="s10-3" v-drag :data-id="selection[9].id">{{ selection[9].id }}</div>
  </div>
</div>

<!-- 11 -->
<div class="s11-1" v-show="!correctSelection.has(selection[10].id)">
  <div class="s11-2">
    <div class="s11-3" v-drag :data-id="selection[10].id">{{ selection[10].id }}</div>
  </div>
</div>

<!-- 12 -->
<div class="s12-1" v-show="!correctSelection.has(selection[11].id)">
  <div class="s12-2">
    <div class="s12-3" v-drag :data-id="selection[11].id">{{ selection[11].id }}</div>
  </div>
</div>

<!-- 13 -->
<div class="s13-1" v-show="!correctSelection.has(selection[12].id)">
  <div class="s13-2">
    <div class="s13-3" v-drag :data-id="selection[12].id">{{ selection[12].id }}</div>
  </div>
</div>

<!-- 14 -->
<div class="s14-1" v-show="!correctSelection.has(selection[13].id)">
  <div class="s14-2">
    <div class="s14-3" v-drag :data-id="selection[13].id">{{ selection[13].id }}</div>
  </div>
</div>

<!-- 15 -->
<div class="s15-1" v-show="!correctSelection.has(selection[14].id)">
  <div class="s15-2">
    <div class="s15-3" v-drag :data-id="selection[14].id">{{ selection[14].id }}</div>
  </div>
</div>
 <success v-model:visible="finishDialogVisible"@play-again="handlePlayAgain"
          @exit="handleExit"></success>
<example4 v-model:visible="finishExample" @exit="handleExit1"></example4>
    </div>
</div>
</Scale>
</template>
<style scoped>
.elevenproject{
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
left: 401.5px;
top: 54px;
width: 662px;
height: 67px;
opacity: 1;
	
font-family: Alibaba PuHuiTi 2.0;
font-size: 40px;
font-weight: 300;
line-height: normal;
text-align: center;
letter-spacing: 0em;
	
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
  background-size: contain; 
  background-position: center; /* 确保居中显示 */
   cursor: pointer; 
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
.circle:hover{
  cursor:pointer
}
.main-part{
    position: absolute;
left: 406px;
top: 250px;
width: 505px;
height: 660px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('../assets/ZY1010-2.5BD编带机正面外观.png');
	
}
/* 1 */
.one {
  position: absolute;
  left: 1031px;
  top: 176px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 2 */
.two {
  position: absolute;
  left: 1031px;
  top: 277px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 3 */
.three {
  position: absolute;
  left: 1031px;
  top: 378px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 4 */
.four {
  position: absolute;
  left: 1031px;
  top: 489px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 5 */
.five {
  position: absolute;
  left: 1031px;
  top: 590px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 6 */
.six {
  position: absolute;
  left: 1031px;
  top: 691px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 7 */
.seven {
  position: absolute;
  left: 1031px;
  top: 792px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 8 */
.eight {
  position: absolute;
  left: 1031px;
  top: 893px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 9 */
.nine {
  position: absolute;
  left: 37px;
  top: 765px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 10 */
.ten {
  position: absolute;
  left: 37px;
  top: 664px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 11 */
.eleven {
  position: absolute;
  left: 37px;
  top: 563px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 12 */
.twelve {
  position: absolute;
  left: 37px;
  top: 462px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 13 */
.thirteen {
  position: absolute;
  left: 37px;
  top: 361px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 14 */
.fourteen {
  position: absolute;
  left: 37px;
  top: 260px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}

/* 15 */
.fifteen {
  position: absolute;
  left: 37px;
  top: 159px;
  width: 249px;
  height: 71px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  
  box-sizing: border-box;
  border: 2.67px dashed #497FED;
}  
/* 1 */
.route1 {
  position: absolute;
  left: 782px;
  top: 211px;
  width: 249px;
  height: 59px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 2.67px 0px 0px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 2 */
.route2 {
  position: absolute;
  left: 830px;
  top: 312px;
  width: 201px;
  height: 44px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 2.67px 0px 0px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 3 */
.route3 {
  position: absolute;
  left: 734px;
  top: 363px;
  width: 297px;
  height: 52px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 4 */
.route4 {
  position: absolute;
  left: 689px;
  top: 427px;
  width: 342px;
  height: 89px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 5 */
.route5 {
  position: absolute;
  left: 676px;
  top: 486px;
  width: 355px;
  height: 131px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 6 */
.route6 {
  position: absolute;
  left: 766px;
  top: 675px;
  width: 265px;
  height: 44px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 7 */
.route7 {
  position: absolute;
  left: 652px;
  top: 462px;
  width: 379px;
  height: 358px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 8 */
.route8 {
  position: absolute;
  left: 619px;
  top: 479px;
  width: 412px;
  height: 442px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 9 */
.route9 {
  position: absolute;
  left: 285px;
  top: 731px;
  width: 281px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 2.67px 2.67px 0px;
  border-style: dashed;
  border-color: #497FED;
}

/* 10 */
.route10 {
  position: absolute;
  left: 285px;
  top: 541px;
  width: 302px;
  height: 161px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 2.67px 2.67px 0px;
  border-style: dashed;
  border-color: #497FED;
}

/* 11 */
.route11 {
  position: absolute;
  left: 285px;
  top: 491px;
  width: 233px;
  height: 110px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 2.67px 2.67px 0px;
  border-style: dashed;
  border-color: #497FED;
}

/* 12 */
.route12 {
  position: absolute;
  left: 286px;
  top: 497px;
  width: 205px;
  height: 0px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 0px 0px 2.67px 2.67px;
  border-style: dashed;
  border-color: #497FED;
}

/* 13 */
.route13 {
  position: absolute;
  left: 286px;
  top: 396px;
  width: 199px;
  height: 62px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 2.67px 2.67px 0px 0px;
  border-style: dashed;
  border-color: #497FED;
}

/* 14 */
.route14 {
  position: absolute;
  left: 285px;
  top: 299px;
  width: 216px;
  height: 128px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 2.67px 2.67px 0px 0px;
  border-style: dashed;
  border-color: #497FED;
}

/* 15 */
.route15 {
  position: absolute;
  left: 285px;
  top: 199px;
  width: 227px;
  height: 136px;
  opacity: 1;
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  border-width: 2.67px 2.67px 0px 0px;
  border-style: dashed;
  border-color: #497FED;
}
/* s1系列 */
.s1-1 {
  position: absolute;
  left: 44px;
  top: 1058px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s1-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s1-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 108px;
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

/* s2系列 */
.s2-1 {
  position: absolute;
  left: 352px;
  top: 1058px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s2-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s2-3 {
  position: absolute;
  left: 52px;
  top: 9px;
  width: 180px;
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

/* s3系列 */
.s3-1 {
  position: absolute;
  left: 660px;
  top: 1058px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s3-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s3-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 108px;
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

/* s4系列 */
.s4-1 {
  position: absolute;
  left: 968px;
  top: 1058px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s4-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s4-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 108px;
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

/* s5系列 */
.s5-1 {
  position: absolute;
  left: 44px;
  top: 1170px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s5-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s5-3 {
  position: absolute;
  left: 70px;
  top: 9px;
  width: 144px;
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

/* s6系列 */
.s6-1 {
  position: absolute;
  left: 352px;
  top: 1170px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s6-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s6-3 {
  position: absolute;
  left: 62px;
  top: 12px;
  width: 160px;
  height: 48px;
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

/* s7系列 */
.s7-1 {
  position: absolute;
  left: 660px;
  top: 1170px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s7-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s7-3 {
  position: absolute;
  left: 7px;
  top: 12px;
  width: 270px;
  height: 45px;
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

/* s8系列 */
.s8-1 {
  position: absolute;
  left: 968px;
  top: 1170px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s8-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s8-3 {
  position: absolute;
  left: 14px;
  top: 11px;
  width: 256px;
  height: 48px;
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

/* s9系列 */
.s9-1 {
  position: absolute;
  left: 44px;
  top: 1282px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s9-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s9-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 108px;
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

/* s10系列 */
.s10-1 {
  position: absolute;
  left: 352px;
  top: 1282px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s10-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s10-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 108px;
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

/* s11系列 */
.s11-1 {
  position: absolute;
  left: 660px;
  top: 1282px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s11-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s11-3 {
  position: absolute;
  left: 70px;
  top: 9px;
  width: 144px;
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

/* s12系列 */
.s12-1 {
  position: absolute;
  left: 968px;
  top: 1282px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s12-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s12-3 {
  position: absolute;
  left: 29px;
  top: 12px;
  width: 224px;
  height: 48px;
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

/* s13系列 */
.s13-1 {
  position: absolute;
  left: 44px;
  top: 1394px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s13-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s13-3 {
  position: absolute;
  left: 16px;
  top: 9px;
  width: 252px;
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

/* s14系列 */
.s14-1 {
  position: absolute;
  left: 352px;
  top: 1394px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s14-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s14-3 {
  position: absolute;
  left: 34px;
  top: 9px;
  width: 216px;
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

/* s15系列 */
.s15-1 {
  position: absolute;
  left: 660px;
  top: 1394px;
  width: 304px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s15-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 284px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s15-3 {
  position: absolute;
  left: 35px;
  top: 9px;
  width: 214px;
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
.text-content {
  /* 强制单行显示，避免换行溢出 */
  white-space: nowrap;
  overflow: visible;
  
  /* 绝对居中（适配任何文字长度） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  /* 文字大小适配 */
  font-size: 22px;
  padding: 0 10px; /* 避免文字贴边框 */
}

/* 匹配状态样式（.matched） */
.matched {
  background-color: #497FED;
  border-style: solid;
  color: white;
}

.s1-3, .s2-3, .s3-3, .s4-3, .s5-3, 
.s6-3, .s7-3, .s8-3, .s9-3, .s10-3, 
.s11-3, .s12-3, .s13-3, .s14-3, .s15-3 {
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

/* 针对特别长的文本单独调整 */
.s7-3, .s8-3, .s13-3 { /* "复位、自动运行按钮", "触摸屏", "工控机开机按钮" */
  font-size: 20px; /* 稍小的字体 */
}

.matched {
  background-color: #497FED !important;
  border: 2.67px solid #497FED !important;
}

.matched .text-content {
  color: white !important;
  font-size: 20px !important; /* 与未匹配时一致 */
  max-width: 220px !important;
}

/* 拖拽交互样式 */

[v-drag].dragging {
  opacity: 0.8;
  transform: scale(1.05);
  z-index: 999;
  box-shadow: 0 8px 12px rgba(73, 127, 237, 0.3);
  transition: all 0.2s ease;
}
.snap-hover {
  background-color: rgba(73, 127, 237, 0.2) !important;
  border-color: #497FED !important;
  border-width: 2px !important;
}

</style>