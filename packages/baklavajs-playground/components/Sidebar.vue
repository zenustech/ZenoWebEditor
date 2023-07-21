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
		Search,
		Setting
} from '@element-plus/icons-vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const active_index = ref(-1)

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
const wtf = (index) => {
	if (active_index.value == index){
		active_index.value = -1
	}
	else {
		active_index.value = index
	}
	console.log('current index is ' + active_index.value)
}

const items = [
	{icons:"home", linkto:"/", text:"Home"},
	{icons:"description", linkto:"/about", text:"About"},
	{icons:"group", linkto:"/team", text:"Team"},
	{icons:"email", linkto:"/contact", text:"Contact"}
]

const items2 = [
	{icons: Document},
	{icons: Folder},
	{icons: Search},
	{icons: Setting}
]

</script>

<template>
	<aside :class="''">
		<div class="menu">
			<span v-for="(item, index) in items">
				<!-- <router-link :to="{path: item.linkto }" class="button" @click="wtf(index)">
					<span class="material-icons">{{ item.icons }}</span>
					<span class="text">{{ item.text }}</span>
				</router-link> -->
				<button :class="[index == active_index ? 'button2' : '', 'button']" @click="wtf(index)">
					<div class="material-icons">{{ item.icons }}</div>
				</button>
			</span>
		</div>
	</aside>
</template>



<style lang="scss" scoped>

aside {
	display: flex;
	flex-direction: column;

	// background-color: var(--dark);
	color: var(--light);

	// width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	// padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.icon-button-wrap {
		display: flex;
		align-items: center;
		text-decoration: none;

		transition: 0.1s ease-in-out;
		padding: 1.8rem 1.8rem 1.8rem calc(1.8rem - 2px);
		border-left: 2px solid transparent;

		font-size: 1.8rem;
		// color: rgb(139, 139, 139);
		// transition: 0.1s ease-in-out;
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		// margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.1s ease-in-out;
			padding: 0.5rem 1rem;
			border-left: 2px solid transparent;

			.material-icons {
				font-size: 2rem;
				color: rgb(139, 139, 139);
				transition: 0.1s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: white;
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}

		.button2 {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			border-left: 2px solid var(--primary);

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			.icons-checked {
				background-color: red;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>