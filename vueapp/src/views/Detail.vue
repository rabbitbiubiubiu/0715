<template>
    <div class="info">
        <img :src="moviedetail.images.small" alt="">
        <h2>{{moviedetail.title}}</h2>
        <p>{{moviedetail.pubdates[0]}}</p>
        <p>{{moviedetail.durations[0]}}</p>
        <p>{{moviedetail.tags.title}}</p>
        

        
    
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                moviedetail:{}
            }
        },
        created(){
            // https://api.douban.com/v2/movie/subject/:id
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.query.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a&')
             .then((res)=>{
                this.moviedetail = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }
</script>

<style lang="scss" scoped>
    .info{
        img{
            width:2rem;
            margin-right:0.2rem;
            float: left;
        }
    }
</style>