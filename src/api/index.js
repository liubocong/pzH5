import request from '../util/request'
export const Login=function(data){
    return request.post('/login',data)
}
export const indexIndex=function(){
    return request.get('/Index/index')
}
export const h5Companion=function(){
    return request.get('/h5/companion')
}
export const CreateOrder=function(data){
    return request.post('/createOrder',data)
}
export const orderList=function(params){
    return request.get('/order/list',{params})
}
export const orderDetail=function(params){
    return request.get('/order/detail',{params})
}