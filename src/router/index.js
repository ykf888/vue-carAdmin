import { createRouter, createWebHashHistory } from "vue-router";
import login from "../views/acount/login";
import layout from "../views/layout"
import i18n from "@/language/index.js"
import{remove_token,remove_tusername,get_token}from"@/kit/cookieData"
import "./premin"
const t =(val)=>{
  return i18n.global.t(val)
}
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
      name:t("aside.home"),
      icon:"icon-yibiaopan"
    },
    children:[
      {
        path: "/home",
        name: "home",
        meta:{
          name:t("aside.home"),
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
      name:t("aside.managementALl"),
    },
    children:[
      {
        path: "/parkingLot",
        name: "Role",
        meta:{
          name:t("aside.parkingLot"),
        },
        component: () =>import( "../views/managementALl/parkingLot"),
      },
      {
        path: "/addPick",
        name: "addPick",
        meta:{
          name:t("aside.addPick"),
        },
        component: () =>import( "../views/managementALl/addPick"),

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
          name:"品牌列表",
        },
        component: () =>import( "../views/brandCar/brandList"),
      },
      {
        path: "/brandAdd",
        name: "brandAdd",
        meta:{
          name:"新增品牌",
        },
        component: () =>import( "../views/brandCar/brandAdd"),
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
