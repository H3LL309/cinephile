<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming">
            <UpcomingItem />
        </div>
    </transition>
</template>

<script setup>
import UpcomingItem from '@/components/Upcoming/UpcomingItem.vue';
import { useUpcoming } from '@/stores/upcoming';
import { onMounted, ref } from "vue";

let upcomingStore = useUpcoming()









onMounted(() => {
    upcomingStore.getUpcoming()
})

</script>

