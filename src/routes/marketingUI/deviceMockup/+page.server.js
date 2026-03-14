import { pb } from '$lib/pb';

export const load = async () => {
  try {
    console.log('PB URL:', import.meta.env.VITE_PB_URL);

    const blocks = await pb.collection('blocks').getFullList({
      filter: 'component_key = "deviceMockup"',
      sort: 'position'
    });

    return { blocks };
  } catch (error) {
    console.error('DeviceMockup load error:', error);
    return { blocks: [] };
  }
};