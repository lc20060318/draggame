<script setup>
import {ref,reactive,computed,onMounted,watch} from 'vue'
import example3 from '@/components/example3.vue'
import success from '@/components/sucess.vue'
import Scale from '@/components/Scale.vue'
import {useRouter} from 'vue-router'
import { ElMessage,ElMessageBox } from 'element-plus'
const router = useRouter()
const finishDialogVisible = ref(false)
const finishExample = ref(false)
const selection = reactive([
 { id: '门板' },
  { id: '圆振、平振控制器' },
  { id: '离子风扇' },
  { id:'供料振动盘' },
  { id: '分料观察窗口' },
  { id:'集料箱'},
  { id:'转盘测试部分'},
  { id:'急停按钮'},
  { id:'显示器'},
  { id:'信号灯'}
])
const targets = reactive([
  { id: '门板' },
  { id: '圆振、平振控制器' },
  { id: '离子风扇' },
  { id:'供料振动盘' },
  { id: '分料观察窗口' },
  { id:'集料箱'},
  { id:'转盘测试部分'},
  { id:'急停按钮'},
  { id:'显示器'},
  { id:'信号灯'}
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
  router.replace({ name: 'project10' }).then(() => {
    router.push({ name: 'project10' })
  })
}

const handlePlayAgain = () => {
  correctSelection.clear()
 router.replace({ name: 'project10' }).then(() => {
    router.push({ name: 'project10' })
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
  <scale :designDraftWidth="1440" :designDraftHeight="1804">
    <div class="tenproject" ref="container">
        <div class="title">ZY0808FG自动分选机各部件</div>
   <div class="restart" @click="handleReset">
   <div class="restart-1">
    <div class="restart-2">重新开始</div> <div class="circle"></div>
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
    
    <div class="two" :data-id="targets[1].id" :class="{ matched: correctSelection.has(targets[1].id) }">
      <span class="text-content">{{ getAnswerText(targets[1].id) }}</span>
    </div>
    <div class="route2"></div>
    
    <div class="three" :data-id="targets[2].id" :class="{ matched: correctSelection.has(targets[2].id) }">
      <span class="text-content">{{ getAnswerText(targets[2].id) }}</span>
    </div>
    <div class="route3"></div>
    
    <div class="four" :data-id="targets[3].id" :class="{ matched: correctSelection.has(targets[3].id) }">
      <span class="text-content">{{ getAnswerText(targets[3].id) }}</span>
    </div>
    <div class="route4"></div>
    
    <div class="five" :data-id="targets[4].id" :class="{ matched: correctSelection.has(targets[4].id) }">
      <span class="text-content">{{ getAnswerText(targets[4].id) }}</span>
    </div>
    <div class="route5"></div>
    
    <div class="six" :data-id="targets[5].id" :class="{ matched: correctSelection.has(targets[5].id) }">
      <span class="text-content">{{ getAnswerText(targets[5].id) }}</span>
    </div>
    <div class="route6"></div>
    
    <div class="seven" :data-id="targets[6].id" :class="{ matched: correctSelection.has(targets[6].id) }">
      <span class="text-content">{{ getAnswerText(targets[6].id) }}</span>
    </div>
    <div class="route7"></div>
    
    <div class="eight" :data-id="targets[7].id" :class="{ matched: correctSelection.has(targets[7].id) }">
      <span class="text-content">{{ getAnswerText(targets[7].id) }}</span>
    </div>
    <div class="route8"></div>
    
    <div class="nine" :data-id="targets[8].id" :class="{ matched: correctSelection.has(targets[8].id) }">
      <span class="text-content">{{ getAnswerText(targets[8].id) }}</span>
    </div>
    <div class="route9"></div>
    
    <div class="ten" :data-id="targets[9].id" :class="{ matched: correctSelection.has(targets[9].id) }">
      <span class="text-content">{{ getAnswerText(targets[9].id) }}</span>
    </div>
    <div class="route10"></div>
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
    <success v-model:visible="finishDialogVisible"@play-again="handlePlayAgain"
          @exit="handleExit"></success>
          <example3 v-model:visible="finishExample" @exit="handleExit1"></example3>
           <div class="diamond1"></div>
     <div class="diamond2"></div>
     <div class="diamond3"></div>
     <div class="diamond4"></div>
     <div class="diamond5"></div>
     <div class="diamond6"></div>
     <div class="diamond7"></div>
     <div class="diamond8"></div>
     <div class="diamond9"></div>
     <div class="diamond10"></div>
    </div>
    </div>
    </scale>
</template>
<style scoped>
.tenproject{
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
left: 427px;
top: 54px;
width: 600px;
height: 72px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 40px;
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
.main-content{
    position: absolute;
left: 62px;
top: 179px;
width: 1316px;
height: 1578px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: #FFFFFF;
	
}
.content-title {
 position: absolute;
left: 392px;
top: 50px;
width: 540px;
height: 52px;
opacity: 1;
	
font-family: Source Han Sans;
font-size: 30px;
font-weight: normal;
line-height: normal;
letter-spacing: 0em;
	
font-variation-settings: "opsz" auto;
font-feature-settings: "kern" on;
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
left: 407px;
top: 188px;
width: 502px;
height: 660px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('../assets/ZY0808FG自动分选机各部件.png');
	
}

.one {
  position: absolute;
  left: 1000px;
  top: 191px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}


.two {
  position: absolute;
  left: 1000px;
  top: 311px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}

/* 数字3 */
.three {
  position: absolute;
  left: 1000px;
  top: 431px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}

/* 数字4 */
.four {
  position: absolute;
  left: 1000px;
  top: 551px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}


.five {
  position: absolute;
  left: 1000px;
  top: 672px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}
.six {
  position: absolute;
  left: 36px;
  top: 711px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}

.seven {
  position: absolute;
  left: 36px;
  top: 591px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}
.eight {
  position: absolute;
  left: 36px;
  top: 471px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}
.nine {
  position: absolute;
  left: 36px;
  top: 351px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}
.ten {
  position: absolute;
  left: 36px;
  top: 231px;
  width: 280px;
  height: 80px;
  opacity: 1;
  box-sizing: border-box;
  border: 3px dashed #497FED;
  
  display: flex;
  flex-direction: column;
  z-index: 0;
}
.route1 {
  position: absolute;
  left: 658px;
  top: 230px;
  width: 344px;
  height: 0.16px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  /* 保留原始边框 */
  border-width: 0px 0px 3px 3px;
  border-style: dashed;
  border-color: #497FED;
}
.route2 {
  position: absolute;
  left: 795px;
  top: 350px;
  width: 207.14px;
  height: 24.37px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  border-width: 3px 0px 0px 3px;
  border-style: dashed;
  border-color: #497FED;
}
.route3 {
  position: absolute;
  left: 795px;
  top: 407.6px;
  width: 207.15px;
  height: 62.23px;
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
.route4 {
  position: absolute;
  left: 786.5px;
  top: 509.6px;
  width: 215.4px;
  height: 80.63px;
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
.route5 {
  position: absolute;
  left: 730px;
  top: 613.86px;
  width: 271.92px;
  height: 97.3px;
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
.route6 {
  position: absolute;
  left: 316px;
  top: 753px;
  width: 260px;
  height: 0px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  /* 保留原始边框 */
  border-width: 0px 0px 3px 3px;
  border-style: dashed;
  border-color: #497FED;
}
.route7 {
  position: absolute;
  left: 316px;
  top: 526px;
  width: 361px;
  height: 107px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  border-width: 0px 3px 3px 0px;
  border-style: dashed;
  border-color: #497FED;
}
.route8 {
  position: absolute;
  left: 316px;
  top: 491px;
  width: 183px;
  height: 22px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  border-width: 0px 3px 3px 0px;
  border-style: dashed;
  border-color: #497FED;
}
.route9 {
  position: absolute;
  left: 315px;
  top: 391px;
  width: 203.5px;
  height: 0px;
  opacity: 1;
  
  /* 自动布局 */
  display: flex;
  flex-direction: undefined;
  justify-content: undefined;
  align-items: undefined;
  padding: NaNpx;
  
  /* 保留原始边框 */
  border-width: 0px 0px 3px 3px;
  border-style: dashed;
  border-color: #497FED;
}
.route10 {
  position: absolute;
  left: 316px;
  top: 271px;
  width: 228px;
  height: 52px;
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

.s1-1 {
  position: absolute;
  left: 62px;
  top: 966px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s1-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s1-3 {
  position: absolute;
  left: 107px;
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


.s2-1 {
  position: absolute;
  left: 488px;
  top: 966px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s2-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s2-3 {
  position: absolute;
  left: 107px;
  top: 14px;
  width: 108px;
  height: 54px;
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


.s3-1 {
  position: absolute;
  left: 911px;
  top: 966px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s3-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s3-3 {
  position: absolute;
  left: 91px;
  top: 14px;
  width: 144px;
  height: 54px;
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


.s4-1 {
  position: absolute;
  left: 60px;
  top: 1106px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s4-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s4-3 {
  position: absolute;
  left: 55px;
  top: 14px;
  width: 216px;
  height: 54px;
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

.s5-1 {
  position: absolute;
  left: 488px;
  top: 1108px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s5-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s5-3 {
  position: absolute;
  left: 107px;
  top: 14px;
  width: 108px;
  height: 54px;
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


.s6-1 {
  position: absolute;
  left: 912px;
  top: 1108px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s6-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s6-3 {
  position: absolute;
  left: 126px;
  top: 14px;
  width: 72px;
  height: 54px;
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


.s7-1 {
  position: absolute;
  left: 59px;
  top: 1248px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s7-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s7-3 {
  position: absolute;
  left: 20px;
  top: 14px;
  width: 288px;
  height: 54px;
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


.s8-1 {
  position: absolute;
  left: 487px;
  top: 1250px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s8-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s8-3 {
  position: absolute;
  left: 90px;
  top: 14px;
  width: 144px;
  height: 54px;
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


.s9-1 {
  position: absolute;
  left: 912px;
  top: 1250px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s9-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s9-3 {
  position: absolute;
  left: 72px;
  top: 14px;
  width: 180px;
  height: 54px;
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


.s10-1 {
  position: absolute;
  left: 61px;
  top: 1380px;
  width: 342px;
  height: 100px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.s10-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 328px;
  height: 82px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}

.s10-3 {
  position: absolute;
  left: 55px;
  top: 14px;
  width: 216px;
  height: 54px;
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

.text-content {
  white-space: nowrap;
  overflow: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  padding: 0 10px;
}

.s1-3, .s2-3, .s3-3, .s4-3, .s5-3,
.s6-3, .s7-3, .s8-3, .s9-3, .s10-3 {
  white-space: nowrap;
  overflow: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 24px;
  width: auto;
  max-width: 280px;
  padding: 0 10px;
  box-sizing: border-box;
}

.s2-3 { 
  font-size: 20px; 
}
.s7-3 { 
  font-size: 22px;
}


.matched .text-content {
  /* 继承未匹配时的居中样式（关键：解决匹配后不居中） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 匹配后文字不缩小（解决字体变小） */
  font-size: 22px !important;
  padding: 0 10px;
}
.matched {
  background-color:#497FED;
  border-style: solid;
  color:white
  
}
.snap-hover {
  background-color: rgba(73, 127, 237, 0.2) !important;
  border-color: #497FED !important;
  border-width: 2px !important;
}



[v-drag].dragging {
  opacity: 0.8;
  transform: scale(1.05);
  z-index: 999;
  box-shadow: 0 8px 12px rgba(73, 127, 237, 0.3); 
  transition: all 0.2s ease; 
}
.matched .text-content {
 font-size: 24px !important; 
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
}
/* 数字1对应的菱形 */
.diamond1 {
  position: absolute;
  left: 648px;
  top: 230px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字2对应的菱形 */
.diamond2 {
  position: absolute;
  left: 790px;
  top: 374.37px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字3对应的菱形 */
.diamond3 {
  position: absolute;
  left: 790px;
  top: 397.6px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字4对应的菱形 */
.diamond4 {
  position: absolute;
  left: 781.5px;
  top: 499.6px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字5对应的菱形 */
.diamond5 {
  position: absolute;
  left: 725px;
  top: 603.86px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字6对应的菱形 */
.diamond6 {
  position: absolute;
  left: 576px;
  top: 748px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字7对应的菱形 */
.diamond7 {
  position: absolute;
  left: 677px;
  top: 516px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字8对应的菱形 */
.diamond8 {
  position: absolute;
  left: 494px;
  top: 481px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字9对应的菱形 */
.diamond9 {
  position: absolute;
  left: 518.5px;
  top: 388px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}

/* 数字10对应的菱形 */
.diamond10 {
  position: absolute;
  left: 544px;
  top: 323px;
  width: 10px;
  height: 10px;
  background-color: #497FED;
  transform: rotate(45deg);
}
</style>