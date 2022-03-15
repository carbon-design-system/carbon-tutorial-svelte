<script>
  import { onMount } from "svelte";
  import {
    Row,
    Column,
    DataTable,
    DataTableSkeleton,
    Pagination,
    Link,
  } from "carbon-components-svelte";
  import { TOKEN } from "../constants";

  const headers = [
    { key: "name", value: "Name" },
    { key: "createdAt", value: "Created" },
    { key: "updatedAt", value: "Updated" },
    { key: "issueCount", value: "Open Issues" },
    { key: "stars", value: "Stars" },
    { key: "links", value: "Links" },
  ];

  let page = 1;
  let pageSize = 10;
  let loading = true;
  let error = false;
  let data = [];

  $: rows = data.map((row) => ({
    ...row,
    stars: row.stargazers.totalCount,
    issueCount: row.issues.totalCount,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
  }));
  $: totalItems = rows.length;

  async function fetchData() {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        query: `query REPO_QUERY {
          organization(login: "carbon-design-system") {
            repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
              nodes {
                id
                name
                description
                url
                homepageUrl
                issues(filterBy: { states: OPEN }) { totalCount }
                stargazers { totalCount }
                updatedAt
                createdAt
              }
            }
          }
        }`,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      data = result.data.organization.repositories.nodes;
    } else {
      error = result;
    }

    loading = false;
  }

  onMount(fetchData);
</script>

<Row class="repo-page__r1">
  <Column>
    {#if loading}
      <DataTableSkeleton showToolbar={false} {headers} rows={10} />
    {/if}
    {#if error}Error! {error.message}{/if}
    {#if totalItems > 0}
      <DataTable
        expandable
        title="Carbon Repositories"
        description="A collection of public Carbon repositories."
        {headers}
        {rows}
        {pageSize}
        {page}
      >
        <span slot="cell" let:row let:cell>
          {#if cell.key === "links"}
            <ul style="display: flex;">
              <li>
                <Link href={row.url}>GitHub</Link>
              </li>
              {#if row.homepageUrl}
                <li>
                  <span>&nbsp;|&nbsp;</span>
                  <Link href={row.homepageUrl}>Homepage</Link>
                </li>
              {/if}
            </ul>
          {:else}{cell.value}{/if}
        </span>
        <div slot="expanded-row" let:row>{row.description}</div>
      </DataTable>
      <Pagination
        {totalItems}
        bind:page
        bind:pageSize
        pageSizes={[5, 10, 15, 25]}
      />
    {/if}
  </Column>
</Row>

<style>
  :global(.repo-page__r1) {
    padding-top: "spacing-05";
    padding-bottom: "spacing-05";
  }
</style>
