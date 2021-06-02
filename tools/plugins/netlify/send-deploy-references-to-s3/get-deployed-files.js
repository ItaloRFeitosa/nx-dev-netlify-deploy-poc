const axios = require("axios");

const append = (source, toAppend) => {
  if(!source){
    return [toAppend]
  }
  return [...source, toAppend]
}

const fetchDeployedFiles = async (deployId) => {
  const authToken = process.env.NETLIFY_AUTH_TOKEN || 'B7ZIRnryK_Q58OyWxtAtJUFVohQ5Vux0wwJ6_gZDna4'
  const files = await axios.get(
    `https://api.netlify.com/api/v1/deploys/${deployId}/files`,
    {
      headers: {
        authorization: `Bearer ${authToken}`
      }
    }
  );

  return files
}

const removeUnwantedMimeTypes = (wantedMimeTypes) =>
  (file) => !!wantedMimeTypes[file.mime_type];

const addFullpath = (baseUrl) =>
  (file) => ({
    ...file,
    fullpath: `${baseUrl}${file.path}`
  })

const separateByType = (wantedMimeTypes) => (memo, file) => {
  const type = wantedMimeTypes[file.mime_type]
  const current = memo[type]
  return {
    ...memo,
    [type]: append(current, file.fullpath)
  }
}

const groupFilesByType = (baseUrl, files) => {
  const wantedMimeTypes = {
    'text/css': 'css',
    'application/javascript': 'js',
    'text/html': 'html'
  };

  return files
    .filter(removeUnwantedMimeTypes(wantedMimeTypes))
    .map(addFullpath(baseUrl))
    .reduce(separateByType(wantedMimeTypes), {})
}

module.exports.getDeployedFilesReference = async (baseUrl, deployId) => {
  const files = await fetchDeployedFiles(deployId)
  const groupedFiles = groupFilesByType(baseUrl, files)

  return groupedFiles
}
