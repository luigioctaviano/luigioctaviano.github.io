<template>
  <section class="hero-container">
    <div class="hero-title">
      <h1 class="hero-title-text">Luis Rafael S. Octaviano</h1>
      <p class="hero-subtitle-text">Web Developer</p>
      <button class="hero-button" onclick="location.href='#aboutMyself';">See my profile</button>
    </div>
  </section>
</template>
<style scoped>
.hero-container {
  background: linear-gradient(45deg, #30BFC7 0%, #316699 50%, #311A70 100%);
  background-size: 200% 200%;
  animation: animate-gradient 10s infinite ease;
  height: 100vh;
  display: grid;
}

@keyframes animate-gradient {
	0% { background-position:10% 0% }
  50% { background-position:91% 100% }
  100% { background-position:10% 0% }
}

.hero-title {
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  align-content: center;
  color: #FFF;
}

.hero-title-text {
  font-size: 40px;
  font-weight: bolder;
}

.hero-subtitle-text {
  font-size: 20px;
}

.hero-button {
  border-radius: 50px;
  border: 1px solid white;
  background-color: transparent !important;
  color: #FFF;
  padding: 15px 25px;
  font-family: 'Montserrat';
  font-size: 17px;
  margin: 20px;
  cursor: pointer;
}

@media only screen and (min-width: 992px) {
  .hero-title-text {
    font-size: 48px;
  }

  .hero-subtitle-text {
    font-size: 32px;
  }
}
</style>