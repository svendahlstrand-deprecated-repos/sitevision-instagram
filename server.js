var settings = {
  accessToken: '289165620.22c41e6.adf8c862f90b4cbe8e07c7beba45a2fd',
  numberOfMedia: 5,
};

// You shouldn't need to edit below this line!

function Instagram(settings) {
  this.accessToken = settings.accessToken;
}

Instagram.prototype.get = function (endpoint) {
  importPackage(java.net);
  importPackage(Packages.org.apache.commons.io);

  var url = new URL('https://api.instagram.com/v1' + endpoint + '?access_token=' + this.accessToken);
  var connection = url.openConnection();
  var body = IOUtils.toString(connection.getInputStream(), 'UTF-8');

  return eval('(' + body  + ')');
};

Instagram.prototype.selfFeed = function () {
  return this.get('/users/self/feed');
};

Instagram.prototype.recentMediaFromUser = function (userId) {
  return this.get('/users/' + userId + '/media/recent');
};

Instagram.prototype.recentMediaForTagName = function (tagName) {
  return this.get('/tags/' + tagName + '/media/recent');
};

function Media(data) {
  this.createdTime = data.created_time;
  this.link = data.link;
  this.lowResolution = data.images.low_resolution.url;
  this.thumbnail = data.images.thumbnail.url;
  this.standardResolution = data.images.standard_resolution.url;
  this.captionText = data.caption && data.caption.text || null;
  this.tags = data.tags.join(', ');
}

var instagram = new Instagram(settings);
var json;
var medias = [];

if (settings.tagName) {
  json = instagram.recentMediaForTagName(settings.tagName);
}
else if(settings.userId) {
  json = instagram.recentMediaFromUser(settings.userId);
}
else {
  json = instagram.selfFeed();
}

var numberOfMedia = settings.numberOfMedia < json.data.length ? settings.numberOfMedia : json.data.length;

for (var i = 0; i < numberOfMedia; i++) {
  medias.push(new Media(json.data[i]));
}

medias = java.util.Arrays.asList(medias);
