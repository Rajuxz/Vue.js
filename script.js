const app = Vue.createApp({
    data(){
        return{
           count:0,
           name: ''
        }
    },
    methods:{
        add(num){
            this.count+= num ;
        },
        reduce(num){
            if(this.count == 0){
                return 0;
            }else{
               this.count -= num;
            }
        },
        setName(event,lastName){
            this.name = event.target.value + ' '+lastName;            
        },
        onSubmit(event){
            // To prevent page we add following code.
            // event.preventDefault();
            /**
             * Vue provide default event modifier that changes behaviour of event after
             * being executed. for prevent default, we use v-on:submit.prevent. 
             */
            alert("Hello there !")
        }

    }
});


app.mount("#app")