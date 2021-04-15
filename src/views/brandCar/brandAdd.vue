<template>
  <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="50%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="brandAdd" label-width="80px">
      <el-form-item label="车辆品牌">
        <el-input v-model="brandAdd.brand"></el-input>
      </el-form-item>
      <el-form-item label="品牌型号">
        <el-input v-model="brandAdd.model"></el-input>
      </el-form-item>
      <el-form-item label="LOGO">
        <div class="logoBox">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="brandAdd.imageUrl"
              :src="brandAdd.imageUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="otherBox">
            <ul>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
              <li><img :src="brandAdd.imageUrl" alt="" /></li>
            </ul>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="brandAdd.open">
          <el-radio label="禁用"></el-radio>
          <el-radio label="启用"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="brandAdd.describe"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="sumBtn">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { onMounted, reactive, ref,getCurrentInstance } from "vue";
export default {
    emits:['update:dialogVisible'],
    props:{
        dialogVisible:{
            type:Boolean,
            default:false
        }
    },
  setup(props) {
    const {proxy} =getCurrentInstance()
    const dialogType=ref("")
    const brandAdd = reactive({
      brand: "",
      model: "",
      open: "",
      describe: "",
      imageUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FcfAicxy6f3jRUQqd7Zaqk-DvnkiZm3yrm9YbpymZXbpouI64PLnDNyiI08ZHM8ZfTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621057676&t=8782e65bd0ed0a39feb8f2fdf11515f1"
    });
    //上传图片的回调
    const handleAvatarSuccess = (file, fileList) => {};
    const beforeAvatarUpload = (file, fileList) => {};
    function Offdialog(){
        proxy.$emit('update:dialogVisible',false)
    }
    const handleClose = () => {
        Offdialog()
    };
    const sumBtn=()=>{
       Offdialog()
    }
     const close=()=>{
       Offdialog()
    }
    return {
      brandAdd,
      handleAvatarSuccess,
      beforeAvatarUpload,
      handleClose,sumBtn,close
    };
  }
};
</script>
<style scoped lang="scss">
.logoBox{
  display: flex;
  .otherBox{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 60px;
        height: 60px;
        margin-left: 4px;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>