<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet breadcrumbDefault(p)}
<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    {#each p.items ?? [] as item, i}
      <li aria-current={i === (p.items?.length ?? 1) - 1 ? "page" : undefined}>
        {#if i === 0}
          <div class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
            {#if item.iconSvg}
              {@html item.iconSvg}
            {/if}
            {item.label}
          </div>
        {:else}
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>

            {#if i === (p.items?.length ?? 1) - 1}
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {:else}
              <span class="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {/if}
          </div>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
{/snippet}

{#snippet breadcrumbSolid(p)}
<nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    {#each p.items ?? [] as item, i}
      <li aria-current={i === (p.items?.length ?? 1) - 1 ? "page" : undefined}>
        {#if i === 0}
          <div class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
            {#if item.iconSvg}
              {@html item.iconSvg}
            {/if}
            {item.label}
          </div>
        {:else}
          <div class="flex items-center">
            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>

            {#if i === (p.items?.length ?? 1) - 1}
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {:else}
              <span class="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {/if}
          </div>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
{/snippet}

{#if variant === 'breadcrumbDefault'}
  {@render breadcrumbDefault(data)}
{:else if variant === 'breadcrumbSolid'}
  {@render breadcrumbSolid(data)}
{/if}