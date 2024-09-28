import request from 'axios'
const http=request.create({
    baseURL:'https:/v3pz.itndedu.com/v3pz',
    timeout:10000,
    headers:{'terminal':'h5'}
})
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('h5_token')
    const writeurl = ['/login']
    if (token && !writeurl.includes(config.url)) {
        config.headers['h-token'] = token
    }
    return config
}, function (error) {
    return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === -1) {
        
    }
    if (response.data.code === -2) {
        localStorage.removeItem('h5_token')
        localStorage.removeItem('h5_userInfo')
        location.href = '/login'
    }
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http