<template>
    <section class="section-body">
        <h2 class="name">{{name}} {{isFavorite?'(Favourite)':''}}</h2>
        <button @click="showDetails">{{isVisible?"Hide Details":"Show Details"}}</button>
        <button @click="toggleFavorite">{{isFavorite?"Remove from Fav.":"Add to Fav."}} </button>
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
        id:{
            type: String,
            required:true
        },
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

        isFavorite:{
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
            isVisible:false
     }
    },
    methods:{
        showDetails(){
            return this.isVisible = !this.isVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-fav',this.id);
            // this.isFriendFavorite = !this.isFriendFavorite;


        }
      
    }
    
}
</script>
<style>
   .section-body>h2{
    color:#031ba1;
   }
   button{
    height:30px;
    margin-right:5px;
    background: #ff3c00;
    color:white;
    border:1px solid transparent;
    border-radius:5px;
   }
   ul{
    list-style-type: none;
    margin-top:3px;
   }
</style>