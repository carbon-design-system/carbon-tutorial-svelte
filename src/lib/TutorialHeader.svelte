<script>
  import {
    SkipToContent,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderGlobalAction,
  } from "carbon-components-svelte";
  import { page } from "$app/stores";
</script>

<Header company="IBM" platformName="Carbon Tutorial" href="/">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem
      text="Repositories"
      href="/repos"
      sveltekit:prefetch
      isSelected={$page.url.pathname === "/repos"}
    />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderGlobalAction aria-label="Notifications">
      <icon name="Notification20" />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="User Avatar">
      <icon name="UserAvatar20" />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="App Switcher">
      <icon name="Switcher20" />
    </HeaderGlobalAction>
  </HeaderUtilities>
</Header>
