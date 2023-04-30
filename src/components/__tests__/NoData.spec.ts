import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NoData from '../NoData.vue'

describe('NoData', () => {
  it('renders properly', () => {
    const wrapper = mount(NoData )
    expect(wrapper.text()).toContain('No hay datos para listar')
  })
})
