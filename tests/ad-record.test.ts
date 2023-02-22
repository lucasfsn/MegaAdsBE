import { AdRecord } from '../records/ad.record';

const defaultObj = {
  name: 'Test',
  description: 'Test',
  url: 'google.com',
  price: 0,
  lat: 1,
  lng: 2,
};

test('Can build AdRecord', () => {
  const ad = new AdRecord(defaultObj);

  expect(ad.name).toBe('Test');
  expect(ad.description).toBe('Test');
  expect(ad.url).toBe('google.com');
  expect(ad.price).toBe(0);
  expect(ad.lat).toBe(1);
  expect(ad.lng).toBe(2);
});

test('Validates invalid price', () => {
  expect(
    () =>
      new AdRecord({
        ...defaultObj,
        price: -1,
      })
  ).toThrow('Price must be between 0 and 9999999.');
});
