<script lang="ts">
  export let variant: string = '';
  export let data: Record<string, any> = {};
</script>

{#snippet informationPageDefault(p)}
<section class={`bg-white dark:bg-gray-900 ${p.sectionClass ?? ""}`}>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center">
      {#if p.code}
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          {p.code}
        </h1>
      {/if}

      {#if p.title}
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          {p.title}
        </p>
      {/if}

      {#if p.description}
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {p.description}
        </p>
      {/if}

      {#if p.cta}
        <a
          href={p.cta.href ?? "#"}
          class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          {p.cta.label}
        </a>
      {/if}
    </div>
  </div>
</section>
{/snippet}

{#snippet informationPageImageCTA(p)}
<section
  class={`bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ${p.sectionClass ?? ""}`}
  style={p.backgroundImage ? `background-image: url('${p.backgroundImage}')` : undefined}
>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center">
      {#if p.code}
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          {p.code}
        </h1>
      {/if}

      {#if p.title}
        <p class="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
          {p.title}
        </p>
      {/if}

      {#if p.description}
        <p class="mb-4 text-lg font-light text-gray-400">
          {p.description}
        </p>
      {/if}

      {#if p.cta}
        <a
          href={p.cta.href ?? "#"}
          class="inline-flex items-center text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          {#if p.cta.iconSvg}
            {@html p.cta.iconSvg}
          {/if}
          {p.cta.label}
        </a>
      {/if}
    </div>
  </div>
</section>
{/snippet}

{#if variant === 'informationPageDefault'}
  {@render informationPageDefault(data)}
{:else if variant === 'informationPageImageCTA'}
  {@render informationPageImageCTA(data)}
{/if}