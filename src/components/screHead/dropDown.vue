<template>
  <el-select
    v-model="valueData"
    :placeholder="downConfig.placeholder"
    @change="change"
  >
    <template v-for="item in downConfig.option" :key="item.value">
      <el-option :label="item.label" :value="item.value"></el-option>
    </template>
  </el-select>
</template>
<script>
import { reactive, getCurrentInstance, ref, onMounted } from "vue";
export default {
  emits:['update:downVal'],
  props: {
    downItem: {
      type: Object,
      default: () => {}
    },
  },
  setup(props) {
    const downConfig = reactive({
      placeholder: "",
      option: []
    });
    const { proxy } = getCurrentInstance();
    const valueData = ref("");
    const configData = () => {
      if (props.downItem) {
        let datas = props.downItem;
        for(let key in datas ){
               downConfig[key]=datas[key]
        }
      }
    };
    const change = val => {
    proxy.$emit("update:downVal", val);
      console.log(val);
    };
    onMounted(() => {
      configData();
    });
    return { change, valueData, downConfig, configData };
  }
};
</script>
<style lang="scss" >

</style>