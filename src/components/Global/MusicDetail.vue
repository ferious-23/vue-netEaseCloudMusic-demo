<template>
  <div class="music">
    <div class="music-topBar" @click="updateIsDetailShow">
      <!-- 想把整个顶栏当返回键用 -->
    </div>
    <div class="music-img">
      <img :src="music.al.picUrl" class="music-img-content">
    </div>
    <div class="music-content">
      <div class="music-content-text">
        <div class="music-content-text-name">
          {{ music.name }} &nbsp;
        </div>
        <div class="music-content-text-artist">
          <div class="music-content-text-aritst-item" v-for="item, in music.ar" :key="item">
            {{ item.name }} &nbsp;
          </div>
        </div>
      </div>
      <div class="music-content-control">
        <div class="music-content-control-progressBar">
          <input type="range" min="0" max="">
        </div>
        <div class="music-content-control-icon">
          <img :src="require('@/assets/static/images/Normal/previousSong.png')"
               class="music-content-control-icon-img"/>
          <img :src="require('@/assets/static/images/Normal/pause.png')" class="music-content-control-icon-img"
               @click="playEvent" v-if="isPauseShow"/>
          <img :src="require('@/assets/static/images/Normal/play.png')" class="music-content-control-icon-img"
               @click="playEvent" v-else/>
          <img :src="require('@/assets/static/images/Normal/nextSong.png')"
               class="music-content-control-icon-img"/>
        </div>
      </div>
      <!-- <div class="music-content-lyrics"></div> -->
    </div>
    <div class="music-background">
      <img :src="music.al.picUrl" class="music-background-img">
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  mounted() {
    console.log("歌曲详情页已经从通知栏接收到歌曲参数", this.music);
  },
  props: ['music', 'playEvent', 'isPauseShow'],
  methods: {
    ...mapMutations(['updateIsDetailShow'])
  },
}

</script>

<style lang="less" scoped>
.music {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .music-topBar {
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      position: absolute;
      z-index: 20;
      content: '';
      width: 2rem;
      height: 0.2rem;
      border-radius: 1rem;
      background: var(--color-black-20);
      -webkit-backdrop-filter: blur(0.4rem);
      backdrop-filter: blur(0.4rem);

    }
  }

  .music-img {
    //10%margin给顶栏留出空间
    margin-top: 10%+15%;
    display: flex;

    .music-img-content {
      width: 7rem;
      height: 7rem;
      border-radius: calc(var(--radius) * 1.5);
    }


  }

  .music-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    height: 30%;
    margin: 2rem 0rem;

    .music-content-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;


      .music-content-text-name {
        display: flex;
        padding: 0.2rem 0rem;
      }

      .music-content-text-artist {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;


        .music-content-text-aritst-item {
          padding: 0.2rem 0rem;
          opacity: .6;
          font-size: 0.6rem;
        }
      }
    }

    .music-content-control {
      display: flex;
      flex-direction: column;
      width: 100%;

      .music-content-control-progressBar {
        width: 100%;

        input[type="range"] {
          width: 100%;
          background: var(--color-white-40);
          appearance: none;
          border: 0, 02rem slild var(--theme-color);
          border-radius: 1rem;
          outline: none;
        }
      }

      .music-content-control-icon {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: .2rem 0rem;
        opacity: .6;
        height: 2.5rem;


        .music-content-control-icon-img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    .music-content-lyrics {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 2rem;
      background: rgba(169, 169, 169, 0.1);
      backdrop-filter: blur(var(--blur-medium));
      -webkit-backdrop-filter: blur(var(--blur-medium));
      border-radius: 1rem;
    }
  }


  .music-background-img {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    filter: blur(1.4rem);
    z-index: -1;
    animation: imgRotate 100s linear infinite;
  }
}


@keyframes imgRotate {
  to {
    transform: rotate(360deg);
  }
}
</style>