<template>
    <section class="about-container" id="aboutMyself">
      <div class="about-image-container">
        <div class="about-image-divider"></div>
      </div>
      <div class="about-text-container">
        <div class="about-text">
          <h4 class="about-text-header">Who am I?</h4>
          <p class="about-text-subheader">
            I am a developer with {{getNumOfYears}}+ years of experience in Web Development. <br>
            Currently focused on Front-End but can do Back-End as well.
          </p>
          <button class="about-button" onclick="location.href='#whatIdo';">See What I do</button>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      getNumOfYears: ''
    }
  },
  mounted () {
    const getOriginDate = new Date ('April 3, 2017 00:00:00')
    const getCurrentDate = new Date ()

    this.getNumOfYears = this.getYearsDifference(getCurrentDate, getOriginDate)
  },
  methods: {
    getYearsDifference (current, origin) {
      const getDifference = current - origin
      const finalYearCount = new Date(getDifference);
      return Math.abs(finalYearCount.getFullYear() - 1970);
    }
  }
}
</script>
<style scoped>
.about-container {
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  color: #000;
  flex-direction: column;
}

.about-text-container,
.about-image-container {
  width: 100%;
  display: flex;
  height: inherit;
}

.about-text-container {
  height: max-content;
}

.about-button {
  border-radius: 50px;
  border: 1px solid #18A0FB;
  background-color: transparent !important;
  color: #18A0FB;
  padding: 15px 25px;
  font-family: 'Montserrat';
  font-size: 17px;
  margin: 30px 0;
  cursor: pointer;
}

.about-text {
  margin: auto;
  text-align: center;
  padding: 25px;
}

.about-text-header {
  font-size: 30px;
  font-weight: bold;
}

.about-text-subheader {
  font-size: 20px;
  font-weight: normal;
}

.about-image-divider {
  background: linear-gradient(to bottom, transparent, #FFFFFF);
  height: 250px;
  width: 100%;
  margin-top: auto;
  position: relative;
  top: 1px;
}

.about-image-container {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/whoami.png');
}

@media only screen and (max-height: 515px) {
  .about-container,
  .about-image-container {
    height: fit-content;
  }
}

@media only screen and (min-width: 992px) {
  .about-text-header {
    font-size: 48px;
  }

  .about-text-subheader {
    font-size: 18px;
  }
}
@media only screen and (min-width: 1280px) {
  .about-image-container {
    background-position-y: -140px;
  }
}
</style>