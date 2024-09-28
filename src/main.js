import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
router.beforeEach((to,from,next)=>{
    const token=localStorage.getItem('h5_token')
    if(!token&&to.path!=='/login')
    {
      localStorage.removeItem('h5_token')
      localStorage.removeItem('h5_userInfo')
      next('/login')
    }
    else if(token&&to.path==='/login')
    {
      next('/')
    }
    else{
      next()
    }
  })
const app=createApp(App)
app.use(router)
app.mount('#app')
