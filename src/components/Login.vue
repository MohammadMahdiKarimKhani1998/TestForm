<template>
    <main>
    <div class="container-fluid costum-page">
        <div class="row align-items-center justify-content-center">
            <div class="col-7 costum-picture1 vh-100 d-flex align-items-center justify-content-center">
                <img src="../../public/icons/ui-radios-grid.svg" class="col-12 text-center costum-picture2 vh-100 align-items-center justify-content-center" />
            </div>
            <div class="col-5 d-flex align-items-center justify-content-center">
                <form class="col-8">
                    <div class="form-group mb-4">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="mail">
                        
                    </div>
                    <div class="form-group mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                    </div>

                    <div class="col text-end">
                        <button type="submit" class="btn btn-primary" @click.prevent="GoHome">Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </main>
</template>

<script>
export default {
    data(){
        return {
            mail : '',
            password : ''
        }
    },
    methods :{
        GoHome(){
            this.$router.push('/'),
            console.log(this.mail)
        },
    }
};
</script>

<style>
.costum-page{
    height: 100%;
}
.costum-picture1{
    background-color: #63c96a;
}
.costum-picture2{
    height: 50%;
    width: 50%;
    opacity: 0.7;
}
</style>