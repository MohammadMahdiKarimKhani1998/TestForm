<template>
    <nav class="navbar navbar-expand-lg custom-header rounded-4 rounded-top-0 border-bottom">
        <div class="container-fluid">
            <router-link class="navbar-brand"  to="/">
                <img src="../../public/icons/ui-radios-grid.svg" width="25" height="25"/>
                <span class="header-name">MyTest</span>
            </router-link>
            <span>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropstart">
                        <button class="btn btn-success" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-filter-square"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><RouterLink class="dropdown-item" :to="LogLink.href" @click.prevent="LogLink.action">{{ LogLink.text }}</RouterLink></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </span>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
    computed: {
        LogLink() {
            if (this.isLoggedIn) {
                return {
                    text: "Logout",
                    href: "/",
                    action: this.logout,
                };
            }
            else {
                return {
                    text: "Login",
                    href: "/login",
                    action: this.login,
                };
            }
        },
    },
    methods: {
        login() {
            this.isLoggedIn = true;
        },
        logout() {
            this.isLoggedIn = false;
        },
    },
    components: { RouterLink }
};
</script>

<style>
.custom-header {
    background-color: #63c96a;
}
.dropdown-item:active {
  background-color: green !important;
  color: white !important; 
}
.header-name {
    margin-left: 20px;
}
</style>