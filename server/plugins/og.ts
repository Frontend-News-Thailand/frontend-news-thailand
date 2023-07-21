import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      visit(file.head.image.src, (n) => {
        file.head.image.src = `${process.env.BASE_URL}/${n}`
      })
      visit(file.body, (n: any) => n.tag === 'img', (node) => {
        file.coverImage = node.props.src
      })

      const title = file.body.children[1].children[0].value
      file.title = title

      const description = file.body.children[2].children[0].value
      file.description = description
    }
  })
})
