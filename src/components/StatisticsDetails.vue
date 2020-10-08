<template>
    <div>
        <div class="statistics_one_data_top">
            <p v-text="description"></p> <img :src="`../dist/img/${topImage}.svg`"/>
        </div>
        <div class="statistics_one_data_bottom">
            <p v-text="count"></p>
            <span>
            <img :src="`../dist/img/${bottomImage}.svg`"/>
        <p v-bind:class="{red : isRed ,  extra : !isRed}">3%</p>
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticsDetails",
        props: ['description', 'count', 'topImage', 'bottomImage'],
        computed: {
            isRed: function () {
                if (this.bottomImage === 'icon-down') {
                    return true;
                } else {
                    return false;
                }
            },
        }

    }
</script>

<style scoped>
    .extra {
        color: #1db489;
        font-weight: bold;
        font-size: 13px;
    }

    .red {
        color: red;
        font-weight: bold;
        font-size: 13px;
    }
</style>
