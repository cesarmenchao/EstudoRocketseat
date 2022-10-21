class Stack{
    constructor(){
      this.data =[]
      this.top = -1
    }
    push(value){
      this.top++
      this.data[this.pop] = value
      return this.data
    }
    pop(){
      if (this.top < 0) undefined
      const poppedTop = this.data[this.pop]
          delete this.data[this.pop]
          this.top--
          return poppedTop
    }
  peek(){
      return this.top >= 0 ? this.data[this.pop] : undefined
    
  }
  }
  
  const stack = new Stack()
  
  stack.push('learning')
  stack.push('data')
  console.log(stack.push('structures'))
  
  console.log(stack.peek())
  
  