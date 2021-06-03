const { getDeployedFilesReference } = require("./get-deployed-files");

const { sendJsonToS3 } = require("./s3-helper")

const generateAssetsBody = ({mainUrl, files, commitRef, buildAt}) => {
  return {
    ...files,
    domain: mainUrl,
    build: commitRef,
    build_at: buildAt
  }
}

const getBuildValues = () => {
  const buildAt = new Date().toISOString()
  const {
    URL: mainUrl,
    SITE_ID: siteId,
    DEPLOY_ID: deployId,
    PROJECT_NAME: projectName,
    COMMIT_REF: commitRef,
  } = process.env

  return { buildAt, deployId, mainUrl, commitRef }
}

const sendDeployReferenceToS3 = async () => {
  const { buildAt, deployId, mainUrl, commitRef } = getBuildValues()

  const files = await getDeployedFilesReference(deployId)

  const assetsBody = generateAssetsBody({mainUrl, files, commitRef, buildAt})

  const assetsBucket = '';

  const assetsFilename = '';

  await sendJsonToS3(assetsBucket, assetsFilename, assetsBody)
}

module.exports = {
  onPostBuild: async ({ utils, constants }) => {
    try {
      await sendDeployReferenceToS3()
    } catch (error) {
      utils.build.cancelBuild("Build Canceled due error: \n", error.message, "\n", error.stack)
    }
  }
};
