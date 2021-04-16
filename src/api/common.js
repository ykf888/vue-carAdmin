import service from "@/router/request.js";

const requestUrl ={
    getTableDate:"ceshiceshi"
}
let data ={
  tableData: [
      {
        date:"停车场",
        logo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FcfAicxy6f3jRUQqd7Zaqk-DvnkiZm3yrm9YbpymZXbpouI64PLnDNyiI08ZHM8ZfTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621057676&t=8782e65bd0ed0a39feb8f2fdf11515f1",
        name: "王小虎",
        area:"室外",
        Parkable:"20",
        location:"广东省 深圳市 南山区",
        switch: false,
        set:"",
      },
      {
        date:"停车场",
        logo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FcfAicxy6f3jRUQqd7Zaqk-DvnkiZm3yrm9YbpymZXbpouI64PLnDNyiI08ZHM8ZfTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621057676&t=8782e65bd0ed0a39feb8f2fdf11515f1",
        name: "王小虎",
        area:"室外",
        Parkable:"20",
        location:"广东省 深圳市 南山区",
        switch: false,
        set:"",
      },{
        date:"停车场",
        logo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FcfAicxy6f3jRUQqd7Zaqk-DvnkiZm3yrm9YbpymZXbpouI64PLnDNyiI08ZHM8ZfTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621057676&t=8782e65bd0ed0a39feb8f2fdf11515f1",
        name: "王小虎",
        area:"室外",
        Parkable:"20",
        location:"广东省 深圳市 南山区",
        switch: false,
        set:"",
      },
    ],
}
let data2 ={
  tableData: [
    {
      username:"停车场",
      truename: "qewqwe",
      order: "王小虎",
      illegalmaney:"室外",
      authentication:"20",
      carlicense:"广东省 深圳市 南山区",
      set:"",
    },
    ],
}
// 获取表格数据
export  function getList(prome){
    if(prome.url=='getTableDate'){
      return Promise.resolve(data2)
    }
    return Promise.resolve(data)
    // return service.request({
    //     method:prome.method || "post",
    //     url:process.env.VUE_APP_API_URL+prome.url,
    //     data:prome.data||{}
    // })
}
export{requestUrl}