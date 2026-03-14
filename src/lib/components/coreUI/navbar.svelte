<script lang="ts">
  export let data: Record<string, any> = {};
</script>

{#snippet base(p)}
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- Brand -->
      <a href={p.brand?.href ?? '#'} class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={p.brand?.logoSrc ?? 'https://flowbite.com/docs/images/logo.svg'} class="h-8" alt={p.brand?.logoAlt ?? 'Flowbite Logo'} />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {p.brand?.name ?? 'Flowbite'}
        </span>
      </a>

      <!-- Mobile toggle (must point to the collapsible menu id) -->
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
               hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
               dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        data-collapse-toggle="navbar-dropdown"
        aria-controls="navbar-dropdown"
        aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Collapsible menu (id must match button’s data-collapse-toggle) -->
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50
                   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white
                   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          {#each p.links ?? [] as link, i}
            <li class="relative">
              {#if link.children}
                <!-- Link with dropdown: need a unique id + data-dropdown-toggle -->
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100
                         md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white
                         md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700
                         md:dark:hover:bg-transparent"
                  data-dropdown-toggle={"dropdown-" + i}
                  aria-expanded="false">
                  {link.label}
                  <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <!-- Dropdown menu: id must match data-dropdown-toggle; keep 'hidden' class -->
                <div
                  id={"dropdown-" + i}
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44
                         dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {#each link.children as child}
                      <li>
                        <a href={child.href ?? '#'} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {child.label}
                        </a>
                      </li>
                    {/each}
                  </ul>

                  {#if link.footer}
                    <div class="py-1">
                      <a href={link.footer.href ?? '#'} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                                                             dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        {link.footer.label}
                      </a>
                    </div>
                  {/if}
                </div>
              {:else}
                <!-- Normal link -->
                <a
                  href={link.href ?? '#'}
                  class={`block py-2 px-3 rounded-sm md:p-0 ${
                    link.active
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              {/if}
            </li>
          {/each}

        </ul>
      </div>
    </div>
  </nav>
{/snippet}

{@render base(data)}
