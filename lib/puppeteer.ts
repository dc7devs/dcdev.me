import puppeteer from "puppeteer";

async function genereteScreenshot(url: string, outputPath: string) {
    try {
        const borwser = await puppeteer.launch({ headless: false });
        const page = await borwser.newPage();

        await page.goto(url);
        await page.screenshot({ path: outputPath });

        await borwser.close();
        console.log("screenshot genereted sucessfully")
    } catch (err) {
        console.log("Unable to generete screenshot");
    }
}

export default genereteScreenshot;