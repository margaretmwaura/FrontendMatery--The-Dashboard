<template>
    <div>
        <div class="overall_one_social">
            <img :src="`./img/${topImage}`"/>
<!--            <img :src="imgUrl(topImage)">-->
            <p v-text="name"></p>
        </div>
        <div class="overall_one_numbers">
            <p class="overall_one_numbers_one" v-text="total"></p>
            <p class="overall_one_numbers_two"> FOLLOWERS</p>
        </div>
        <div class="overall_one_today">
            <img :src="img">
            <p v-text="count"></p>
        </div>
    </div>
</template>

<script>
    import img from '../../public/images/icon-up.svg'
    // let images = require.context('../../public/images', false, /\.svg$/)
    export default {
        name: "SummaryDetails",
        props: ['name','total','count','topImage'],
        data: function () {
            return {
                img: img
            }
        },
        // methods: {
        //     imgUrl: function (path) {
        //         console.log(images('./' + path));
        //         return images('./' + path).default
        //     }
        // }
    }
</script>

<style scoped>

</style>
