<template>
<div class="welcome" id="title">{{msg}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})
export default class Welcome extends Vue {
    msg!: string
}
</script>
