<template>
    <div>
        <div class="statistics_one_data_top">
            <p v-text="description"></p>
            <img :src="`./img/${topImage}`"/>
        </div>
        <div class="statistics_one_data_bottom">
            <p v-text="count"></p>
            <span>
            <img :src="`./img/${bottomImage}`"/>
        <p v-bind:class="{red : isRed ,  extra : !isRed}">3%</p>
        </span>
        </div>
    </div>
</template>

<script>
    let images = require.context('../../public/images', false, /\.svg$/)
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
        },
        methods: {
            imgUrl: function (path) {
                console.log(images('./' + path));
                return images('./' + path).default
            }
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
