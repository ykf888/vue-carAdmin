import service from "@/router/request.js";
// 获取省、市、区
export  function cityPicker(data){
    return service.request({
        method:'post',
        url:process.env.VUE_APP_API_URL+'/cityPicker/',
        data:data
    })
}