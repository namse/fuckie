'use strict';

function pleaseDoNotBotherUs(req, res, next) {
  const userAgent = req.headers['user-agent'];
  if(userAgent && (
    userAgent.indexOf('MSIE') >= 0
    || userAgent.indexOf('Trident') >= 0)) {
    return res.redirect("https://www.google.com/chrome/");
  }
  return next();
}

module.exports = pleaseDoNotBotherUs.pleaseDoNotBotherUs = pleaseDoNotBotherUs.pleaseDoNotBotherUs = pleaseDoNotBotherUs;
