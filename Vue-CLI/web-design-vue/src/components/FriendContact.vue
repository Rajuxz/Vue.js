<template>
    <section>
        <h2>{{name}} {{isFavourite==="1"?'(Favourite)':''}}</h2>
        <button @click="showDetails">Show Details</button>
        <ul v-if="isVisible">
            <li><strong>Phone </strong>{{phoneNumber}}</li>
            <li><strong>Email </strong>{{emailAddress}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props:[
        'name',
        'emailAddress',
        'phoneNumber',
        'isFavourite'
    ],
    data(){
        return{
            isVisible:false,
             friends:{
                    id:"raju",
                    name:"Raju",
                    email:"email@raju.com",
                    phone:"1234 5678 90"
                }
     }
    },
    methods:{
        showDetails(){
            return this.isVisible = !this.isVisible;
        },
      
    }
    
}
</script>