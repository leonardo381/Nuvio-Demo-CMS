import { pb } from '$lib/pb';

export async function getWebsiteBySlug(websiteSlug) {
  return await pb.collection('websites').getFirstListItem(
    `slug = "${websiteSlug}"`
  );
}

export async function getPageBySlug(websiteId, pageSlug) {
  return await pb.collection('pages').getFirstListItem(
    `website = "${websiteId}" && slug = "${pageSlug}"`
  );
}

export async function getBlocksByPageId(pageId) {
  return await pb.collection('blocks').getFullList({
    filter: `page = "${pageId}" && enabled = true`,
    expand: 'component',
    sort: 'created'
  });
}

export function mapBlocksBySlot(blocks) {
  return Object.fromEntries(
    blocks.map((block) => [block.slot, block])
  );
}