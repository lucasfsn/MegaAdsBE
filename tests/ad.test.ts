import { AdRecord } from '../records/ad.record';

test('AdRecord returns data from db for one entry.', async () => {
  const ad = await AdRecord.getOne('abc');

  // expect(ad).toBeUndefined();
  expect(ad.id).toBe('abc');
  expect(ad.name).toBe('Test');
});

test('AdRecord returns null from db for unexisting entry.', async () => {
  const ad = await AdRecord.getOne('test');
  expect(ad).toBeNull();
});
