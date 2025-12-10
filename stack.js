//stack
const stack=[];
let top=-1;
const push=(value)=>
{
  top++;
  stack[top]=value;
}
const pop=()=>
{
  let p=stack[top]
  top--;
  return p;
}
//we can print it from  top to 0

