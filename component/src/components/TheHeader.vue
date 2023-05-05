<template>
    <header>
        <h4>{{msg}}</h4>
    </header>
</template>

<script>
export default {
    data(){
        return{
            msg:"More on vue components"
        }
    }
}
</script>


<style scoped>
    header{
        height: 50px;
        width:100vw;
        font-size:25px;
        text-align: center;
        padding: 10px;
        background-color:#044ea3;
        color:white;
        box-shadow: 1px 2px 8px #443e3e;
    }
</style>





