const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner: null,
            logMessage: []
        }
    },
    computed:{
        monsterHealthBar(){
            if(this.monsterHealth <= 0){
                return {width:'0%'}
            }else{
                return {width:this.monsterHealth+'%'}
            }
        },
        playerHealthBar(){
            if(this.playerHealth<=0){
                return {width:'0%'}
            }else{
                return {width:this.playerHealth+'%'}
            }
        },
        allowSpecialAttack(){
            return this.currentRound % 3 !==0;
        },
        allowHeal(){
            if(!this.winner){
                return this.playerHealth>50;
            }
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                //A Draw
                this.winner = 'draw'
            }else if(value<0){
                // Player Lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                // A Draw
                this.winner = 'draw'
            }else if(value<0){
                // Monster Lost
                this.winner = 'you'
            }
        }
    },
    methods:{
        startNewGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessage = [];
        },
        attackMonster(){
            // Attack enemy
            this.currentRound++;
            const attackValue = this.getRandomValue(5,15);
           // console.log("Enemy is attacked by: "+attackValue);
            this.monsterHealth -= attackValue;
            /* 
            *A player should be attacked immediately after enemy is attacked.
            */
           this.attackPlayer();
           this.logMessages('Player','attack-monster',attackValue)
        },
        attackPlayer(){
            // Attack player
            const attackValue = this.getRandomValue(10,20);
            //console.log("Player is attacked by :"+attackValue);
            this.playerHealth -= attackValue;
            this.logMessages('Monster','attack-Player',attackValue)
            
        },
        specialAttack(){
            this.currentRound++;
            const attackValue = this.getRandomValue(20,30);
            // console.log("Monster attacked by value :"+attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.logMessages('Player uses','special attack ',attackValue)
        },
        healPlayer(){
            this.currentRound++;
            const healPlayerBy = this.getRandomValue(15,25);
            if(this.playerHealth < 75){
                if(this.playerHealth + healPlayerBy >= 100){
                    this.playerHealth = 100
                }else{
                    this.playerHealth += healPlayerBy;
                }
            }
            this.logMessages('Player'," heal themself ",healPlayerBy);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster'
            
        },
        getRandomValue(min,max){
            /*This method returns random value between given parameter. */
            return  Math.floor(Math.random()*(max-min))+min;
        },
        logMessages(who,what,value){
            this.logMessage.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            })

        }
    }
});

app.mount('#game')