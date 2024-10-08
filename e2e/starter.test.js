import {TEST_ID} from 'configs/Constants';
import Movies from '../src/assets/movies.json';

const testItem = Movies[0];
const movieId = testItem.id;
const movieName = testItem.name;

describe('Remitano app', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should wait for the list of movie to load', async () => {
    await waitFor(element(by.id(`${TEST_ID['movie-item']}-${movieId}`)))
      .toBeVisible()
      .withTimeout(1000);

    await expect(
      element(by.id(`${TEST_ID['movie-item']}-${movieId}`)),
    ).toBeVisible();
  });

  it('should change tab when pressing on tab item', async () => {
    await element(by.id(TEST_ID['tab-booked'])).tap();
    await expect(element(by.id(TEST_ID['list-booked']))).toBeVisible();
  });

  it('should open movie detail when press on manage booking', async () => {
    await element(by.id(`${TEST_ID['manage-booking']}-${movieId}`)).tap();
    await expect(element(by.label(movieName))).toBeVisible();
  });

  it('should show movie item in Booked tab after pressing on Book now', async () => {
    await element(by.id(`${TEST_ID['manage-booking']}-${movieId}`)).tap();
    await element(by.id(TEST_ID['btn-book-now'])).tap();
    await expect(
      element(by.id(`${TEST_ID['movie-item']}-${movieId}`)),
    ).toBeVisible();
  });

  it('should show favorite item after pressing on favorite', async () => {
    await waitFor(element(by.id(`${TEST_ID['movie-item']}-${movieId}`)))
      .toBeVisible()
      .withTimeout(1000);
    await element(by.id(`${TEST_ID['favorite-movie']}-${movieId}`)).tap();
    await element(by.id(TEST_ID['tab-favorites'])).tap();
    await expect(
      element(by.id(`${TEST_ID['movie-item']}-${movieId}`)),
    ).toBeVisible();
  });
});
