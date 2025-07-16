import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import drag from './directives/drag'

const app = createApp(App)    
app.use(router)               
app.directive('drag', drag)

app.mount('#app')        