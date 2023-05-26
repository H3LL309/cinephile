<template>
    <transition name="upcoming" mode="out-in"> 
        <div class="main__upcoming">
            <UpcomingItem />
        </div>
    </transition>
</template>

<script setup>
import UpcomingItem from '@/components/Upcoming/UpcomingItem.vue';


</script>

