import { createRouter, createWebHashHistory } from "vue-router";
import login from "../views/acount/login";
import layout from "../views/layout"
// import i18n from "@/language/index.js"
import{remove_token,remove_tusername,get_token}from"@/kit/cookieData"
import "./premin"
// const t =(val)=>{
//   return i18n.global.t(val)
// }
const routes = [
  {
    path: "/",
    name: "Home",
    redirect:"login",
    meta:{
      hidden:true,
      name:"主页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta:{
      hidden:true,
      name:"登陆"
    }
  },
  {
    path: "/registered",
    name: "registered",
    meta:{
      hidden:true,
      name:"注册"
    },
    component: () =>import( "../views/acount/registered.vue")
  },
  {
    path: "/forgotPasd",
    name: "forgotPasd",
    meta:{
      hidden:true,
      name:"忘记密码",

    },
    component: () =>import( "../views/acount/forgotPasd.vue")
  },
  {
    path: "/index",
    name: "index",
    redirect:"home",
    component:layout,
    meta:{
      name:'首页',
      icon:"icon-yibiaopan"
    },
    children:[
      {
        path: "/home",
        name: "home",
        meta:{
          name:'首页',
        },
        component: () =>import( "../views/home")
      }
    ]
  },
  {
    path: "/managementALl",
    name: "managementALl",
    component:layout,
    redirect:"parkingLot",
    meta:{
      icon:"icon-icon-test30",
      name:'停车场',
    },
    children:[
      {
        path: "/parkingLot",
        name: "Role",
        meta:{
          name:'停车场',
        },
        component: () =>import( "../views/managementALl/parkingLot"),
      },
    ]
  },
  {
    path: "/carManage",
    name: "carManage",
    component:layout,
    redirect:"carList",
    meta:{
      icon:"icon-icon-test30",
      name:"车辆管理",
    },
    children:[
      {
        path: "/carList",
        name: "carList",
        meta:{
          name:"车辆列表",
        },
        component: () =>import( "../views/carManage/carList"),
      },
      {
        path: "/addCar",
        name: "addCar",
        meta:{
          name:"新增车辆",
        },
        component: () =>import( "../views/carManage/addCar"),
      },
      {
        path: "/carAttribute",
        name: "carAttribute",
        meta:{
          name:"车辆属性",
        },
        component: () =>import( "../views/carManage/carAttribute"),
      },
    ]
  },
  {
    path: "/brandCar",
    name: "brandCar",
    component:layout,
    redirect:"brandList",
    meta:{
      icon:"icon-icon-test30",
      name:"车辆品牌",
    },
    children:[
      {
        path: "/brandList",
        name: "brandList",
        meta:{
          name:"车辆品牌",
        },
        component: () =>import( "../views/brandCar/brandList"),
      },

    ]
  },
  {
    path: "/user",
    name: "user",
    component:layout,
    redirect:"userList",
    meta:{
      icon:"icon-icon-test30",
      name:"用户管理",
    },
    children:[
      {
        path: "/userList",
        name: "userList",
        meta:{
          name:"用户列表",
        },
        component: () =>import( "../views/user/userList"),
      },{
        path: "/userEditor",
        name: "userEditor",
        meta:{
          name:"用户编辑",
        },
        component: () =>import( "../views/user/userEditor"),
      },
      {
        path: "/userDetails",
        name: "userDetails",
        meta:{
          name:"用户详情",
        },
        component: () =>import( "../views/user/userDetails"),
      },

    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const whiterouter=['/login']
router.beforeEach((to,from,netx)=>{
  if (get_token()) {
    if (to.path==='/login') {
      remove_token()
      remove_tusername()
    }
    netx()
  }else{
    if (whiterouter.indexOf(to.path)!==-1) {
      netx()
    }else{
      netx('/login')
    }
  }
})

export default router;
