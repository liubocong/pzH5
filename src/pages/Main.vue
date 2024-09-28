<template>
     <Router-View></Router-View>
    <van-tabbar v-model="active" active-color="#ee0a24"  :placeholder="true" route>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import {useRouter,useRoute} from 'vue-router'
const active = ref(0)
const router=useRouter()
const route=useRoute()
onMounted(()=>{
    active.value=router.options.routes[0].children.findIndex(item=>'/'+item.path===route.path)
})
</script>

<style lang="less" scoped>

</style>