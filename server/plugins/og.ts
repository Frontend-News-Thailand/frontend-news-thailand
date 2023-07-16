import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      visit(file.head.image.src, (n) => {
        file.head.image.src = `${process.env.BASE_URL}/${n}`
      })
    }
  })
})
