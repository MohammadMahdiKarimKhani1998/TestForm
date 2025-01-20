<template>
    <header>
        <div>
        <MyHeader />
        </div>
    </header>

    <main>
        
    </main>

    <footer>
        <MyFooter />
    </footer>
</template>

<script>
    import MyHeader from './MyHeader.vue';
    import MyFooter from './MyFooter.vue';

    export default {
        components:{
            MyHeader,
            MyFooter,
        }
    };
</script>

<style></style>