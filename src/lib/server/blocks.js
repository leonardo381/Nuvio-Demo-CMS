import { pb } from '$lib/pb';

export async function getBlocksByWebsiteSlug(slug) {
  const website = await pb.collection('websites').getFirstListItem(
    `slug = "${slug}"`
  );

  const blocks = await pb.collection('blocks').getFullList({
    filter: `website = "${website.id}" && enabled = true`,
    expand: 'component',
    sort: 'created'
  });

  return {
    website,
    blocks
  };
}

export function mapBlocksBySlot(blocks) {
  return Object.fromEntries(
    blocks.map((block) => [block.slot, block])
  );
}