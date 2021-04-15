<template>
  <el-form ref="form" :model="addCarFrom.fromVal" label-width="80px">
    <el-form-item label="车辆品牌">
      <FromHead
        :downItem="addCarFrom.downItem.brand"
        v-model:downVal="addCarFrom.fromVal.brand"
      />
    </el-form-item>
    <el-form-item label="车辆型号">
      <FromHead
        :downItem="addCarFrom.downItem.model"
        v-model:downVal="addCarFrom.fromVal.model"
      />
    </el-form-item>
    <el-form-item label="停车场">
      <FromHead
        :downItem="addCarFrom.downItem.parking"
        v-model:downVal="addCarFrom.fromVal.parking"
      />
    </el-form-item>
    <el-form-item label="车牌号">
      <InputVue placeholder="" v-model:inputDat="addCarFrom.fromVal.carCode" />
    </el-form-item>
    <el-form-item label="年检">
      <el-radio-group v-model="addCarFrom.fromVal.inspection">
        <el-radio label="yijian">已检</el-radio>
        <el-radio label="weijian">未检</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="能源类型">
      <el-radio-group v-model="addCarFrom.fromVal.energyType">
        <el-radio label="dian">电</el-radio>
        <el-radio label="you">油</el-radio>
      </el-radio-group>
      <div
        class="percentageBox"
        v-show="addCarFrom.fromVal.energyType == 'dian'"
      >
        <span>电：</span>
        <div class="percentage">
          <el-progress :percentage="50"></el-progress>
        </div>
      </div>
      <div
        class="percentageBox"
        v-show="addCarFrom.fromVal.energyType == 'you'"
      >
        <span>油：</span>
        <div class="percentage">
          <el-progress :percentage="50"></el-progress>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="车辆属性">
      <div
        class="carsAttribute"
        v-for="domain in addCarFrom.fromVal.dynamicValidateForm.domains"
        :key="domain.index"
      >
        <template v-for="obj in domain.items" :key="obj.value">
          <el-form-item :label="obj.name">
            <InputVue :placeholder="obj.name" v-model:inputDat="obj.value" />
          </el-form-item>
        </template>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </div>
      <el-button @click="addDomain()">新增域名</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import FromHead from "@c/screHead/dropDown";
import InputVue from "@c/screHead/inputVue";
import { reactive, getCurrentInstance } from "vue/";
export default {
  components: { FromHead, InputVue },
  setup() {
    const { proxy } = getCurrentInstance();
    const addCarFrom = reactive({
      downItem: {
        brand: {
          placeholder: "车辆品牌",
          option: [
            {
              label: "福特",
              value: "fute"
            },
            {
              label: "红旗",
              value: "honq"
            },
            {
              label: "奔驰",
              value: "benc"
            },
            {
              label: "宝马",
              value: "bm"
            },
            {
              label: "五菱宏光",
              value: "wulin"
            },
            {
              label: "林肯",
              value: "link"
            }
          ]
        },
        model: {
          placeholder: "选择车辆型号",
          option: [
            {
              label: "领克03+",
              value: "lk03+"
            }
          ]
        },
        parking: {
          placeholder: "选择停车场",
          option: [
            {
              label: "停车场001",
              value: "picking01"
            }
          ]
        }
      },
      fromVal: {
        brand: "",
        model: "",
        parking: "",
        carCode: "",
        inspection: "",
        energyType: "",
        dynamicValidateForm: {
          domains: [
            {
              index: "",
              items: [
                {
                  name: "厂家",
                  value: "",
                  key: ""
                },
                {
                  name: "级别",
                  value: "",
                  key: ""
                },
                {
                  name: "级别",
                  value: "",
                  key: ""
                },
                {
                  name: "级别",
                  value: "",
                  key: ""
                },
                {
                  name: "级别",
                  value: "",
                  key: ""
                }
              ]
            }
          ],
          email: ""
        }
      }
    });
    const onSubmit = () => {
      console.log(addCarFrom.fromVal);
    };
    const addDomain = index => {
      let data = {
        index: "",
        items: [
          {
            name: "厂家",
            value: "",
            key: ""
          },
          {
            name: "级别",
            value: "",
            key: ""
          },
          {
            name: "级别",
            value: "",
            key: ""
          },
          {
            name: "级别",
            value: "",
            key: ""
          },
          {
            name: "级别",
            value: "",
            key: ""
          }
        ]
      };
      addCarFrom.fromVal.dynamicValidateForm.domains.push(data);
    };
    const removeDomain = item => {
      var index = addCarFrom.fromVal.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        addCarFrom.fromVal.dynamicValidateForm.domains.splice(index, 1);
      }
    };
    return {
      addCarFrom,
      onSubmit,
      addDomain,
      removeDomain
    };
  }
};
</script>
<style lang="scss">
.percentageBox {
  display: flex;
  align-items: center;
  .percentage {
    width: 400px;
  }
}
.carsAttribute {
  display: flex;
  .el-form-item__label {
    width: 60px !important;
  }
  .el-input {
    width: 140px;
  }
  .el-form-item {
    width: 20%;
  }
}
</style>