<template>
    <div class="welcome" id="title">{{Welcome}}</div>
    
    <div> {{msg}} </div>
        <div>
        <p>{{user.displayName}}</p>
        <p>{{user.email}}</p>
        
        <button 
            type="submit" 
            class="btn btn-dark btn-lg btn-block"
            @click="logOut()">
                Log out
            </button>
        </div>
</template>

<script lang="ts">
import firebase from 'firebase';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String,
        Welcome: String
    }, 
    data(){
        return {
            user: null
        };
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
    },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
})
export default class Welcome extends Vue {
    Welcome!: string
    msg!: string
    }

</script>
