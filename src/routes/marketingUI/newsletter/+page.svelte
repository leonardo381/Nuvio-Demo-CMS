<script>
  import Newsletter from '$lib/components/marktingUI/newsletter.svelte'; // path must match exactly (case, folders)


  const newsletterDefault = {
  title: "Sign up for our newsletter",
  description:
    "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
  formAction: "#",
  input: {
    id: "email",
    label: "Email address",
    placeholder: "Enter your email",
    iconSvg:
      `<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`
  },
  buttonText: "Subscribe",
  footer: {
    text: "We care about the protection of your data. ",
    linkText: "Read our Privacy Policy",
    href: "#"
  }
};

  const newsletterCard = {
  title: "Sign up for our newsletter",
  description:
    "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
  formAction: "#",
  input: {
    id: "member_email",
    label: "Email address",
    placeholder: "Enter your email",
    iconSvg:
      `<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`
  },
  buttonText: "Subscribe",
  footer: {
    text: "We care about the protection of your data.",
    linkText: "Read our Privacy Policy",
    href: "#"
  }
};
  const newsletterBanner = {
  text: "Subscribe to get updates!",
  formAction: "#",
  input: {
    id: "email",
    label: "Email address",
    placeholder: "Your email",
    iconSvg: `<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path></svg>`
  },
  buttonText: "Subscribe",
  closeIcon: `<svg class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>`
};

    const newslettePopup = {
  title: "Join our Newsletter",
  description:
    "Get started with our monthly newsletter for helpful tips on how to run your business smoothly.",
  formAction: "#",
  input: {
    id: "email",
    label: "Email address",
    placeholder: "Your email",
    iconSvg: `<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path></svg>`
  },
  buttonText: "Subscribe",
  closeIcon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
};

    const newsletterModal = {
  imageSrc:
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/people-at-office.png",
  imageAlt: "office",
  title: "Join our Newsletter",
  description:
    "Get started with our monthly newsletter for helpful tips on how to run your business smoothly.",
  formAction: "#",
  input: {
    id: "email",
    label: "Email address",
    placeholder: "Your email",
    iconSvg: `<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path></svg>`
  },
  buttonText: "Subscribe",
  closeIcon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
};
</script>

<!-- render it -->
<Newsletter variant="newsletterDefault" data={newsletterDefault} />
<Newsletter variant="newsletterCard" data={newsletterCard} />
<Newsletter variant="newsletterBanner" data={newsletterBanner} />
<Newsletter variant="newslettePopup" data={newslettePopup} />
<Newsletter variant="newsletterModal" data={newsletterModal} />