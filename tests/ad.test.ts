import { AdRecord } from '../records/ad.record';
import { pool } from '../utils/db';

afterAll(async () => {
  await pool.end();
});
test('AdRecord.getOne returns data from db for one entry.', async () => {
  const ad = await AdRecord.getOne('abc');

  // expect(ad).toBeUndefined();
  expect(ad.id).toBe('abc');
  expect(ad.name).toBe('Test');
});

test('AdRecord.getOne returns null from db for unexisting entry.', async () => {
  const ad = await AdRecord.getOne('test');
  expect(ad).toBeNull();
});

test('AdRecord.findAll returns array of found entires.', async () => {
  const ads = await AdRecord.findAll('');

  expect(ads).not.toEqual([]);
  expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns array of found entires that has letter "a".', async () => {
  const ads = await AdRecord.findAll('T');

  expect(ads).not.toEqual([]);
  expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns empty array of found entires when searching for something that do not exist.', async () => {
  const ads = await AdRecord.findAll('?????????????????');

  expect(ads).toEqual([]);
});
