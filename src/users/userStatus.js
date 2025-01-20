import { ref } from 'vue';
import { User } from '@/users/users.js';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);

export function useAuth() {
    const Login = (email,password,router) => {
        if (User.checkUser(email, password)) {
            isLoggedIn.value = true;
            router.push('/');
        } else {
            alert('Invalid email or password');
        } 
    };

    const logout = () => {
        isLoggedIn.value = false;
    };

    return { isLoggedIn, Login, logout };
}
