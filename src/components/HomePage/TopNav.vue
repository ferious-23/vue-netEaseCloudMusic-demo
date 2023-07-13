<template>
	<nav class="top-nav">
		<div class="top-nav-icon">
			<img :src="require('@/assets/static/images/Normal/more.png')" class="top-nav-img" />
		</div>
		<div class="top-nav-text">
			<span class="top-nav-text-active">发现</span>
			<span>视频</span>
			<span>云村</span>
			<span @click="$router.push('/my')">我的</span>
		</div>
		<div class="top-nav-icon">
			<img :src="require('@/assets/static/images/Normal/search.png')" class="top-nav-img"
				@click="$router.push('/search')" />
		</div>
	</nav>
</template>

<script>

</script>

<style lang="less" scoped>
.top-nav {
	position: fixed;
	background-color: var(--main-nav-color-light);
	backdrop-filter: blur(var(--blur-medium));
	-webkit-backdrop-filter: blur(var(--blur-medium));
	display: flex;
	width: 100%;
	height: 1rem;
	padding: 0.2rem;
	justify-content: space-around;
	align-items: center;

	.top-nav-text {
		width: 65%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: .5rem;

		.top-nav-text-active {
			font-weight: 900;
			color: var(--theme-color);
		}
	}


	.top-nav-img {
		width: 1rem;
		height: 1rem;
		justify-content: space-around;
		align-items: center;
	}
}
</style>