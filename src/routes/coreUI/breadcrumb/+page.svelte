<script>
  import Breadcrumb from '$lib/components/coreUI/breadcrumb.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const breadcrumbDefault =
    blocks['breadcrumb.breadcrumbDefault']?.props;

  const breadcrumbSolid =
    blocks['breadcrumb.breadcrumbSolid']?.props;
</script>

{#if breadcrumbDefault}
  <Breadcrumb variant="breadcrumbDefault" data={breadcrumbDefault} />
{/if}

{#if breadcrumbSolid}
  <Breadcrumb variant="breadcrumbSolid" data={breadcrumbSolid} />
{/if}