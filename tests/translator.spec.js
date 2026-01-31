const { test, expect } = require('@playwright/test');



const testCases = [

  //24 POSITIVE 
  { id:'Pos_Fun_01', input:'mama bath kanna yanavaa.', expected:'මම බත් කන්න යනවා.', description:'Simple sentence', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_02', input:'api cinema ekata giyaa saha passe kaeema kaevaa.', expected:'අපි cinema එකට ගියා සහ පස්සෙ කෑම කැවා.', description:'Compound sentence', type:'Positive',
    inputLength:'M', whatCovered:'Daily language usage / Compound sentence / M / Accuracy validation' },

  { id:'Pos_Fun_03', input:'oyaa enavaanam mama innavaa.', expected:'ඔයා එනවානම් මම ඉන්නවා.', description:'Complex sentence', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Complex sentence / S / Accuracy validation' },

  { id:'Pos_Fun_04', input:'oyaa hodhindha inne?', expected:'ඔයා හොදින්ද ඉන්නේ?', description:'Question', type:'Positive',
    inputLength:'S', whatCovered:'Greeting / request / response / Interrogative (question) / S / Accuracy validation' },

  { id:'Pos_Fun_05', input:'meeka balanna.', expected:'මේක බලන්න.', description:'Command', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Imperative (command) / S / Accuracy validation' },

  { id:'Pos_Fun_06', input:'mama pereedhaa paasal giyaa.', expected:'මම පෙරේදා පාසල් ගියා.', description:'Past tense', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Past tense / S / Accuracy validation' },

  { id:'Pos_Fun_07', input:'api heta gamata yamu.', expected:'අපි හෙට ගමට යමු.', description:'Future tense', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Future tense / S / Accuracy validation' },

  { id:'Pos_Fun_08', input:'mata eeka epaa.', expected:'මට ඒක එපා.', description:'Negative form', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Negation (negative form) / S / Accuracy validation' },

  { id:'Pos_Fun_09', input:'api okkoma ekka enavaa.', expected:'අපි ඔක්කොම එක්ක එනවා.', description:'Plural usage', type:'Positive',
    inputLength:'S', whatCovered:'Daily language usage / Plural form / S / Accuracy validation' },

  { id:'Pos_Fun_10', input:'suba dhavasak!', expected:'සුභ දවසක්!', description:'Greeting', type:'Positive',
    inputLength:'S', whatCovered:'Greeting / request / response / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_11', input:'hari, mama karannam.', expected:'හරි, මම කරන්නම්.', description:'Response', type:'Positive',
    inputLength:'S', whatCovered:'Greeting / request / response / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_12', input:'karuNaakaralaa eeka dhenna.', expected:'කරුණාකරලා ඒක දෙන්න.', description:'Polite request', type:'Positive',
    inputLength:'S', whatCovered:'Greeting / request / response / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_13', input:'machan api yamu.', expected:'මචන් අපි යමු.', description:'Slang', type:'Positive',
    inputLength:'S', whatCovered:'Slang / informal language / Simple sentence / S / Robustness validation' },

  { id:'Pos_Fun_14', input:'mata Email ekak evanna.', expected:'මට Email එකක් එවන්න.', description:'Mixed English', type:'Positive',
    inputLength:'S', whatCovered:'Mixed Singlish + English / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_15', input:'Zoom meeting ekak thiyenavaa.', expected:'Zoom meeting එකක් තියෙනවා.', description:'Technical term', type:'Positive',
    inputLength:'S', whatCovered:'English technical/brand terms embedded in Singlish / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_16', input:'api Colombo yamu.', expected:'අපි Colombo යමු.', description:'Place name', type:'Positive',
    inputLength:'S', whatCovered:'Names / places / common English words / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_17', input:'nimal saha Sunil enavaa.', expected:'නිමල් සහ සුනිල් එනවා.', description:'Proper names', type:'Positive',
    inputLength:'S', whatCovered:'Names / places / common English words / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_18', input:'hari! mama ennam.', expected:'හරි! මම එන්නම්.', description:'Punctuation', type:'Positive',
    inputLength:'S', whatCovered:'Punctuation / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_19', input:'mata Rs. 250 dhenna.', expected:'මට Rs. 250 දෙන්න.', description:'Currency', type:'Positive',
    inputLength:'S', whatCovered:'Punctuation / numbers / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_20', input:'7.30AM yanna.', expected:'7.30AM යන්න.', description:'Time format', type:'Positive',
    inputLength:'S', whatCovered:'Punctuation / numbers / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_21', input:'mama gedhara   innavaa.', expected:'මම ගෙදර   ඉන්නවා.', description:'Multiple spaces', type:'Positive',
    inputLength:'S', whatCovered:'Formatting (spaces / line breaks / paragraph) / Simple sentence / S / Formatting preservation' },

  { id:'Pos_Fun_22', input:'podi podi boola.', expected:'පොඩි පොඩි බෝල.', description:'Repeated words', type:'Positive',
    inputLength:'S', whatCovered:'Word combination / phrase pattern / Simple sentence / S / Accuracy validation' },

  { id:'Pos_Fun_23', input:'mama meka test ekak vidhihata liyannee.', expected:'මම මේක test එකක් විදිහට ලියන්නේ.', description:'Medium input', type:'Positive',
    inputLength:'M', whatCovered:'Daily language usage / Compound/complex medium input / M / Accuracy validation' },

  //  long test
  { id:'Pos_Fun_24', input:'lqqkaave minissu sqqchaaraya karanna hari aasayi kiyalaa hithenavaa', expected:'ලංකාවෙ මිනිස්සු සංචාරය කරන්න හරි ආසයි කියලා හිතෙනවා.', description:'Long input (shorter)', type:'Positive',
    inputLength:'M', whatCovered:'Daily language usage / Complex sentence / M / Accuracy validation' },

  // POSITIVE long paragraph
  { id:'Pos_Fun_25_LongParagraph', input:
    'Mama eka rainy day ekak, city ekata yamu kiyala plan kala. Bus ekata hinawela, market balanna giyama honda fruits ha snacks godak thiyenawa kiyala balala hithuna. Piyapath saha daruwou hondatama enjoy wela, photo gahala innawa. Ape trip ekedi small adventure thiyenawa, bus ekata late wela, rain paduna, habai ape mood eka hariyenawa. Eka passe, home yamu kiyala plan kala, road walin beautiful scenery balala, dan hithenne, life eke simple things hondai enjoy karanna.' ,
    expected:
    'මම එක rainy day එකක්, city එකට යමු කියල plan කල. Bus එකට හිනwඑල, market බලන්න ගියම හොන්ඩ fruits හ snacks ගොඩක් තියෙනwඅ කියල බලල හිතුන. ඵියපත් සහ ඩරුwඔඋ හොන්ඩටම enjoy wඑල, photo ගහල ඉන්නwඅ. Ape trip එකෙඩි small adventure තියෙනwඅ, bus එකට late wඑල, rain පඩුන, හබෛ ape mood එක හරියෙනwඅ. එක පස්සෙ, home යමු කියල plan කල, road wඅලින් beautiful scenery බලල, ඩන් හිතෙන්නෙ, life eke simple things හොන්ඩෛ enjoy කරන්න.',
    description:'Long paragraph (>=300 chars) to test robustness and paragraph handling', type:'Positive',
    inputLength:'L', whatCovered:'Formatting (spaces / line breaks / paragraph) / Complex sentence / L / Robustness validation' },


  //  10 NEGATIVE 
  { id:'Neg_Fun_01', input:'mama/gedhara/innavaa', expected:'මම/ගෙදර/ඉන්නවා', description:'Missing spaces', type:'Negative',
    inputLength:'S', whatCovered:'Formatting (spaces / line breaks / paragraph) / Typographical error handling / S / Robustness validation' },

  { id:'Neg_Fun_02', input:'www.facebook.com', expected:'www.facebook.com', description:'URL', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation / numbers / S / Formatting preservation' },

  { id:'Neg_Fun_03', input:'test@email.com', expected:'test@email.com', description:'Email', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation / numbers / S / Formatting preservation' },

  { id:'Neg_Fun_04', input:'CPU GPU RAM', expected:'CPU GPU RAM', description:'Abbreviations', type:'Negative',
    inputLength:'S', whatCovered:'English abbreviations and short forms / Simple sentence / S / Formatting preservation' },

  { id:'Neg_Fun_05', input:'5kg', expected:'5kg', description:'Units', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation / numbers / S / Formatting preservation' },

  { id:'Neg_Fun_06', input:'Alt+Del', expected:'Alt+Del', description:'Keyboard shortcut', type:'Negative',
    inputLength:'S', whatCovered:'English abbreviations and short forms / Simple sentence / S / Formatting preservation' },

  { id:'Neg_Fun_07', input:'Pass123word', expected:'Pass123word', description:'Alphanumeric', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation / numbers / S / Formatting preservation' },

  { id:'Neg_Fun_08', input:'function(x)', expected:'function(x)', description:'Code syntax', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation / numbers / S / Formatting preservation' },

  { id:'Neg_Fun_09', input:'2.5', expected:'2.5', description:'Typo', type:'Negative',
    inputLength:'S', whatCovered:'Punctuation' },

  { id:'Neg_Fun_10', input:'bata', expected:'bata', description:'Ambiguous phonetic', type:'Negative',
    inputLength:'S', whatCovered:'Typographical error handling / Simple sentence / S / Robustness validation' }

];




test.describe('IT3040 Assignment - Swift Translator', () => {

  test.setTimeout(300000);

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {

      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      const output = page.locator('//div[contains(@class,"panel-title") and text()="Sinhala"]/following-sibling::div').first();

      await input.clear();
      await input.fill(data.input);

      await expect(output).toHaveText(data.expected, { timeout: 5000 });
      const actual = await output.innerText();


      console.log(`\n--- ${data.id} ---`);
      console.log(`INPUT: ${data.input}`);
      console.log(`EXPECTED: ${data.expected}`);
      console.log(`ACTUAL: ${actual}`);

      if (data.type === 'Negative') {
        if (actual.trim() !== data.expected.trim()) {
          console.log('STATUS: PASS (Failure detected)');
        } else {
          console.log('STATUS: FAIL');
        }
      }
    });
  }

  // UI TEST

  test('Pos_UI_01: Real-time update', async ({ page }) => {

    const input = page.getByPlaceholder('Input Your Singlish Text Here.');
    const output = page.locator('//div[contains(@class,"panel-title") and text()="Sinhala"]/following-sibling::div').first();

    await input.fill('mama');
    await page.waitForTimeout(4000);

    const result = await output.innerText();

    console.log('\n--- UI TEST ---');
    console.log(`OUTPUT: ${result}`);

    expect(result).toContain('මම');
  });

});
