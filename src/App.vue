<template>
<Header />
  <div class="Headernav">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="itemNav"
      :to="item.to">
       {{ item.title }}
      </router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from './components/page/Header'

export default {
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
  components:{Header}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Headernav {
  padding: 30px;
}

.itemNav {
  Padding: 30px;
  font-weight: bold;
  background-color: #42b983;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
