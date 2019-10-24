import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';
import Photo from './views/Photo.vue';
import Detail from './views/Detail';
import MusicDetail from './views/MusicDetail';
import PhotoDetail from './views/PhotoDetail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },{
      path:'/music',
      name:'music',
      component:Music
    },{
      path:'/book',
      name:'book',
      component:Book
    },{
      path:'/photo',
      name:'photo',
      component:Photo
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path:'/music/music-detail',
      name:'music-detail',
      component:MusicDetail
    },
    {
      path:'/photo/photo-detail',
      name:'photo-detail',
      component:PhotoDetail
    }
  ],
});
