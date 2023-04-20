const app = Vue.createApp({
    data(){
        return{
            displayList:false,
            friends:[{
                id:"pramisha",
                name:"Pramisha",
                email:"Pramisha@localhost.com",
                phone:"1234 6578 1233"
            },
            {
                id:"manju",
                name:"Manju",
                email:"Manju@localhost.com",
                phone:"1234 6578 1233"
            }
            ]
        }
    },
   
});
/***
 * Using events to trigger to show and hide data , one button will envoke all components and that is not good if there are more than hundred of data. So we create component, and it will work independently.
*/
app.component('friend-detail',{
    template:`
    <li>
        <h2>Friends</h2>
        <button @click="displayData">
            {{ displayList ?'Hide':'Show'}} Details</button>
        <ul v-if="displayList">
            <li><strong>Name:</strong>{{friend.name}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
            <li><strong>Phone:</strong>{{friend.phone}}</li>
        </ul>
    </li>
    `,
    data(){
        return{
            displayList:false,
            friend:{
                id:"pramisha",
                name:"Pramisha",
                email:"Pramisha@localhost.com",
                phone:"1234 6578 1233"
            },
        }
    },
    methods:{
        displayData(){
            this.displayList = !this.displayList;
        }
    }
})

app.mount('#app')