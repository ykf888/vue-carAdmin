<template>
    <el-input v-model="data.input" :placeholder="placeholder" @change="change"></el-input>
</template>
<script>
import { reactive,getCurrentInstance } from 'vue'
export default {
    emits:['update:inputDat'],
    props:{
        placeholder:{
            type: String,
            default: ""
        },

    },
    setup(props,context) {
        const { proxy } = getCurrentInstance();
        const data =reactive({
            input:""
        })
        const change=(val)=>{
            proxy.$emit('update:inputDat',val)
        }
        return{
            data,change
        }
    },
}
</script>