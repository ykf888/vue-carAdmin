<template>
  <el-dialog
    title="提示"
    v-model="addDialog"
    width="50%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="formItem.item" label-width="180px">
      <el-form-item label="停车场名称">
        <el-input v-model="formItem.item.name" class="witchPx"></el-input>
      </el-form-item>
      <el-form-item label="区域">
        <el-select v-model="formItem.item.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="formItem.item.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="可停放车辆">
        <el-input v-model="formItem.item.num" class="witchPx"></el-input>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="formItem.item.switft" @change="change">
          <el-radio label="123"></el-radio>
          <el-radio label="321"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="create"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { reactive, ref, getCurrentInstance } from "vue";
export default {
  emits: ["update:addDialog"],
  props: {
    addDialog: {
      type: Boolean,
      default: false
    }
  },
  name: "addPick",
  setup(props) {
    const { proxy } = getCurrentInstance();
    const radio = ref(3);
    const formItem = reactive({
      item: {
        name: "",
        region: "",
        switft: "",
        resource: "",
        num: ""
      }
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    const change = val => {
      console.log(val);
    };
    const dialogShut =()=>{
      proxy.$emit("update:addDialog", false);
    }
    const handleClose = () => {
      dialogShut()
    };
    //确定按钮
    const create=()=>{
      dialogShut()
    }
    //取消按钮
    const cancel=()=>{
      dialogShut()
    }
    return {
      formItem,
      radio,
      onSubmit,
      change,
      handleClose,create,cancel
    };
  }
};
</script>
<style scoped lang="scss">
.witchPx {
  width: 300px;
}
</style>