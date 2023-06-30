import axios from "axios";
import { defineStore } from 'pinia'
import { apiKey } from "../static";

export const useItemId = defineStore('ItemId', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movies: null,
        tv: null,
    }),
    actions: {
        async getItemId({ type, id }) {
            try {
                let res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU'`)
                const data = res.data
                if (type == 'movie') {
                    this.movie = data
                    console.log(data);
                } else {
                    this.tv = data
                    console.log(data);
                }
            } catch (error) {
                console.log('ошибка при получении данных по id', error);
            }
        }
    }
})