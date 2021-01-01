<template>
    <div class="welcome" id="title">{{Welcome}}</div>
    
    <div> {{msg}} </div>
        
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String,
        Welcome: String
    }
})
export default class Welcome extends Vue {
    Welcome!: string
    msg!: string
    }

</script>
