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
      // {
      //   path: "/menuMangent",
      //   name: "MenuMangent",
      //   meta:{
      //     name:t("aside.menuMangent"),
      //   },
      //   component: () =>import( "../views/managementALl/menuMangent"),
      // },
    ]
  },
  // {
  //   path: "/infoMangent",
  //   name: "InfoMangent",
  //   component:layout,
  //   meta:{
  //     icon:"icon-icon-test9",
  //     name:t("aside.infoMangent"),
  //   },
  //   redirect:"infoList",
  //   children:[
  //     {
  //       path: "/infoList",
  //       name: "InfoList",
  //       meta:{
  //         name:t("aside.infoList"),
  //       },
  //       component: () =>import( "../views/infoMangent/infoList"),
  //     },
  //     {
  //       path: "/infoCategory",
  //       name: "InfoCategory",
  //       meta:{
  //         name:t("aside.infoCategory"),
  //       },
  //       component: () =>import( "../views/infoMangent/infoCategory"),
  //     }
  //   ]
  // },
  // {
  //   path: "/productMangent",
  //   name: "ProductMangent",
  //   component:layout,
  //   meta:{
  //     name:t("aside.productMangent"),
  //     icon:"icon-icon-test7",
  //   },
  //   redirect:"productList",
  //   children:[
  //     {
  //       path: "/productList",
  //       name: "ProductList",
  //       meta:{
  //         name:t("aside.productList"),
  //       },
  //       component: () =>import( "../views/productMangent/productList"),
  //     },
  //     {
  //       path: "/productCtegory",
  //       name: "ProductCtegory",
  //       meta:{
  //         name:t("aside.productCtegory"),
  //       },
  //       component: () =>import( "../views/productMangent/productCtegory"),
        
  //     }
  //   ]
  // },
  // {
  //   path: "/vipMangent",
  //   name: "VipMangent",
  //   redirect:"vipMangent",
  //   component:layout,
  //   meta:{
  //     icon:"icon-icon-test35",
  //     name:t("aside.vipMangent")
  //   },
  //   children:[
  //     {
  //       path: "/vipMangent",
  //       name: "VipMangent",
  //       component: () =>import( "../views/vipMangent"),
  //       meta:{
  //         name:t("aside.vipMangent")
  //       },
  //     }
  //   ]
  // }

  
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
