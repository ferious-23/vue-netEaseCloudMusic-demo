import {createStore} from 'vuex'
//存放全局生效的变量
export default createStore({
    state: {
        playList: [
            {
                //专辑信息
                al: {
                    id: 35533615,
                    //专辑名字
                    name: "专辑名字",
                    pic: 109951162931819040,
                    picUrl: "http://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg?",
                    pic_str: "109951162931819035",
                },
                //歌曲单曲id
                id: NaN,
                //歌曲名字
                name: "未在播放",
            }],
        //playlist数组索引下标
        playListIndex: 0,
        //播放器暂停按钮显示与否 布尔类型 我也不知道为什么我会把播放按钮的状态放在vuex的数组里
        isPauseShow: true,
        //歌曲详情页显示与否 布尔类型
        isDetailShow: false,
        //判断播放栏是否显示
        isPlayBarShow: true,
        //判断是否登录
        isLogin: false,
    },
    //更新播放按钮状态需用到介个mutations
    mutations: {
        updateIsPauseShow: function (state, value) {
            state.isPauseShow = value;
        },
        //更新播放的歌单并传值到上面state对象
        updatePlayList: function (state, value) {
            state.playList = value;
            console.log("state.playList改变否", state.playList);
        },
        //刷新播放歌单中的歌曲
        updatePlayListIndex: function (state, value) {
            state.playListIndex = value;
        },
        //改变歌曲详情页状态
        updateIsDetailShow: function (state) {
            state.isDetailShow = !state.isDetailShow;
        }
    },
    actions: {},
    modules: {}
})
