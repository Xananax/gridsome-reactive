<template lang="pug">
layout-data(v-slot="{ metaInfo, author, menuItems, highlights, audiences, prisms }")
  .wrapper
    main-navigation(:items="menuItems" :showIcons="true")
    Section.intro.fullscreen
      div(class="container p-10")
        Header.centered(:level="0") 7isme
        Header Reclaim Ownership of Your Data
        p We give you all the tools you need in your life & work, owned by you, stored on hardware owned by you 
        .buttons-list
          button Learn More
          button.primary
            span.icon
              icon-free-me.icon-free-me(decorative)
              icon-free-me-2.icon-free-me-2(decorative)
            span Start Migration
    Section
        span.tag.is-primary In short
        |  We give you all the tools you need in your life & work, owned by you, stored on your hardware 
    highlight-summary(v-for="highlight in highlights" :key="highlight.title" v-bind="highlight")
    Section
      h2.title
        span Perfect for 
        audience-link.is-large.is-primary(v-for="audience in audiences" :key="audience.path" :path="audience.path" :kind="audience.id" :title="audience.title")  
      br
      p.subtitle
        | Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.
    Section
      .tile.box.level(v-for="prism in prisms" :key="prism.id") 
        .level-item
          .subtitle Replace
        .level-item
          g-link.button.is-medium.is-light(:to="prism.path")
            span.icon 
              component(:is="'icon-'+prism.icon")
            span {{ prism.title }}
            span.icon.is-danger
              icon-no-good.is-danger
        .level-item
          .subtitle with
        .level-item
          g-link.button.is-medium.is-light.is-success(:to="prism.alternatives[0].path")
            span.icon 
              component(:is="'icon-'+prism.alternatives[0].icon")
            span {{ prism.alternatives[0].title }}
            span.icon
              icon-ok
        .level-item
          .subtitle and
        .level-item
          g-link.button.is-medium.is-light.is-success(:to="prism.alternatives[1].path")
            span.icon 
              component(:is="'icon-'+prism.alternatives[1].icon")
            span {{ prism.alternatives[1].title }}
            span.icon
              icon-ok
    footer.footer
      .container
        .columns
          .column.is-3.is-offset-2
            h2
              strong Category
            social-data(#default="{ socialItems }")
              ul
                li(v-for="provider in socialItems" :key="provider.url")
                  social-link.is-text(v-bind="provider" )
          .column.is-3
            h2
              strong Category
            ul
              li
                a(href='#') Labore et dolore magna aliqua
              li
                a(href='#') Kanban airis sum eschelor
              li
                a(href='#') Modular modern free
              li
                a(href='#') The king of clubs
              li
                a(href='#') The Discovery Dissipation
              li
                a(href='#') Course Correction
              li
                a(href='#') Better Angels
          .column.is-3
            h2
              strong Category
            ul
              li
                a(href='#') Objects in space
              li
                a(href='#') Playing cards with coyote
              li
                a(href='#') Goodbye Yellow Brick Road
              li
                a(href='#') The Garden of Forking Paths
              li
                a(href='#') Future Shock
        .content.has-text-centered
          .control.level-item
            .tags.has-addons
              span.tag.is-dark 7isme
              span.tag.is-info MIT license
</template>

<static-query>

</static-query>

<style lang="scss" scoped>
.icon-free-me-2{
  color: black;
}
.button-free-me:hover{
  .icon-free-me{
    margin-top: -.5em;
  }
  .icon-free-me-2{
    opacity: 0;
  }
}
.intro{
  background-color: #5e42a6;
  background-image: url('/images/background.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>