const stackInput = document.getElementById('stackInput'); // input field
const push = document.getElementById('push'); // push button
const pop = document.getElementById('pop'); // pop button
const reset = document.getElementById('reset'); // reset button
const stack = document.getElementById('stack'); // stack bucket
const pushed = document.getElementById('pushedElement'); // pushed message
const topElement = document.getElementById('topElement'); // top element message
const poped = document.getElementById('popedElement'); // poped message
const size = document.getElementById('size'); // size of stack || array
let pushedElements = []; // our storage 
size.innerText = `${pushedElements.length}`;

 // function to create element on push operation
const makeElement = (value)=>{
    const element = document.createElement('div');
    element.classList.add('element');
    element.classList.add('flex-row');
    element.classList.add('justify-center');
    element.innerText = value;
    stack.appendChild(element); 
    pushedElements.push(value);
    pushed.innerText = `${pushedElements.at(pushedElements.length - 1)}`;
    if(pushedElements.length > 0) topElement.innerText = `${pushedElements.at(pushedElements.length - 1)}`;
    size.innerText = `${pushedElements.length}`;
}

// push button with event listner , grabs the value of input field and makes a element using function call to makeElement
push.addEventListener('click',()=>{
    if(stackInput.value == ""){
        const message = document.getElementById('message');
                    message.innerText = "Please enter the element in input field"

        setTimeout(()=>{
                        message.innerText = ""
        },2000);
        return
    }
    makeElement(stackInput.value);
    stackInput.value = "";
})

// pop button with event listner, pops the element from array and removes child of stack
pop.addEventListener('click',()=>{
    
    if(pushedElements.length > 0){
       stack.removeChild(stack.lastChild);
    const ele = pushedElements.pop();
   poped.innerText = `${ele}`;
   if(pushedElements.length == 0) topElement.innerText = "";
 else topElement.innerText = `${pushedElements.at(pushedElements.length - 1)}`;
}
else{
            message.innerText = "stack is empty !";

    setTimeout(()=>{
        message.innerText = "";
    },2000)
} 
    size.innerText = `${pushedElements.length}`;


})

// resets the value of each element || array || stack
reset.addEventListener('click',()=>{
   while(stack.firstChild){
    stack.removeChild(stack.lastChild);
   }
   pushedElements = [];
   console.log(pushedElements)
   topElement.innerText = "";
   pushed.innerText = "";
   poped.innerText = "";
   size.innerText = "0";
})


