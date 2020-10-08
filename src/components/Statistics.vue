<template>
    <div class="statistics">
        <div class="grid-x grid-margin-x grid-margin-y statistics_one">
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Page Views" count="87" top-image="icon-facebook.svg"
                                   bottom-image="icon-up.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Likes" count="52" top-image="icon-facebook.svg"
                                   bottom-image="icon-down.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Likes" count="5462" top-image="icon-instagram.svg"
                                   bottom-image="icon-up.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Profile Views" count="52k" top-image="icon-instagram.svg"
                                   bottom-image="icon-up.svg"/>
            </div>

        </div>
        <div class="grid-x grid-margin-x grid-margin-y statistics_one">
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Retweets" count="117" top-image="icon-twitter.svg"
                                   bottom-image="icon-up.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Likes" count="507" top-image="icon-twitter.svg"
                                   bottom-image="icon-up.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Likes" count="107" top-image="icon-youtube.svg"
                                   bottom-image="icon-down.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 statistics_one_data">
                <StatisticsDetails description="Total Views" count="1407" top-image="icon-youtube.svg"
                                   bottom-image="icon-down.svg"/>
            </div>
        </div>
    </div>
</template>

<script>
    import StatisticsDetails from "./StatisticsDetails";
    export default {
        name: "Statistics",
        components: {StatisticsDetails}
    }
</script>

<style scoped>

</style>
