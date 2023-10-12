import React from 'react';
import Add from './Add';
import { render } from '@testing-library/react';

test('my name is Aniket', () => {
  const { getByText } = render(<Add />);
  const resultElement = getByText('my name is Aniket');

  expect(resultElement).toBeInTheDocument();
});
