import * as iconsList from './iconsList'
export * from './iconsList'

const icons = {
  _: iconsList.IconNotFound
}

const toCamelCase = (string) =>
  string
    .replace(/^icon/i,'')
    .replace(
      /(?:^\w|[A-Z]|\b\w)/g, 
      ( word, i ) => i == 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');

const toKebabCase = string => 
  string
    .replace(/^icon/i,'')
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, '-')
    .toLowerCase();

const toLowerCase = string => 
  string
  .replace(/^icon/i,'')
  .toLowerCase()

Object.keys(iconsList).forEach(name=>{
  const icon = iconsList[name]
  icons[toKebabCase(name)] = icon
  icons[toCamelCase(name)] = icon
  icons[toLowerCase(name)] = icon
})

export const getIcon = (name) => {
  if(!(name in icons)){ name = '_' }
  return icons[name]
}