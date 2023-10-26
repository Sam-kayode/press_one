import { expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import ScrollableTablePortion from '../ScrollableTablePortion.vue'

test('ScrollableTablePortion', () => {
  expect('scrollable table portion renders properly', () => {
    const wrapper = mount(ScrollableTablePortion)
    expect(wrapper.component(ScrollableTablePortion)).not.toBeUndefined()
  })
})
