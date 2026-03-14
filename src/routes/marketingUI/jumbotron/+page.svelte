<script>
  import Jumbotron from '$lib/components/marktingUI/jumbotron.svelte'; // path must match exactly (case, folders)

  export const jumbotronDefault = {
  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  ctas: [
    {
      label: "Get started",
      href: "#",
      iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>`,
      iconPosition: "right"
    },
    {
      label: "Learn more",
      href: "#",
      variant: "outline"
    }
  ]
};

export const jumbotronBackgroundImage = {
  backgroundImage:
    "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  ctas: [
    {
      label: "Get started",
      href: "#",
      iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`,
      iconPosition: "right"
    },
    {
      label: "Learn more",
      href: "#",
      variant: "outline"
    }
  ]
};

export const jumbotronVideo = {
  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  videoUrl: "https://www.youtube.com/embed/KaLxCiilHns",
  videoTitle: "We invest in the world’s potential",
  ctas: [
    {
      label: "Get started",
      href: "#",
      iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`,
      iconPosition: "right"
    },
    {
      label: "Learn more",
      href: "#",
      variant: "outline"
    }
  ]
};

export const jumbotronAutForm = {
  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  link: {
    label: "Read more about our app",
    href: "#",
    iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`
  },
  formTitle: "Sign in to Flowbite",
  formAction: "#",
  rememberLabel: "Remember this device",
  lostPassword: {
    label: "Lost Password?",
    href: "#"
  },
  submit: {
    label: "Login to your account"
  },
  footer:
    `Not registered yet? <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>`
};

export const jumbotronGradientBackground = {
  sectionClass: "", // extra classes if you want
  bgLight: "bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]",
  bgDark: "dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]",

  announcement: {
    href: "#",
    badge: "New",
    text: "Jumbotron component was launched! See what's new",
    iconSvg: `<svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>`
  },

  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",

  form: {
    action: "#",
    method: "post",
    name: "email",
    label: "Email sign-up",
    placeholder: "Enter your email here...",
    buttonLabel: "Sign up"
    // iconSvg: "<svg>...</svg>" // optional custom icon
  },

  overlay: true,
  overlayClass: ""
};

export const jumbotronCards = {
  featured: {
    badge: {
      label: "Tutorial",
      href: "#",
      class: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400",
      iconSvg: `<svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14"><path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/></svg>`
    },
    title: "How to quickly deploy a static website",
    text:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    cta: {
      href: "#",
      label: "Read more",
      iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`
    }
  },

  cards: [
    {
      badge: {
        label: "Design",
        href: "#",
        class: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400",
        iconSvg: `<svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/></svg>`
      },
      title: "Start with Flowbite Design System",
      text:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
      link: {
        href: "#",
        label: "Read more",
        iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`
      }
    },
    {
      badge: {
        label: "Code",
        href: "#",
        class: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400",
        iconSvg: `<svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/></svg>`
      },
      title: "Best react libraries around the web",
      text:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
      link: {
        href: "#",
        label: "Read more",
        iconSvg: `<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>`
      }
    }
  ]
};
</script>

<!-- render it -->
<Jumbotron variant="jumbotronDefault" data={jumbotronDefault} />
<Jumbotron variant="jumbotronBackgroundImage" data={jumbotronBackgroundImage} />
<Jumbotron variant="jumbotronVideo" data={jumbotronVideo} />
<Jumbotron variant="jumbotronAutForm" data={jumbotronAutForm} />
<Jumbotron variant="jumbotronGradientBackground" data={jumbotronGradientBackground} />
<Jumbotron variant="jumbotronCards" data={jumbotronCards} />