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
  const blocks = await pb.collection('blocks').getFullList({
    filter: `page = "${pageId}" && enabled = true`,
    expand: 'component',
    sort: 'created'
  });

  return blocks.map(normalizeBlock);
}

export function mapBlocksBySlot(blocks) {
  return Object.fromEntries(
    blocks.map((block) => [block.slot, block])
  );
}

function normalizeBlock(block) {
  return {
    ...block,
    props: resolveAssetRefs(block.props)
  };
}

function resolveAssetRefs(value) {
  if (Array.isArray(value)) {
    return value.map(resolveAssetRefs);
  }

  if (value && typeof value === 'object') {
    if (isAssetRef(value)) {
      return buildAssetUrl(value);
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, resolveAssetRefs(val)])
    );
  }

  return value;
}

function isAssetRef(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.recordId === 'string' &&
    typeof value.filename === 'string' &&
    typeof value.collection === 'string'
  );
}

function buildAssetUrl(fileRef) {
  return pb.files.getURL(
    {
      id: fileRef.recordId,
      collectionId: fileRef.collection,
      collectionName: fileRef.collection
    },
    fileRef.filename
  );
}