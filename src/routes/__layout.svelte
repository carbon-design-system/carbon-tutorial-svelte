<script>
  import "carbon-components-svelte/css/white.css";
  import { Content, Grid } from "carbon-components-svelte";
  import TutorialHeader from "$lib/TutorialHeader.svelte";
</script>

<TutorialHeader />

<Content style="padding: 0">
  <Grid fullWidth>
    <slot />
  </Grid>
</Content>
