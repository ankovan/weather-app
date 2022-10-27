<template>
    <div class="img-wrapper">
        <img id="background-image" :src="photodata?.urls?.full">
        <a
        className="credit"
        target="_blank"
        :href="`https://unsplash.com/@${photodata?.user?.username}`"
      >
      Photo by {{photodata?.user?.name}} on Unsplash
      </a>
    </div>
</template>
<script setup>
import { watch, ref, onMounted } from "vue";
import { createApi } from 'unsplash-js';
import {useWeather} from "@/composables/useWeather.ts";

const {weatherDescription} = useWeather();
const photoApi = createApi({
  accessKey: process.env.VUE_APP_PHOTO_API_ACCESS_KEY,
  secretKey: process.env.VUE_APP_PHOTO_API_SECRET_KEY,
  //...other fetch options
});
const photodata = ref({})
onMounted(() => {
  getPhoto()
});
watch(weatherDescription, () => {
  getPhoto()
})
const getPhoto = async () => {
  try {
  const data =  await photoApi.search.getPhotos({ query: weatherDescription.value, orientation: "landscape", page: 1, perPage: 10  })
  photodata.value = (
    data.response.results.length 
    ? data.response.results[Math.floor(Math.random()*data.response.results.length)]
    : {}
  )
  console.log(photodata.value);

  } catch(error)  {
    console.log("something went wrong!");
  }
}
</script>
<style lang="less">
body,html {
    margin: 0;
//   height: 100vh;
//   width: 100vw;
}
.img-wrapper {
  overflow: hidden;
  position: relative;
//   width: 100%;
//   height: 100%;
    height: 100vh;
    width: 100vw;
  #background-image {
    height: 100vh;
    width: 100vw;
    pointer-events: none;
    position: absolute;
    object-fit: cover;
  }
  .credit {
  font-size: 1rem;
  line-height: 1rem;
  text-decoration-line: underline;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.4rem;
}
}
</style>