<script>
  import Timeline from '$lib/components/marktingUI/timeline.svelte';
  export let data;

  const blocks = data.blocksBySlot ?? {};

  const timelineHorizontal =
    blocks['timeline.timelineHorizontal']?.props;

  const timelineVertical =
    blocks['timeline.timelineVertical']?.props;

  const timelineDefault =
    blocks['timeline.timelineDefault']?.props;
</script>

<Timeline variant="timelineDefault" data={timelineDefault} />
<Timeline variant="timelineVertical" data={timelineVertical} />
<Timeline variant="timelineHorizontal" data={timelineHorizontal} />