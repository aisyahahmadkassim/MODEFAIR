import { test, expect } from '@playwright/test';

test('Search attractions', async ({ page }) => {
  await page.goto('https://www.booking.com/attractions/index.en-gb.html');

  // Type destination
  await page.getByTestId('search-input-field').click();
  await page.keyboard.type('Sunway', { delay: 1000 });
  await page.getByText(/Sunway/i).first().click();
  // await page.waitForTimeout(10000);
  await page.keyboard.press('Enter');
  
  await page.pause();

});
