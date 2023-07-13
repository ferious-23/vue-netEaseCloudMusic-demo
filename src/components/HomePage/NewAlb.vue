<template>
  <div class="new-alb">
    <!-- 新碟速递 -->
    <div class="new-alb-text">
      <div>新碟速递</div>
      <div class="show-more">查看更多></div>
    </div>
    <van-swipe :loop="false" :width="120" :show-indicators="false"
               class="new-alb-content">
      <van-swipe-item v-for="index in state.albums" :key="index" class="new-alb-content-item">
        <img :src="index.picUrl" class="new-alb-content-item-img"/>
        <div class="new-alb-content-item-text">
          {{ index.name }}
        </div>
        <div class="new-alb-content-item-count">
          {{ index.size }}单曲
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {reactive, onMounted} from 'vue';
import {getNewAlb} from '@/api/home'

export default {
  setup() {
    const state = reactive({
      //存放请求到的新歌速递对象
      albums: {},
    });
    onMounted(async () => {
      let res = await getNewAlb();
      state.albums = res.data.albums;
      console.log(`新歌速递`, res);
    });
    return {state}
  }

}
</script>

<style lang="less" scoped>
.new-alb {
  width: 97%;
  height: 5rem;
  margin: 0.2rem 0.1rem;
  border-radius: var(--radius);
  overflow: hidden;
  //给播放栏让位
  margin-bottom: 2rem;
  margin-top: .4rem;
  padding: .4rem 0rem;

  .new-alb-text {
    font-size: .6rem;
    font-weight: 900;
    padding-bottom: .5rem;
    padding-left: .25rem;
    display: flex;
    justify-content: space-between;

    .show-more {
      color: var(--font-color-light-60);
      background: var(--color-white-10);
      backdrop-filter: blur(var(--blur-medium));
      -webkit-backdrop-filter: blur(var(--blur-medium));
      text-align: center;
      font-size: .4rem;
      border: 1px solid rgba(12, 12, 12, .1);
      border-radius: 20px;
      padding: .125rem .1rem;
      line-height: .35rem;
      font-weight: normal;
    }
  }

  .new-alb-content {
    width: 300%;
    overflow: hidden;

    .new-alb-content-item {
      margin: 0rem .2rem;

      .new-alb-content-item-img {
        width: 3rem;
        height: 3rem;
        border-radius: calc(var(--radius) / 2);
      }

      .new-alb-content-item-text {
        margin: 10px 0px;
        height: 60px;
        width: 120px;
        font-size: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .new-alb-content-item-count {
        position: absolute;
        top: 2.4rem;
        left: .2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.04rem;
        border-radius: var(--radius);
        background: var(--color-white-60);
        backdrop-filter: blur(calc(var(--blur-medium) / 6));
        -webkit-backdrop-filter: blur(calc(var(--blur-medium) / 6));
        font-size: .32rem;
        color: var(--color-black-80);
      }

    }
  }
}
</style>