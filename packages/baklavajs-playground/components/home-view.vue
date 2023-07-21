<template>
  <div class="custom-tree-container">
    <el-tree
      :data="dataSource"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      class="custom-tree"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          {{ node.label }}
          <!-- <span>
            <a @click="append(data)"> Append </a>
            <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
          </span> -->
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: 'main',
    children: [
      {
        id: 4,
        label: '1d68b6ab-CreateCube',
      },
      {
        id: 100,
        label: 'b25f690a-aaa',
        children: [
          {
            id: 101,
            label: '12a3f256-bbb',
            children: [
              {
                id: 100,
                label: '5fe8a14b-SubInput'
              },
              {
                id: 100,
                label: '5bf507f8-SubOutput'
              },
              {
                id: 100,
                label: '2044b485-CreateTree'
              },
              {
                id: 100,
                label: '2d6e4f22-MakeDict'
              },
              {
                id: 100,
                label: '27cdc7c1-ExtractDict'
              },
            ]
          },
          {
            id: 102,
            label: '1c60581f-bbb',
            children: [
              {
                id: 100,
                label: '5fe8a43b-SubInput'
              },
              {
                id: 100,
                label: '5bf597f8-SubOutput'
              },
              {
                id: 100,
                label: 'few44b45-CreateTree'
              },
              {
                id: 100,
                label: '676e4f22-MakeDict'
              },
              {
                id: 100,
                label: '68cdc7c1-ExtractDict'
              },
            ]
          },
          {
            id: 103,
            label: 'c6c603e6-GetFrameNum',
          },
          {
            id: 104,
            label: '2380c449-SubInput',
          },
          {
            id: 104,
            label: '409ddba5-SubOutput',
          },
          {
            id: 104,
            label: 'a48406c7-MakeList',
          },
          {
            id: 104,
            label: '7b89c9bc-MultiMakeDict',
          },
          {
            id: 104,
            label: 'aa5dd915-CreateCube',
          },
          {
            id: 104,
            label: '33ce9d9b-AllAlembicPrim',
          },

          {
            id: 104,
            label: 'fe8ce0cf-MultiMakeList',
          },
          {
            id: 104,
            label: '82fc13bc-AudioBeats',
          },
        ]
      }
    ],
  }
])
</script>

<style>

.custom-tree {
  background-color: transparent;
}

.el-tree {
  --el-tree-node-hover-bg-color: rgb(42, 45, 46);
}


.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  color:#A3A6AD;
  /* font-family: 'Arial' !important; */
  font-family:"Microsoft YaHei";
}

.custom-tree-node:hover {
  color:#E5EAF3;
}

</style>