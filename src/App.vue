<template>
  <router-view/>
  <div v-show="$store.state.isPlayBarShow">
    <!-- 他妈的v-show不能放在自定义组件里 无奈套了一个div -->
    <PlayBar/>
  </div>
</template>
<script>
import PlayBar from '@/components/MusicList/PlayBar.vue'

export default {

  components: {
    PlayBar,
  }
}
</script>

