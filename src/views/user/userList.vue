<template>
  <el-form
    :inline="true"
    :model="data.fromValue"
    class="demo-form-inline"
    ref="headFrom"
  >
    <el-form-item label="关键字">
      <FromHead
        :downItem="data.fromConf.keyword"
        v-model:downVal="data.fromValue.keyword"
      />
    </el-form-item>
    <el-form-item label="车牌号">
      <InputVue placeholder="" v-model:inputDat="data.fromValue.value" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary">搜索</el-button>
    </el-form-item>
  </el-form>
  <VueTable :tableCofige="data.tableCofige" >
    <template v-slot:setBox="">
      <el-button type="text">编辑</el-button>
      <el-button type="text">删除</el-button>
    </template>
  </VueTable>
</template>
<script>
import { reactive } from "@vue/reactivity";
import FromHead from "@c/screHead/dropDown";
import InputVue from "@c/screHead/inputVue";
import VueTable from "@c/vueTable";
export default {
  components: { VueTable, FromHead, InputVue },
  setup() {
    const data = reactive({
      fromConf: {
        keyword: {
          placeholder: "关键字",
          option: [
            {
              label: "真实名称",
              value: "name"
            },
            {
              label: "身份证",
              value: "idCode"
            }
          ]
        }
      },
      fromValue: {
        keyword: "",
        value: ""
      },
      tableCofige: {
        tabHead: [
          {
            prop: "username",
            label: "用户名"
          },
          {
            prop: "truename",
            label: "真实姓名"
          },
          {
            prop: "order",
            label: "租车订单"
          },
          {
            prop: "illegalmaney",
            label: "违章预存金"
          },
          {
            prop: "authentication",
            label: "实名认证"
          },

          {
            prop: "carlicense",
            label: "驾驶证"
          },
          {
            prop: "set",
            label: "操作",
            slot: "slot",
            slotName: "setBox"
          }
        ],
        requestDate: {
          taburl: "getTableDate",
          method: "post"
        }
      }
    });

    return { data };
  }
};
</script>