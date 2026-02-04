<template>
  <header class="max-w">
    <h1>
      <nuxt-link to="/">
        Ferdinand Niemann
      </nuxt-link>
    </h1>
    <div class="buttons-wrapper">
      <a href="https://github.com/moinferdi" target="_blank" class="btn social" :class="{ 'social-toggled': navOpen }">
        <span>
          <icon name="ri:github-line" />
        </span>
      </a>
      <a href="https://linkedin.com/in/moinferdi" target="_blank" class="btn social" :class="{ 'social-toggled': navOpen }">
        <span>
          <icon name="ri:linkedin-line" />
        </span>
      </a>
      <button class="btn" @click="navOpen = !navOpen">
        <span :class="{ toggled: navOpen }">

          <icon name="mi:arrow-left" />
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
const navOpen = useState('nav', () => false);
</script>

<style scoped>
header {
  padding: var(--padding-container);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  isolation: isolate;
  z-index: 4;

  h1 {
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    z-index: 3;

    a {
      color: white;
      text-decoration: none;
    }

    @media screen and (min-width: 768px) {
      letter-spacing: .25rem;
    }
  }

  .buttons-wrapper {
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 4;

    @media screen and (min-width: 768px) {
      gap: 2rem;
    }

    .btn {
      font-size: var(--size-txt-l);
      background-color: var(--clr-blue-300);
      color: var(--clr-blue-900);

      width: 3.25rem;
      aspect-ratio: 1;

      display: flex;


      border: 2px solid transparent;

      &.social {
        background-color: transparent;
        border-color: var(--clr-blue-300);

        color: white;

        &:hover {
          border-color: white;
        }

        &.social-toggled {
          color: var(--clr-blue-900);
        }
      }


      &:not(.outline):hover {
        background-color: white;
        color: var(--clr-blue-900);
      }

      >span {
        transition: transform 200ms;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.toggled {
          transform: rotate(180deg);
        }
      }

    }

  }
}
</style>
