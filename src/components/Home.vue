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
      <div class="header-content about-header">
        <h1 class="title">About Me</h1>
      </div>
      <div class="about-content">
        <br>
        <p class="title"><span class="title-html">&lt;</span> <b>Basic</b> Information <span class="title-html">/&gt;</span></p>
        <div class="basic-info">
          <div class="pic-container">
            <div class="pic-content"></div>
          </div>
          <div class="myself-content">
            <p><strong>Age:</strong> 24 Years Old</p>
            <p><strong>Years of Experience:</strong> 3+ years</p>
            <p><strong>Educational Attainment:</strong> Bachelor's Degree</p>
            <p><strong>Year Graduated:</strong> 2017</p>
          </div>
        </div>
        <!-- <br>
        <p class="title"><span class="title-html">&lt;</span> <b>My</b> Skills <span class="title-html">/&gt;</span></p>
        <div class="skills-info">
          <div class="columns skills-items">
            <div class="column skills-item">
              <h1 class="title">Item # 1</h1>
            </div>
            <div class="column skills-item">
              <h1 class="title">Item # 2</h1>
            </div>
            <div class="column skills-item">
              <h1 class="title">Item # 3</h1>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="works-container" id="works">
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
