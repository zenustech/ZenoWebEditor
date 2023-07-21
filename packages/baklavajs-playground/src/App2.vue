<template>
	<div class="app">
		<!-- Sidebar -->

		<Sidebar2 @active-index="wtf2"/>

		<div class="nav-line"></div>

		<splitpanes vertical class="editorsplitpanes">
			<pane :size="panelsize">
				<router-view />
			</pane>
			<pane>
				<span>2</span>
			</pane>
		</splitpanes>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Sidebar2 from '../components/Sidebar2.vue'
import { Splitpanes, Pane } from 'splitpanes';

const panelsize = ref(30);

const wtf2 = (index) => {
	if (index == -1) {
		panelsize.value = 0;
	} else {
		panelsize.value = 30;
	}
	console.log("App.vue: index is " + index)
}

</script>

<style lang="scss">
:root {
	--primary: rgb(0, 120, 212);
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
	--line-color: rgb(42, 42, 42);
	--panel-background: rgb(21, 21, 21);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--panel-background);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

.nav-line {
	width: 1px;
    height: unset;
    border-left: 1px solid var(--line-color);
    position: relative;
}

.editorsplitpanes {
	background-color: var(--panel-background);
	height: unset !important;
}

.splitpanes__splitter {
	background-color: var(--line-color);
	position: relative;
}

.splitpanes__splitter:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.1s;
  background-color: var(--primary);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {opacity: 1;}
.splitpanes--vertical > .splitpanes__splitter:before {left: -2.5px;right: -2.5px; height: 100%;}
.splitpanes--horizontal > .splitpanes__splitter:before {top: -2.5px;bottom: -2.5px; width: 100%;}

</style>