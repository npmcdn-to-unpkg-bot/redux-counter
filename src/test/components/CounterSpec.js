import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import Counter from '../../components/Counter'

function setup(value=0) {
  const actions = {
    onIncrement: expect.createSpy(),
    onDecrement: expect.createSpy()
  }
  
  const component = shallow(
    <Counter value={value} {...actions} />
  );
  
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Counter component', ()=> {
  it('should display count', ()=> {
    const {p} = setup();
    expect(p.text()).toMatch(/^complicated Clicked: 0 times/)
  })
  
  it('first button should call onIncrement', ()=> {
    const {actions, buttons} = setup();
    buttons.at(0).simulate('click');
    expect(actions.onIncrement).toHaveBeenCalled();
  })
  
  it('second button should call onDecrement', ()=> {
    const {actions, buttons} = setup();
    buttons.at(1).simulate('click');
    expect(actions.onDecrement).toHaveBeenCalled();
  })
  
  it('third button should not call onIncrement if value is not odd', ()=> {
    const {actions, buttons} = setup(22);
    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toNotHaveBeenCalled();
  })
  
  it('third button should call onIncrement if value is odd', ()=> {
    const {actions, buttons} = setup(21);
    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toHaveBeenCalled();
  })
  
  it('fourth button should call onIncrement in a second', (done)=> {
    const {actions, buttons} = setup();
    buttons.at(3).simulate('click');
    setTimeout(()=> {
      expect(actions.onIncrement).toHaveBeenCalled();
      done()
    }, 1000);
  })
})
