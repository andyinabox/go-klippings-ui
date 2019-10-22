import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import axios from 'axios'

import App from './App'

afterEach(cleanup);

it('should be a function', () => {
  expect(App instanceof Function).toBeTruthy()
});

it('should be able to acces the API_HOST env var', () => {
  expect(process.env.API_HOST).toBeTruthy()
})

describe('GET /api', () => {
  it('should recieve a 200 status', () => {
    expect.assertions(1)
    const url = process.env.API_HOST + '/api';
    return axios.get(url)
      .then(({ status }) => {
        expect(status).toBe(200)
      })
      .catch(error => { console.log(error) })
  })
})
