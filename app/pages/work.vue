<template>
  <section-wrapper id="work" title="Work">
    <p class="intro">
      Let me introduce you to a small selection of my recent works and projects. I am always up for new challenges and
      ideas. So if you need a helping hand as a developer for your app or website, feel free to <nuxt-link
        to="/contact">get in touch with me</nuxt-link>.
    </p>
    <div v-for="(project, index) in projectsData" :key="project.title" class="project-wrapper"
      :class="{ 'last-el': index === projectsData.length - 1 }">
      <div class="project-wrapper__screenshots">
        <nuxt-img :src="project.images[project.imgIndex]" format="webp" />
        <div class="img-controls">
          <button class="img-control right" @click="getElement(index)">
            <icon name="mi:chevron-right" />
          </button>
          <button class="img-control left" @click="getElement(index, 'previous')">
            <icon name="mi:chevron-left" />
          </button>

        </div>
      </div>
      <div class="project-wrapper__info">
        <header>
          <h4>{{ project.title }}</h4>
          <a :href="project.link" target="__blank">{{ project.link }}</a> <span> | </span> <a
            :href="project.github">GitHub</a>
        </header>
        <p>{{ project.description }}</p>
        <div class="project-wrapper__info-tools">
          <small>Tech stack used:</small>
          <p class="tools-wrapper">
            <span v-for="tool in project.tools" :key="tool" class="tool">{{ tool }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="cta-wrapper">
      <link-cta to="/skills" label="Check out my tech stack" />
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
const projectsData = ref([
  {
    images: [
      '/images/tagesmutter-ratzeburg_screenshot-desktop.png',
      '/images/tagesmutter-ratzeburg_screenshot-mobile.png'
    ],
    imgIndex: 0,
    title: 'Tagesmutter Ratzeburg (2025)',
    link: 'https://tagesmutter-ratzeburg.de',
    github: 'https://github.com/fniem/tagesmutter-ratzeburg.de',
    description: "Playful, colorful but modern website for a daycare center. Created with Nuxt 4 and with focus on SEO to better place this site against competition.",
    tools: ["Figma", "Nuxt 4", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"]
  },
  {
    images: [
      '/images/ludwigs-tanzwelt_screenshot-desktop.png',
    ],
    imgIndex: 0,
    title: 'Ludwigs Tanzwelt (2024)',
    link: 'https://ludwigs-tanzwelt.de',
    github: 'https://github.com/fniem/ludwigs-tanzwelt.de',
    description: "An SEO optimized website for a dancing school based in Lübeck. Created with Nuxt 3 as a frontend and Directus as a headless CMS for contents.",
    tools: ["Figma", "Nuxt 3", "Directus", "Docker", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"]
  },
  {
    images: [
      '/images/nora-warschewski_screenshot-desktop-1.png',
      '/images/nora-warschewski_screenshot-mobile-1.png',
      '/images/nora-warschewski_screenshot-desktop-2.png',
      '/images/nora-warschewski_screenshot-mobile-2.png',
    ],
    imgIndex: 0,
    title: 'Nora Warschewski (2022)',
    link: 'https://fniem.github.io/nora-warschewski',
    github: 'https://github.com/fniem/nora-warschewski',
    description: "A simple static website with clear structures and a dynamic grid layout for a designer friend, based on a Figma design created by her.",
    tools: ["Figma", "HTML", "Vanilla CSS", "JavaScript", "GitHub"]
  }
])

function getElement(index: number, direction = "next") {
  const currentElement = projectsData.value[index]

  if (!currentElement) return

  const currentIndex = currentElement.imgIndex;
  const lastIndex = currentElement.images.length - 1
  const isLastElement = currentIndex === lastIndex
  const isFirstElement = currentIndex === 0

  if (direction !== 'next') {
    if (isFirstElement) return currentElement.imgIndex = lastIndex

    return currentElement.imgIndex -= 1
  }

  if (isLastElement) return currentElement.imgIndex = 0

  return currentElement.imgIndex += 1
}
</script>

<style>
#work {
  .project-wrapper {
    display: grid;
    gap: 1rem;
    padding-block: 4rem;
    border-bottom: 1px solid var(--clr-blue-800);

    &.last-el {
      border-bottom: none;

      @media screen and (min-width:768px) {
        padding-bottom: 0;
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding-block: 8rem;
    }
  }


  .project-wrapper__screenshots {
    aspect-ratio: 4 / 3;
    display: flex;
    justify-content: center;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      margin-inline: auto;
    }

    .img-controls {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .img-control {
        background-color: var(--clr-blue-300);
        font-size: var(--size-txt-m);

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: white;
        }
      }
    }
  }

  .project-wrapper__info {
    header {
      margin-top: 2rem;

      h4 {
        color: var(--clr-blue-300);
        font-size: var(--size-txt-m);
      }

      a {
        color: white;

        &:hover {
          text-decoration: none;
        }
      }
    }

    .project-wrapper__info-tools {
      margin-top: 3rem;

      .tools-wrapper {
        margin-block: 0;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .tool {
          background-color: var(--clr-blue-500);
          color: var(--clr-blue-900);

          display: inline-block;
          padding: .25em .75em;
        }
      }
    }
  }
}
</style>