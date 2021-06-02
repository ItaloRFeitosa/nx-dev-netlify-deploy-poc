module.exports.sendJsonToS3 = async (bucket, filename, params) => {
  console.log(JSON.stringify(params, null, 2));
}
