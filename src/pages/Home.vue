<template>
  <transition name="fade">
  <div class="home">
 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </transition>

</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
