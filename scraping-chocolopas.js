const fs = require('fs');
const path = require('path');
module.exports = async (page, website) => {
    const { selectors } = website;
    await page.goto(website.url);
    await page.waitFor(10000);
