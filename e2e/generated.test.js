import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Добавить в корзину' }).first().click();
  await page.getByRole('button', { name: 'Добавить в корзину' }).nth(3).click();
  await page.getByRole('button', { name: 'Добавить в корзину' }).nth(2).click();
  await page.getByRole('link', { name: 'Корзина' }).click();
  await expect(page.getByTestId('count')).toContainText('3');
  await page.getByRole('button', { name: 'Удалить из корзины' }).nth(1).click();
  await expect(page.getByTestId('count')).toContainText('2');
  await page.getByRole('button', { name: 'Очистить корзину' }).click();
  await expect(page.getByTestId('count')).toContainText('0');
});