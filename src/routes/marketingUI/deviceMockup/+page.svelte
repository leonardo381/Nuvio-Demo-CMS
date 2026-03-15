<script>
  import DeviceMockup from '$lib/components/marktingUI/deviceMockup.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const mockupPhone = blocks['deviceMockup.mockupPhone']?.props;
  const mockupPhoneIOS = blocks['deviceMockup.mockupPhoneIOS']?.props;
  const mockupPhoneAndroid = blocks['deviceMockup.mockupPhoneAndroid']?.props;
  const mockupTablet = blocks['deviceMockup.mockupTablet']?.props;
  const mockupLaptop = blocks['deviceMockup.mockupLaptop']?.props;
  const mockupDesktop = blocks['deviceMockup.mockupDesktop']?.props;
  const mockupWatch = blocks['deviceMockup.mockupWatch']?.props;
</script>

<div class="mr-24 ml-24 p-12 flex flex-col space-y-8">
  <DeviceMockup variant="mockupPhone" data={mockupPhone} />
  <DeviceMockup variant="mockupPhoneIOS" data={mockupPhoneIOS} />
  <DeviceMockup variant="mockupPhoneAndroid" data={mockupPhoneAndroid} />
  <DeviceMockup variant="mockupTablet" data={mockupTablet} />
  <DeviceMockup variant="mockupLaptop" data={mockupLaptop} />
  <DeviceMockup variant="mockupDesktop" data={mockupDesktop} />
  <DeviceMockup variant="mockupWatch" data={mockupWatch} />
</div>