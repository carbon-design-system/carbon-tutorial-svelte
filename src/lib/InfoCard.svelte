<script>
  export let heading = "";
  export let icon;

  import { Column } from "carbon-components-svelte";

  $: [first, second, third] = heading.split(" ");
</script>

<Column md={4} lg={4} xlg={{ span: 3, offset: 1 }} class="info-card">
  <h4>
    {first}
    {second} <strong>{third}</strong>
  </h4>
  <p>
    <slot />
  </p>
  <svelte:component this={icon} />
</Column>

<style>
  h4 {
    font: "productive-heading-03";
  }

  p {
    font: "body-long-01";
    margin-top: "spacing-06";
    flex-grow: 1;
  }

  @media (between: 321px) and (md) {
    p {
      max-width: 75%;
    }
  }

  :global(.info-card.info-card) {
    display: flex;
    flex-direction: column;
  }

  :global(.info-card),
  :global(.info-card svg) {
    margin-top: "spacing-09";
  }

  @media (down: md) {
    :global(.info-card:not(:nth-child(2))) {
      border-top: 1px solid "ui-03";
      padding-top: "spacing-09";
    }
  }

  @media (bp: md) {
    :global(.info-card:not(:nth-child(odd))) {
      border-left: 1px solid "ui-03";
    }
  }

  @media (bp: lg) {
    :global(.info-card) {
      margin-top: 0;
      border-left: 1px solid "ui-03";
    }

    :global(.info-card svg) {
      margin-top: "spacing-12";
    }
  }
</style>
