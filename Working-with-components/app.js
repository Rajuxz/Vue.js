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
    methods:{
        displayData(){
            this.displayList = !this.displayList;
        }
    }
});

app.mount('#app')