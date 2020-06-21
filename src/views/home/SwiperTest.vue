<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
			<img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt="">
		</swiper-slide>
    <swiper-slide>
			<img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt="">
		</swiper-slide>
    <swiper-slide>
			<img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt="">
		</swiper-slide>
    <swiper-slide>
			<img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt="">
		</swiper-slide>
    <swiper-slide>
			<img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt="">
		</swiper-slide>
    <swiper-slide><img src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	
  export default {
    name: 'swiperExamplePagination',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style scoped>
	.swiper {
		height: 300px;
		width: 100%;
	}

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    background-color: #ffffff;
  }
</style>