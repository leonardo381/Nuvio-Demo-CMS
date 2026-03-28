import {
  getWebsiteBySlug,
  getPageBySlug,
  getBlocksByPageId,
  mapBlocksBySlot
} from '$lib/server/content';

export async function load() {
  const website = await getWebsiteBySlug('demo-site');
  const page = await getPageBySlug(website.id, 'breadcrumb');
  const blocks = await getBlocksByPageId(page.id);

  return {
    blocksBySlot: mapBlocksBySlot(blocks)
  };
}