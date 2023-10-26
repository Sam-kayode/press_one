import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StaticTablePortion from '../StaticTablePortion.vue'

describe('StaticTablePortion.vue Test', () => {
  it('Renders correct column header text when component is created', () => {
    const wrapper = shallowMount(StaticTablePortion, {
      propsData: {
        projectData: []
      }
    })

    expect(wrapper.text()).toMatch('Developer')
  })
})
