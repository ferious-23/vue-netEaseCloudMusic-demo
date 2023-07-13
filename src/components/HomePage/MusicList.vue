<template>
  <div class="music-list">
    <div class="music-list-text">
      <div class="recommend">推荐歌单</div>
      <div class="show-more">查看更多></div>
    </div>
    <div class="music-list-content">
      <van-swipe :loop="false" :width="120" :show-indicators="false" class="music-list-content-swipe">
        <van-swipe-item v-for="item in state.musicList" :key="item" class="music-list-content-swipe-item">
          <router-link :to="{
            path: '/musicListDetalis', query: { id: item.id }
          }">
            <img :src="item.picUrl" />
            <div class="play-count">
              <img :src="require('@/assets/static/images/Disabled/playCount.png')" class="play-count-icon" />
              <span class="play-count-number">
                {{ clipNumbers(item.playCount) }}
              </span>
            </div>
            <div class="music-list-title">{{ item.name }}</div>
          </router-link>
        </van-swipe-item>

      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getRecommendMusicList } from '@/api/home';
import { reactive, onMounted } from 'vue';

export default {
  setup() {
    const state = reactive({
      //用于存放请求到的歌单对象
      musicList: {},
    });
    //裁剪数字 (展示播放量等需要展示大数量级数字时用)
    //亿以上数字->x.x亿 万以上数字->x.x万 万以下数字->不裁剪
    function clipNumbers(num) {
      if (num >= 1e+8) {
        //console.log(num + '亿');
        return num = (num / 1e+8).toFixed(1) + '亿';
      } else if (num >= 1e+4) {
        //console.log(num + '万');
        return num = (num / 1e+4).toFixed(1) + '万';
      } else {
        return num;
      }
    }

    onMounted(async () => {
      let res = await getRecommendMusicList();
      state.musicList = res.data.result;
      console.log("首页推荐歌单数据已经获取", res);
    });
    return { state, clipNumbers };
  },
}
</script>

<style lang="less" scoped>
.music-list {
  width: 100%;
  height: 5rem;
  padding: .2rem;

  .music-list-text {
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;

    .recommend {
      font-size: .6rem;
      font-weight: 900;
      padding-left: .2rem;

    }

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
      margin-right: .5rem;

    }
  }

  .music-list-content {
    height: 5rem;

    .music-list-content-swipe {
      height: 100%;

      .music-list-content-swipe-item {

        margin: .2rem;
        border-radius: calc(var(--radius) / 2);
      }

      img {
        width: 3rem;
        height: 3rem;
        border-radius: calc(var(--radius) / 2);
      }

      .play-count {
        position: absolute;
        top: .2rem;
        left: .2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.04rem;
        border-radius: var(--radius);
        background: var(--color-white-60);
        backdrop-filter: blur(calc(var(--blur-medium) / 6));
        -webkit-backdrop-filter: blur(calc(var(--blur-medium) / 6));

        .play-count-icon {
          display: flex;
          height: .4rem;
          width: .4rem;
        }

        .play-count-number {
          display: flex;
          font-size: .32rem;
          color: var(--color-black-60);
        }
      }

      .music-list-title {
        margin: 10px 0px;
        height: 60px;
        width: 120px;
        font-size: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;


      }
    }
  }

}

@media (prefers-color-scheme: dark) {}
</style>