<template>
    <img class="logo" src='@/assets/img/logo.jpg'>
    

    <div class="headerContainer">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="itemNav"
      :to="item.to">
      {{ item.title }}
      
        </router-link>
      
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        { title: "Services", to: "/services" },
        { title: "Lighting", to: "/lighting" },
        { title: "SFX", to: "/sfx" },
        { title: "Hire", to: "/hire" },
        { title: "Login", to: "/login" }

      ],
    };
  },
})

export default class Header extends Vue {
  
}
</script>
