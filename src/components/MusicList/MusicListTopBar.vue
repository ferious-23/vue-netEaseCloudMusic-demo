<template>
  <nav class="top-bar">
    <div class="top-bar-left">
      <img :src="require('@/assets/static/images/ThemeColor/back.png')" class="top-bar-icon-img back"
           @click="$router.go(-1)"/>
    </div>
    <div class="top-bar-title">歌单</div>
    <div class="top-bar-right">
      <img :src="require('@/assets/static/images/ThemeColor/search.png')" class="top-bar-icon-img "/>
      <img :src="require('@/assets/static/images/ThemeColor/more.png')" class="top-bar-icon-img"/>
    </div>
  </nav>
  <img :src="playlist.coverImgUrl" class="music-list-background-img">
  <div class="music-list">
    <div class="music-list-detalis ">
      <img :src="playlist.coverImgUrl" class="music-list-detalis-img">
      <div class="music-list-detalis-right">
        <div class="music-list-detalis-right-title ">
          {{ playlist.name }}
        </div>
        <div class="music-list-details-right-user">
          <div class="music-list-details-right-user-icon img">
            <img :src="playlist.creator.avatarUrl">
          </div>
          <div class="music-list-details-right-user-name">
            {{ playlist.creator.nickname }}<span>></span>
          </div>
        </div>
      </div>
    </div>
    <div class="music-list-describe">
      {{ playlist.description }}
    </div>
    <div class="music-list-icon">
      <div class="music-list-icon-content">
        <img :src="require('@/assets/static/images/Disabled/share.png')">
        <p>{{ clipNumbers(playlist.shareCount) }}</p>
      </div>
      <div class="music-list-icon-content">
        <img :src="require('@/assets/static/images/Disabled/comment.png')" class="comment">
        <p>{{ clipNumbers(playlist.commentCount) }}</p>
      </div>
      <div class="music-list-icon-content subscribe">
        <img :src="require('@/assets/static/images/Disabled/files.png')">
        <p>{{ clipNumbers(playlist.subscribedCount) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    console.log("歌单详情页头部信息界面已经获取到从首页推荐歌单处传入的歌单信息,->MusicListTopBar", props);
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator;
    }
    ;

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

    return {clipNumbers}
  },

  props: ['playlist'],
}
</script>

<style lang="less" scoped>
.top-bar {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
  margin: 0rem, .2rem;
  backdrop-filter: blur(var(--blur-medium));
  -webkit-backdrop-filter: blur(var(--blur-medium));

  .top-bar-left,
  .top-bar-right {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .top-bar-icon-img {
      width: 1rem;
      height: 1rem;
    }

    .back {
      margin-top: 0.1rem;
      width: 0.8rem;
      height: 0.8rem;
    }

  }

  .top-bar-title {
    font-size: .5rem;
    color: var(--color-white-80);
  }

}

.music-list-background-img {
  display: block;
  position: fixed;
  z-index: -1;
  width: 100%;
  top: -1rem;
  filter: blur(var(--blur-medium));
}

.music-list {
  //给标题栏让出1.8rem位置
  //?为什么1.8rem?? 标题栏mg0.2rem pd0.2rem 高度 1rem
  //加起来 0.2*2+0.2*2+1=1.8rem
  margin-top: 1.8rem;

  .music-list-detalis {
    display: flex;
    justify-content: normal;
    //为什么用space-between 第二个歌单文案会错位？
    align-items: start;
    margin-top: 1rem;
    margin-left: .2rem;
    margin-right: .2rem;
    width: 100%;
    height: 3.5rem;

    .music-list-detalis-img {
      width: 3rem;
      height: 3rem;
      border-radius: calc(var(--radius) / 2);
    }

    .music-list-detalis-right-title {
      display: flex;
      font-size: .5rem;
      color: var(--color-white-80);
      margin: .2rem;
    }

    .music-list-details-right-user {
      margin: .4rem 0rem;
      display: flex;
      align-items: center;
      justify-content: start;

      .music-list-details-right-user-icon,
      img {
        width: .9rem;
        height: .9rem;
        border-radius: .6rem;
        margin: 0rem .1rem;
      }

      .music-list-details-right-user-name {
        margin: 0rem .1rem;
        font-size: calc(.5rem * 0.8);
        color: var(--color-white-60);
      }
    }
  }

  .music-list-describe {
    display: flex;
    overflow: hidden;
    height: 1rem;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .4rem;
    padding: 0rem 0.2rem;
    color: var(--color-white-40);
  }

  .music-list-icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .4rem;
    color: var(--color-white-80);

    .music-list-icon-content {
      -webkit-backdrop-filter: blur(calc(var(--blur-medium) / 4));
      backdrop-filter: blur(calc(var(--blur-medium) / 4));
      background: var(--color-white-20);
      width: 2.5rem;
      height: 1rem;
      border-radius: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: .8rem;
        height: .8rem;
      }

      .comment {
        margin: .1rem 0rem;
        width: .6rem;
        height: .6rem;
      }
    }

    .subscribe {
      background: var(--theme-color-40);
    }
  }
}
</style>