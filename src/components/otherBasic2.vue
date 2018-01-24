<template>
  <div id="otherBasic2">
    <h3>Switch</h3>
    <div>
      <el-switch
        v-model="value3"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </div>
    <h3>Slider</h3>
    <div style="width: 60%">
      <el-slider v-model="value2"></el-slider>
    </div>
    <h3>Upload-img</h3>
    <div>
      <el-upload
        action="./img/user-photo.jpg"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  <h3>Rate </h3>
    <div>
      <el-rate
        v-model="value4"
        show-text>
      </el-rate>
    </div>

    <h3>Transfer </h3>
    <div>
      <el-transfer
        v-model="value5"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"
        @change="handleChange"
        :data="data">
        <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>

    </div>
  </div>
</template>
<script>
  export default{
    name: 'otherBasic2',
    data(){
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };


      return {
        value3: true,
        value2: 50,
        dialogImageUrl: '',
        dialogVisible: false,
        value4:4,
        data: generateData(),
        value5: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  }
</script>
<style scoped>
</style>
