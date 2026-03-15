import {
  getPageBySlug,
  getBlocksByPageId,
  mapBlocksBySlot
} from '$lib/server/content';

export async function load() {
  const page = await getPageBySlug('xqqnfpum1khuq0m', 'deviceMockup');

  const blocks = await getBlocksByPageId(page.id);

  return {
    blocksBySlot: mapBlocksBySlot(blocks)
  };
}