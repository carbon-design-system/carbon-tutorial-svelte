<script>
  import { Row, Column, DataTable } from "carbon-components-svelte";

  const headers = [
    { key: "name", value: "Name" },
    { key: "createdAt", value: "Created" },
    { key: "updatedAt", value: "Updated" },
    { key: "issueCount", value: "Open Issues" },
    { key: "stars", value: "Stars" },
    { key: "links", value: "Links" },
  ];

  const rows = [
    {
      id: "1",
      name: "Repo 1",
      createdAt: "Date",
      updatedAt: "Date",
      issueCount: "123",
      stars: "456",
      links: "Links",
    },
    {
      id: "2",
      name: "Repo 2",
      createdAt: "Date",
      updatedAt: "Date",
      issueCount: "123",
      stars: "456",
      links: "Links",
    },
    {
      id: "3",
      name: "Repo 3",
      createdAt: "Date",
      updatedAt: "Date",
      issueCount: "123",
      stars: "456",
      links: "Links",
    },
  ];
</script>

<Row class="repo-page__r1">
  <Column>
    <DataTable
      expandable
      title="Carbon Repositories"
      description="A collection of public Carbon repositories."
      {headers}
      {rows}
    >
      <p slot="expanded-row" let:row>Row description</p>
    </DataTable>
  </Column>
</Row>

<style>
  :global(.repo-page__r1) {
    padding-top: "spacing-05";
    padding-bottom: "spacing-05";
  }
</style>
