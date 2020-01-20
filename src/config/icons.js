import * as iconsList from './iconsList'
export * from './iconsList'

const icons = {
  _: iconsList.IconNotFound
}

Object.keys(iconsList).forEach(name=>{
  icons[name.toLowerCase().replace(/^icon/,'')] = iconsList[name]
})

export const getIcon = (name) => {
  if(!(name in icons)){ name = '_' }
  return icons[name]
}