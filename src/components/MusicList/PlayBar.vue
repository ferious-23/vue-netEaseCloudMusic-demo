<template>
  <div class="play-bar container">
    <div class="play-bar">
      <div class="play-bar-content" @click="updateIsDetailShow">
        <img :src="playList[playListIndex].al.picUrl" class="play-bar-content-img"/>
        <div class="play-bar-content-text">
          {{ playList[playListIndex].name }}
        </div>
      </div>
      <div class="play-bar-control">
        <!-- <img :src="require('@/assets/static/images/Normal/previousSong.png')" class="play-bar-control-img" /> -->
        <img :src="require('@/assets/static/images/Normal/pause.png')" class="play-bar-control-img"
             @click="playEvent" v-if="isPauseShow"/>
        <img :src="require('@/assets/static/images/Normal/play.png')" class="play-bar-control-img"
             @click="playEvent" v-else/>
        <!-- <img :src="require('@/assets/static/images/Normal/nextSong.png')" class="play-bar-control-img" /> -->
      </div>
    </div>
  </div>

  <audio :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`" controls ref="audio">
    <!-- ref属性用于注册引用信息 -->
  </audio>
  <van-popup v-model:show="isDetailShow" round position="bottom"
             :style="{ height: '100%', width: '100%', overflow: 'hidden' }">
    <MusicDetail :music="playList[playListIndex]" :playEvent="playEvent" :isPauseShow="isPauseShow"/>
  </van-popup>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import MusicDetail from '@/components/Global/MusicDetail.vue';

export default {
  //vue2 vue3 混用 问就是我需要用this指针
  computed: {
    ...mapState(['playList', 'playListIndex', 'isPauseShow', 'isDetailShow']),
  },
  mounted() {
    // 看看audio的ref属性获取否？
    //console.log(`audio标签获取否`, this.$refs);
  },
  methods: {

    playEvent: function () {
      try {
        console.log("已经切换了播放控件按钮状态", this.playEvent)
        //判断音乐是否播放

        if (this.$refs.audio.paused === true) {
          this.$refs.audio.play();
          this.updateIsPauseShow(true);
        } else {
          this.$refs.audio.pause();
          this.updateIsPauseShow(false);
        }
      } catch (err) {
        console.log("TMD跨域了");
        alert(err.message);
      }


    },

    ...mapMutations(['updateIsPauseShow', 'updateIsDetailShow']),
  },
  components: {
    MusicDetail,
  }

}
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  z-index: 100;
  bottom: .3rem;
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;


  .play-bar {
    width: 95%;
    height: 1.6rem;
    background: var(--color-black-10);
    -webkit-backdrop-filter: blur(calc(var(--blur-medium) * 1.5));
    backdrop-filter: blur(calc(var(--blur-medium) * 1.125));
    border-radius: calc(var(--radius) * 0.75);
    box-shadow: rgba(0, 0, 0, 0.15) 1rem .4rem 1rem .2rem;
    //弹性布局
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .play-bar-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .play-bar-content-img {
        margin-left: 0.2rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: calc(var(--radius) * 0.5);
      }

      .play-bar-content-text {
        width: 100%;
        margin-left: 0.2rem;
        font-size: .5rem;

      }
    }


    .play-bar-control {
      display: flex;
      flex-direction: row;
      opacity: .6;
      margin-right: .2rem;

      .play-bar-control-img {

        width: 1rem;
        height: 1rem;
      }

    }
  }
}


audio {
  position: fixed;
  display: block;
  top: 14rem;
  left: 1rem;
  opacity: 0;


}
</style>