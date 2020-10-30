import { describe, match } from 'riteway';
import render from 'riteway/render-component';

import Spinner from './circle-progress';

describe('Spinner', async (assert) => {
  const $ = render(<Spinner />);

  assert({
    given: 'expected props',
    should: 'render a spinner circle',
    actual: $('.spinner-circle').length,
    expected: 1,
  });

  const createProgressCircle = (prog) => render(<Spinner prog={prog} />);

  {
    const progress = 50;
    const $ = createProgressCircle(progress);

    assert({
      given: 'a progress number',
      should: 'render the correct progress number',
      actual: parseInt($('.progress').html().trim(), 10),
      expected: progress,
    });
  }

  {
    const progress = 100;
    const $ = createProgressCircle(progress);

    assert({
      given: 'a progress number',
      should: 'render the correct progress number',
      actual: parseInt($('.progress').html().trim(), 10),
      expected: progress,
    });
  }
});
