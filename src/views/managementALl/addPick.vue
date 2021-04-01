<template>
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
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  name: "addPick",
  setup(props) {
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
    return {
      formItem,
      radio,
      onSubmit,
      change
    };
  }
};
</script>
<style scoped lang="scss">
.witchPx {
  width: 300px;
}
</style>