class Queue{
    constructor(){
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }
    
    dequeue(){
        const item = this.data.shift(item)
        console.log(`${item} Saiu da fila`)
    }
}

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.dequeue()
fila.dequeue()

