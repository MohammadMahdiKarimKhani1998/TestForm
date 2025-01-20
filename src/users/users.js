import { reactive } from 'vue';

export const User = reactive({
  users: [],  
  
  addUser(user) {
    this.users.push(user);
  },

  checkUser(email, password) {
    return this.users.some(user => user.email === email && user.password === password);
  }
});