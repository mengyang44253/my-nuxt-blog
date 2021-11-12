export { default as ArticleMyIcon } from '../..\\components\\article\\myIcon.vue'
export { default as LayoutDefaultFooter } from '../..\\components\\layout\\defaultFooter.vue'
export { default as LayoutDefaultHeader } from '../..\\components\\layout\\defaultHeader.vue'
export { default as LayoutDefaultSider } from '../..\\components\\layout\\defaultSider.vue'
export { default as SideComment } from '../..\\components\\side\\comment.vue'
export { default as SideHotArticle } from '../..\\components\\side\\hotArticle.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
