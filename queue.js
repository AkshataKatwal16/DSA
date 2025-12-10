//queue
let queue=[];
let rear=0;
let front=0;
const enQueue=(value)=>
{
  queue[rear]=value
    rear++;

}
const deque=()=>
{
  front--;
}
enQueue(80)
enQueue(890)
enQueue(800)
enQueue(0)
deque()

//print front to rear



