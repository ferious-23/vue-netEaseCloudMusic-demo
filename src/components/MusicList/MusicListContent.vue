<template>
  <div class="music-list">
    <div class="music-list-top">
      <div class="music-list-top-left">
        <img :src="require('@/assets/static/images/ThemeColor/play.png')" class="music-list-top-left-img">
        <div class="music-list-top-left-text">播放全部<span>({{ songs.length }})</span></div>
      </div>
    </div>
    <div class="music-list-item">
      <div class="music-list-item-text" v-for="(item, i) in songs" :key="i" @click="playMusic(i)">
        <!-- 同样的写法            v-for="i in songs.length" :key="i"-->
        <!-- item用于接收songs遍历来的对象？ -->
        <div class="music-list-item-text-count">
          {{ i + 1 }}
        </div>
        <div class="music-list-item-text-song">
          <div class="music-list-item-text-song-name">
            {{ item.name }}
          </div>
          <div class=" music-list-item-text-song-artist contain">
            <div class="music-list-item-text-song-artist-name" v-for="i in item.ar" :key="i">
              {{ i.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';


export default {
  setup(props) {
    console.log("歌单详情页内容部份已经获取到从首页传入的歌单信息->MusicListContent", props);
  },
  props: ['songs'],
  methods: {
    playMusic: function (i) {
      this.updatePlayList(this.songs);
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList', 'updatePlayListIndex']),
  }
}
</script>


<style lang="less" scoped>
.music-list {
  //给播放栏让出位置
  margin-bottom: 1.8rem;

  .music-list-top {
    display: flex;
    margin-top: 0.6rem;
    width: 100%;
    height: 1.05rem;
    padding: .2rem 0rem;
    background: var(--bg-color-light);
    border-top-left-radius: calc(var(--radius) / 2);
    border-top-right-radius: calc(var(--radius) / 2);
    overflow: hidden;

    .music-list-top-left {
      display: flex;
      flex-direction: row;
      align-items: center;

      .music-list-top-left-img {
        display: flex;
        width: 1rem;
        height: 1rem;
        margin: 0rem .1rem;
      }

      .music-list-top-left-text {
        display: flex;
        font-size: .5rem;
        color: var(--color-black-80);

        span {
          font-size: .40rem;
          align-self: flex-end;
        }
      }
    }
  }

  .music-list-item {
    display: flex;
    flex-direction: column;
    background: var(--bg-color-light);


    .music-list-item-text {

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: .2rem 0rem;
      border-top: 1px solid rgba(128, 128, 128, .3);
    }

    .music-list-item-text-count {
      align-items: center;
      display: flex;
      margin: 0rem .5rem;
      font-size: .4rem;
      color: var(--color-black-40);
    }

    .music-list-item-text-song {
      display: flex;
      flex-direction: column;

      .music-list-item-text-song-name {
        font-size: .5rem;
        padding-bottom: .2rem;
        color: var(--color-black-80);
      }

      .music-list-item-text-song-artist,
      .contain {
        display: flex;


        .music-list-item-text-song-artist-name {
          display: flex;
          flex-direction: row;
          font-size: .35rem;
          padding-right: .15rem;
          color: var(--color-black-60);
        }
      }
    }
  }
}
</style>