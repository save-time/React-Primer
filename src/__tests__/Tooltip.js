import React from 'react'
import Tooltip from '../Tooltip'
import {render, renderClasses, rendersClass} from '../utils/testing'

describe('Tooltip', () => {
  it('renders a <span> with the "tooltipped" class', () => {
    expect(render(<Tooltip />).type).toEqual('span')
    expect(renderClasses(<Tooltip />)).toEqual(['tooltipped', 'tooltipped-n'])
  })

  it('respects the "align" prop', () => {
    expect(rendersClass(<Tooltip align="ne" />, 'tooltipped-align-ne-2')).toBe(true)
    expect(rendersClass(<Tooltip align="se" />, 'tooltipped-align-se-2')).toBe(true)
    expect(rendersClass(<Tooltip align="nw" />, 'tooltipped-align-nw-2')).toBe(true)
    expect(rendersClass(<Tooltip align="sw" />, 'tooltipped-align-sw-2')).toBe(true)
  })

  it('respects the "direction" prop', () => {
    for (const direction of Tooltip.directions) {
      expect(rendersClass(<Tooltip direction={direction} />, `tooltipped-${direction}`)).toBe(true)
    }
  })

  it('respects the "noDelay" prop', () => {
    expect(rendersClass(<Tooltip noDelay />, 'tooltipped-no-delay')).toBe(true)
  })

  it('respects the "text" prop', () => {
    expect(render(<Tooltip text="hi" />).props['aria-label']).toEqual('hi')
  })

  it('respects the "wrap" prop', () => {
    expect(rendersClass(<Tooltip wrap />, 'tooltipped-multiline')).toBe(true)
  })
})
