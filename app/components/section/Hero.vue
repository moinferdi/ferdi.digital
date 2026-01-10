<template>
  <div id="home">
    <div class="hero-wrapper">
      <div class="hero container">
        <nuxt-img src="/images/profile.jpg" format="webp" />
        <h2>Moin! I'm a developer and I <span> center divs with ease</span>.</h2>
        <div class="cta-wrapper">
          <link-cta to="#facts" label="Find out more" />
          <link-cta to="/contact" label="Get in touch" type="outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 1);
  pointer-events: none;
  transition: opacity 0.1s ease-out;
  z-index: 10;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: var(--margin-block);

  @media screen and (min-width: 768px) {
    --margin-block: calc(16rem + 5vw);

    position: relative;
  }

  img {
    width: 75%;
    aspect-ratio: 1;
    object-fit: cover;

    position: absolute;
    top: calc(var(--margin-block) / -1.5);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 33%;
    }
  }

  h2 {
    font-size: var(--size-txt-xl);
    text-align: center;
    margin-block: 2.5rem;

    @media screen and (min-width: 768px) {
      margin-inline: auto;
      width: 60%;
    }

    span {
      color: var(--clr-blue-300);
      font-weight: 700;
      font-style: italic;
    }
  }

  .cta-wrapper {
    display: flex;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      margin-top: 3rem;
    }

    a {
      background-color: var(--clr-blue-300);
      text-decoration: none;
      color: var(--clr-blue-900);
      padding: var(--padding-btn-l);
      border: 2px solid var(--clr-blue-300);
      font-size: var(--size-txt-sm);

      @media screen and (min-width: 768px) {
        font-size: var(--size-regular);
      }

      &:hover {
        background-color: transparent;
        color: var(--clr-blue-300);
      }

      &.outline {
        background-color: transparent;
        color: var(--clr-blue-300);

        &:hover {
          background-color: var(--clr-blue-300);
          color: var(--clr-blue-900);
        }
      }
    }
  }
}
</style>