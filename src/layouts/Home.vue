<template lang="pug">
layout-data(v-slot="{ metaInfo, author, menuItems}")
  .main
    .hero.is-info.is-medium.is-bold
      .hero-head
        .container
          horizontal-navigation(:items="menuItems" :showIcons="true")
      .hero-body
        .container.has-text-centered
          h1.title Reclaim Ownership of Your Data
          h2.subtitle free yourself from surveillance and dependency by pressing this large button
          button.button-free-me.button.is-primary.is-large
            span.icon
              icon-free-me.icon-free-me
              icon-free-me-2.icon-free-me-2
            span Free Me
    .box.cta
      p.has-text-centered
        span.tag.is-primary New
        |  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    section.container
      .columns.features
        .column.is-4
          .card.is-shady
            .card-image.has-text-centered
              i.fa.fa-paw
            .card-content
              .content
                h4 Tristique senectus et netus et. 
                p
                  | Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.
                p
                  a(href='#') Learn more
        .column.is-4
          .card.is-shady
            .card-image.has-text-centered
              i.fa.fa-empire
            .card-content
              .content
                h4 Tempor orci dapibus ultrices in.
                p
                  | Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                  | sed risus.
                p
                  a(href='#') Learn more
        .column.is-4
          .card.is-shady
            .card-image.has-text-centered
              i.fa.fa-apple
            .card-content
              .content
                h4  Leo integer malesuada nunc vel risus. 
                p
                  | Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.
                p
                  a(href='#') Learn more
      .intro.column.is-8.is-offset-2
        h2.title Perfect for developers or designers!
        br
        p.subtitle
          | Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.
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