<template>
        <!--    Huge note to self without the cell class the margin-x wont apply -->
        <!--    The margin-y will come in handy when we change orientation -->
        <div class="grid-x grid-margin-x grid-margin-y overall">
            <div class="cell large-3 medium-3 small-12 overall_one">
                <SummaryDetails name="nathanf" total="1987" count="12 Today" top-image="icon-facebook.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 overall_two">
                <SummaryDetails name="nathanf" total="1987" count="12 Today" top-image="icon-twitter.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 overall_three">
                <SummaryDetails name="nathanf" total="1987" count="12 Today" top-image="icon-twitter.svg"/>
            </div>
            <div class="cell large-3 medium-3 small-12 overall_four">
                <SummaryDetails name="nathanf" total="1987" count="12 Today" top-image="icon-youtube.svg"/>
            </div>
        </div>
</template>

<script>
    import SummaryDetails from "./SummaryDetails";
    export default {
        name: "Summary",
        components: {SummaryDetails}
    }
</script>

<style scoped>

</style>
