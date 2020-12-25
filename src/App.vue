<template>
<Header />

  <router-view class="defaultView"/>

  <Footer />

</template>

<script>
// @ is an alias to /src
import Header from '@/components/page/Header.vue'
import Footer from '@/components/page/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>


