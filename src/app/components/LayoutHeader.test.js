import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import LayoutHeader from './LayoutHeader'


afterEach(cleanup);

test('App should be a function', () => {
  expect(LayoutHeader instanceof Function).toBeTruthy()
});


test("Let's try some DOM testing", () => {
  const { getByText } = render(<LayoutHeader />)
  expect(getByText("Klippings")).toBeTruthy()
})