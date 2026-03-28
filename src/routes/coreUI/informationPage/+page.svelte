<script>
  import InformationPage from '$lib/components/coreUI/informationPage.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const informationPageDefault =
    blocks['informationPage.informationPageDefault']?.props;

  const informationPageImageCTA =
    blocks['informationPage.informationPageImageCTA']?.props;
</script>

{#if informationPageDefault}
  <InformationPage variant="informationPageDefault" data={informationPageDefault} />
{/if}

{#if informationPageImageCTA}
  <InformationPage variant="informationPageImageCTA" data={informationPageImageCTA} />
{/if}