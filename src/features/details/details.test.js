import { describe } from 'riteway';
import render from 'riteway/render-component';

import Details from './details.js';

describe('Spinner/Details', async (assert) => {
  const $ = render(<Details />);

  assert({
    given: 'expected props',
    should: 'render metadata',
    actual: $('.spinner-details').length,
    expected: 1,
  });
});
