<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['playAgain', 'exit', 'update:visible'])
const handleClose = () => {
  emit('update:visible', false)
}
</script>
<template>
<div class="main" v-if="visible">
 <div class="mention">
    <div class="img-o">
<div class="img"></div>
    </div>
    <div class="txt">非常棒!任务完成</div>
    <div class="exit">
        <div class="exit-1" @click="$emit('exit'),handleClose()">退出</div>
    </div>
    <div class="again">
        <div class="again-1" @click="$emit('playAgain'),handleClose()">再来一次</div>
    </div>
 </div>
</div>
</template>
<style scoped>
.main{
 position:relative;
 left:260.5px ; /* 水平居中 */
  top: 590px; /* 垂直居中 */
width: 919px;
height: 624px;
border-radius: 20px;
opacity: 1;
background: #D5DBE4;
	z-index: 9999;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
	
}
.mention{
    /* 自动布局子元素 */
position: absolute;
left: 193px;
top: 116px;
width: 533px;
height: 392px;
opacity: 1;
	
z-index: 0;
}
.img-o{
    /* 自动布局子元素 */
position: absolute;
left: 178px;
top: 0px;
width: 177px;
height: 178px;
opacity: 1;
	
z-index: 0;
}
.img{
 position: absolute;
left: 11.08px;
top: 14.29px;
width: 100%;
height: 100%;
opacity: 1;
background: url('../assets/sucess.png');
/* 自动布局 */
	background-size: contain;
}
.txt{
position: absolute;
left: 180px;
top: 226px;
width: 262px;
height: 50px;
opacity: 1;
	
font-family: Alibaba PuHuiTi 2.0;
font-size: 25px;
font-weight: 500;
line-height: normal;
letter-spacing: 0em;
	
font-feature-settings: "kern" on;
color: #3D3D3D;
	
z-index: 1;
}
.exit{
/* 自动布局子元素 */
position: absolute;
left: 0px;
top: 324px;
width: 218px;
height: 68px;
border-radius: 40px;
opacity: 1;
	
background: #98B6F4;
	
z-index: 2;
}
.again{
/* 自动布局子元素 */
position: absolute;
left: 323px;
top: 324px;
width: 210px;
height: 68px;
border-radius: 40px;
opacity: 1;
background: #497FED;
	
z-index: 3;
}
.exit-1{
    position: absolute;
left: 73px;
top: 8px;
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
color: #FFFFFF;
	
}
.again-1{
    /* 自动布局子元素 */
position: absolute;
left: 33px;
top: 8px;
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
color: #FFFFFF;
	
z-index: 0;
}
</style>