import ConvertAmount from '../src/utils/ConvertAmount';

const oneBipInPip = '1000000000000000000';

test('toPip', async () => {
  const convertAmount = new ConvertAmount();
  const actual = convertAmount.toPip(1.0);
  expect(oneBipInPip).toEqual(actual);
});

test('toBip', async () => {
  const convertAmount = new ConvertAmount();
  const actual = convertAmount.toBip(oneBipInPip);
  expect(1.0).toEqual(actual);
});
