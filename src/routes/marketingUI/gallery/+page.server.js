import {
  getPageBySlug,
  getBlocksByPageId,
  mapBlocksBySlot
} from '$lib/server/content';

export async function load() {
  const page = await getPageBySlug('tijjsusm3wnpxlb', 'gallery');

  const blocks = await getBlocksByPageId(page.id);

  return {
    blocksBySlot: mapBlocksBySlot(blocks)
  };
}