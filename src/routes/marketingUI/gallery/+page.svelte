+page.svelte
<script>
  import Gallery from '$lib/components/marktingUI/gallery.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const galleryDefault = blocks['gallery.galleryDefault']?.props;
  const galleryMasonry = blocks['gallery.galleryMasonry']?.props;
  const galleryFeatured = blocks['gallery.galleryFeatured']?.props;
</script>

<Gallery variant="galleryDefault" data={galleryDefault} />
<Gallery variant="galleryMasonry" data={galleryMasonry} />
<Gallery variant="galleryFeatured" data={galleryFeatured} />