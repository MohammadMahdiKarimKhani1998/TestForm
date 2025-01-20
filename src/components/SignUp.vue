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
                        <label for="exampleInputEmail1" class="mb-2">Email:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="mail">
                        
                    </div>
                    <div class="form-group mb-4">
                        <label for="exampleInputPassword1" class="mb-2">Password:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                    </div>

                    <div class="row align-items-center">
                        <div class="col-6 d-flex justify-content-start">
                            <button type="submit" class="btn btn-warning" @click.prevent="GoLogin">Login</button>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <button type="submit" class="btn btn-success" @click.prevent="SignUp">Sign up</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </main>
</template>

<script>
import { User } from '@/users/users.js';
import { useAuth } from '@/users/userStatus.js';

const { Login } = useAuth();

export default {
    data() {
        return {
        email: '',
        password: '',
        };
    },
    methods: {
        SignUp() {
        if (User.users.some(user => user.email === this.email)) {
            alert('User already exists! Please login!');
        }else{
            User.addUser({
                email: this.email,
                password: this.password
            });

            alert('User registered successfully!');
            Login(this.email,this.password,this.$router)
            this.email = '';
            this.password = '';
            }
        },
        GoLogin(){
            this.$router.push('/login')
        }
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