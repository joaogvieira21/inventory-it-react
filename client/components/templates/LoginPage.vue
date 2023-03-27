<template>
    <section class="page-container">
        <div class="teste">
            <Logo></Logo>
            <TitleForm title="Acesse sua conta"></TitleForm>
            <LoginForm></LoginForm>
        </div>
        <ImgLogin></ImgLogin>
    </section>
</template>

<script>
    import ImgLogin from '../atoms/ImgLogin.vue';
    import Logo from '../atoms/Logo.vue';
    import TitleForm from '../atoms/TitleForm.vue';
    import LoginForm from '../organisms/LoginForm.vue';
    export default {
        components: {
            ImgLogin,
            Logo,
            TitleForm,
            LoginForm
        }

    }
</script>

<style>
    .page-container {
        height: 100vh;
        width: 100%;
        display: flex;
    }

    .teste {
        height: 100vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>