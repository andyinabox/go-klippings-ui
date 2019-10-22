import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from './App'


afterEach(cleanup);

test('App should be a function', () => {
  expect(typeof App).toBe('function');
});


test("Let's try some DOM testing", () => {
  const { getByText } = render(<App />)
  console.log(getByText("Welcome to React!"))
  expect(getByText("Welcome to React!")).toBeTruthy()
})