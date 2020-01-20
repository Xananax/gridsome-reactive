<template lang="pug">
  .features-list
    slot(name="features" v-bind:features="features")
      masonry-columns
        feature-summary(v-for="(feature, index) in features" :key="feature.id" v-bind="feature" :index="index") 
    slot(name="default")
    slot(name="comingSoon" v-bind:comingSoon="comingSoon")
      .feature(v-for="feature in comingSoon" :key="feature.id") 
        h2 {{ feature.title }}
        g-image(:src="feature.cover.url") 
        p {{ feature.description }}
        button-nav-link(:to="feature.path") read more
</template>

<script>
export default {
  computed: {
    features() {
      const { edges } = this.$static.features
      return edges.map(({node})=>node)
    },
    comingSoon() {
      const { edges } = this.$static.comingSoon
      return edges.map(({node})=>node)
    }
  }
}
</script>

<static-query>
query {
  features: allFeature(filter: { status: { eq: "stable" } }){
    edges {
      node {
        id
        title
        path
        cover (width: 300)
        description
        audiences {
          id
          title
        }
        applications {
          platform
          url
          paid
        }
      }
    }
  }
  comingSoon: allFeature(filter: { status: { eq: "coming" } }){
    edges {
      node {
        id
        title
        path
        cover (width: 300)
        description
        audiences {
          id
          title
        }
        applications {
          platform
          url
          paid
        }
      }
    }
  }
}
</static-query>

<style lang="stylus">
  .features-list
    @extend $card-list
</style>