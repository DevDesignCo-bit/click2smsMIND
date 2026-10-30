/* Pure flow helpers; no SMS is sent by this module. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports) module.exports=api;
  else root.ItsaiClick2Sms=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const SMS_NUMBER='72300';
  const SMS_KEYWORD='TSAI';
  function language(value){return value==='en'?'en':'sv';}
  function isIOS(userAgent,platform,touchPoints){
    return /iPad|iPhone|iPod/i.test(userAgent||'') || (platform==='MacIntel' && touchPoints>1);
  }
  function isMobile(userAgent,platform,touchPoints){
    return /Android|iPad|iPhone|iPod|Mobile/i.test(userAgent||'') || isIOS(userAgent,platform,touchPoints);
  }
  function smsHref(userAgent,platform,touchPoints,keyword=SMS_KEYWORD){
    const separator=isIOS(userAgent,platform,touchPoints)?'&':'?';
    return 'sms:'+SMS_NUMBER+separator+'body='+encodeURIComponent(keyword);
  }
  function subscribeHref(lang){return 'index.html?lang='+language(lang);}
  function legalHref(documentName,page,lang){
    const document=documentName==='privacy.html'?'privacy.html':'terms.html';
    const from=page==='writer'?'writer':page==='train'?'train':'c2s';
    return document+'?from='+from+'&lang='+language(lang);
  }
  return Object.freeze({SMS_NUMBER,SMS_KEYWORD,language,isIOS,isMobile,smsHref,subscribeHref,legalHref});
});