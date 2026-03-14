<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet contactSection(p)}
  <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
              <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
              <div class="col-span-2 mb-8 lg:mb-0">
                  <form action="#" class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
                      <div>
                          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                          <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
                      </div>
                      <div>
                          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                          <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                      </div>
                      <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                          <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                      <div class="sm:col-span-2">
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                          <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                          <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                      </div>
                      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                  </form>
              </div>
              <div class="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Company information:</p>
                      <p class="text-gray-500 dark:text-gray-400">Themesberg LLC <br>Tax id: USXXXXXX</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Address:</p>
                      <p class="text-gray-500 dark:text-gray-400">SILVER LAKE, United States 1941 Late Avenue <br> Zip Code/Postal code:03875</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Call us:</p>
                      <p class="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                      <p class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
{/snippet}

{#snippet contactCardsAndForm(p)}
<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">

    <!-- Top info cards -->
    {#if p.cards && p.cards.length}
      <div class="grid grid-cols-1 gap-6 text-center sm:gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {#each p.cards as card, i}
          <div class={card.wrapperClass ?? (i === 2 ? 'hidden lg:block' : '')}>
            {#if card.iconHtml}
              <div class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
                {@html card.iconHtml}
              </div>
            {/if}

            {#if card.title || card.text || card.link}
              <div class="mt-4">
                {#if card.title}
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                {/if}

                {#if card.text}
                  <p class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    {@html card.text}
                  </p>
                {/if}

                {#if card.link}
                  <a href={card.link.href} title={card.link.title ?? ''} class="block mt-1 text-base font-semibold text-gray-900 dark:text-white hover:underline">
                    {card.link.label}
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}

    <!-- Form -->
    {#if p.form}
      <div class="max-w-3xl mx-auto mt-8 lg:mt-24">
        <form action={p.form.action ?? '#'} class="grid max-w-screen-md grid-cols-1 mx-auto gap-x-8 gap-y-6 sm:grid-cols-2">

          {#if p.form.firstName}
            <div>
              {#if p.form.firstName.label}<label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.firstName.label}</label>{/if}
              <input id="first-name" type="text" placeholder={p.form.firstName.placeholder ?? ''} required={p.form.firstName.required ?? false}
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>
          {/if}

          {#if p.form.lastName}
            <div>
              {#if p.form.lastName.label}<label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.lastName.label}</label>{/if}
              <input id="last-name" type="text" placeholder={p.form.lastName.placeholder ?? ''} required={p.form.lastName.required ?? false}
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>
          {/if}

          {#if p.form.email}
            <div>
              {#if p.form.email.label}<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.email.label}</label>{/if}
              <input id="email" type="email" placeholder={p.form.email.placeholder ?? ''} required={p.form.email.required ?? false}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>
          {/if}

          {#if p.form.phone}
            <div>
              {#if p.form.phone.label}<label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.phone.label}</label>{/if}
              <input id="phone-number" type="tel" placeholder={p.form.phone.placeholder ?? ''} required={p.form.phone.required ?? false}
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
            </div>
          {/if}

          {#if p.form.country}
            <div>
              <div class="flex items-center gap-1.5 mb-2">
                {#if p.form.country.label}<label for="country" class="block text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.country.label}</label>{/if}
                {#if p.form.country.popover}
                  <button type="button" data-popover-target="country-description" class="w-4 h-4">
                    {@html p.form.country.popover.icon ?? `<svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`}
                    <span class="sr-only">Show information</span>
                  </button>
                  <div data-popover id="country-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                    <div class="p-3 space-y-2">
                      {@html p.form.country.popover.html}
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                {/if}
              </div>
              <select id="country"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {#if p.form.country.placeholder}<option>{p.form.country.placeholder}</option>{/if}
                {#each p.form.country.options ?? [] as opt}
                  <option value={opt.value} selected={opt.selected ?? false}>{opt.label}</option>
                {/each}
              </select>
            </div>
          {/if}

          {#if p.form.language}
            <div>
              <div class="flex items-center gap-1.5 mb-2">
                {#if p.form.language.label}<label for="language" class="block text-sm font-medium text-gray-900 dark:text-gray-300">{p.form.language.label}</label>{/if}
                {#if p.form.language.popover}
                  <button type="button" data-popover-target="language-description" class="w-4 h-4">
                    {@html p.form.language.popover.icon ?? `<svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`}
                    <span class="sr-only">Show information</span>
                  </button>
                  <div data-popover id="language-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                    <div class="p-3 space-y-2">
                      {@html p.form.language.popover.html}
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                {/if}
              </div>
              <select id="language"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {#if p.form.language.placeholder}<option>{p.form.language.placeholder}</option>{/if}
                {#each p.form.language.options ?? [] as opt}
                  <option value={opt.value} selected={opt.selected ?? false}>{opt.label}</option>
                {/each}
              </select>
            </div>
          {/if}

          {#if p.form.message}
            <div class="sm:col-span-2">
              {#if p.form.message.label}<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{p.form.message.label}</label>{/if}
              <textarea id="message" rows={p.form.message.rows ?? 6} placeholder={p.form.message.placeholder ?? ''}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
            </div>
          {/if}

          {#if p.form.terms}
            <div class="sm:col-span-2">
              <div class="flex items-start">
                <input type="checkbox" id="terms" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="terms" class="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                  {@html p.form.terms}
                </label>
              </div>
            </div>
          {/if}

          {#if p.form.submit !== false}
            <button type="submit"
              class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              {p.form.submitLabel ?? 'Send message'}
            </button>
          {/if}

        </form>
      </div>
    {/if}

  </div>
</section>
{/snippet}

{#snippet contactCardsAndForm1(p)}
<section class="bg-white dark:bg-gray-900">
      <div class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
          <div class="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
              <p class="mb-16 font-light text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div> 
      </div>
      <div class="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
          <form action="#" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
              <div>
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                  <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
              </div>
              <div>
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                  <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
              </div>
              <div>
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                  <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
          <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Email us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="mailto:abc@example.com" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">hello@flowbite.com</a>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Call us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                  <span class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</span>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Support</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="#" class="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg border text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-800">Support center</a>
              </div>
          </div>
      </div>
  </section>
{/snippet}

{#snippet contactCardsAndForm2(p)}
<section class="bg-white dark:bg-gray-900">
      <div class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
          <div class="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
              <p class="mb-16 font-light text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div> 
      </div>
      <div class="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
          <form action="#" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
              <div>
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                  <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
              </div>
              <div>
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                  <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
              </div>
              <div>
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                  <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
          <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Email us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="mailto:abc@example.com" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">hello@flowbite.com</a>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Call us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                  <span class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</span>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Support</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="#" class="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg border text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-800">Support center</a>
              </div>
          </div>
      </div>
  </section>
{/snippet}
 
<!-- render only the requested snippet -->

<div>
  {#if variant === 'contactSection'}
    {@render contactSection(data)}
  {:else if variant === 'contactCardsAndForm'}
    {@render contactCardsAndForm(data)}
  {:else if variant === 'contactCardsAndForm1'}
    {@render contactCardsAndForm(data)}
  {:else if variant === 'contactCardsAndForm2'}
    {@render contactCardsAndForm(data)}
  {/if}
</div>
