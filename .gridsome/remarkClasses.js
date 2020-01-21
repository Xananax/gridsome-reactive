// You can find a list of supported/existing/allowed nodes types at
// - https://github.com/syntax-tree/mdast#nodes
// - https://github.com/syntax-tree/unist-util-select#support


module.exports = { 'heading[depth=1]': 'title is-1',
'heading[depth=2]': 'title is-2',
'heading[depth=3]': 'title is-3',
'heading[depth=4]': 'title is-4',
'heading[depth=5]': 'title is-5',
'image':            'image',
'paragraph':        'paragraph'
}