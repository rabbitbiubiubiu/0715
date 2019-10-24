<template>
    <div>
        <ul class="movie-box">
            <li class="movieList" @click="detail(obj.id)" v-for="(obj,index) in movieList" :key="index">
                <img :src="obj.images.medium" alt="">
                <div>
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}}已收藏</p>
                    <!-- {{obj.casts}} -->
                    <p>演员：<span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span></p>
                    <p>上映时间：{{obj.year}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[],
                num:10,
                flag:true,
                
            }
        },
        created(){
            let that = this;
            // 发送请求 
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
            // // axios.get('./data/movie0.json')
            .then((res)=>{
                this.movieList= res.data.subjects;
            }).catch((err)=>{
                console.log(err);
            })
           
            window.onscroll = function(){
            //      // 判断滚动条是否滑动到底部  
            //       axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
            //     .then((res)=>{
            //         this.movieList= res.data.subjects;
            //     }).catch((err)=>{
            //         console.log(err);
            //     })


                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(Math.abs((scrollTop+windowHeight)-scrollHeight)<1){
                //写后台加载数据的函数
                    // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                    that.loadmore();
                }
            }

        },
        methods:{
            loadmore(){
                
                // console.log(this.num);10
                if(this.flag){
                    let num;
                    this.flag = false;
                    num = this.num+10;
                    axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+this.num+'&count='+num)
                    .then((res)=>{
                        this.movieList=[...this.movieList,...res.data.subjects];
                        this.flag = true;
                        
                    }).catch((err)=>{
                        console.log(err);
                    })
                    this.num = num;
                    // console.log(this.num)
                }
                
            },
            detail(index){
                // console.log(index)
                this.$router.push({path:'/detail',query:{id:index}});
                
            }
            
        }

    }
</script>

<style lang="scss" scoped>
.movie-box{
    padding: 0.2rem;
    .movieList{
        display: flex;
        img{
            width:2rem;
            margin-right:0.2rem;
        }
        margin-bottom:0.2rem;
        border-bottom: 1px solid #000;
    }
}
 

</style>