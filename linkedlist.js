//linked list

let list={
 head: null
}
const createNode=(value)=>
{
  return{
"value": value,
"next": null
  }
}

const insertNodeEnd=(value)=>
{
  const node=createNode(value)
  if(list.head===null)
  {
    list.head=node
  }
  
  else{
    let current=list.head;
    while(current.next!==null)
    {
      current=current.next;
    }
    current.next=node
  }
}


const insertNodeFirst=(value)=>
{
  const node=createNode(value)
   let head=list.head;
   list.head=node;
   node.next=head;
}

const insertNodeMiddle=(value, index)=>
{
  const node=createNode(value)
   let head=list.head;
   if(index==1)
   {
    list.head=node;
   }
   else{
    let current=list.head;
    let current2=current.next;
    let i=1;
    while(i!==index-1)
    {
      current=current.next;
      current2=current.next;
      i++;
    }
    current.next=node;
    node.next=current2;

   }
  //  list.head=node;
  //  node.next=head;
}
insertNodeEnd(8);
insertNodeEnd(89);
insertNodeFirst(90)
insertNodeMiddle(3,3)
insertNodeMiddle(2,2)


const output = JSON.stringify(list, null, 2);

console.log(output);   // clean JSON
