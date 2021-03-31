<template>
  <el-form
    :inline="true"
    :model="tableCofige.fromHead"
    class="demo-form-inline"
  >
    <el-form-item label="类型">
      <FromHead :downItem="downItem"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
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
import { reactive } from "vue";
import FromHead from "@c/screHead/dropDown";
export default {
  components: { vueTable, FromHead },
  name: "role",
  setup(props) {
    const downItem = reactive({
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
    });
    const downValue =reactive({
      type:""
    })
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
    const onSubmit = () => {
      console.log(formInline);
    };
    return {
      tableCofige,downItem,downValue,
      onSubmit
    };
  }
};
</script>
<style scoped lang="scss">
</style>