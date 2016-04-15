'use strict';

function pleaseDoNotBotherUs(req, res, next) {
  if(req.headers['user-agent'].indexOf("MSIE") >= 0) {
    return res.redirect("https://www.google.com/chrome/");
  }
  return next();
};

module.exports = pleaseDoNotBotherUs.pleaseDoNotBotherUs = pleaseDoNotBotherUs.pleaseDoNotBotherUs = pleaseDoNotBotherUs;
