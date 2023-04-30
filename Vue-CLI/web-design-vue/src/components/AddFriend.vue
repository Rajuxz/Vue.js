<template>
    <section class="form">
        <form action="#" @submit.prevent="addNewFriend">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="enteredName">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="enteredEmail">
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="phone" id="phone" v-model="enteredPhone">
            </div>
            <div>
                <button class="btn">Add Contact</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    emits:['add-friend'],
    data(){
        return{
            enteredName:'',
            enteredEmail:'',
            enteredPhone:''
        }
    },
    methods:{
        addNewFriend(){
            this.$emit('add-friend',
            this.enteredName,
            this.enteredEmail,
            this.enteredPhone
            );
        }
    }
    
}
</script>
<style scoped>
    .form{
        height:fit-content;
        width:max-content;
        margin-left: 40px;
        box-shadow: 1px 3px 5px grey;
        border-radius: 10px;
        padding:3px;
    }
    div{
        padding: 4px;;
        margin-bottom: 5px;
    }
    label{
        font-weight: 600;
        margin-right: 3px;
    }
    div>input{
        height:20px;
        background: transparent;
        border:1px solid black;
        border-radius:5px ;
        outline: none;;
    }
    input:focus{
        background: #8ef1a75d;
        box-shadow: 4px 4px 8px grey;
    }
    .btn{
        cursor: pointer;
        margin-left:44px;
        transition: 0.6s all ease-in-out;
    }
    .btn:hover{
        box-shadow: 4px 4px 8px grey;
    }
    
</style>
