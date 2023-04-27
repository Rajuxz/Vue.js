<template>
    <section>
        <h2 class="name">{{name}} {{isFriendFavorite==="1"?'(Favourite)':''}}</h2>
        <button @click="toggleFavourite">{{isFriendFavourite==="1"?"Remove from favorite":"Add to Favorite"}}</button> <br>
        <button @click="showDetails">Show Details</button>
        <ul v-if="isVisible">
            <li><strong>Phone </strong>{{phoneNumber}}</li>
            <li><strong>Email </strong>{{emailAddress}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    /*props:[
        'name',
        'emailAddress',
        'phoneNumber',
        'isFavourite'
    ],*/
    // Props validation.
    props:{
        name:{
            type:String,
            required:true,
        },
        
        phoneNumber:{
            type:String,
            required:true
        },

        emailAddress:{
            type:String,
            required:true
        },

        isFavourite:{
            type:Boolean,
            required:false,
            default:false, //or can be a function(){} so we can write complex logic here.
            // validator:function(value){
            //     return value ==="1" || value === "0";
            // }
        },
    },
    data(){
        return{
            isVisible:false,
             friends:{
                    id:"raju",
                    name:"Raju",
                    email:"email@raju.com",
                    phone:"1234 5678 90"
                },
            isFriendFavorite: this.isFavourite,
     }
    },
    methods:{
        showDetails(){
            return this.isVisible = !this.isVisible;
        },
        toggleFavourite(){
            if(this.isFriendFavorite === "1"){
                this.isFriendFavorite = "0"
            }else{
                this.isFriendFavorite = "1";
            }

        }
      
    }
    
}
</script>

<style>
    .name{
        width:250px;
        padding:10px;
        height:50px;
        color:white;
        background: #0f037e;
        border-radius: 10px;
    }
    button{
        height:50px;
        background: #ee00ff;
        border-radius: 10px;
        border:none;
        color:white;
        cursor: pointer;
        width:100px;
        margin:3px;
    }
</style>