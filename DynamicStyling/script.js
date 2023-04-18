const app = Vue.createApp({
    data(){
        return{
            boxASelected : false,
            boxBSelected : false,
            boxCSelected : false
        }
    },
    methods:{
        boxSelected(box_name){
            if(box_name === 'A'){
                this.boxASelected = !this.boxASelected;
            }else if(box_name === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else if(box_name === 'C'){
                this.boxCSelected = !this.boxCSelected;
            }
        }

    },
    // We can style html elements using computed properties if we have more complex logic to implement.
    computed:{
        boxAStyles(){
            return {active:this.boxASelected};
        },
        boxBStyles(){
            return {active:this.boxBSelected};
        },
        boxCStyles(){
            return {active:this.boxCStyles};
        }

    },
    // Or, we can simply bind array to html element like this:
    // :class=['box',{active:boxASelected}]
});


app.mount('#events')