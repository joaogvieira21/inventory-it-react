<template>
    <form>
        <InputLabelForm  name="login" label="Login" forl="login" type="text" @inputz="updateLogin"/>
        <InputLabelForm name="password" label="Password" forl="password" type="password" @inputz="updatePassword"/>
        <ForgetPassword></ForgetPassword>
        <SubmitForm @click="submitForm"></SubmitForm>
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
        },
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault()
                console.log(this.login)
                console.log(this.password)
            },
            updatePassword(value) {
                this.password = value
            },
            updateLogin(value) {
                this.login = value
                
            }
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