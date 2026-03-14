<script>
  import Gallery from '$lib/components/marktingUI/gallery.svelte'; // path must match exactly (case, folders)

  const galleryDefault = {
    images: [
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
    ]
  };

  const galleryMasonry = {
    columns: [
      [
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' }
      ],
      [
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' }
      ],
      [
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' }
      ],
      [
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' },
        { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
      ]
    ]
  };

  const galleryFeatured = {
    featured: {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
      alt: 'Featured image'
    },
    thumbnails: [
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
    ]
  };
</script>

<!-- render it -->
<Gallery variant="galleryDefault" data={galleryDefault} />
<Gallery variant="galleryMasonry" data={galleryMasonry} />
<Gallery variant="galleryFeatured" data={galleryFeatured} />