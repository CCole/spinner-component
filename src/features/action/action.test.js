import { describe } from 'riteway';
import render from 'riteway/render-component';

import ActionBar from './action.js';

const noop = () => {};

describe('Spinner / ActionBar', async (assert) => {
  const $ = render(<ActionBar start={noop} />);

  assert({
    given: 'expected props',
    should: 'render a start button',
    actual: $('.start-btn').length,
    expected: 1,
  });

  assert({
    given: 'expected props',
    should: 'render a stop button',
    actual: $('.stop-btn').length,
    expected: 1,
  });
});
