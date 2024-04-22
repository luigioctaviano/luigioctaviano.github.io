<template>
    <section class="about-container" id="aboutMyself">
      <div class="about-text-container">
        <div class="about-text">
          <h4 class="about-text-header">Who am I?</h4>
          <p class="about-text-subheader">
            I am a developer with 7+ years of Experience in Web Development. <br>
            Currently focused on Front-End but can do Back-End as well.
          </p>
          <button class="about-button" onclick="location.href='#whatIdo';">See What I do</button>
        </div>
      </div>
      <div class="about-image-container"></div>
    </section>
</template>
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

.about-image-container {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,205,0,1) 100%);
}

@media only screen and (min-width: 992px) {
  .about-container {
    flex-direction: row;
  }

  .about-text-container,
  .about-image-container {
    width: 50%;
  }

  .about-image-container {
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,205,0,1) 100%);
  }

  .about-text {
    text-align: left;
  }

  .about-text-header {
    font-size: 48px;
  }

  .about-text-subheader {
    font-size: 18px;
  }
}
</style>