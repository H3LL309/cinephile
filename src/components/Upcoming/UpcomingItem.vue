<template>
    <transition name="upcoming-item" mode="out-in">
        <div class="main__upcoming-item">
            <img :src="imgUrl + '/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg' " class=" main__upcoming-item-img" alt="">
            <div class="main__upcoming-content">
                <div class="main__upcoming-info">
                    <h1 class="main__upcoming-content-title">Мир Юрского периода: Господство</h1>
                    <p class="main__upcoming-content-text">После уничтожения острова Нублар динозавры вырвались на свободу и
                        стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее
                        мирное сосуществование на Земле. Но как долго человек сможет сохранять...
                    </p>
                    <BtnMore />
                </div>
            </div>
            <div class="main__upcoming-next">
                <img src="@/assets/images/next.png" alt="" class="main__upcoming-next-img">
                <div class="main__upcoming-next-content">
                    <span class="next">Следующий</span>
                    <span class="main__upcoming-next-title">Тор: Любовь и гром</span>
                </div>
                <div class="main__upcoming-next-line"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import BtnMore from '@/components/UI/BtnMore.vue';
import { imgUrl } from "@/static.js"

</script>

:src"imgUrl + '/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg' "
:src="imgUrl + '/pbMbDlOAkVuvnxovBA2ENin59xH.jpg'"