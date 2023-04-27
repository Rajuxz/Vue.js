<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact
                name="Raju"
                email-address="Rajankhana@gmail.com"
                phone-number="1234  5678 9020"
                v-bind:is-favourite="true"
            ></friend-contact>
            <friend-contact
                name="Roshan"
                email-address="roshan@gmail.com"
                phone-number="1234  5678 9020"
            ></friend-contact>
            <friend-contact
                name="Rohan"
                email-address="Rohan@gmail.com"
                phone-number="1234  5678 9020"
            ></friend-contact>
        </ul>
       
    </section>
</template>
<script>
 export default{
    data(){
        return{
            friends:[
                {
                    id:"raju",
                    name:"Raju",
                    email:"email@raju.com",
                    phone:"1234 5678 90"
                },
                {
                    id:"pramisha",
                    name:"Pramisha",
                    email:"email@pramisha.com",
                    phone:"1234 5678 90"
                }
            ]
        }
    }
 }
</script>