import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NewsSpinner from '../NewsPaperSpinner.vue'

describe('NewsPaperSpinner', () => {
  it('renders properly', () => {
    const wrapper = mount(NewsSpinner )
    console.log(wrapper.classes())
    expect(wrapper.classes()).include('spinner-box')
  })
})
