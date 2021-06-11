const contentful = require('contentful')

const contentfulConfig = require('../.contentful.json')

const config = {
  space: contentfulConfig.CTF_SPACE_ID,
  accessToken: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
}
// export `createClient` to use it in page components
export default function createClient() {
  return contentful.createClient(config)
}
