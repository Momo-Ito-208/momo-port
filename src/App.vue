<script setup lang="ts">
import Hero from './components/section/Hero.vue'
import About from './components/section/About.vue'
import Skills from './components/section/Skills.vue'
import Profile from './components/section/Profile.vue'
import Update from './components/section/Update.vue'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <Hero />
    <About />
    <Skills />
    <Profile />
    <Update />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.contents {
  padding: 1rem 2rem;
}

@media (min-width: 1024px) {
  .contents {
    padding: 1rem 15rem;
  }
}

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
