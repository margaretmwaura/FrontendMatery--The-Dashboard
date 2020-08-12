<template>
<div>
    <div class="statistics_one_data_top">
        <p v-text="description"></p> <img :src="`/img/${topImage}.svg`"/>
    </div>
    <div class="statistics_one_data_bottom">
        <p v-text="count"></p> <span><img :src="`/img/${bottomImage}.svg`"/><p class="extra">3%</p></span>
    </div>
</div>
</template>

<script>
    export default {
        name: "StatisticsDetails",
        props: ['description','count','topImage','bottomImage'],
    }
</script>

<style scoped>

</style>
