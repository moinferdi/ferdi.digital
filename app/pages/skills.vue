<template>
  <section-wrapper id="skills" title="My stack and skills">
    <p class="intro">
      My entire career as a developer has been shaped not only by strong motivation and determination, but also by an
      insatiable curiosity for knowledge. Deepening my practical skills and remaining open to new ideas is essential to
      me. I quickly familiarize myself with new frameworks, technologies, and workflows using methods I have refined
      over time for me, so that I can be a reliable and valuable team member others can always depend on.
    </p>
    <div class="categories-wrapper">
      <div v-for="category in skills" :key="category.title" class="skill-category">
        <h4>{{ category.title }}</h4>
        <template v-if="category?.categories">
          <div v-for="childCategory in category?.categories" :key="childCategory.title" class="category-wrapper">
            <h5>{{ childCategory.title }}</h5>
            <div class="skills-wrapper">
              <span v-for="skill in childCategory.stack" :key="skill" class="skill">{{ skill }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="skills-wrapper">
            <span v-for="skill in category.stack" :key="skill" class="skill">{{ skill }}</span>
          </div>
        </template>
      </div>
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'My Skills & Tech Stack - Ferdinand Niemann',
  meta: [
    {
      name: 'description',
      content: 'Discover the diverse skill set and tech stack of Ferdinand Niemann, a full-stack developer specializing in modern web applications and innovative app solutions.'
    }
  ]
})

const skills = [
  {
    title: "Frontend",
    categories: [
      {
        title: "Frameworks & Platforms",
        stack: ["Nuxt", "Vue", "Next.js", "React", "React Native", "Astro"]
      },
      {
        title: "Languages & Markup",
        stack: ["TypeScript", "JavaScript", "HTML"]
      },
      {
        title: "Styling",
        stack: ["TailwindCSS", "SCSS", "CSS"]
      }
    ]
  },

  {
    title: "Backend",
    categories: [
      {
        title: "Runtimes & Languages",
        stack: ["Node.js", "Bun", "PHP"]
      },
      {
        title: "Frameworks",
        stack: ["Express", "Symfony", "Laravel"]
      },
      {
        title: "CMS & BaaS",
        stack: ["TYPO3", "Directus", "Firebase", "Pimcore"]
      }
    ]
  },

  {
    title: "Databases",
    stack: ["PostgreSQL", "MongoDB", "MySQL"]
  },

  {
    title: "AI Tools & Agents",
    stack: ["ChatGPT", "Claude Sonnet 4", "GitHub Copilot Agent"]
  },

  {
    title: "Testing",
    stack: ["Jest", "Cypress"]
  },

  {
    title: "DevOps & CI / CD",
    stack: ["Docker", "Git", "GitHub", "SSH", "Linux"]
  }
];
</script>

<style>
#skills {
  h4 {
    font-size: var(--size-txt-m);
    color: var(--clr-blue-300);
  }

  .categories-wrapper {
    margin-top: 4rem;

    @media screen and (min-width: 768px) {
      margin-top: 8rem;
    }

    .skill-category+.skill-category {
      margin-top: 4rem;
    }

    h5 {
      margin-block: 2rem 0;
    }

    .skills-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .skill {
        font-size: var(--size-txt-m);
        background-color: var(--clr-blue-500);

        padding: var(--padding-btn-m)
      }
    }
  }
}
</style>