<script>
  import {
    Grid,
    Row,
    Column,
    Button,
    Tabs,
    TabContent,
    Tab,
    Breadcrumb,
    BreadcrumbItem,
  } from "carbon-components-svelte";
  import InfoSection from "$lib/InfoSection.svelte";
  import InfoCard from "$lib/InfoCard.svelte";
  import {
    PersonFavorite32,
    Application32,
    Globe32,
  } from "carbon-icons-svelte";
</script>

<Row class="landing-page-background landing-page__banner">
  <Column lg={16}>
    <Breadcrumb noTrailingSlash aria-label="Page navigation">
      <BreadcrumbItem href="/">Getting started</BreadcrumbItem>
    </Breadcrumb>
    <h1>Design &amp; build with Carbon</h1>
  </Column>
</Row>

<Row class="landing-page__r2">
  <Column noGutter>
    <Tabs aria-label="Tab navigation">
      <Tab label="About" />
      <Tab label="Design" />
      <Tab label="Develop" />
      <div slot="content">
        <Grid as fullWidth let:props>
          <TabContent {...props}>
            <Row class="landing-page__tab-content">
              <Column md={4} lg={7}>
                <h2>What is Carbon?</h2>
                <p>
                  Carbon is IBM’s open-source design system for digital products
                  and experiences. With the IBM Design Language as its
                  foundation, the system consists of working code, design tools
                  and resources, human interface guidelines, and a vibrant
                  community of contributors.
                </p>
                <Button>Learn more</Button>
              </Column>
              <Column md={4} lg={{ span: 8, offset: 1 }}>
                <img alt="Carbon illustration" src="/tab-illo.png" />
              </Column>
            </Row>
          </TabContent>
          <TabContent {...props}>
            <Row class="landing-page__tab-content">
              <Column lg={16}>
                Rapidly build beautiful and accessible experiences. The Carbon
                kit contains all resources you need to get started.
              </Column>
            </Row>
          </TabContent>
          <TabContent {...props}>
            <Row class="landing-page__tab-content">
              <Column lg={16}>
                Carbon provides styles and components in Vanilla, React,
                Angular, Vue and Svelte for anyone building on the web.
              </Column>
            </Row>
          </TabContent>
        </Grid>
      </div>
    </Tabs>
  </Column>
</Row>

<InfoSection
  heading="The Principles"
  class="landing-page-background landing-page__r3"
>
  <InfoCard heading="Carbon is Open" icon={PersonFavorite32}>
    It’s a distributed effort, guided by the principles of the open-source
    movement. Carbon’s users are also it’s makers, and everyone is encouraged to
    contribute.
  </InfoCard>
  <InfoCard heading="Carbon is Modular" icon={Application32}>
    Carbon’s modularity ensures maximum flexibility in execution. Its components
    are designed to work seamlessly with each other, in whichever combination
    suits the needs of the user.
  </InfoCard>
  <InfoCard heading="Carbon is Consistent" icon={Globe32}>
    Based on the comprehensive IBM Design Language, every element and component
    of Carbon was designed from the ground up to work elegantly together to
    ensure consistent, cohesive user experiences.
  </InfoCard>
</InfoSection>

<style>
  h1 {
    font: "productive-heading-05";
  }

  h2,
  p {
    font: "productive-heading-03";
  }

  h2 {
    font-weight: "semibold";
  }

  p {
    margin-top: "spacing-06";
    margin-bottom: "spacing-08";
  }

  :global(.bx--grid) {
    position: relative;
    z-index: 1;
  }

  :global(.landing-page__r2 .bx--tabs__nav) {
    right: 0;
  }

  :global(.landing-page-background) {
    position: relative;
    background-color: "ui-01";
  }

  :global(.landing-page-background::before) {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: -"spacing-05";
    left: -"spacing-05";
    background: "ui-01";
  }

  img {
    max-width: 100%;
  }

  :global(.landing-page__banner) {
    padding-top: "spacing-05";
    padding-bottom: "spacing-07" * 4;
  }

  :global(.landing-page__r2) {
    margin-top: rem(-40px);
  }

  :global(.landing-page__tab-content) {
    font: "body-long-02";
    padding-top: "spacing-10";
    padding-bottom: "spacing-10";
  }

  p {
    margin-top: "spacing-06";
    margin-bottom: "spacing-08";
  }

  @media (between: 321px) and (md) {
    p {
      max-width: 75%;
    }
  }

  :global(.landing-page__r3) {
    padding-top: "spacing-09";
    padding-bottom: "spacing-09";
  }
</style>
