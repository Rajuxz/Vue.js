<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact
                name="Raju"
                email-address="Rajankhana@gmail.com"
                phone-number="1234  5678 9020"
                is-favourite="1"
            ></friend-contact>
        </ul>
        <input-box></input-box>
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