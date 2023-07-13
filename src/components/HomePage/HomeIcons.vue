<template>
  <div class="icon-list">
    <div class="icon-list-item">
      <img :src="require('@/assets/static/images/ThemeColor/recommend.png')" class="icon-list-item-img">
      <span class="span">每日推荐</span>
    </div>
    <div class="icon-list-item">
      <img :src="require('@/assets/static/images/ThemeColor/broadcast.png')" class="icon-list-item-img">
      <span class="span">私人FM</span>
    </div>
    <div class="icon-list-item">
      <img :src="require('@/assets/static/images/ThemeColor/playList.png')" class="icon-list-item-img">
      <span class="span">歌单广场</span>
    </div>
    <div class="icon-list-item">
      <img :src="require('@/assets/static/images/ThemeColor/top.png')" class="icon-list-item-img">
      <span class="span">热门榜单</span>
    </div>

  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.icon-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon-list-item {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon-list-item-img {
      width: 1.2rem;
      height: 1.2rem;
    }

    .span {
      padding: .2rem 0rem;
      color: var(--font-color-light-80);
      font-size: .4rem;
    }
  }
}
</style>