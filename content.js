/* ================================================================
   ARKIVET — INNEHÅLL
   ================================================================
   Det här är den enda filen du behöver redigera för att ändra
   text, lägga till dokument, uppdatera FAQ-frågor osv.

   Spara filen och ladda om sidan för att se dina ändringar.

   SYNTAX-PÅMINNELSE:
   - Text omges av citattecken: "såhär"
   - Separera listobjekt med komma
   - Ett nytt dokument läggs till såhär:
       {
         title: "Titel",
         desc:  "Beskrivning.",
         url:   "https://länk.se",
       },
================================================================ */

const SITE = {

  /* ── Sidinformation ─────────────────────────────────────────── */
  name:        "Arkivet",
  domain:      "fupp.se",
  email:       "arkivet@fupp.se",
  lastUpdated: "2025-08-11",

  /* ── Underrubrik på startsidan ──────────────────────────────── */
  hero: {
    sub: "Din guide till offentlighetsprincipen",
  },

  /* ══════════════════════════════════════════════════════════════
     DOKUMENT
     Lägg till nya handlingar genom att kopiera ett block och
     klistra in det i listan — glöm inte komma efter }.
  ══════════════════════════════════════════════════════════════ */
  dokument: {
    intro: "Särskilt utvalda exempel på allmänna handlingar.",
    items: [
      {
        title: "Polisens slang-lexikon",
        desc:  "Polisens interna ordlista över slanguttryck.",
        url:   "https://drive.google.com/drive/folders/1Kn64IaodPDuEvH32W5RPlaBAb-YLasxD",
      },
      {
        title: "Helikopterrånet — förundersökningen",
        desc:  "Förundersökningsprotokollet från det spektakulära rånet mot G4S i Västberga 2009, där gärningsmännen landade med helikopter på taket.",
        url:   "https://corruptiohelikoperranet.wordpress.com/2013/07/05/helikopterranet-forundersokningen-pdf/",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VANLIGA FRÅGOR
     Lägg till fler frågor genom att kopiera ett block:
       {
         q: "Frågan?",
         a: "Svaret.",
       },
  ══════════════════════════════════════════════════════════════ */
  faq: [
    {
      q: "Får personen veta att jag beställt deras domar?",
      a: "Nej, personen blir inte meddelad om du läser deras domar eller liknande.",
    },
    {
      q: "Kan en person ta reda på att jag beställt deras domar?",
      a: "Vanligtvis, ja. Vissa begäranden, alltså beställningar, tas bort efter att de har hanterats. Men utgå från att din begäran också kan begäras ut och är offentlig. Om detta är ett problem för dig, använd en kontaktväg som inte kan kopplas till dig.",
    },
    {
      q: "Kostar det något att beställa domar?",
      a: "Det beror på antalet handlingar du beställer. 1-9 handlingar (domar) är gratis, 10:e handlingen kostar 50 kronor och varje handling efter det kostar ytterligare 2 kronor. Information finns på domstol.se",
    },
    {
      q: "Hur lång tid tar det att få handlingarna?",
      a: "Beställer du på en vardag under kontorstid kan du ofta få handlingarna inom ett par minuter. Annars kan det ta till nästa arbetsdag. Skyndsamhetskravet i 2 kap. 16 § Tryckfrihetsförordningen innebär att en begäran av handling ska hanteras skyndsamt. Justitieombudsmannen (JO) har tidigare konstaterat att besked angående utlämnandet ska lämnas samma dag.",
    },
    {
      q: "Kan jag vara anonym?",
      a: "Ja. Du har rätt att vara anonym när du begär ut allmänna handlingar. Myndigheten får inte fråga vem du är eller varför du vill ha handlingarna.",
    },
    {
      q: "Vad gör jag om myndigheten vägrar lämna ut?",
      a: "Begär ett myndighetsbeslut. Det kan sedan överklagas till hovrätten. Se sektionen Överklaga för en steg-för-steg-guide, eller fråga myndigheten.",
    },
    {
      q: "Jag vet inte hur jag ska formulera mig?",
      a: "Hur du formulerar dig är inte superviktigt, du blir inte nekad p.g.a. dålig grammatik eller oformellt språk. Viktigaste är att du är tydlig med vad du vill ha.",
    },
    {
      q: "De vill inte lämna ut handlingar digitalt, kan de göra så?",
      a: "Tyvärr ja, det finns inget krav på att lämna ut handlingar digitalt. På så vis kan myndigheter kräva stora summor pengar för att lämna ut i pappersform.",
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     GUIDER
     Ändra desc för att uppdatera texten på guidekorten.
     Ändra INTE id — det styr vilken undersida kortet länkar till.
  ══════════════════════════════════════════════════════════════ */
  guides: [
    { id: "domar",               title: "Beställa domar",                     desc: "Det lättaste av alla handlingar. Via domstol.se kan du beställa domar helt gratis med ett webbformulär.",                    tag: "Domstol" },
    { id: "fup",                 title: "Förundersöknings\u00ADprotokoll",    desc: "Beställ FUP via e-post till domstolen. Du behöver personnummer, målnummer eller polisens diarienummer.",                   tag: "E-post" },
    { id: "dagboksblad",         title: "Dagboksblad",                        desc: "En lista på alla handlingar i ett mål — när de inkom, om de är sekretessbelagda och mer.",                                  tag: "E-post" },
    { id: "belastningsregister", title: "Belastnings\u00ADregister",          desc: "Du kan inte begära ut någon annans register direkt — men det finns ett sätt att komma åt det.",                            tag: "Indirekt" },
    { id: "overklaga",           title: "Att överklaga",                      desc: "Nekad tillgång till handlingar? Så här överklagar du beslutet — steg för steg.",                                           tag: "Juridik" },
    { id: "ovrigt",              title: "Övriga handlingar",                  desc: "Handlingar från alla Sveriges myndigheter — polisen, skatteverket, åklagarmyndigheten och fler.",                          tag: "Alla myndigheter" },
  ],

  /* ── Guideinnehåll ─────────────────────────────────────────── */

  domar: {
    updated: "2026-03-08",
    title: "Att beställa domar",
    intro: "Att beställa domar är det lättaste av alla handlingar. Genom att klicka på knappen nedan kommer du till domstol.se där du kan beställa domar via ett webbformulär. Det är helt gratis och allt du behöver är:",
    requirements: [
      "Ett personnummer (970821-4353) eller målnummer (B/T/Ä 123-45)",
      "Veta i vilken tingsrätt personen dömdes/frikändes alternativt var brottet begicks",
    ],
    note: "Vet du inte personnummer så kan du hitta det via MrKoll eller Ratsit. Om du inte vet vilken tingsrätt personen dömdes i är det bra om du vet var brottet begicks. På domstol.se kan du söka via postnummer och på så sätt hitta rätt tingsrätt. Här kommer en enkel genomgång:",
    steps: [
      "Välj en domstol. Vet du inte vilken domstol målet gäller så kan du söka med postnummer istället.",
      "Klicka på E-tjänst och sedan E-tjänst igen.",
      'Nu öppnas en ny flik, om "välj domstol" inte är ifyllt så välj domstolen igen. Om du känner till målnumret, klicka Ja annars klicka Nej.',
      "Har du ett personnummer på någon part i målet så fyller du i det, har du ett målnummer fyller du i det istället.",
      "Fyll i mejladressen som domarna ska skickas till. Kom ihåg att all e-post som skickas till domstolarna blir offentliga och vem som helst kan begära att få läsa dessa, så om du inte vill att folk ska veta vad du beställt kan du göra en ny mejladress.",
      'Under "Din fakturaadress", välj någon av de två sista alternativen. Du kommer ändå inte behöva betala något, om du inte beställer mer än 9 handlingar (1 handling motsvarar 1 PDF).',
      "Klicka på skicka! Det tar en liten stund innan din begäran skickas iväg, men när den gjort det ser det ut som på bilden nedan. Är det en vardag efter lunch är det möjligt att du får handlingarna inom ett par minuter, däremot kan du behöva vänta tills nästa arbetsdag om du beställer senare på kvällen. Handläggningstiden varierar stort mellan olika domstolar.",
    ],
    links: [
      { label: "Beställ domar (domstol.se)", url: "https://www.domstol.se/domar-och-beslut/bestall-domar-beslut-eller-handlingar/" },
    ],
  },

  fup: {
    title: "Att beställa förundersökningsprotokoll (FUP)",
    intro: "Att beställa förundersökningsprotokoll är väldigt enkelt. Det finns tyvärr inte ett formulär för det som det finns för domar, men enda skillnaden är att du själv måste kontakta domstolen. För att beställa en FUP (fupp) så behöver du något av dessa:",
    requirements: [
      "Personnummer på någon inblandad (målsägande eller misstänkt)",
      "Ett målnummer (B/T/Ä 123-45)",
      "Polisens diarienummer (t.ex. 5000-K1437166-17)",
      "För- och efternamn på någon inblandad",
    ],
    note: 'Du behöver även veta i vilken tingsrätt fuppen förvaras. Det brukar vara den som är närmast brottsplatsen. Du kan använda funktionen "sök med postnummer" genom att trycka på knappen längst ner på denna sida.',
    templateIntro: "När du har allt du behöver är det enda du behöver göra att skriva ett mejl till tingsrätten. Om du vill ha hjälp med hur du skriver ett mejl så har jag gjort lite mallar du kan följa:",
    templates: [
      "Hej, jag skulle vilja ta del av förundersökningsprotokoll i målnummer [MÅLNUMMER]. Tack!",
      "Hej, jag skulle vilja ta del av förundersökningsprotokoll i mål där personnummer [PERSONNUMMER] förekommer. Tack!",
    ],
    templateNote: "Om det är ett specifikt mål du söker kan du berätta vad målet handlar om. Är det många träffar brukar domstolen skicka en lista med alla träffar där du kan välja den du söker.",
    denied: "Skulle det vara så att domstolen inte vill lämna ut fuppen kan det bero på flera saker: den är belagd med sekretess (ofta i sexualbrott) eller att de skickar endast FUP via post. Skulle detta vara fallet kan du be om ett överklagbart beslut. Mer om att överklaga finner du under sektionen Överklaga.",
    polisNote: "Det går även att begära förundersökningsprotokoll direkt från polisen via deras e-tjänst.",
    links: [
      { label: "Begär FUP från polisen",          url: "https://etjanster.polisen.se/eallmanhandling/boah/" },
      { label: "Sök med postnummer",              url: "https://www.domstol.se/domar-och-beslut/bestall-domar-beslut-eller-handlingar/" },
      { label: "Kontaktuppgifter till domstolar", url: "https://www.domstol.se/hitta-domstol/allmanna-domstolar/" },
    ],
  },

  dagboksblad: {
    title: "Att beställa dagboksblad",
    intro: "Ett dagboksblad är en lista på alla handlingar som finns i ett specifikt mål, när de inkom, om de är belagda med sekretess m.m. Dagboksblad är alltid offentliga, dock kan vissa namn vara sekretessbelagda om det gäller t.ex. sexualbrott. Dagboksblad kan vara intressanta om du vill beställa häktningsframställningar, protokoll, veta när åtal väcks osv. För att beställa ett dagboksblad behöver du:",
    requirements: [
      "Personnummer, fullt namn eller målnummer",
      "Veta vilken domstol målet är i",
    ],
    templateIntro: "Nästa steg är att mejla domstolen, kontaktuppgifter finner du genom att följa knappen längst ner. Här kommer exempel på hur du kan skriva:",
    templates: [
      "Hej, jag skulle vilja ta del av dagboksblad i målnummer [MÅLNUMMER]. Tack!",
      "Hej, jag skulle vilja ta del av dagboksblad i mål där personnummer [PERSONNUMMER] förekommer. Tack!",
      "Hej, jag skulle vilja ta del av dagboksblad i mål där [FÖRNAMN EFTERNAMN] förekommer. Tack!",
    ],
    followUp: "Om du hittar en handling i dagboksbladet du är intresserad av så skriver du bara till domstolen igen. Du kan svara på mejlet de skickade till dig:",
    followUpTemplate: "Tack, jag skulle även vilja ta del av aktbilaga X.",
    links: [
      { label: "Kontaktuppgifter till domstolar", url: "https://www.domstol.se/hitta-domstol/allmanna-domstolar/" },
    ],
  },

  belastningsregister: {
    title: "Att beställa någons belastningsregister",
    paragraphs: [
      "Du kan tyvärr inte begära ett utdrag ur någon annans belastningsregister, men det finns fortfarande en chans att få tag på det.",
      "Om personen blivit åtalad för brott kan du kontakta domstolen där åtal väcktes och begära ut dagboksbladet för det målet. I dagboksbladet kan du sedan se om domstolen har en kopia på den misstänktes belastningsregister. Har domstolen det så är det bara att svara domstolens mejl och berätta att du begär en kopia av belastningsregistret, eller att du begär aktbilaga X, där X är det nummer handlingen har i målet. Det står till vänster om belastningsregistret i dagboksbladet.",
    ],
  },

  overklaga: {
    title: "Att överklaga",
    paragraphs: [
      "I Sverige har du rätt att ta del av handlingar som förvaras hos en myndighet och enligt särskilda regler anses inkommen dit eller upprättad där. Dock får du inte ta del av en handling som omfattas av sekretess. Vem som bestämmer om handlingen omfattas av sekretess eller inte varierar en del men skulle din begäran att ta del av en allmän handling nekas finns det fortfarande hopp.",
      'Vi säger att du vill ta del av ett förundersökningsprotokoll hos Stockholms tingsrätt. Du skickar ett mejl och får svaret "Handlingarna kan inte lämnas ut p.g.a. sekretess." Nu vill du överklaga beslutet, men först måste du begära ett myndighetsbeslut. Svaret du fick på mejl fick du av en anställd hos Stockholms tingsrätt och kallas för ett "tjänstemannabeslut". Ett tjänstemannabeslut kan inte överklagas. Därför behöver du be om ett myndighetsbeslut.',
      "Detta är det lättaste steget och du behöver inte motivera varför du vill ha ett myndighetsbeslut. Myndighetsbeslutet kan skilja sig från beslutet tjänstemannen tog och det kan därför resultera att du redan nu får handlingarna du begärde från början.",
      "När du begär ett myndighetsbeslut är det en jurist som beslutar om du får ta del av handlingen eller ej. Detta beslut kan överklagas och det gör du genom att skicka ett mejl till tingsrätten och berätta att du vill överklaga samt berätta vad du vill överklaga.",
      'T.ex. "Jag vill överklaga tingsrättens beslut att inte lämna ut samtliga förundersökningsprotokoll i målnummer B 14380-20."',
      "Efter detta översänder tingsrätten ditt beslut till hovrätten. Hovrätten gör sedan ett eget beslut och meddelar dig om beslutet. Även detta beslut kan överklagas till högsta domstolen, men där krävs ett prövningstillstånd.",
      "Glöm inte att överklaga i tid! I myndighetsbeslutet du får kommer det stå när ett eventuellt överklagande senast måste komma in. Det brukar vara ca tre veckor framåt.",
    ],
  },

  ovrigt: {
    title: "Att beställa övriga handlingar",
    paragraphs: [
      "Det finns många handlingar att beställa. Inte bara från domstolar utan det gäller alla myndigheter i Sverige. Polisen, Skatteverket, Åklagarmyndigheten, Transportstyrelsen osv.",
      'För att beställa handlingar från en myndighet räcker det med att du mejlar dem. Vissa har speciella formulär som domstol.se har men i många fall måste du mejla dem. Googla på "(myndighet) allmän handling" så borde du komma rätt. Ifall du mejlar dem så räcker det med att du mejlar registratorn eller någon annan på myndigheten och berättar vad du söker så skickar de dig vidare till rätt avdelning.',
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RADERA MIG
     services = en tjänst per block.
     operators = mobiloperatörer (lägg till url eller note).
  ══════════════════════════════════════════════════════════════ */
  privacy: {
    title: ["Radera", "mig"],
    intro: "I Sverige finns det en rad olika hemsidor vars syfte är att publicera information om människor som bor i Sverige. All information de publicerar är offentlig enligt våra lagar så det är svårt att göra det omöjligt att hitta dina personuppgifter. Däremot kan du göra det svårare.",
    emailTemplate: "Hej!\n\nJag vill härmed utöva min rätt till radering med stöd av artikel 17 i dataskyddsförordningen.\n\n[Skriv vilka personuppgifter du vill ska raderas]\n\nNi kan hitta information om era skyldigheter som personuppgiftsansvarig på Integritetsskyddsmyndighetens webbplats (www.imy.se).\n\nJag ser fram emot ert svar på min begäran om radering så snart som möjligt, senast inom en månad.\n\nNi får gärna kontakta mig om ni har några frågor.\n\nMed vänliga hälsningar\n[Namn]",
    services: [
      {
        name: "MrKoll",
        desc: "Dölj adress temporärt: Hos MrKoll kan du dölja telefonnummer tillsvidare och din utdelningsadress i 30 dagar genom att logga in med Mobilt BankID. Ta bort alla uppgifter permanent: Begär att dina uppgifter raderas skriftligt via mejl till info@mrkoll.se. IMY har en mall som du kan fylla i och skicka.",
        links: [{ label: "Ändra uppgifter (MrKoll)", url: "https://mrkoll.se/om/andra-uppgifter/" }],
      },
      {
        name: "Ratsit",
        desc: "Hos Ratsit finns det två alternativ. Antingen döljer du dig för besökare utan konto, eller så plockar du bort dina uppgifter helt från Ratsit.",
        links: [
          { label: "Dölj för besökare utan konto", url: "https://ratsit.se/dolj" },
          { label: "Radera alla uppgifter",         url: "https://ratsit.se/tabort" },
        ],
      },
      {
        name: "Hitta.se",
        desc: "Hitta.se gör det enkelt. Du väljer om du vill ändra uppgifter eller ta bort informationen helt. Du väljer vem som ska plockas bort och identifierar dig sedan med Mobilt BankID.",
        links: [{ label: "Hantera uppgifter", url: "https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida" }],
      },
      {
        name: "Eniro",
        desc: "För att radera eller ändra dina uppgifter hos Eniro identifierar du dig med Mobilt BankID.",
        links: [{ label: "Uppdatera uppgifter", url: "https://uppdatera.eniro.se/person" }],
      },
      {
        name: "Birthday.se",
        desc: "Hos Birthday.se kan du plocka bort dig helt, eller välja att bara vara synlig för inloggade medlemmar. Identifiera dig med BankID. Ändringen verkställs efter ungefär en timme.",
        links: [{ label: "Hantera uppgifter", url: "https://app.minauppgifter.se/birthday/bankidlogin" }],
      },
      {
        name: "Merinfo",
        desc: "Merinfo är också väldigt lätt att bli raderad från. Tjänsten är även kopplad till biluppgifter.se så ifall du inte finns på merinfo.se kan man inte hitta dig som bilägare lika enkelt.",
        links: [{ label: "Ta bort uppgifter", url: "https://www.merinfo.se/ta-bort-mina-uppgifter" }],
      },
    ],
    extraProtection: [
      {
        name: "Adresslåset",
        desc: "Spärrar obehörig adressändring, eftersändning och lagring av post. Du får även en varning om någon folkbokför sig på din adress. Företaget bakom tjänsten ägs av Postnord, och tjänsten är kostnadsfri.",
        url:  "https://www.adressandring.se/vara-tjanster/adresslaset",
      },
    ],
    operators: [
      { name: "Tre",     url:  "https://community.tre.se/nummer-och-samtalsinstaellningar-5/goer-telefonnumret-hemlig-5837" },
      { name: "Hallon",  note: "Kontakta kundservice" },
      { name: "Telenor", url:  "https://www.telenor.se/support/vanliga-fragor/felsokning/varfor-finns-mitt-nummer-inte-hos-hitta-och-andra-nummerupplysningstjanster/" },
      { name: "Tele2",   note: "Kontakta kundservice" },
      { name: "Vimla",   url:  "https://faq.vimla.se/hc/sv/articles/360019827138" },
      { name: "Telia",   url:  "https://www.telia.se/support/mobiltelefoni/guider/stalla-in-hemligt-nummer" },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     STALKER-TIPS
     Lägg till fler tips genom att kopiera ett block:
       {
         title: "Tipsets rubrik",
         desc:  "Förklaring.",
       },
  ══════════════════════════════════════════════════════════════ */
  stalker: {
    title: ["Skydda din", "information"],
    intro: "Idag är det väldigt lätt att hitta information om dig, allt som krävs är en webbläsare. Här är några tips för hur du skyddar din identitet:",
    tips: [
      { title: "Ha inte ditt riktiga namn som användarnamn", desc: "Undvik att publicera ditt fullständiga namn i dina sociala medier." },
      { title: "Berätta inte att du fyller år",              desc: "Ett förnamn och ett födelsedatum räcker gott för att hitta väldigt mycket känslig information om dig." },
      { title: "Ha inte offentliga konton",                  desc: "Är t.ex. ditt Instagramkonto offentligt kan man ofta se alla bilder du är taggade på och på så sätt hitta din familj." },
      { title: "Ge inte ut för mycket information",          desc: 'Om du i din Instagrambio har skrivit "Borat, Boden" så kan det också räcka till att hitta allt om dig. Speciellt om du har ett ovanligt namn.' },
      { title: "Radera dina uppgifter",                      desc: "Ta bort dig från tjänster som hitta.se, Ratsit osv. Se sektionen Radera mig." },
      { title: "Förvirra en stalker",                        desc: "Ha ett fejknamn i din bio, felstavat namn, fel stad etc. Använd inte någon annans riktiga uppgifter. Använd ett vanligt namn i en stor stad, t.ex. Erik i Göteborg." },
    ],
  },

  /* ── JO-anmälan ─────────────────────────────────────────────── */
  jo: {
    title: "JO-anmälan",
    text:  "Om du anser att du blivit felaktigt behandlad av en myndighet eller en tjänsteman hos en myndighet kan du anmäla händelsen till JO. Det kan exempelvis vara om en myndighet inte lämnat ut handlingar skyndsamt (TF 2:15) eller brutit mot efterforskningsförbudet (TF 2:18).",
    link:  { label: "Formulär för JO-anmälan", url: "https://www.jo.se/sv/JO-anmalan/Skicka-in-anmalan/" },
  },

  /* ── Stöd ───────────────────────────────────────────────────── */
  support: {
    text:  "Tyvärr är Arkivet inte helt gratis att driva. Vill du vara med och bidra till Arkivet så det kan fortsätta leva och bli ännu bättre så hade det uppskattats något enormt! Här nedan finner du sätt att donera på, samt alla utgifter sidan har, så du vet vad pengarna går till.",
    costs: [
      { item: "Domännamn och tillägg", cost: "354 kr/år" },
    ],
    links: [
      { label: "Donera via Swish", url: "https://hihat.io/arkivet" },
      { label: "Buy me a Coffee",  url: "https://www.buymeacoffee.com/arkiv" },
    ],
  },

  /* ── Disclaimer ─────────────────────────────────────────────── */
  disclaimer: "Syftet med Arkivet är endast att lära er om hur ni själva kan få insyn i svenska myndigheters arbete.",

  /* ── Används av renderingsmotorn (redigera normalt inte) ─────── */
  about: {
    title: ["Kunskap", "är makt"],
    paragraphs: [
      "Att beställa handlingar från olika myndigheter är <strong>lättare än du tror</strong>. Nedan finner du information om hur du beställer olika handlingar.",
      "Arkivet hjälper dig att navigera <strong>offentlighetsprincipen</strong> — från att beställa domar och förundersökningsprotokoll till att skydda din integritet online.",
      "Allt du behöver veta om hur du tar del av allmänna handlingar, samlat på ett ställe.",
    ],
    facts: [],
  },
  marquee:  ["Domar","Förundersökningsprotokoll","Dagboksblad","Belastningsregister","Överklaga","Offentlighetsprincipen","Integritet","JO-anmälan"],
  politik:  { intro: "", question: "", responses: [] },
  charity:  [],
  nav:      [],
  tools:    [
    { name: "fuppGPT",  desc: "", url: "https://chatgpt.com/g/g-67eee0e62f48819191061fb6117a691d-fuppgpt" },
    { name: "IMY-mall", desc: "", url: "https://www.imy.se/privatperson/dataskydd/dina-rattigheter/radering/" },
  ],
};
