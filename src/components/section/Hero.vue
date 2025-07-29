<template>
  <section id="hero" class="hero">
    <div class="hero__inner">
      <h1>Momo-Port</h1>
      <p>エンジニアとして生きていきたい、私 伊藤 桃がポートフォリオとして公開しているサイトです</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-color: hsl(0, 0%, 84%);
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner{
    min-width: 45vw;
    padding: 5rem 1rem;
    text-align: center;

    p {
      margin-top: 1.5rem;
    }
  }
}

h1 {
  text-align: left;
  margin-left: 0;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 0.9;
}

@media (prefers-color-scheme: dark) {
  .hero {
    background-color: rgba(111, 111, 111, 0.48);
  }
}
</style>