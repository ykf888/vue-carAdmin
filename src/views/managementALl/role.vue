<template>
  <el-form
    :inline="true"
    :model="tableCofige.fromHead"
    class="demo-form-inline"
    ref="headFrom"
  >
    <el-form-item label="区域">
      <el-cascader
        placeholder="区域"
        v-model="downItem.areaDate.value"
        :options="downItem.areaDate.options"
        @change="handleChange"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="类型">
      <FromHead
        :downItem="downItem.type"
        v-model:downVal="downItem.fromVal.type"
      />
    </el-form-item>
    <el-form-item label="关键字">
      <FromHead
        :downItem="downItem.keyword"
        v-model:downVal="downItem.fromVal.keyword"
      />
    </el-form-item>
    <el-form-item label="">
      <InputVue placeholder="" v-model:inputDat="downItem.fromVal.input" />
    </el-form-item>
    <el-form-item label="禁启用">
      <FromHead
        :downItem="downItem.open"
        v-model:downVal="downItem.fromVal.open"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('headFrom')">查询</el-button>
    </el-form-item>
  </el-form>
  <vueTable :tableCofige="tableCofige">
    <template v-slot:swith="data">
      <el-switch
        v-model="data.data.switch"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </template>
  </vueTable>
</template>
<script>
import vueTable from "@c/vueTable";
import { reactive, getCurrentInstance } from "vue";
import FromHead from "@c/screHead/dropDown";
import InputVue from "@c/screHead/inputVue";
export default {
  components: { vueTable, FromHead, InputVue },
  name: "role",
  setup(props) {
    const { proxy } = getCurrentInstance();
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
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致',
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          },
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
      },
      open: {
        placeholder: "开启状态",
        val: "",
        option: [
          {
            label: "启用",
            value: "open"
          },
          {
            label: "禁用",
            value: "disable"
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
          prop: "date",
          label: "停车场名称"
        },
        {
          prop: "switch",
          label: "状态(禁/启用)",
          slot: "slot",
          slotName: "swith"
        },
        {
          prop: "name",
          label: "类型"
        },
        {
          prop: "address",
          label: "区域"
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
    const handleChange=(value)=> {
        console.log(value);
      }
    return {
      tableCofige,
      downItem,
      downValue,
      onSubmit,handleChange
    };
  }
};
</script>
<style scoped lang="scss">
</style>