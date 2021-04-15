<template>
  <el-form
    :inline="true"
    :model="tableCofige.fromHead"
    class="demo-form-inline"
    ref="headFrom"
  >
    <el-form-item label="车辆品牌">
      <el-cascader
        placeholder="区域"
        v-model="downItem.areaDate.value"
        :options="downItem.areaDate.options"
        @change="handleChange"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="品牌型号">
      <InputVue placeholder="" v-model:inputDat="downItem.fromVal.input" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('headFrom')">查询</el-button>
    </el-form-item>
  </el-form>
  <div class="addBtn">
    <el-button type="primary" @click="dialogItem.dialogVisible = true"
      >新增</el-button
    >
  </div>
  <vueTable :tableCofige="tableCofige">
    <template v-slot:swith="data">
      <el-switch
        v-model="data.data.switch"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </template>
  
    <template v-slot:slotLogo="data">
      <img :src="data.data.logo" alt="" class="tabLogo">
    </template>
    <template v-slot:operation="">
      <el-button type="text">编辑</el-button>
      <el-button type="text">删除</el-button>
    </template>
  </vueTable>
 <Brandadd v-model:dialogVisible="dialogItem.dialogVisible"/>
</template>
<script>
import vueTable from "@c/vueTable";
import { reactive, getCurrentInstance, onMounted } from "vue";
import FromHead from "@c/screHead/dropDown";
import InputVue from "@c/screHead/inputVue";
import Brandadd from "./brandAdd";
import { cityPicker } from "@/api/getlist";
export default {
  components: { vueTable, FromHead, InputVue,Brandadd },
  name: "parkingLot",
  setup(props) {
    const { proxy } = getCurrentInstance();
    const dialogItem = reactive({
      dialogVisible: false
    });
    const downItem = reactive({
      fromVal: {
        type: "",
        keyword: "",
        input: "",
        open: ""
      },
      areaDate: {
        value: "",
        props: { expandTrigger: "hover" },
        options: [
          {
            value: "shejiyuanze",
            label: "设计原则",
            children: [
              {
                value: "yizhi",
                label: "一致"
              },
              {
                value: "fankui",
                label: "反馈"
              },
              {
                value: "xiaolv",
                label: "效率"
              },
              {
                value: "kekong",
                label: "可控"
              }
            ]
          }
        ]
      },
      type: {
        placeholder: "场地筛选",
        option: [
          {
            label: "室外",
            value: "out"
          },
          {
            label: "室内",
            value: "indoor"
          }
        ]
      },
      keyword: {
        val: "",
        placeholder: "搜索关键字",
        option: [
          {
            label: "停车场",
            value: "parking"
          },
          {
            label: "区域",
            value: "area"
          }
        ]
      }
    });
    const downValue = reactive({
      type: ""
    });
    const tableCofige = reactive({
      fromHead: {
        area: ""
      },
      tabHead: [
        {
          prop: "logo",
          label: "logo",
          slot: "slot",
          slotName: "slotLogo"
        },
        {
          prop: "name",
          label: "车辆品牌"
        },
        {
          prop: "area",
          label: "品牌型号"
        },
        {
          prop: "switch",
          label: "状态(禁/启用)",
          slot: "slot",
          slotName: "swith"
        },
        {
          prop: "set",
          label: "操作",
          slot: "slot",
          slotName: "operation"
        }
      ],
      requestDate: {
        taburl: "getTableDate",
        method: "post"
      },
      selection: true
    });
    const onSubmit = formName => {
      console.log(downItem.fromVal);
    };
    const handleChange = value => {
      console.log(value);
    };
    onMounted(() => {});
    return {
      tableCofige,
      downItem,
      downValue,
      onSubmit,
      handleChange,
      dialogItem,
    };
  }
};
</script>
<style scoped lang="scss">
.tabLogo{
  width: 40px;
}
</style>