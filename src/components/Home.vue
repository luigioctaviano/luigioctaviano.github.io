<template>
  <div class="homepage-container">
    <div class="hero-container" id="hero">
      <div class="hero-header">
        <h1 class="title"><span class="title-html">&lt;</span> Luis Rafael S. Octaviano <span class="title-html">/&gt;</span></h1>
        <h2 class="subtitle"><strong class="subtitle-emphasis">Front-End</strong> Web Developer</h2>
        <b-button tag="a" href="#about" class="hero-button" type="is-dark" size="is-large" icon-left="arrow-down-circle" inverted rounded outlined>See my Profile</b-button>
      </div>
    </div>
    <div class="about-container" id="about" v-show="show" v-observe-visibility="visibilityChanged">
      <Maintenance />
    </div>
  </div>
</template>

<script>
import Maintenance from '@/components/partials/Maintenance'

export default {
  name: 'Home',
  data: () => ({
    show: true,
    isVisible: true
  }),
  components: {
    'Maintenance': Maintenance
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible;
      console.log(entry)

      const navbar = document.getElementById('NavigationBar')

      if (isVisible === true) {
        navbar.classList.add('nav-bg-opaque')
      } else {
        navbar.classList.remove('nav-bg-opaque')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
