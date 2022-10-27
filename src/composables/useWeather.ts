import { ref} from "vue";

const weatherDescription = ref("weather");

export function useWeather() {
    return { weatherDescription }
}