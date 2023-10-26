import { it, expect,test } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectTable from '../ProjectTable.vue'

test('ProjectTable', () => {
  it('renders properly', () => {
    const wrapper = mount(ProjectTable)
    expect(wrapper.component(ProjectTable)).not.toBeUndefined();

  })
})
