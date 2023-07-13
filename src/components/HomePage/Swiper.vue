<template>
  <van-swipe :autoplay="6000" lazy-render indicator-color="#DD3A31">
    <van-swipe-item v-for="image in state.images" :key="image">
      <img :src="image.pic"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import {getBanner} from '@/api/home';
import {reactive, onMounted} from 'vue';

export default {
  //vue3官方给的方法 具体怎么是实现我也不懂
  setup() {
    const state = reactive({
      //用于存放请求到的图片数组
      images: {},
    });
    //采用异步请求 async await.
    onMounted(async () => {
      let res = await getBanner();
      state.images = res.data.banners;
      //已调试完毕 clg按需打开
      //console.log(res);
      console.log("首页轮播图数据已经获取state images[] ->", state.images);
    });
    return {state};
  },
}

</script>

<style lang="less" scoped>
.van-swipe {
  width: 97%;
  margin: 0.2rem 0.1rem;
  border-radius: var(--radius);
  overflow: hidden;
  margin-top: 1.5rem;


  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>