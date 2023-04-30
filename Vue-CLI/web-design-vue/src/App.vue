<template>
    <div class="component">
        <add-friend></add-friend>
        <h2>My Friends</h2>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :email-address="friend.email"
                :phone-number="friend.phone"
                :isFavorite="friend.isFavorite"
                @toggle-fav="toggleFavoriteStatus"
            ></friend-contact>
            
        </ul>
       
    </div>
</template>
<script>
import AddFriend from './components/AddFriend.vue';


 export default{
    data(){
        return{
        AddFriend,
            friends:[
                {
                    id:"raju",
                    name:"Raju",
                    email:"email@raju.com",
                    phone:"1234 5678 90",
                    isFavorite:true
                },
                {
                    id:"pramisha",
                    name:"Pramisha",
                    email:"email@pramisha.com",
                    phone:"1234 5678 90",
                    isFavorite:true
                }
            ]
        };
    },

    methods:{
        toggleFavoriteStatus(friendId){
           
            const myFriend =  this.friends.find(friend=>friend.id === friendId);
            myFriend.isFavorite = !myFriend.isFavorite;
        }
    }
 }
</script>
<style>
    .component{
        width:500px;
        height:fit-content;
        border:1px solid red;
        border-radius: 10px;
        margin:auto;
        background: #eef;
        box-shadow: 1px 2px 10px rgb(0, 204, 255);
    }   
   .component>h2{
        padding:5px;
        color: white;
        background: #031ba1;
        margin-top:0;
        border-radius:10px;
        text-align: center;
        border-bottom: 2px solid grey;
    }
  @media only screen and (max-width: 600px) {
  
    .component{
        
        width:100vw;
        
    }
  }

</style>