const app = Vue.createApp({
    data(){
        return{
           count:340,
           name: '',
           confirmedName:'',
           fullname:''
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
        setName(event){
            this.name = event.target.value;            
        },
        onSubmit(event){
            // To prevent page we add following code.
            // event.preventDefault();
            /**
             * Vue provide default event modifier that changes behaviour of event after
             * being executed. for prevent default, we use v-on:submit.prevent. 
             */
            alert("Hello there !")
        },
        confirmName(){
            this.confirmedName = this.name;
        },
        clearInput(){
            this.name = '';
        }

    },
    computed:{
        fullname(){
            if(this.name === ''){
                return '';
            }
            return this.name+' '+' Khanal';
        }
        // Watchers are the function that tells vue to execute when one of it's dependency is changed.
    },
    watch:{
        name(value){
            if(value === ''){
                this.fullname = '';
            }
            this.fullname = value+' '+' World !'
        }
    }
});


app.mount("#app")