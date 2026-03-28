<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet breadcrumbDefault(p)}
<nav class="flex" aria-label={p.ariaLabel ?? "Breadcrumb"}>
  <ol class={`inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ${p.listClass ?? ""}`}>
    {#each p.items ?? [] as item, i}
      <li aria-current={item.current ? "page" : undefined}>
        <div class="flex items-center space-x-1.5">
          {#if i === 0}
            {#if item.href}
              <a href={item.href} class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </a>
            {:else}
              <span class="inline-flex items-center text-sm font-medium text-body-subtle">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {/if}
          {:else}
            {#if p.separatorIconSvg}
              {@html p.separatorIconSvg}
            {/if}

            {#if item.current || !item.href}
              <span class="inline-flex items-center text-sm font-medium text-body-subtle">
                {item.label}
              </span>
            {:else}
              <a href={item.href} class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                {item.label}
              </a>
            {/if}
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</nav>
{/snippet}

{#snippet breadcrumbSolid(p)}
<nav
  class={`flex p-3 bg-neutral-secondary-medium border border-default-medium rounded-base ${p.navClass ?? ""}`}
  aria-label={p.ariaLabel ?? "Breadcrumb"}
>
  <ol class={`inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ${p.listClass ?? ""}`}>
    {#each p.items ?? [] as item, i}
      <li aria-current={item.current ? "page" : undefined}>
        <div class="flex items-center space-x-1.5">
          {#if i === 0}
            {#if item.href}
              <a href={item.href} class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </a>
            {:else}
              <span class="inline-flex items-center text-sm font-medium text-body-subtle">
                {#if item.iconSvg}
                  {@html item.iconSvg}
                {/if}
                {item.label}
              </span>
            {/if}
          {:else}
            {#if p.separatorIconSvg}
              {@html p.separatorIconSvg}
            {/if}

            {#if item.current || !item.href}
              <span class="inline-flex items-center text-sm font-medium text-body-subtle">
                {item.label}
              </span>
            {:else}
              <a href={item.href} class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                {item.label}
              </a>
            {/if}
          {/if}
        </div>
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