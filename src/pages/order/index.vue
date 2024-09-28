<template>
    <div class="header">我的订单</div>
    <van-tabs v-model:active="route.query.active" @click-tab="onClickTab">
        <van-tab title="全部" name="">
        </van-tab>
        <van-tab title="待支付" name="1">
        </van-tab>
        <van-tab title="待服务" name="2">
        </van-tab>
        <van-tab title="已完成" name="3">
        </van-tab>
        <van-tab title="已取消" name="4">
        </van-tab>
    </van-tabs>

    <van-row v-for="item in order" :key="item.out_trade_no" @click="goDetail(item)">
        <van-col span="5">
            <van-image :src="item.serviceImg" width="50" height="50" radius></van-image>
        </van-col>
        <van-col span="12">
            <div class="text1">{{ item.service_name }}</div>
            <div class="text2">
                <div>{{ item.hospital_name }}</div>
                <div>预约时间:{{ item.starttime }}</div>
            </div>
        </van-col>
        <van-col class="text2" span="6" :style="{ color: colorMap[item.trade_state] }">
            {{ item.trade_state }}
            <div v-if="item.trade_state === '待支付'">
                <countDown :countdown="item.order_start_time"></countDown>
            </div>
        </van-col>
    </van-row>

    <div class="bottom-text">没有更多了</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { orderList } from '../../api'
import countDown from '../../components/countDown.vue'
import { useRouter,useRoute } from 'vue-router'
const router=useRouter()
const route=useRoute()
const order = ref([])
const colorMap = {
    '待支付': '#ffa200',
    '待服务': '#1da6fd',
    '已完成': '#21c521'
}
const onClickTab =async function (item) {
    //console.log(item)
    await orderList({ state: item.name }).then((result) => {
        console.log(result.data.data)
        order.value = result.data.data
    })
}
const goDetail = function (item) {
    router.push(`/detail?oid=${item.out_trade_no}`)
}
onMounted(() => {
    orderList({state:route.query.active}).then((result) => {
        order.value = result.data.data
    })
    console.log(route.query.active)
})
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    line-height: 40px;
    text-align: center;
}

.van-row {
    background-color: #fff;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;

    .text1 {
        font-size: 16px;
        line-height: 25px;
        font-weight: bold;
    }

    .text2 {
        font-size: 14px;
        line-height: 20px;
        color: #999999;
    }
}

.bottom-text {
    line-height: 50px;
    text-align: center;
    color: #999999;
}
</style>