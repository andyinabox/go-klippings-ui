import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import FileUpload from './FileUpload'

afterEach(cleanup);

test('FileUpload should be a function', () => {
  expect(FileUpload instanceof Function).toBeTruthy()
});

test("FileUpload field should render", () => {
  const { getByRole } = render(<FileUpload />)
  expect(getByRole("button")).toBeTruthy()
})