<template>

    <div class="Headernav">
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
  
  props: {
    msg: String
  },
    data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        { title: "Services", to: "/services" },
        { title: "Lighting", to: "/lighting" },
        { title: "SFX", to: "/sfx" },
        { title: "Hire", to: "/hire" },

      ],
    };
  },
})
export default class Header extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
Header {
  margin: 40px 0 0;
}

</style>
