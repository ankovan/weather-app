<template>
  <div class="card">
    <div class="card-content">
      <div class="input-wrapper">
        <input class="card-text search" id="city-input" v-model="city" @keyup.enter="getWeather()">
        <button class="card-text search" id="search-button" @click="getWeather()">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <h1 class="card-text">{{weatherdata.name}}</h1>
      <p class="card-text" id="temp">{{Math.round(weatherdata?.main?.temp)}}°C</p>
      <p class="card-text">{{weatherdata?.weather?.[0]?.main}}</p>
      <div class="additional-weather-info">
        <p class="card-text">Humidity: {{weatherdata?.main?.humidity}}%</p>
        <p class="card-text"><i class="fas fa-wind"></i>{{weatherdata?.wind?.speed}}m/s</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {useWeather} from "@/composables/useWeather.ts"

const weather = ref({
  apiKey: process.env.VUE_APP_WEATHER_API_KEY
});
const city = ref("Moscow")
const weatherdata = ref({})
const {weatherDescription} = useWeather();
onMounted(() => {
  getWeather();
  console.log(weatherdata.value)
});
const getWeather = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_WEATHER_API_URL}?q=${city.value}&units=metric&appid=${weather.value.apiKey}`
    );
    weatherdata.value = response.data;
    weatherDescription.value = weatherdata.value?.weather?.[0]?.main;
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="less">
.card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 28rem;
  height: 28rem;
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    .card-text {
      color: white;
      margin: 0;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      &.search {
        padding: 0.2rem;
      }
    }
    #temp {
      font-size: 3rem;
    }
    #city-input {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
    border: 1px solid rgb(255, 255, 255);
    color: white;
    margin-right: 0.2rem;
    }
    #search-button {
      border: 1px solid transparent;
      border-radius: 0.4rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0.4rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3.9px);
      -webkit-backdrop-filter: blur(3.9px);
      border: 1px solid rgb(255, 255, 255);
      color: white;
      width: 2.4rem;
    }
    .additional-weather-info {
      display: flex;
      p {
        font-size: 1rem;
        margin-right: 0.4rem;
      }
    }
  }
}
</style>
