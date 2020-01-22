<template lang="pug">
  layout-data(v-slot="{ metaInfo, author, menuItems}")
    .main(v-bind="{...$props, ...$attrs}")
      section.section
        .container
          horizontal-navigation(:items="menuItems" :showIcons="true")
      section.section
        .container
          article.body
            slot
          footer.footer
            social-bar
            .content.has-text-centered
              p.
                Built with 
                #[g-link(class="link" to="/made-with/site") Gridsome] 
                & Made with #[b-icon(icon="heart" size="is-small" type="is-primary")] by 
                #[a(class="link" :href="author.url" target="_blank") {{author.name}}]
</template>

<script>
import Logo from "@static/images/Logo.svg";

export default {
  components: {
    Logo
  }
};
</script>