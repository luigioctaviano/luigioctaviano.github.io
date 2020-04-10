<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/partials/Navbar'
import Footer from '@/components/partials/Footer'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    'Footer': Footer,
  }
}
</script>

<style>
  @import url('assets/css/app.css');
  @import url('https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css');
</style>
