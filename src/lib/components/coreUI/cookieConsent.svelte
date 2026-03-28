<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet cookieBanner(p)}
<div
  id={p.id ?? "banner"}
  tabindex="-1"
  aria-hidden={p.ariaHidden ?? "false"}
  class={`overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
>
  <div class="relative w-full h-full md:h-auto">
    <div class="relative bg-white shadow dark:bg-gray-800">
      <div class="justify-between items-center p-5 lg:flex">
        <p class="mb-4 text-sm text-gray-500 dark:text-white lg:mb-0">
          {p.text}
          {#if p.policyLink}
            <a
              href={p.policyLink.href ?? "#"}
              class="font-medium text-gray-900 hover:underline dark:text-white"
            >
              {p.policyLink.label}
            </a>
          {/if}
        </p>

        <div class="items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex lg:pl-10 shrink-0">
          {#if p.manageSettingsLink}
            <a
              href={p.manageSettingsLink.href ?? "#"}
              class="text-sm text-primary-600 dark:text-primary-500 hover:underline"
            >
              {p.manageSettingsLink.label}
            </a>
          {/if}

          {#if p.blockButton}
            <button
              id={p.blockButton.id ?? "block-cookies"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.blockButton.label}
            </button>
          {/if}

          {#if p.acceptButton}
            <button
              id={p.acceptButton.id ?? "accept-cookies"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.acceptButton.label}
            </button>
          {/if}

          {#if p.closeButton}
            <button
              id={p.closeButton.id ?? "close-modal"}
              type="button"
              class="hidden md:flex text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {#if p.closeButton.iconSvg}
                {@html p.closeButton.iconSvg}
              {/if}
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet cookiePopup(p)}
<div
  id={p.id ?? "cookies-corner-modal"}
  aria-hidden={p.ariaHidden ?? "false"}
  tabindex="-1"
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
>
  <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
      <div class="p-5 text-sm font-light text-gray-500 dark:text-gray-400">
        {#each p.paragraphs ?? [] as paragraph, i}
          <p class={i < (p.paragraphs?.length ?? 0) - 1 ? "mb-2" : ""}>
            {#if typeof paragraph === "string"}
              {paragraph}
            {:else}
              {paragraph.text}
              {#if paragraph.link}
                <a
                  href={paragraph.link.href ?? "#"}
                  class="font-normal text-gray-900 hover:underline dark:text-white"
                >
                  {paragraph.link.label}
                </a>
              {/if}
            {/if}
          </p>
        {/each}
      </div>

      <div class="justify-between items-center p-6 pt-0 space-y-4 sm:flex sm:space-y-0">
        {#if p.personalizeButton}
          <button
            id={p.personalizeButton.id ?? "close-modal"}
            type="button"
            class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {p.personalizeButton.label}
          </button>
        {/if}

        <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
          {#if p.rejectButton}
            <button
              id={p.rejectButton.id ?? "block-cookies"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {p.rejectButton.label}
            </button>
          {/if}

          {#if p.acceptButton}
            <button
              id={p.acceptButton.id ?? "accept-cookies"}
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {p.acceptButton.label}
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet cookieModal(p)}
<div
  id={p.id ?? "cookies-modal"}
  tabindex="-1"
  aria-hidden={p.ariaHidden ?? "false"}
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full ${p.hidden ? "hidden" : ""}`}
>
  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
      <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-700">
        {#if p.brand}
          <a href={p.brand.href ?? "#"} class="flex items-center mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:mb-0">
            {#if p.brand.logoSvg}
              {@html p.brand.logoSvg}
            {/if}
            {p.brand.label}
          </a>
        {/if}

        <div class="flex items-center space-x-3">
          {#each p.headerLinks ?? [] as link}
            <a href={link.href ?? "#"} class="text-gray-800 hover:text-primary-600 dark:text-white dark:hover:text-primary-500">
              {#if link.iconSvg}
                {@html link.iconSvg}
              {/if}
            </a>
          {/each}
        </div>
      </div>

      <div class="p-6 font-light text-gray-500 dark:text-gray-400">
        {#if p.title}
          <p class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{p.title}</p>
        {/if}

        {#each p.paragraphs ?? [] as paragraph}
          <p class="mb-2">{paragraph}</p>
        {/each}

        {#if p.learnMoreLink}
          <a href={p.learnMoreLink.href ?? "#"} class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
            {p.learnMoreLink.label}
            {#if p.learnMoreLink.iconSvg}
              {@html p.learnMoreLink.iconSvg}
            {/if}
          </a>
        {/if}
      </div>

      <div class="justify-between items-center mt-5 space-y-4 sm:flex sm:space-y-0">
        {#if p.actionButtons}
          <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
            {#each p.actionButtons as button}
              <button
                id={button.id}
                type="button"
                class={button.class ?? "text-gray-500 w-full sm:w-auto bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"}
              >
                {button.label}
              </button>
            {/each}
          </div>
        {/if}

        {#if p.footerLinks}
          <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            {#each p.footerLinks as link, i}
              <a href={link.href ?? "#"} class="hover:underline">{link.label}</a>
              {#if i < p.footerLinks.length - 1}
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
{/snippet}

{#snippet cookieGDPRnotice(p)}
<div
  id={p.id ?? "cookies-modal"}
  tabindex="-1"
  aria-hidden={p.ariaHidden ?? "false"}
  class={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full p-4 ${p.hidden ? "hidden" : ""}`}
>
  <div class="overflow-y-auto relative p-4 w-full max-w-2xl h-[48rem] bg-white rounded-lg shadow md:p-6 dark:bg-gray-800">
    {#if p.brand}
      <a href={p.brand.href ?? "#"} class="flex justify-center items-center mb-8 text-xl font-semibold text-gray-900 dark:text-white">
        {#if p.brand.logoSvg}
          {@html p.brand.logoSvg}
        {/if}
        {p.brand.label}
      </a>
    {/if}

    <div class="space-y-4 font-light text-gray-500 divide-y divide-gray-200 dark:text-gray-400 dark:divide-gray-700">
      <div>
        {#if p.title}
          <p class="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white">{p.title}</p>
        {/if}

        {#each p.introParagraphs ?? [] as paragraph}
          <p class="mb-2">{paragraph}</p>
        {/each}

        {#if p.learnMoreLink}
          <a href={p.learnMoreLink.href ?? "#"} class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
            {p.learnMoreLink.label}
            {#if p.learnMoreLink.iconSvg}
              {@html p.learnMoreLink.iconSvg}
            {/if}
          </a>
        {/if}
      </div>

      {#each p.categories ?? [] as category}
        <div class="pt-4">
          <div class="flex items-start">
            <div>
              <p class="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                {category.title}
              </p>

              {#each category.paragraphs ?? [] as paragraph}
                <p class="mb-2">{paragraph}</p>
              {/each}

              {#if category.viewCookiesLink}
                <a href={category.viewCookiesLink.href ?? "#"} data-collapse-toggle={category.tableId} class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  {category.viewCookiesLink.label}
                  {#if category.viewCookiesLink.iconSvg}
                    {@html category.viewCookiesLink.iconSvg}
                  {/if}
                </a>
              {/if}
            </div>

            {#if category.toggle}
              <label for={category.toggle.id} class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id={category.toggle.id} class="sr-only peer" checked={category.toggle.checked ?? false} disabled={category.toggle.disabled ?? false}>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="sr-only">Toggle me</span>
              </label>
            {/if}
          </div>

          {#if category.table}
            <div id={category.tableId} class={`${category.tableHidden ? "hidden" : ""} overflow-x-auto relative mt-4 bg-gray-100 sm:rounded-lg`}>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {#each category.table.columns ?? [] as column}
                      <th scope="col" class="py-3 px-6">{column}</th>
                    {/each}
                  </tr>
                </thead>
                <tbody>
                  {#each category.table.rows ?? [] as row}
                    <tr class="bg-gray-100 dark:bg-gray-800">
                      <th scope="row" class="py-4 px-6 font-light text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {row.name}
                      </th>
                      <td class="py-4 px-6">{row.provider}</td>
                      <td class="py-4 px-6">{row.expiration}</td>
                      <td class="py-4 px-6">{row.purpose}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="justify-between items-center mt-5 space-y-4 sm:flex sm:space-y-0">
      {#if p.leftButtons}
        <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
          {#each p.leftButtons as button}
            <button type="button" id={button.id} class={button.class}>
              {button.label}
            </button>
          {/each}
        </div>
      {/if}

      {#if p.rightButtons}
        <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          {#each p.rightButtons as button}
            <button id={button.id} type="button" class={button.class}>
              {button.label}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
{/snippet}

{#if variant === 'cookieBanner'}
  {@render cookieBanner(data)}
{:else if variant === 'cookiePopup'}
  {@render cookiePopup(data)}
{:else if variant === 'cookieModal'}
  {@render cookieModal(data)}
{:else if variant === 'cookieGDPRnotice'}
  {@render cookieGDPRnotice(data)}
{/if}