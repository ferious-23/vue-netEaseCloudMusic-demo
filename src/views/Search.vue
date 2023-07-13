<template>
  <div class="search">
    <div class="search-topBar">
      <img :src="require('@/assets/static/images/ThemeColor/back.png')" class="search-topBar-icon"
           @click="$router.push('/')">
      <input type="text" placeholder="" v-model="searchKey" @keydown.enter="enterKey">
    </div>
    <div class="search-content" v-for="item in searchList" :key="item">
      {{ item.name }}
    </div>


  </div>
</template>
<script>
import {getSearch} from '@/api/items/'

export default {
  data() {
    return {
      searchKey: "",
      searchList: {},
    }
  },
  mounted() {
    console.log(this.searchKey)
  },
  methods: {
    enterKey: async function () {
      let res = await getSearch(this.searchKey);
      this.searchList = res.data.result.songs;
      console.log("搜索结果已经获取", this.searchList);
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  .search-topBar {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 10;
    padding: .2rem;
    margin: 0rem, .2rem;


    .search-topBar-icon {
      width: .8rem;
      height: .8rem;
    }

    input {
      display: block;
      margin: 0rem .2rem;
      width: 90%;
      height: .8rem;
      border: none;
      background: var(--color-white-20);
      border-bottom: 1px solid var(--theme-color-80);
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      font-size: .5rem;
    }
  }

  .search-content {
    //给搜索栏让出位置
    margin-top: 1rem;
    font-size: .6rem;
  }
}
</style>

