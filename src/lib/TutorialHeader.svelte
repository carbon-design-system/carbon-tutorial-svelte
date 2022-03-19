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
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderNav>
    <HeaderNavItem
      text="Repositories"
      href="/repos"
      sveltekit:prefetch
      aria-current={$page.url.pathname === "/repos" ? "page" : undefined}
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
      <icon name="AppSwitcher20" />
    </HeaderGlobalAction>
  </HeaderUtilities>
</Header>
