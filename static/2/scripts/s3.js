
var path = require('path');
var s3 = require('s3');
var version = require('../package.json').version;

function upload() {
  var options = require('../aws.json');
  var params = {
    localDir: path.join(__dirname, '../audio'),
    s3Params: {
      Bucket: options.bucket, 
      Prefix: 'skullcat/',
      ACL: 'public-read',
    }
  };

  var client = s3.createClient({
    s3Options: {
      accessKeyId: options.key,
      secretAccessKey: options.secret,
    }
  });

  var uploader = client.uploadDir(params);
  uploader.on('error', function(err) {
    console.error("unable to upload:", err.stack);
  });
  uploader.on('progress', function() {
    console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function() {
    console.log("done uploading");
  });

};

upload();
