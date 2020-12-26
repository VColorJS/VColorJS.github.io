/**
 * 1.歌曲搜索接口
 *   请求地址：https://autumnfish.cn/search
 *   请求方法：get
 *   请求参数：keywords（查询关键字）
 *   响应内容：歌曲搜索结果
 * 
 * 2.歌曲url获取接口
 *   请求地址：https://autumnfish.cn/song/url
 *   请求方法：get
 *   请求参数：id（查询关键字）
 *   响应内容：歌曲在线url地址
 * 
 * 3.评论获取
 *   请求地址：https://autumnfish.cn/comment/hot?type=0
 *   请求方法：get
 *   请求参数：id（歌曲id，type固定为0）
 *   响应内容：歌曲的热门评论
*/
var app = new Vue({
    el:"#myApp",
    data:{
        query:"",
        musicList:[],
        musicUrl:"",
        hotComments:[],
        isPlaying:false
    },
    methods:{
        //歌曲搜索
        musicSearch:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query).then(function(response){
                // console.log(response);
                // console.log(response.data.result.songs);
                that.musicList = response.data.result.songs;
            },function(err){});
        },
        //播放音乐
        playMusic: function(musicId){
            console.log(musicId);
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id="+musicId).then(function(response){
                // console.log(response);
                // console.log(response.data.data[0].url);//打印歌曲在线播放地址
                that.musicUrl = response.data.data[0].url;
            },function(err){});
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function(response){
                
                // console.log(response.data.hotComments);//打印热评信息
                that.hotComments = response.data.hotComments;
            },function(err){});
        },
        //打开旋转动画 
        play:function(){
            this.isPlaying = true;
        },
        //关闭动画
        pause:function(){
            this.isPlaying = false;
        }
    }
})