<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet popupDefault(p)}
<div
  id={p.id ?? "info-popup"}
  tabindex="-1"
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
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
          {#if p.cancelButton}
            <button
              id={p.cancelButton.id ?? "close-modal"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {p.cancelButton.label}
            </button>
          {/if}

          {#if p.confirmButton}
            <button
              id={p.confirmButton.id ?? "confirm-button"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.confirmButton.label}
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet popupNewsletter(p)}
<div
  id={p.id ?? "newsletter-pop-up"}
  tabindex="-1"
  class={`fixed right-0 bottom-4 z-50 p-4 mx-4 max-w-md bg-white rounded-lg border border-gray-200 shadow md:mx-0 md:right-6 sm:bottom-6 dark:bg-gray-800 md:p-6 dark:border-gray-700 ${p.hidden ? "hidden" : ""}`}
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

    <button
      data-collapse-toggle={p.id ?? "newsletter-pop-up"}
      type="button"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      id={p.closeButtonId ?? "close-modal"}
    >
      {#if p.closeIconSvg}
        {@html p.closeIconSvg}
      {/if}
    </button>
  </div>

  <form action={p.formAction ?? "#"}>
    <div class="relative z-0 mb-4">
      <input
        type="text"
        id={p.emailInput?.id ?? "floating_email"}
        name={p.emailInput?.name ?? p.emailInput?.id ?? "email"}
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
        placeholder=" "
        required={p.emailInput?.required ?? true}
      />
      <label
        for={p.emailInput?.id ?? "floating_email"}
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {p.emailInput?.label ?? "Email"}
      </label>
    </div>

    <div class="relative z-0 mb-7">
      <input
        type="text"
        id={p.nameInput?.id ?? "floating_name"}
        name={p.nameInput?.name ?? p.nameInput?.id ?? "name"}
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
        placeholder=" "
        required={p.nameInput?.required ?? true}
      />
      <label
        for={p.nameInput?.id ?? "floating_name"}
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
<div
  id={p.id ?? "promotional-popup"}
  tabindex="-1"
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
>
  <div class="relative p-4 w-full max-w-md max-h-full mx-auto mt-10">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
      <button
        type="button"
        class="absolute top-3 right-2.5 z-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {#if p.closeIconSvg}
          {@html p.closeIconSvg}
        {/if}
      </button>

      {#if p.imageSrc}
        <img
          class="rounded-t-lg w-full"
          src={p.imageSrc}
          alt={p.imageAlt ?? ""}
        />
      {/if}

      <div class="p-6 text-center">
        {#if p.title}
          <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {p.title}
          </h3>
        {/if}

        {#if p.description}
          <p class="mb-5 text-base text-gray-500 dark:text-gray-400">
            {p.description}
          </p>
        {/if}

        {#if p.primaryButton}
          <a
            href={p.primaryButton.href ?? "#"}
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {p.primaryButton.label}
          </a>
        {/if}

        {#if p.secondaryButton}
          <a
            href={p.secondaryButton.href ?? "#"}
            class="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            {p.secondaryButton.label}
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet popupAuthentication(p)}
<div
  id={p.id ?? "authentication-popup"}
  tabindex="-1"
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
>
  <div class="relative p-4 w-full max-w-md max-h-full mx-auto mt-10">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
      <button
        type="button"
        class="absolute top-3 right-2.5 z-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {#if p.closeIconSvg}
          {@html p.closeIconSvg}
        {/if}
      </button>

      <div class="p-6">
        {#if p.title}
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {p.title}
          </h3>
        {/if}

        {#if p.description}
          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            {p.description}
          </p>
        {/if}

        <form action={p.formAction ?? "#"}>
          {#if p.emailInput}
            <div class="mb-4">
              <label
                for={p.emailInput.id ?? "auth_email"}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {p.emailInput.label ?? "Email"}
              </label>
              <input
                type="email"
                id={p.emailInput.id ?? "auth_email"}
                name={p.emailInput.name ?? p.emailInput.id ?? "email"}
                placeholder={p.emailInput.placeholder ?? ""}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required={p.emailInput.required ?? true}
              />
            </div>
          {/if}

          {#if p.passwordInput}
            <div class="mb-4">
              <label
                for={p.passwordInput.id ?? "auth_password"}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {p.passwordInput.label ?? "Password"}
              </label>
              <input
                type="password"
                id={p.passwordInput.id ?? "auth_password"}
                name={p.passwordInput.name ?? p.passwordInput.id ?? "password"}
                placeholder={p.passwordInput.placeholder ?? ""}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required={p.passwordInput.required ?? true}
              />
            </div>
          {/if}

          {#if p.submitButton}
            <button
              type="submit"
              class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.submitButton.label}
            </button>
          {/if}

          {#if p.footerText}
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {@html p.footerText}
            </p>
          {/if}
        </form>
      </div>
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