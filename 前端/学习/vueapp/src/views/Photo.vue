<template>
    <div class="photodetail">
        <img v-for="(obj,index) in photodata" :key = "index" :src="obj.src"  alt="">

        
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                photodata:[]
            }
        },
        created(){
            axios.get('./data/photodata.json')
            .then((res)=>{
                console.log(res);
                this.photodata = res.data.photoData;
            }).catch((res)=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
    .photodetail{
        // background: #000 url('http://localhost:8080/img/photo/1.jpg') no-repeat center center;
        // background-size: contain;
        overflow: hidden;
        img{
            float: left;
            width: 50%;
            // height: 50%;
            
        }
    }
</style>