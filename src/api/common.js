import service from "@/router/request.js";

const requestUrl ={
    getTableDate:"ceshiceshi"
}

// 获取表格数据
export  function getList(prome){
    let data ={
        tableData: [
            {
              date: "南山停车场",
              name: "王小虎",
              area:"室外",
              Parkable:"20",
              location:"广东省 深圳市 南山区",
              switch: false,
              set:"",
            },
            {
              date: "南山停车场",
              name: "王小虎",
              area:"室外",
              Parkable:"20",
              location:"广东省 深圳市 南山区",
              switch: false,
              set:"",
            },
            {
              date: "南山停车场",
              name: "王小虎",
              area:"室外",
              Parkable:"20",
              location:"广东省 深圳市 南山区",
              switch: false,
              set:"",
            },
          ],
    }
    return Promise.resolve(data)
    // return service.request({
    //     method:prome.method || "post",
    //     url:process.env.VUE_APP_API_URL+prome.url,
    //     data:prome.data||{}
    // })
}
export{requestUrl}