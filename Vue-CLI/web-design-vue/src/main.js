import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import InputBox from './components/InputBox.vue'

const app = createApp(App);
app.component('friend-contact',FriendContact)
app.component('input-box',InputBox)
app.mount('#app')

