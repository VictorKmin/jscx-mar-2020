module.exports = {
  AUTHORIZATION: 'Authorization',

  MAX_PHOTO_SIZE: 2 * 1024 * 1024,
  MAX_DOC_SIZE: 10 * 1024 * 1024,

  PHOTO_MIMETYPES: ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/tiff', 'image/webp'],
  DOCS_MIMETYPES: [
    'application/msword', // DOC
    'application/pdf', // PDF
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOC 2007
  ]
}
