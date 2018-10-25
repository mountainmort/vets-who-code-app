import React from 'react'
import Countdown from '../../src/components/Countdown'
import { render, waitForElement, getByText } from 'react-testing-library'

jest.useFakeTimers()

describe('<Countdown />', () => {
  test('should unmount and clear interval to prevent memory leaks', () => {
    const { unmount } = render(<Countdown />)

    jest.spyOn(console, 'error').mockImplementation(() => {})

    unmount()
    // eslint-disable-next-line
    expect(console.error).not.toHaveBeenCalled()
  })
})
