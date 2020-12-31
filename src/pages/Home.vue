<template>
  <transition name="fade">
  <div class="home">
 
    <Welcome1 Welcome="Welcome to the KAZE Website" />
  </div>
  </transition>

</template>

<script>

// @ is an alias to /src
import Welcome1 from '@/components/content/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome1
  }
}
</script>
