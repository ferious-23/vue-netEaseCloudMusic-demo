<template>
  <div class="app">
    <MusicListTopBar :playlist="state.playlist"/>
    <MusicListcontent :songs="state.songs"/>
  </div>
</template>
<script>
//
import {onMounted, reactive} from 'vue';
import {useRoute} from 'vue-router'
import {getMusicListItems, getMusicLitstMusics} from '@/api/items'
import MusicListTopBar from '@/components/MusicList/MusicListTopBar.vue'
import MusicListcontent from '@/components/MusicList/MusicListContent.vue'

export default {
  setup() {
    const state = reactive({
      //用于存放请求到的歌单对象，名字与请求到的对象的名字一致
      playlist: {},
      //用于存放请求到的所有歌单音乐对象，名字与请求到的对象名字一致
      songs: {},
    })

    onMounted(async () => {
      let id = useRoute().query.id;
      //console.log(`output->id`, id);
      //获取歌单详情页(1)
      let res = await getMusicListItems(id);
      //console.log(`output->res`, res);
      state.playlist = res.data.playlist;
      //获取歌单内所有歌曲(2)
      let result = await getMusicLitstMusics(id);
      //console.log(`output->result`, result);
      state.songs = result.data.songs;
      //他奶奶的(* ￣︿￣) 每次刷新就报错
      //放置会话存储中备用
      sessionStorage.setItem('musicListDetails', JSON.stringify(state));
    });
    return {state};
  },
  components: {
    MusicListTopBar,
    MusicListcontent,
  }
}
</script>
<style lang="less" scoped>
.app {
  overflow: hidden;
}
</style>