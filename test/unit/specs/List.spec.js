import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    expect(ListComponent.$el.textContent).to.contain('l')
  })
  it('add a new item list on click', () => {
    // 创建组件
    const Constructor = Vue.extend(List)
    // 将组件进行挂载
    const ListComponent = new Constructor().$mount()
    ListComponent.newItem = 'a new list'
    const button = ListComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent.$nextTick(() => {
      expect(ListComponent.$el.textContent).to.contain('a new list')
      expect(ListComponent.listItems).to.contain('a new list')
    })

    const oldText = ListComponent.$el.textContent
    ListComponent.newItem = 'jfska'
    button.dispatchEvent(clickEvent)
    ListComponent.$nextTick(() => {
      expect(ListComponent.$el.textContent).to.equal(oldText)
    })
  })
})

