<template>
  <el-form ref="form" :model="form" label-width="180px">
    <el-form-item label="停车场名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="可停放车辆">
      <el-input v-model="form.num"></el-input>
    </el-form-item>
    <el-form-item label="禁启用">
      <el-radio-group v-model="form.switft">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "addPick",
  setup(props) {
    const form = reactive({
      name: "",
      region: "",
      switft:"",
      resource: "",
      num: ""
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    return {
      form,
      onSubmit
    };
  }
};
</script>
<style scoped lang="scss">
</style>