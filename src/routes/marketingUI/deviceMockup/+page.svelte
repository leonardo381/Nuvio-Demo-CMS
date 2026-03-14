<script>
  import DeviceMockup from '$lib/components/marktingUI/deviceMockup.svelte'; // path must match exactly (case, folders)
  export let data;
  
  const mockupPhone = {
  imageLight:
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
  imageDark:
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
  imageAlt: "Flat smartphone mockup"
  };

  const mockupPhoneIOS = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png",
    imageAlt: "Smartphone mockup - rounded 2"
  };

  const mockupPhoneAndroid = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
    imageAlt: "Smartphone mockup screen"
  };

  const mockupTablet = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png",
    imageAlt: "Tablet mockup screen"
  };

  const mockupLaptop = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png",
    imageAlt: "Laptop mockup screen"
};

  const mockupDesktop = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png",
    imageAlt: "iMac mockup screen"
  };

  const mockupWatch = {
    imageLight:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png",
    imageDark:
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png",
    imageAlt: "Smartwatch mockup screen"
  };
</script>

<!-- render it -->
<div class="mr-24 ml-24 p-12 flex flex-col space-y-8">
  <DeviceMockup variant="mockupPhone" data={mockupPhone} />
  <DeviceMockup variant="mockupPhoneIOS" data={mockupPhoneIOS} />
  <DeviceMockup variant="mockupPhoneAndroid" data={mockupPhoneAndroid} />
  <DeviceMockup variant="mockupTablet" data={mockupTablet} />
  <DeviceMockup variant="mockupLaptop" data={mockupLaptop} />
  <DeviceMockup variant="mockupDesktop" data={mockupDesktop} />
  <DeviceMockup variant="mockupWatch" data={mockupWatch} />
</div>