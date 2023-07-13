//详情页接口获取
import service from "@/api/request.js";

//获取歌单的详细信息(播放量 标题 歌单图片 歌单作者 订阅人 订阅数量 评论 分享 收藏...)
export function getMusicListItems(id) {
    return service({
        method: 'GET',
        url: "/playlist/detail?id=" + id,
    })
}

//获取歌单的所有歌曲(不一定)
export function getMusicLitstMusics(id) {
    //可选参数 limit->获取限制 最大取1000了 
    let limit = 1000;
    return service({
        method: 'GET',
        url: "/playlist/track/all?id=" + id + "&limit=" + limit,
    });
}

//获取搜索内容
export function getSearch(text) {
    return service({
        method: 'GET',
        url: '/cloudsearch?keywords=' + text,
    })
}