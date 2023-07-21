<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span class="card-title">子图</span>
        <el-button class="button" :icon="MoreFilled"></el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ '子图模板 ' + o }}</div>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-card__header {
  border-bottom: 1px solid rgb(42, 42, 42);
}

.text {
  font-size: 14px;
  color: #CFD3DC;
}

.card-title {
  color: #CFD3DC;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  /* width: 480px; */
  background-color: transparent;
  border: none;
}

</style>

<script setup>

import {
		ArrowLeft,
  	ArrowRight,
  	Delete,
  	Edit,
  	Share,
		Document,
		Folder,
		Files,
		Search,
		Setting,
		HomeFilled,
    MoreFilled
} from '@element-plus/icons-vue'

</script>