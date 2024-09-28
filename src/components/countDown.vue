<template>
    {{ remainingTime }}
</template>
<script setup>
import { ref, defineProps, onMounted } from 'vue'
const remainingTime = ref('')
const props = defineProps({
    countdown: {
        type: Number,
        default: 0
    }
})
let time = Math.floor((props.countdown + 7200000 - Date.now()) / 1000)
const updateRemainingTime = () => {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    remainingTime.value = `${hour} 时 ${minutes} 分 ${seconds < 10 ? '0' : ''}${seconds} 秒`;
}
const startCountdown = () => {
    if (time < 0) {
        remainingTime.value = '订单已超时'
        return
    }
    updateRemainingTime()
    const interval = setInterval(() => {
        time -= 1
        if (time < 0) {
            clearInterval(interval)
            remainingTime.value = '订单已超时'
        } else {
            updateRemainingTime()
        }
    }, 1000)
    //onBeforeUnmount(() => clearInterval(interval)); // 组件卸载时清除定时器
}
onMounted(() => {
    startCountdown()
    console.log(time)
})
</script>

<style lang="scss" scoped></style>