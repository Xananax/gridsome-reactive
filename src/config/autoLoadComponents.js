import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default function autoLoad(Vue){
  const requireComponent = require.context('~/components', true, /[A-Z]\w+\.(vue|js)$/)

  requireComponent.keys().forEach( fileName => {
    
    const componentConfig = requireComponent(fileName)
  
    const componentName = upperFirst(
      camelCase(
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
  
    new Vue({
      data: {
        foo: 1
      }}
    )
  
    Vue.component( componentName, componentConfig.default || componentConfig)
  })
}