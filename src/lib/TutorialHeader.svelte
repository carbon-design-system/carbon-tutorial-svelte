<script>
  import {
    SkipToContent,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderGlobalAction,
  } from "carbon-components-svelte";
  import {
    Notification20,
    UserAvatar20,
    AppSwitcher20,
  } from "carbon-icons-svelte";
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
      aria-current={$page.path === "/repos" ? "page" : undefined}
    />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderGlobalAction aria-label="Notifications" icon={Notification20} />
    <HeaderGlobalAction aria-label="User Avatar" icon={UserAvatar20} />
    <HeaderGlobalAction aria-label="App Switcher" icon={AppSwitcher20} />
  </HeaderUtilities>
</Header>
