const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_001',
      name: 'Greeting question',
      input: 'oyaata kohomadha sudhdhaa?',
      expected: 'ඔයාට කොහොමද සුද්දා?',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple present sentence',
      input: 'mama aadharaya karanava.',
      expected: 'මම ආදරය කරනව.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Polite request',
      input: 'mata udhavvak karanna puLuvandha?',
      expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_004',
      name: 'Compound sentence',
      input: 'api kaeema kana gaman chithrapatayakuth balanavaa. ammaa banninavaa padam karanna kiyalaa',
      expected: 'අපි කෑම කන ගමන් චිත්‍රපටයකුත් බලනවා. අම්මා බන්නිනවා පඩම් කරන්න කියලා',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Mixed English Zoom',
      input: 'hathata yanna thiyennee Zoom.',
      expected: 'හතට යන්න තියෙන්නේ Zoom.',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_006',
      name: 'Mixed English',
      input: 'mama today nagareta yanavaa.',
      expected: 'මම today නගරෙට යනවා.',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_007',
      name: 'Future tense',
      input: 'havasa 4.00 api heta ennadha ?',
      expected: 'හවස 4.00 අපි හෙට එන්නද ?',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Negative form',
      input: 'mata e kellava  epaa kavadhaavathma.',
      expected: 'මට එ කෙල්ලව එපා කවදාවත්ම.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Imperative',
      input: 'vahaama enna.',
      expected: 'වහාම එන්න.',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_010',
      name: 'Informal phrasing',
      input: 'mehema gahapan.',
      expected: 'මෙහෙම ගහපන්.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Place name',
      input: 'api pol kadamu SLIIT eken.',
      expected: 'අපි පොල් කඩමු SLIIT එකෙන්.',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_012',
      name: 'email mixed',
      input: 'Documents tika attach karalaa mata email 10 k evanna.',
      expected: 'Documents ටික attach කරලා මට email 10 ක් එවන්න.',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Question pronoun',
      input: 'oyaa kaemathidha?',
      expected: 'ඔයා කැමතිද?',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Plural form',
      input: 'api oru padhinna yamu.',
      expected: 'අපි ඔරු පදින්න යමු.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Repeated word',
      input: 'paninna paninna paninna ',
      expected: 'පනින්න පනින්න පනින්න',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Currency',
      input: 'Rs. 2003',
      expected: 'Rs. 2003',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Time format',
      input: '10.30 AM',
      expected: '10.30 AM',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Date format',
      input: '19/01/2003',
      expected: '19/01/2003',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_019',
      name: 'Units',
      input: 'maamage bara 5 kg',
      expected: 'මාමගෙ බර 5 kg',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_020',
      name: 'Extra spaces',
      input: 'mama gedhara       yami',
      expected: 'මම ගෙදර       යමි',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Question mixed',
      input: 'mama gedhara yanavaa. oyaa enavadha?',
      expected: 'මම ගෙදර යනවා. ඔයා එනවද?',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Formal Tenses ',
      input: 'mata marenna oni!',
      expected: 'මට මරෙන්න ඔනි',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_023',
      name: 'Formal Tenses ',
      input: 'oya enavaanam mama balan innavaa.',
      expected: 'ඔයා එනවනම් මම බලන් ඉන්නවා.',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_024',
      name: 'Long paragraph',
      input: 'magee nama chamudhika pramoth aariyasena. mama SLIIT vishvavidhdhayalaye igenuma labami. mata thama job ekak nae. mata velavakata epaa venavaa. eth monaa karannadha jivthee ehema thamayi. kamak ne .don t care , I . mama haemadhaama 6.30 ta workup velaa.vaeda karanna patangannaavaa.me dhavavala poddak dhumata huruvelaa eka hariyata giyath mata sathutak nae. mama haemavelema hithanne kohomadha eka navaththanne kiyalaa. mama try karanava, eth asarThaka venavaa. 🥵🥵 , mama mokadha mekata karannee kiiya kiya dhavase vaeda tika karagena yanavaa.mama me dhaen idha e velavata eka kkaranne nae kiyallaa hithanavaa.',
      expected: 'මගේ නම චමුදික ප්‍රමොත් ආරියසෙන. මම SLIIT විශ්වවිද්දයලයෙ ඉගෙනුම ලබමි. මට තම job එකක් නැ. මට වෙලවකට එපා වෙනවා. එත් මොනා කරන්නද ජිව්තේ එහෙම තමයි. කමක් නේ .don t care , ඉ . මම හැමදාම 6.30 ට workup වෙලා.වැඩ කරන්න පටන්ගන්නාවා.මෙ දවවල පොඩ්ඩක් දුමට හුරුවෙලා එක හරියට ගියත් මට සතුටක් නැ. මම හැමවෙලෙම හිතන්නෙ කොහොමද එක නවත්තන්නෙ කියලා. මම try කරනව, එත් අසර්ථක වෙනවා. 🥵🥵 , මම මොකද මෙකට කරන්නේ කීය කිය දවසෙ වැඩ ටික කරගෙන යනවා.මම මෙ දැන් ඉද එ වෙලවට එක ක්කරන්නෙ නැ කියල්ලා හිතනවා.',
      length: 'L'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Informal slang phrase',
      input: 'man vidhdhayartha widhuhale ',
      expected: 'මම විද්ද්‍යාර්ත විදුහලේ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Missing space between words',
      input: 'matabathkannaoonee',
      expected: 'මට බත් කන්නඔ ඔනේ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Colloquial expression',
      input: 'ammata thaaththataa salaakana dawruwanta',
      expected: 'අම්මට තාත්තට සලකන දරුවන්ට',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Missing space between words',
      input: 'mata heta10.00 tacampus yannaoni',
      expected: 'මට හෙට 10.00 ට කැම්පස් යන්න ඔනි',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Missing space between words',
      input: 'api kuburatayannada ?',
      expected: 'අපි කුබුරට යන්නද ?',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Speling Mistake ',
      input: 'man kedeta yannada? monada genna oni badu',
      expected: 'මම කඩේට යන්නද? මොනද ගෙන්න ඔනි බඩු',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Line break in sentence',
      input: 'mata heta ude 10 ta malebe sliit ekata yanna thiyenawa',
      expected: 'මට හෙට උදේ 10 ට මාලබේ SLIIT එකට යන්න තියෙනවා',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Mixed English with errors',
      input: 'english danna minissu sinhala danne neni. ei api english igena gannee',
      expected: 'english දන්න මිනිස්සු sinhala දන්නේ නැනි. ඇයි අපි english ඉගෙන ගන්නේ',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_009',
      name: ' Complex slang statement',
      input: 'mal maamaa kadee gihin apita mal nee mal enakanbalan idalaa hade haawaa tharaha welaa epaawenawaa. hawaa enna kiyalaa wadha dheanawaa mata therennee na monaa karannadha kiyalaa. apee ammata horen man mal maamagen mal gannee ithin mata dhen wedhila inne adhath meemala jarawa gahanna unani epaa welaa inne  whats the world. eeka neweyii kathaawa mekanammaha epaa wena poject ekak dhen welaawa 12.56 i thama weda. maduruwoth kanawa mata. ayi apita me madurowo kanne maduruwo kana ekanawwaththanna bedha apita. man dhen  mulu kakul dhekema idex bam gewaa heeee.... bye bye...aiyoo yanna wenne neni long text ekakata 300 koninee poddak madhi ithin thawa type karanawaa. meka balana kenaa meka eththatama kiyawayidha kiyalaa mn me hithaa hitha meka type karanne .beluwata kamak nee . mata baninna epa. aaadhennam 300 k harii bye byee .... 🫶🏻',
      expected: 'මල් මාමා කඩේ ගිහින් අපිට මල් නෑ මල් එනකන් බලන් ඉදලා හාවා තරහා වෙලා එපා වෙනවා. හාවා එන්න කියලා වද දෙනවා මට තෙරෙන්නේ නෑ මොනා කරන්නද කියලා. අපේ අම්මට හොරෙන් මන් මල් මාමගෙන් මල් ගන්නේ. ඉතින් මන් දැන් එලියේ ඉන්නේ අදත් මේ මල ජරාව ගහන්න උනානී එපා වෙලා ඉන්නේ what is this world.   ඒක නෙවෙයි කතාව මෙකනම් මහා එපා වෙන ප්‍රොජෙක්ට් එකක් දැන් වෙලාව 12.56 යී මන් තාම වැඩ. මදුරුවොත් කනවා මට. ඇයි අපිට මේ මදුරුවෝ කන්නේ මදුරුවෝ කන එක නවත්තන්න බැද අපිට.මන් දැන් මුලු කකුල් දෙකේම idex bam ගැවා හී... bye bye... අයියෝ යන්න වෙන්නේ නැනි long text එකකට 300 ක් ඔනිනේ පොඩ්ඩක් මදි ඉතින් තව type කරනවා. මෙක බලන කෙනා මෙක ඇත්තටම කියවයිද කියලා මන් මේ හිත හිත මෙක type කරන්නේ. බැලුවට කමක් නෑ. මට බනින්න එපා. ආ දැන් නම් 300 ක් හරී bye bye....🫶🏼',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Speling Mistake ',
      input: 'appaa badu iwarayii wadee godaa',
      expected: 'අප්පා බඩු ඉවරයී වැඩේ ගොඩ',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'UI',
    input: '{}::::""""&^%$#&*(@##$%',
    partialInput: '{}::::""""&^%$#&*(@##$%',
    expectedFull: '{}::::""""&^%$#&*(@##$%',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});