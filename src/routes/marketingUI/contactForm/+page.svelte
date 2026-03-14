<script>
  import ContactForm from '$lib/components/marktingUI/contactForm.svelte'; // path must match exactly (case, folders)

export const contactSection = {
  title: "Contact Us",
  description:
    "We use an agile approach to test assumptions and connect with the needs of your audience early and often.",
  form: {
    firstNameLabel: "First name",
    firstNamePlaceholder: "Bonnie",
    lastNameLabel: "Last name",
    lastNamePlaceholder: "Green",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+351 912 345 678",
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us a bit about your project…",
    submitLabel: "Send message",
    termsHtml:
      'By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a>.'
  },
  info: [
    {
      title: "Company information:",
      text: "Themesberg LLC <br>Tax id: USXXXXXX",
      icon: `<svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/></svg>`
    },
    {
      title: "Address:",
      text: "SILVER LAKE, United States 1941 Late Avenue <br> Zip Code/Postal code: 03875",
      icon: `<svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>`
    },
    {
      title: "Call us:",
      text:
        'Call us to speak to a member of our team. We are always happy to help.<br><span class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</span>',
      icon: `<svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>`
    }
  ]
};

const p1 = {
  cards: [
    { title: 'Company information:', text: 'Flowbite LLC<br>Tax id: USXXXXXX', iconHtml: '<svg class="w-10 h-10" .../>' },
    { title: 'Address:', text: 'SILVER LAKE…<br>03875', iconHtml: '<svg class="w-10 h-10" .../>' },
    { title: 'Contact us:', text: 'Email us for general queries…', link: { href:'#', label:'hello@flowbite.com' }, iconHtml: '<svg class="w-10 h-10" .../>' }
  ],
  form: {
    firstName: { label: 'First name', placeholder: 'Bonnie' },
    lastName:  { label: 'Last name',  placeholder: 'Green'  },
    email:     { label: 'Your email', placeholder: 'name@flowbite.com', required: true },
    phone:     { label: 'Phone number', placeholder: '+(12) 345 6789' },
    country: {
      label: 'Country',
      placeholder: 'Select a country',
      options: [{value:'US',label:'United States',selected:true},{value:'DE',label:'Germany'}],
      popover: { html: '<h3 class="font-semibold">Country based on fiscal residency</h3><p>…</p>' }
    },
    language: {
      label: 'Language',
      placeholder: 'Select a language',
      options: [{value:'US',label:'English (US)',selected:true},{value:'DE',label:'German'}],
      popover: { html: '<h3 class="font-semibold">Choosing an international language</h3><p>…</p>' }
    },
    message: { label: 'Your message', rows: 6, placeholder: '' },
    terms: 'I confirm that you have read and agreed to <a href="#">Terms</a> and <a href="#">Privacy</a>.',
    submitLabel: 'Send message'
  }
};
</script>

<!-- render it -->
<ContactForm variant="contactSection" data={contactSection} />

