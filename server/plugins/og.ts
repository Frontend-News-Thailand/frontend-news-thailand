import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      visit(file.head.image.src, (n) => {
        file.head.image.src = `${'https://1712-2001-44c8-4560-e714-f5f4-589e-66ff-ef4b.ngrok-free.app'}${n}`
      })
    }
  })
})
