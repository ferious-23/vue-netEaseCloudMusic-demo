//首页接口获取
import service from "@/api/request.js";

//获取轮播图
export function getBanner() {
    return service({
        method: 'GET',
        //参数type(获取轮播图类型)--> 0->pc 1->android 2->iphone 3->ipad
        url: "/banner?type=2",
    });
}

//获取推荐歌单
export function getRecommendMusicList() {
    return service({
        method: 'GET',
        //参数limit(获取数量)--> 获取8个内容
        url: "/personalized?limit=8",
    });
}

//获取新碟速递
export function getNewAlb() {
    return service({
        method: 'GET',
        url: '/album/newest'
    })
}