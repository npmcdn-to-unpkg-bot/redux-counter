import expect from 'expect'
import counter from '../../reducers'

describe('reducers', ()=> {
  context('counter', ()=> {
    it('should provide initial state', ()=> {
      expect(counter(undefined, {})).toBe(0)
    })
    
    it('should handle increment action', ()=> {
      expect(counter(12, {type: 'INCREMENT'})).toBe(13)
    })
    
    it('should handle decrement action', ()=> {
      expect(counter(12, {type: 'DECREMENT'})).toBe(11)
    })
    
    it('should ignore unknown error', ()=> {
      expect(counter(14, {type: 'unknow'})).toBe(14)
    })
  })
})