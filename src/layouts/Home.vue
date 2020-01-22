<template lang="pug">
layout-data(v-slot="{ metaInfo, author, menuItems, highlights, audiences }")
  .main
    .hero.is-info.is-medium.is-bold
      .hero-head
        .container
          horizontal-navigation(:items="menuItems" :showIcons="true")
      .hero-body
        .container.has-text-centered
          h1.title Reclaim Ownership of Your Data
          h2.subtitle We give you all the tools you need in your life & work, owned by you, stored on hardware owned by you 
          button.button-free-me.button.is-primary.is-large
            span.icon
              icon-free-me.icon-free-me(decorative)
              icon-free-me-2.icon-free-me-2(decorative)
            span Start Migration
    .box.cta
      p.has-text-centered
        span.tag.is-primary In short
        |  We give you all the tools you need in your life & work, owned by you, stored on your hardware 
    section.container
      .thingy(style="display:flex;flex-wrap:wrap;justify-content: space-evenly;;align-content: center;")
        .card(style="width: 30%" v-for="feature in highlights" :key="feature.title")
          .card-image.has-text-centered
            component(v-if="feature.icon" :is="'icon-'+feature.icon" decorative)
            component(v-if="feature.subIcon" :is="'icon-'+feature.subIcon" decorative)
          .card-content
            .content
              h4 {{ feature.title }}
              p {{ feature.description }}
              p
                a.read-more(href='#') Learn more #[icon-read-more(decorative)]
      .intro.column.is-8.is-offset-2
        h2.title
          span Perfect for 
          audience-link.is-large.is-primary(v-for="audience in audiences" :key="audience.path" :path="audience.path" :kind="audience.id" :title="audience.title")  
        br
        p.subtitle
          | Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.
    section.container
      ul
        li gmail -> nextcloud mail
        li gmail
        li gmail
        li gmail
        li gmail
        li gmail
        li gmail
    section.container
      .sandbox
        .tile.is-ancestor
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              p.title Hello World
              p.subtitle What is up?
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              p.title Foo
              p.subtitle Bar
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              p.title Third column
              p.subtitle With some content
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        .tile.is-ancestor
          .tile.is-vertical.is-8
            .tile
              .tile.is-parent.is-vertical
                article.tile.is-child.notification.is-white
                  p.title Vertical tiles
                  p.subtitle Top box
                article.tile.is-child.notification.is-white
                  p.title Vertical tiles
                  p.subtitle Bottom box
              .tile.is-parent
                article.tile.is-child.notification.is-white
                  p.title Middle box
                  p.subtitle With an image
                  figure.image.is-4by3
                    img(src='https://picsum.photos/640/480/?random' alt='Description')
            .tile.is-parent.is-shady
              article.tile.is-child.notification.is-white
                p.title Wide column
                p.subtitle Aligned with the right column
                .content
                  p
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              .content
                p.title Tall column
                p.subtitle With even more content
                .content
                  p
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    | eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                  p
                    | Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                    | felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
                  p
                    | Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                    | ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
        .tile.is-ancestor
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              p.title Side column
              p.subtitle With some content
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          .tile.is-parent.is-8.is-shady
            article.tile.is-child.notification.is-white
              p.title Main column
              p.subtitle With some content
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        .tile.is-ancestor
          .tile.is-parent.is-8.is-shady
            article.tile.is-child.notification.is-white
              p.title Murphy&apos;s law
              p.subtitle Anything that can go wrong will go wrong
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          .tile.is-parent.is-shady
            article.tile.is-child.notification.is-white
              p.title Main column
              p.subtitle With some content
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
    footer.footer
      .container
        .columns
          .column.is-3.is-offset-2
            h2
              strong Category
            ul
              li
                a(href='#') Lorem ipsum dolor sit amet
              li
                a(href='#') Vestibulum errato isse
              li
                a(href='#') Lorem ipsum dolor sit amet
              li
                a(href='#') Aisia caisia
              li
                a(href='#') Murphy&apos;s law
              li
                a(href='#') Flimsy Lavenrock
              li
                a(href='#') Maven Mousie Lavender
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
          .column.is-4
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
          p
            a.icon(href='https://github.com/BulmaTemplates/bulma-templates')
              i.fa.fa-github
          .control.level-item
            a(href='https://github.com/BulmaTemplates/bulma-templates')
              .tags.has-addons
                span.tag.is-dark Bulma Templates
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
</style>