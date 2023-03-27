<template>
    <div class="input-group">
        <LabelForm :tlabel="tlabel" class="tlabel"></LabelForm>
        <InputForm v-model="text" :type="type" required />
    </div>
</template>

<script>
    import InputForm from '../atoms/InputForm.vue';
    import LabelForm from '../atoms/LabelForm.vue';
    export default {
        components: {
            InputForm,
            LabelForm
        },
        props: {
            tlabel:String,
            type: String
        }
    }
</script>


<style>
    .input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
       
    }

</style>