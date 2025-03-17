import { test, expect } from '@playwright/test';

test('Movie list is generated and contains the searched movie', async ({ page }) => {
    const movieTitle = 'Inception'; // The movie to search for

  await page.goto('http://localhost:5173');

  // Type a movie title in the search input
  await page.fill('input[placeholder="Search for a movie..."]', movieTitle);

  await page.click('button:has-text("Search")');

  // Wait for the movie list to appear
  await page.waitForSelector('.movie-item');

  // Verify that at least one movie appears in the list
  const movieItems = await page.locator('.movie-item').count();
  expect(movieItems).toBeGreaterThan(0);

// Get all movie titles displayed in the list
const movieTitles = await page.locator('.movie-item h3').allInnerTexts();

// Ensure at least one of the displayed movie titles matches the searched movie
expect(movieTitles.some(title => title.trim() === movieTitle)).toBeTruthy();
});
