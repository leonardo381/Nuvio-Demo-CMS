<script>
  import Cookie from '$lib/components/coreUI/cookieConsent.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const cookieBanner =
    blocks['cookie.cookieBanner']?.props;

  const cookiePopup =
    blocks['cookie.cookiePopup']?.props;

  const cookieModal =
    blocks['cookie.cookieModal']?.props;

  const cookieGDPRnotice =
    blocks['cookie.cookieGDPRnotice']?.props;
</script>

{#if cookieBanner}
  <Cookie variant="cookieBanner" data={cookieBanner} />
{/if}

{#if cookiePopup}
  <Cookie variant="cookiePopup" data={cookiePopup} />
{/if}

{#if cookieModal}
  <Cookie variant="cookieModal" data={cookieModal} />
{/if}

{#if cookieGDPRnotice}
  <Cookie variant="cookieGDPRnotice" data={cookieGDPRnotice} />
{/if}