const puppeteer = require('puppeteer')

async function scrapeReviews(url){

    // const browser = await puppeteer.launch();
    // Create the browser without headless mode
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="provider_profile"]/div/div[1]/div[1]/div/div[1]/div[1]/div/img');
    const src = await el.getProperty('src');
    const imageLink =  await src.jsonValue();


    const [el2] = await page.$x('//*[@id="provider_profile"]/div/div[1]/div[1]/div/div[1]/div[2]/div/h1');
    const txt = await el2.getProperty('textContent');
    const title =  await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="provider_profile"]/div/div[1]/div[1]/div/div[1]/div[2]/p[3]/a/span[1]');
    const txt2 = await el3.getProperty('textContent');
    const ratings =  await txt2.jsonValue();

    const [el4] = await page.$x('//*[@id="provider_profile"]/div/div[1]/div[1]/div/div[1]/div[2]/p[3]/a/span[2]');
    var txt3 = await el4.getProperty('textContent');
    // txt3 = txt3.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, "");
        
    const survey_numbers =  await txt3.jsonValue();
    

    console.log({title, ratings, survey_numbers, imageLink});

    browser.close();

}

scrapeReviews('https://www.caredash.com/doctors/bihu-sandhir-md-kettering-oh');