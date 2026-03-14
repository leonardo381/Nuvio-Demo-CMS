<script>
  import Timeline from '$lib/components/marktingUI/timeline.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const timelineHorizontal =
    blocks['timeline.timelineHorizontal']?.props ?? { items: [] };

  const timelineVertical =
    blocks['timeline.timelineVertical']?.props ?? { items: [] };

  const timelineDefault =
    blocks['timeline.timelineDefault']?.props ?? { items: [] };
</script>

<Timeline variant="timelineDefault" data={timelineDefault} />
<Timeline variant="timelineVertical" data={timelineVertical} />
<Timeline variant="timelineHorizontal" data={timelineHorizontal} />