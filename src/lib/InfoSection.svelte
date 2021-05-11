<script>
  export let heading = "";

  import { Row, Column } from "carbon-components-svelte";
</script>

<Row {...$$restProps}>
  <Column md={8} lg={4} xlg={3}>
    <h3>{heading}</h3>
  </Column>
  <slot />
</Row>

<style>
  h3 {
    font: "heading-01";
  }
</style>
