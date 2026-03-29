<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet popupDefault(p)}
<!--fixed top-0 right-0 left-0-->
<div
  id="info-popup"
  tabindex="-1"
  class="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full"
>
  <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
      <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
        {#if p.title}
          <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            {p.title}
          </h3>
        {/if}

        {#if p.description}
          <p>{p.description}</p>
        {/if}
      </div>

      <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
        {#if p.link}
          <a
            href={p.link.href ?? "#"}
            class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            {p.link.label}
          </a>
        {/if}

        <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
          {#if p.cancelButtonLabel}
            <button
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {p.cancelButtonLabel}
            </button>
          {/if}

          {#if p.confirmButtonLabel}
            <button
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.confirmButtonLabel}
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet popupNewsletter(p)}
<!--fixed right-0-->
<div
  id="newsletter-pop-up"
  tabindex="-1"
  class=" bottom-4 z-50 p-4 mx-4 max-w-md bg-white rounded-lg border border-gray-200 shadow md:mx-0 md:right-6 sm:bottom-6 dark:bg-gray-800 md:p-6 dark:border-gray-700"
>
  <div class="flex items-start">
    <div>
      {#if p.title}
        <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {p.title}
        </h3>
      {/if}

      {#if p.description}
        <p class="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {p.description}
        </p>
      {/if}
    </div>

      <button data-collapse-toggle="newsletter-pop-up" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" id="close-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
      </button>
  </div>

  <form action={p.formAction ?? "#"}>
    <div class="relative z-0 mb-4">
      <input
        type="text"
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
        placeholder=" "
        required={p.emailInput?.required ?? true}
      />
      <label
        for="floating_email"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {p.emailInput?.label ?? "Email"}
      </label>
    </div>

    <div class="relative z-0 mb-7">
      <input
        type="text"
        id="floating_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
        placeholder=" "
        required={p.nameInput?.required ?? true}
      />
      <label
        for="floating_name"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {p.nameInput?.label ?? "Name"}
      </label>
    </div>

    <div>
      <button
        type="submit"
        class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {p.buttonText ?? "Subscribe"}
      </button>
    </div>
  </form>
</div>
{/snippet}

{#snippet popupPromotional(p)}
<div id="promo-popup" tabindex="-1" class="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full">
  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-6">
          {#if p.bannerImage}
            <img src={p.bannerImage} class="mb-4 rounded" alt={p.bannerAlt ?? "banner"}>
          {/if}
          <div class="flex items-center mb-2.5">
              {#if p.badge}
                <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 inline-flex items-center py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                    {#if p.badge.iconSvg}
                      {@html p.badge.iconSvg}
                    {/if}
                    {p.badge.label}
                </span>
              {/if}
              {#if p.date}
                <span class="text-sm text-gray-500 dark:text-gray-400">{p.date}</span>
              {/if}
          </div>
          <div class="mb-5 text-sm font-light text-gray-500 dark:text-gray-400">
              {#if p.title}
                <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
              {/if}
              {#if p.contentHtml}
                {@html p.contentHtml}
              {/if}
          </div>
          <div class="flex items-center pt-0 space-x-4">
              {#if p.primaryAction}
                <a href={p.primaryAction.href ?? "#"} class="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{p.primaryAction.label}</a>
              {/if}
              {#if p.secondaryAction}
                <button id="close-modal" type="button" class="py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">{p.secondaryAction.label}</button>
              {/if}
          </div>
      </div>
  </div>
</div>
{/snippet}

{#snippet popupAuthentication(p)}
<div id="auth-pop-up" tabindex="-1" class="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full">
  <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-6">
          <div class="flex items-center mb-6">
              {#if p.brand}
                <a href={p.brand.href ?? "#"} class="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                    {#if p.brand.logoSvg}
                      {@html p.brand.logoSvg}
                    {/if}
                    {p.brand.label}
                </a>
              {/if}
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" id="close-modal">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
          <form action={p.formAction ?? "#"}>
              {#if p.headingHtml}
                <h2 class="mb-4 text-lg font-light text-gray-500 dark:text-white">
                  {@html p.headingHtml}
                </h2>
              {/if}

              <div class="flex items-center mb-6 space-x-4">
                    {#if p.githubButton}
                      <a href={p.githubButton.href ?? "#"} class="w-full inline-flex items-center justify-center text-white bg-[#333] hover:bg-[#1a1919] dark:focus:ring-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {#if p.githubButton.iconSvg}
                          {@html p.githubButton.iconSvg}
                        {/if}
                        {p.githubButton.label}
                    </a>
                    {/if}

                    {#if p.googleButton}
                      <a href={p.googleButton.href ?? "#"} class="w-full inline-flex items-center justify-center text-white bg-[#4284F4] hover:bg-[#3372df] dark:focus:ring-[#0f53c9] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {#if p.googleButton.iconSvg}
                          {@html p.googleButton.iconSvg}
                        {/if}
                        {p.googleButton.label}
                    </a>
                    {/if}
              </div>

              <div class="flex items-center mb-6">
                    <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <div class="px-5 text-center text-gray-500 dark:text-gray-400">{p.dividerText ?? "or"}</div>
                    <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {p.emailField?.label}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={p.emailField?.placeholder ?? ""}
                    required={p.emailField?.required ?? false}
                  >
              </div>

              <div class="mb-6">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {p.passwordField?.label}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder={p.passwordField?.placeholder ?? ""}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={p.passwordField?.required ?? false}
                  >
              </div>

              <div class="mb-6">
                  <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {p.repeatPasswordField?.label}
                  </label>
                  <input
                    type="repeat-password"
                    name="repeat-password"
                    id="repeat-password"
                    placeholder={p.repeatPasswordField?.placeholder ?? ""}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required={p.repeatPasswordField?.required ?? false}
                  >
              </div>

              <div class="flex items-start mb-3">
                  <div class="flex items-center h-5">
                      <input id="newsletter" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                  </div>
                  <div class="ml-3 text-sm">
                      <label for="newsletter" class="text-gray-500 dark:text-gray-400">
                        {p.newsletterLabel}
                      </label>
                  </div>
              </div>

              <div class="flex items-start mb-4">
                  <div class="flex items-center h-5">
                      <input id="terms" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={p.termsRequired ?? false}>
                  </div>
                  <div class="ml-3 text-sm">
                      <label for="terms" class="text-gray-500 dark:text-gray-400">
                        {@html p.termsHtml ?? ""}
                      </label>
                  </div>
              </div>

              {#if p.submitButton}
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                  {p.submitButton.label}
                </button>
              {/if}

              <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                  {#if p.footerText}
                    {p.footerText}
                  {/if}
                  {#if p.footerLink}
                    <a href={p.footerLink.href ?? "#"} class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500 hover:text-primary-700">
                      {p.footerLink.label}
                    </a>
                  {/if}
              </p>
            </form>
      </div>
  </div>
</div>
{/snippet}


{#if variant === 'popupDefault'}
  {@render popupDefault(data)}
{:else if variant === 'popupNewsletter'}
  {@render popupNewsletter(data)}
{:else if variant === 'popupPromotional'}
  {@render popupPromotional(data)}
{:else if variant === 'popupAuthentication'}
  {@render popupAuthentication(data)}
{/if}