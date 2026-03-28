<script>
  import Popup from '$lib/components/coreUI/popup.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const popupDefault =
    blocks['popup.popupDefault']?.props;

  const popupNewsletter =
    blocks['popup.popupNewsletter']?.props;

  const popupPromotional =
    blocks['popup.popupPromotional']?.props;

  const popupAuthentication =
    blocks['popup.popupAuthentication']?.props;
</script>

{#if popupDefault}
  <Popup variant="popupDefault" data={popupDefault} />
{/if}

{#if popupNewsletter}
  <Popup variant="popupNewsletter" data={popupNewsletter} />
{/if}

{#if popupPromotional}
  <Popup variant="popupPromotional" data={popupPromotional} />
{/if}

{#if popupAuthentication}
  <Popup variant="popupAuthentication" data={popupAuthentication} />
{/if}