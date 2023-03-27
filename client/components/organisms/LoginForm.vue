<template>
    <form>
        <InputLabelForm tlabel="Login"/>
        <InputLabelForm tlabel="Senha" type="password"/>
        <ForgetPassword></ForgetPassword>
        <SubmitForm value="Login"></SubmitForm>
    </form>
</template>


<script>
    import InputLabelForm from '../molecules/InputLabelForm.vue'
    import SubmitForm from '../atoms/SubmitForm.vue';
    import ForgetPassword from '../atoms/ForgetPassword.vue';
    export default {
        components: {
            InputLabelForm,
            SubmitForm,
            ForgetPassword
        }
    }
</script>

<style>
    form {
        width:300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: start;
        gap: 5px;

    }
</style>