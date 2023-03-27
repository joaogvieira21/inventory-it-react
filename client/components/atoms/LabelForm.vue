<template>
    <label :for="tlabel"> {{ tlabel }}</label>
</template>

<script>
    export default {
        props: {
            tlabel: String
        }
    }
</script>

<style>

</style>