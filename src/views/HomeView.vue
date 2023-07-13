<template>
  <div class="app">
    <TopNav/>
    <Swiper/>
    <HomeIcons/>
    <MusicList/>
    <NewAlb/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/HomePage/TopNav.vue';
import Swiper from '@/components/HomePage/Swiper.vue';
import HomeIcons from '@/components/HomePage/HomeIcons.vue';
import MusicList from '@/components/HomePage/MusicList.vue';
import NewAlb from '@/components/HomePage/NewAlb.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,   //注册组件
    Swiper,
    HomeIcons,
    MusicList,
    NewAlb,
  }
}
</script>
<style lang="less" scoped>
.app {
  overflow: hidden;

}
</style>
