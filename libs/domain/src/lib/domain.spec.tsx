import { render } from '@testing-library/react';

import Domain from './domain';

describe('Domain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Domain />);
    expect(baseElement).toBeTruthy();
  });
});
