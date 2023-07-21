<script setup>
import { ref } from 'vue'
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
		HomeFilled
} from '@element-plus/icons-vue'

const emit = defineEmits(['activeIndex'])

const active_index = ref(-1)

const wtf = (index) => {
	if (active_index.value == index){
		active_index.value = -1
	}
	else {
		active_index.value = index
	}
	emit('activeIndex', active_index.value)
	// console.log('current index is ' + active_index.value)
}

const items2 = [
	{icons: HomeFilled, linkto: "home-view"},
	{icons: Files, linkto: "subnet-view"},
	{icons: Search, linkto: "search-view"},
	{icons: Setting, linkto: "settings-view"}
]

</script>

<template>
	<aside :class="''">
		<div class="menu">
			<span v-for="(item, index) in items2">
				<router-link :to="item.linkto">
                	<el-button type="" 
						:class="active_index == index ? 'button-checked-style' : 'button-normal-style'"
						:icon=item.icons
						@click.native="wtf(index)">
                	</el-button>
				</router-link>
			</span>
		</div>
	</aside>
</template>



<style lang="scss" scoped>

.button-normal-style {
	color: rgb(134, 134, 134);
	border-left: 2px solid transparent;
}

.button-normal-style:focus {
	color: rgb(134, 134, 134);			//虽然已经点击切回normal了，但其实还是有可能是focus状态。
	border-left: 2px solid transparent;
}

.button-normal-style:hover {
	color: white;
	border-left: 2px solid transparent;
}

.button-checked-style, .button-checked-style:focus {
	color: white;
	border-left: 2px solid rgb(0, 121, 212);
}

.button-checked-style:hover {
	color: white;
	border-left: 2px solid rgb(0, 121, 212);
}

.el-button {
	--el-button-bg-color: none;
	--el-button-hover-bg-color: none;
	--el-button-active-bg-color: none;

	display: flex;
	text-decoration: none;

	transition: 0.1s ease-in-out;
	border-right: 2px;
	border-top: 2px;
	border-bottom: 2px;
    border-radius: 0px;
    width: 50px;
    height: 50px;

	font-size: 1.8rem;
}

aside {
	display: flex;
	flex-direction: column;

	// background-color: var(--dark);

	overflow: hidden;
	min-height: 100vh;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}
}

</style>

