/* Local Click2SMS UI. The SMS composer opens only after the visitor clicks. */
(() => {
  'use strict';
  const F = window.ItsaiClick2Sms;
  const mind = document.body.dataset.service === 'mind';
  const service = mind ? 'Mind+' : 'ITSAI';
  const keyword = mind ? 'MIND' : 'TSAI';
  const page = document.body.dataset.flowPage;
  const query = new URLSearchParams(window.location.search);
  let language = F.language(query.get('lang'));
  const dictionary = {
    sv: {
      hello:'Hej,', selectLanguage:'Välj språk',
      prompt:'Skriv en kort text för att direkt skapa professionellt AI-genererat innehåll.',
      topicInfo:'Ange ditt ämne och se hur AI:n skapar ett komplett dokument om det.',
      or:'eller', beginnerTitle:'Osäker på hur du ska börja?',
      beginnerIntro:'Här är några tips för nybörjare. Du kan också utforska våra guider under ”Mitt konto”.',
      tipClear:'Var tydlig och kortfattad: Ju mer specifik du är med vad du vill göra, desto bättre resultat får du.',
      tipContext:'Ge sammanhang: Relevant bakgrundsinformation kan hjälpa AI:n att förstå vad du söker och ge mer träffsäkra svar.',
      tipExperiment:'Experimentera: Var inte rädd för att prova olika typer av instruktioner och se vad som fungerar bäst för just ditt användningsområde.',
      subscribe:'Prenumerera genom att skicka', to:'till', sendSms:'Skicka SMS',
      price:'Aktivera för 200 SEK per månad', terms:'Villkor & Betingelser', privacy:'Integritetspolicy',
      intro:mind ? 'Mind+ är en hjärnträningstjänst som utvecklar dina kognitiva förmågor.' : 'ITSAI skapar professionella, AI-drivna presentationer och dokument med högkvalitativa bilder, allt fullt redigerbart på en och samma plattform.',
      disclaimer:mind ? 'Du kan när som helst avsluta tjänsten genom att skicka STOP Mind+ till 72300. Träna din hjärna med hjälp av spel. Genom att fortsätta bekräftar du att du är minst 18 år. För mer information, kontakta oss via e-post: ' : 'Du kan när som helst avsluta tjänsten genom att skicka STOP ITSAI+ till 72300. Skapa professionella presentationer med hjälp av AI. Genom att fortsätta bekräftar du att du är minst 18 år. För mer information, kontakta oss via e-post: ',
      supportPhone:' eller ring kundsupport: ',
      provider:mind ? 'Denna tjänst tillhandahålls av Playwing LTD.' : 'Denna tjänst tillhandahålls av Next Move Digital LTD.',
      desktopTitle:'Fortsätt på din mobil',
      desktopText:'Öppna SMS-appen på din mobil och skicka följande meddelande:',
      recipient:'Mottagare',message:'Meddelande',copy:'Kopiera '+keyword,
      copied:keyword+' har kopierats.',copyManual:'Markera och kopiera '+keyword+'.',
      smsHelp:'Skicka '+keyword+' till 72300 i SMS-appen på din mobil.',
      topicLabel:'Ange ditt ämne',continueLabel:'Fortsätt',close:'Stäng',
      legalNav:'Juridisk information',home:service+' – startsida',
      spaceAlt:'Ett mörkt rymdlandskap med färgstarka planeter',
      robotAlt:'En futuristisk robot framför exempel på AI-genererade presentationer och dokument.',
      personAlt:'En man med en mobiltelefon omgiven av minne, fokus, logik, problemlösning och bearbetningshastighet.',
      train:'Träna', trainNotice:'Varje träningspass innehåller 2 hjärnspel och 1 utvärderingsuppgift och avslutas med en uppdatering av dina personliga poäng!',
      personal:'Personlig hjärnträning',memory:'Minnesträning',math:'Huvudräkning',perception:'Perceptionsträning',focus:'Koncentrationsträning',logic:'Logikträning',
      play:'Spela',evaluation:'Utvärdering',progress:'Framsteg',account:'Konto',trainingNav:'Huvudmeny',chooseTraining:'Välj ett träningspass'
    },
    en: {
      hello:'Hello,',selectLanguage:'Select language',
      prompt:'Enter a short text to generate professional AI content instantly.',
      topicInfo:'Enter your topic and see how the AI generates a complete document about it.',
      or:'or',beginnerTitle:'Unsure how to start?',
      beginnerIntro:'Here are some tips for beginners, or you can explore our guides under "My account."',
      tipClear:"Be clear and concise: The more specific you are about what you want to do, the better results you'll get.",
      tipContext:"Provide context: Relevant context can help the AI understand what you're looking for and generate more accurate responses.",
      tipExperiment:"Experiment: Don't be afraid to try different types of instructions and see what works best for your specific use case.",
      subscribe:'Subscribe by sending',to:'TO',sendSms:'Send SMS',
      price:'Activate for 200 SEK per month',terms:'Terms & Conditions',privacy:'Privacy Policy',
      intro:mind ? 'Mind+ is a brain-training service designed to improve a wide range of cognitive skills.' : 'ITSAI creates professional, AI-powered presentations and documents with high-quality images, all fully editable on one platform.',
      disclaimer:mind ? 'You can cancel the service at any time by sending STOP Mind+ to 72300. Train your cognitive skills through games. By continuing, you confirm that you are at least 18 years old. For more information, please email: ' : 'You can cancel the service at any time by sending STOP ITSAI+ to 72300. Create professional AI-powered presentations. By continuing, you confirm that you are at least 18 years old. For more information, please email: ',
      supportPhone:' or call support: ',
      provider:mind ? 'This service is provided by Playwing LTD.' : 'This service is provided by Next Move Digital LTD.',
      desktopTitle:'Continue on your phone',
      desktopText:'Open the SMS app on your phone and send the following message:',
      recipient:'Recipient',message:'Message',copy:'Copy '+keyword,
      copied:keyword+' copied.',copyManual:'Select and copy '+keyword+'.',
      smsHelp:'Send '+keyword+' to 72300 using the SMS app on your phone.',
      topicLabel:'Enter your topic',continueLabel:'Continue',close:'Close',
      legalNav:'Legal information',home:service+' home',
      spaceAlt:'A dark space landscape with colourful planets',
      robotAlt:'A futuristic robot in front of examples of AI-generated presentations and documents.',
      personAlt:'A man using a mobile phone, surrounded by Memory, Focus, Logic, Problem-Solving and Processing Speed.',
      train:'Train',trainNotice:'Each training session includes 2 brain games, 1 assessment task, and ends with an update of your personalised scores!',
      personal:'Personal brain training',memory:'Memory training',math:'Mental arithmetic training',perception:'Perception training',focus:'Concentration training',logic:'Logic training',
      play:'Play',evaluation:'Evaluation',progress:'Progress',account:'Account',trainingNav:'Main menu',chooseTraining:'Choose a training session'
    }
  };
  const smsButton = document.getElementById('sms-button');
  const smsStatus = document.getElementById('sms-status');
  const dialog = document.getElementById('desktop-sms');
  const copyStatus = document.querySelector('[data-copy-status]');
  const topic = document.getElementById('topic');
  const storageKey = 'itsai.click2sms.draft';

  function setLanguage(value, updateAddress = true) {
    language = F.language(value);
    const t = dictionary[language];
    document.documentElement.lang = language;
    document.title = service+' | '+(page==='writer' ? (language==='sv'?'Skapa med AI':'Create with AI') : page==='train' ? t.train : (language==='sv'?'Prenumerera med SMS':'Subscribe by SMS'));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if(Object.prototype.hasOwnProperty.call(t,el.dataset.i18n)) el.textContent=t[el.dataset.i18n];
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    const select=document.querySelector('[data-language-select]');
    if(select) select.value=language;
    const flag=document.querySelector('[data-flag]');
    if(flag) flag.className='flag flag--'+language;
    if(topic) topic.setAttribute('aria-label',t.topicLabel);
    document.querySelectorAll('[data-arrow]').forEach(el=>el.setAttribute('aria-label',t.continueLabel));
    document.querySelectorAll('[data-home]').forEach(el=>{el.href='index.html?lang='+language;el.setAttribute('aria-label',t.home);});
    document.querySelectorAll('[data-legal]').forEach(el=>{el.href=F.legalHref(el.dataset.legal,page,language);});
    document.querySelectorAll('[data-footer-nav]').forEach(el=>el.setAttribute('aria-label',t.legalNav));
    document.querySelectorAll('[data-art]').forEach(el=>el.setAttribute('aria-label',t.spaceAlt));
    document.querySelectorAll('[data-robot]').forEach(el=>el.alt=t.robotAlt);
    document.querySelectorAll('[data-person]').forEach(el=>el.alt=t.personAlt);
    document.querySelectorAll('[data-close-dialog],[data-close-notice]').forEach(el=>el.setAttribute('aria-label',t.close));
    document.querySelectorAll('[data-training-nav]').forEach(el=>el.setAttribute('aria-label',t.trainingNav));
    document.querySelectorAll('[data-training-list]').forEach(el=>el.setAttribute('aria-label',t.chooseTraining));
    document.querySelectorAll('[data-subscribe]').forEach(el=>{
      const destination=F.subscribeHref(language);
      el.href=destination+(el.dataset.subscribe?'&training='+encodeURIComponent(el.dataset.subscribe):'');
    });
    if(smsButton) smsButton.setAttribute('aria-label',t.sendSms+': '+keyword+' '+t.to+' 72300');
    if(smsStatus&&!smsStatus.hidden) smsStatus.textContent=t.smsHelp;
    if(copyStatus) copyStatus.textContent='';
    if(updateAddress){
      try { const url=new URL(window.location.href);url.searchParams.set('lang',language);window.history.replaceState(null,'',url.href); } catch {}
    }
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  const select=document.querySelector('[data-language-select]');
  if(select)select.addEventListener('change',()=>setLanguage(select.value));
  setLanguage(language,false);
  window.addEventListener('pageshow',()=>setLanguage(language,false));

  if(topic){
    try{
      const draft=JSON.parse(sessionStorage.getItem(storageKey)||'null');
      if(draft&&typeof draft.topic==='string') topic.value=draft.topic;
    } catch {}
    document.getElementById('topic-form').addEventListener('submit',event=>{
      event.preventDefault();
      try{sessionStorage.setItem(storageKey,JSON.stringify({topic:topic.value,language}));}catch{}
      // No generation/subscription request is sent from this static preview.
      window.location.assign(F.subscribeHref(language));
    });
  }
  document.querySelectorAll('[data-close-notice]').forEach(button=>button.addEventListener('click',()=>{
    const notice=button.closest('[data-training-notice]');
    if(notice)notice.hidden=true;
  }));

  if(smsButton){
    const userAgent=navigator.userAgent||'';
    const platform=navigator.platform||'';
    const touchPoints=navigator.maxTouchPoints||0;
    smsButton.href=F.smsHref(userAgent,platform,touchPoints,keyword);
    smsButton.addEventListener('click',event=>{
      if(!F.isMobile(userAgent,platform,touchPoints)&&dialog){
        event.preventDefault();
        if(typeof dialog.showModal==='function') dialog.showModal();
        else dialog.setAttribute('open','');
        return;
      }
      if(smsStatus){smsStatus.hidden=false;smsStatus.textContent=dictionary[language].smsHelp;}
      // Native messaging app handles review/send. No SMS is automatically sent.
    });
  }
  if(dialog){
    const close=()=>{if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');};
    dialog.querySelector('[data-close-dialog]').addEventListener('click',close);
    dialog.addEventListener('click',event=>{
      if(event.target!==dialog)return;
      const r=dialog.getBoundingClientRect();
      if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();
    });
    const copy=dialog.querySelector('[data-copy]');
    copy.addEventListener('click',async()=>{
      try{
        if(!navigator.clipboard||!navigator.clipboard.writeText)throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(keyword);
        copyStatus.textContent=dictionary[language].copied;
      }catch{copyStatus.textContent=dictionary[language].copyManual;}
    });
  }
})();