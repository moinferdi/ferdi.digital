<template>
  <section-wrapper id="contact" title="Let's chat!">
    <div class="contact-wrapper">
      <div>
        <p>You have an interesting project I could help you with? You need a website? Whatever it is,
          let's
          get in touch! Either use one of the below contact options or just use my contact form. Either way, I'll try
          and
          get back to you as soon as possible.</p>
        <div class="contact-info-wrapper">
          <a href="mailto:moin@ferdi.digital" target="_blank" class="contact-option">
            <icon name="mi:email" />
            <span>moin@ferdi.digital</span>
          </a>
          <a href="https://linkedin.com/in/moinferdi" target="_blank" class="contact-option">
            <icon name="ri:linkedin-fill" />
            <span>linkedin.com/in/moinferdi</span>
          </a>
        </div>
      </div>
      <form @submit.prevent="sendMail">
        <div class="label-wrapper">
          <label for="name">Your name</label>
          <input id="name" v-model="form.name" type="text" name="name" required>
          <input id="last-name" v-model="form.honeypot" type="text" name="last-name" autocomplete="off" tabindex="-1">
        </div>
        <div class="label-wrapper">
          <label for="mail">Your email address</label>
          <input id="mail" v-model="form.mail" type="email" name="mail" required>
        </div>
        <div class="label-wrapper">
          <label for="phone">Your phone number (optional)</label>
          <input id="phone" v-model="form.phone" type="phone" name="phone">
        </div>
        <div class="label-wrapper">
          <label for="message">Your message</label>
          <textarea id="message" v-model="form.message" name="message" rows="5" required />
        </div>
        <div class="privacy-wrapper">
          <input id="privacy-check" v-model="form.privacyCheck" type="checkbox" name="privacy-check" required />
          <label for="privacy-check">I agree that my data is stored and processed to answer my request. <nuxt-link
              to="/privacy">
              (See Privacy
              Notice)
            </nuxt-link></label>
        </div>
        <button :disabled="isLoading">{{ isLoading ? 'Sending...' : 'Send' }}</button>
        <div v-if="successMessage" class="message success-message">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="message error-message">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
interface ContactResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

useHead({
  title: 'Contact Me - Ferdinand Niemann',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Ferdinand Niemann for web development or app projects, collaborations, or inquiries.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Person",
          "name": "Ferdinand Niemann",
          "email": "mailto:moin@ferdi.digital",
          "telephone": "+49 173 683 4611",
          "url": "https://ferdi.digital/contact"
        }
      })
    }
  ]
})

const form = ref<{
  name: string;
  mail: string;
  phone: string;
  message: string;
  privacyCheck: boolean;
  honeypot: string;
}>(
  {
    name: '',
    mail: '',
    phone: '',
    message: '',
    privacyCheck: false,
    honeypot: ' '
  }
)

const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

async function sendMail() {
  successMessage.value = '';
  errorMessage.value = '';
  isLoading.value = true;

  try {
    const response = await $fetch<ContactResponse>('/api/contact', {
      method: 'POST',
      body: form.value,
    });

    if (response.success) {
      successMessage.value = response.message || 'Your message has been sent successfully!';
      form.value = {
        name: '',
        mail: '',
        phone: '',
        message: '',
        privacyCheck: false,
        honeypot: form.value.honeypot
      };

      setTimeout(() => {
        successMessage.value = '';
      }, 5000);
    }
  } catch (error: unknown) {
    const err = error as { data?: { statusMessage?: string } };
    errorMessage.value = err.data?.statusMessage || 'Failed to send your message. Please try again.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
#contact {
  .contact-wrapper {
    display: grid;
    gap: 4rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-info-wrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .contact-option {
      background-color: var(--clr-blue-300);
      color: var(--clr-blue-900);
      text-decoration: none;

      padding: 1rem;

      display: grid;
      justify-items: center;
      gap: 1rem;

      span {
        &:first-of-type {
          font-size: var(--size-txt-l);
        }
      }

      &:hover {
        background-color: white;
      }
    }
  }

  form {
    display: grid;
    gap: 2rem;

    .label-wrapper {
      position: relative;

      label {
        --padding-left: .5rem;
        --border-left: 2px;

        background-color: var(--clr-blue-900);

        display: inline-block;
        padding: .25rem .75rem;
        border: 2px solid transparent;

        position: absolute;
        left: calc(var(--padding-left) + var(--border-left));

        transform: translateY(-50%);

        &:has(+input:focus),
        &:has(+input:hover),
        &:has(+textarea:focus),
        &:has(+textarea:hover) {
          background-color: white;
          color: var(--clr-blue-900);
        }
      }

      #name,
      #last-name,
      #mail,
      #phone,
      #message {
        font-size: var(--size-txt-m);
        background-color: var(--clr-blue-300);
        font-family: inherit;

        padding: 1rem .5rem;
        border: 2px solid transparent;
        width: 100%;

        &:focus {
          outline: unset;
          background-color: white;
        }

        &:hover {
          border-color: white;
        }
      }

    }

    #last-name {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }

    .privacy-wrapper {
      a {
        color: inherit;
      }
    }

    button {
      font-size: inherit;
      font-family: inherit;
      background-color: transparent;
      color: white;

      border: 2px solid var(--clr-blue-300);
      padding: var(--padding-btn-m);

      &:hover:not(:disabled) {
        background-color: var(--clr-blue-300);
        color: var(--clr-blue-900);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .message {
      padding: 1rem;
      border-radius: 4px;
      font-size: var(--size-txt-m);

      &.success-message {
        background-color: #4caf50;
        color: white;
        border: 2px solid #45a049;
      }

      &.error-message {
        background-color: #f44336;
        color: white;
        border: 2px solid #da190b;
      }
    }
  }
}
</style>
