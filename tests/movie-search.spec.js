import { test, expect } from '@playwright/test';

test('Movie list is generated and contains the searched movie', async ({ page }) => {
    const movieTitle = 'Inception'; // The movie to search for

  await page.goto('http://localhost:5173');

  // Type a movie title in the search input
  await page.fill('input[placeholder="Search for a movie..."]', movieTitle);

  await page.getByTestId('search-button').click();

  await page.waitForLoadState("networkidle");

  // Wait for the movie list to appear
  await expect(page.getByTestId('search-item').first()).toBeVisible();

  // Verify that at least one movie appears in the list
  const movieItems = await page.getByTestId('search-item').count();
  expect(movieItems).toBeGreaterThan(0);

  // Verify that the first movie in the list has the movie title that was searched for
  await expect(page.getByTestId('movie-title').first()).toHaveText(movieTitle);

});
