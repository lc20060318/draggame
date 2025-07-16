<script setup>

import {ref,reactive,computed,onMounted,watch} from 'vue'
import example2 from '@/components/example2.vue'
import success from '@/components/sucess.vue'
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'
const router = useRouter()
const finishDialogVisible = ref(false)
const finishExample = ref(false)
const selection = reactive([
 { id: '原点感应光耦' },
  { id: '伺服电机' },
  { id: '挡光片' },
  { id:'滑轨' },
  { id: '限位气缸' },
  { id:'出料感应光耦'},
  { id:'料片压紧板'},
  { id:'点胶盖板'},
  { id:'热电偶'},
  { id:'加热棒'},
  { id:'步进电机'},
  { id:'点胶阀'},
  { id:'压胶块'},
  { id:'丝杆'},
  { id:'胶筒固定座'},
  { id:'联轴器'}
])
const targets = reactive([
  { id: '原点感应光耦' },
  { id: '伺服电机' },
  { id: '挡光片' },
  { id:'滑轨' },
  { id: '限位气缸' },
  { id:'出料感应光耦'},
  { id:'料片压紧板'},
  { id:'点胶盖板'},
  { id:'热电偶'},
  { id:'加热棒'},
  { id:'步进电机'},
  { id:'点胶阀'},
  { id:'压胶块'},
  { id:'丝杆'},
  { id:'胶筒固定座'},
  { id:'联轴器'}
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
    alert('选择错误，再仔细检查一下')
  }
}
// 重置游戏
const handleReset = () => {
  correctSelection.clear()
  finishDialogVisible.value = false
  shuffleSelection()
  // 刷新组件
  router.replace({ name: 'project9' }).then(() => {
    router.push({ name: 'project9' })
  })
}

const handlePlayAgain = () => {
  correctSelection.clear()
 router.replace({ name: 'project9' }).then(() => {
    router.push({ name: 'project9' })
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
<div class="nineproject">
<div class="title">灌胶机工作台上的各零部件</div>
<div class="restart">
   <div class="restart-1">
    <div class="restart-2">重新开始</div> <div class="circle" @click="handleReset"></div>
   </div>
      </div>
    
    <div class="main-content" @dragMatch="handleDragMatch" >
        <div class="content-title">
             <span>请拖动部件名称至图中的正确位置</span>
       <div class="mention" @click="handleExample"></div>
        </div>
       <div class="main-part"></div>
       <div class="main-part1"></div>
       <!-- 1 -->
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

<!-- 16 -->
<div class="sixteen" :data-id="targets[15].id" :class="{ matched: correctSelection.has(targets[15].id) }">
  <span class="text-content">{{ getAnswerText(targets[15].id) }}</span>
</div>
<div class="route16"></div>
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

<!-- 16 -->
<div class="s16-1" v-show="!correctSelection.has(selection[15].id)">
  <div class="s16-2">
    <div class="s16-3" v-drag :data-id="selection[15].id">{{ selection[15].id }}</div>
    <success v-model:visible="finishDialogVisible"@play-again="handlePlayAgain"
          @exit="handleExit"></success>
  </div>
</div>
  <example2 v-model:visible="finishExample" @exit="handleExit1"></example2>
    </div>
</div>
</template>
<style scoped>
.nineproject{
position: absolute;
  left: 0;
  top: 0;
  width: 1440px;
  height: 1804px;
  background: #F3F7FD;
}
.title{
    position: absolute;
left: 420px;
top: 54px;
width: 600px;
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
  background: url('src/assets/屏幕截图 2025-07-16 093054.png') no-repeat center center;
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
  background: url('src/assets/屏幕截图 2025-07-16 122000.png') no-repeat center center;
   background-size: contain;
}
.main-part{
position: absolute;
left: 316px;
top: 272px;
width: 372.1px;
height: 413px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('src/assets/p9-1.png');
	
}
.main-part1{
position: absolute;
left: 704.83px;
top: 272px;
width: 295.17px;
height: 413px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
background: url('src/assets/p9-2.png');
	
}
.one{
    /* 自动布局子元素 */
position: absolute;
left: 1031px;
top: 190px;
width: 249px;
height: 71px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 12.46px 44.5px;
gap: 8.899658203125px;
	box-sizing: border-box;
border: 2.67px dashed #497FED;
z-index: 0;
}
.route1{
    position: absolute;
left: 721px;
top: 229px;
width: 310px;
height: 76px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border-width: 2.67px 0px 0px 2.67px;
border-style: dashed;
border-color: #497FED;;
	
}
.two{
    /* 自动布局子元素 */
position: absolute;
left: 1031px;
top: 292px;
width: 249px;
height: 71px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 12.46px 44.5px;
gap: 8.899658203125px;
	box-sizing: border-box;
border: 2.67px dashed #497FED;
z-index: 0;
}
.route2{
    position: absolute;
left: 900px;
top: 331px;
width: 131px;
height: 52px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
border-width: 2.67px 0px 0px 2.67px;
border-style: dashed;
border-color: #497FED;;

}
.three{
    /* 自动布局子元素 */
position: absolute;
left: 1031px;
top: 393px;
width: 249px;
height: 71px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: column;
padding: 12.46px 44.5px;
gap: 8.899658203125px;
box-sizing: border-box;
border: 2.67px dashed #497FED;
z-index: 0;
}
.route3{
    position: absolute;
left: 736px;
top: 368px;
width: 295px;
height: 64px;
opacity: 1;
	
/* 自动布局 */
display: flex;
flex-direction: undefined;
justify-content: undefined;
align-items: undefined;
padding: NaNpx;
	
border-width: 0px 0px 2.67px 2.67px;
border-style: dashed;
border-color: #497FED;;

	
}
/* 4 */
/* 4 */
.four {
  /* 自动布局子元素 */
  position: absolute;
  left: 1031px;
  top: 495px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 5 */
.five {
  /* 自动布局子元素 */
  position: absolute;
  left: 1031px;
  top: 597px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 6 */
.six {
  /* 自动布局子元素 */
  position: absolute;
  left: 1031px;
  top: 699px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 7 */
.seven {
  /* 自动布局子元素 */
  position: absolute;
  left: 620px;
  top: 802px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 8 */
.eight {
  /* 自动布局子元素 */
  position: absolute;
  left: 620px;
  top: 901px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 9 */
.nine {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 883px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 10 */
.ten {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 782px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 11 */
.eleven {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 681px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 12 */
.twelve {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 580px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 13 */
.thirteen {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 474px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 14 */
.fourteen {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 373px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 15 */
.fifteen {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 272px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}

/* 16 */
.sixteen {
  /* 自动布局子元素 */
  position: absolute;
  left: 36px;
  top: 171px;
  width: 249px;
  height: 72px;
  opacity: 1;
  
  /* 新增：边框不撑开盒子 */
  box-sizing: border-box;
  /* 新增边框样式 */
  border: 2.67px dashed #497FED;
  
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 12.46px 44.5px;
  gap: 8.899658203125px;
  z-index: 0;
}
/* 4 */
.route4 {
  position: absolute;
  left: 842px;
  top: 483px;
  width: 189px;
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

/* 5 */
.route5 {
  position: absolute;
  left: 719px;
  top: 635px;
  width: 312px;
  height: 0px;
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

/* 6 */
.route6 {
  position: absolute;
  left: 731px;
  top: 670px;
  width: 300px;
  height: 71px;
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
  left: 541px;
  top: 634px;
  width: 79px;
  height: 202px;
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
  left: 488px;
  top: 676px;
  width: 132px;
  height: 260px;
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
  top: 580px;
  width: 189px;
  height: 341px;
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
  top: 680px;
  width: 154px;
  height: 140px;
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
  top: 634px;
  width: 107px;
  height: 83px;
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
  left: 285px;
  top: 551px;
  width: 177px;
  height: 65px;
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

/* 13 */
.route13 {
  position: absolute;
  left: 285px;
  top: 445px;
  width: 284px;
  height: 65px;
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

/* 14 */
.route14 {
  position: absolute;
  left: 285px;
  top: 366px;
  width: 339px;
  height: 44px;
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

/* 15 */
.route15 {
  position: absolute;
  left: 284px;
  top: 307px;
  width: 244.5px;
  height: 26.5px;
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

/* 16 */
.route16 {
  position: absolute;
  left: 285px;
  top: 206px;
  width: 284px;
  height: 82px;
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
/* 1 */
.s1-1 {
  position: absolute;
  left: 44px;
  top: 1087px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s1-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s1-3 {
  position: absolute;
  left: 70px;
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

/* 2 */
.s2-1 {
  position: absolute;
  left: 352px;
  top: 1087px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s2-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s2-3 {
  position: absolute;
  left: 70px;
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

/* 3 */
.s3-1 {
  position: absolute;
  left: 660px;
  top: 1087px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s3-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s3-3 {
  position: absolute;
  left: 34px;
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

/* 4 */
.s4-1 {
  position: absolute;
  left: 968px;
  top: 1087px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s4-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s4-3 {
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

/* 5 */
.s5-1 {
  position: absolute;
  left: 44px;
  top: 1199px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s5-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
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

/* 6 */
.s6-1 {
  position: absolute;
  left: 352px;
  top: 1199px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s6-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s6-3 {
  position: absolute;
  left: 19px;
  top: 12px;
  width: 210px;
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

/* 7 */
.s7-1 {
  position: absolute;
  left: 660px;
  top: 1199px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s7-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s7-3 {
  position: absolute;
  left: 28px;
  top: 12px;
  width: 192px;
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

/* 8 */
.s8-1 {
  position: absolute;
  left: 968px;
  top: 1199px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s8-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s8-3 {
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

/* 9 */
.s9-1 {
  position: absolute;
  left: 44px;
  top: 1311px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s9-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s9-3 {
  position: absolute;
  left: 52px;
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

/* 10 */
.s10-1 {
  position: absolute;
  left: 352px;
  top: 1311px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s10-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s10-3 {
  position: absolute;
  left: 34px;
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

/* 11 */
.s11-1 {
  position: absolute;
  left: 660px;
  top: 1311px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s11-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s11-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 72px;
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

/* 12 */
.s12-1 {
  position: absolute;
  left: 968px;
  top: 1311px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s12-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s12-3 {
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

/* 13 */
.s13-1 {
  position: absolute;
  left: 44px;
  top: 1423px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s13-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s13-3 {
  position: absolute;
  left: 52px;
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

/* 14 */
.s14-1 {
  position: absolute;
  left: 352px;
  top: 1423px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s14-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s14-3 {
  position: absolute;
  left: 70px;
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

/* 15 */
.s15-1 {
  position: absolute;
  left: 660px;
  top: 1423px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s15-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s15-3 {
  position: absolute;
  left: 88px;
  top: 9px;
  width: 72px;
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

/* 16 */
.s16-1 {
  position: absolute;
  left: 968px;
  top: 1423px;
  width: 268px;
  height: 92px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.s16-2 {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 248px;
  height: 72px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: #E0EAFF;
  z-index: 0;
}
.s16-3 {
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
}/* 拖拽选项样式优化 */
.s1-3, .s2-3, .s3-3, .s4-3, .s5-3, 
.s6-3, .s7-3, .s8-3, .s9-3, .s10-3, .s11-3,
.s12-3, .s13-3, .s14-3, .s15-3, .s16-3 {
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
.s3-3, .s6-3, .s10-3 { /* "原点感应光耦", "出料感应光耦", "胶筒固定座" */
  font-size: 20px; /* 稍小的字体 */
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
.s6-1, .s7-1, .s8-1, .s9-1, .s10-1, .s11-1,
.s12-1, .s13-1, .s14-1, .s15-1, .s16-1 {
  padding: 5px; /* 减小内边距，使整体布局更紧凑 */
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

/* 拖拽元素样式 */

[v-drag].dragging {
  opacity: 0.8;
  transform: scale(1.05);
  z-index: 999;
  box-shadow: 0 8px 12px rgba(73, 127, 237, 0.3); /* 匹配主题色的阴影 */
  transition: all 0.2s ease; /* 添加过渡动画 */
}
/* 确保匹配后文字不缩小，保持与未匹配时一致 */
.matched .text-content {
 font-size: 24px !important; /* 确保匹配后文字大小一致 */
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
}

</style>