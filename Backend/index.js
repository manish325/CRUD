// // const { json } = require("body-parser");

// const content = document.getElementById('content');
// const search = document.getElementById('searchTask');
// let searchText = ''
// const payload = {
//     searchText : searchText
// }
// const main = ()=>{
//    consoleData('');
//    searchTask();
// }

// const consoleData = (searchText)=>{
//     fetch(`http://localhost:3000/tasks?searchText=${searchText}`, {
//         method : 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//         }
//     }).then(async (response)=>{
//         response = await response.json();
//         document.getElementById('content').innerHTML = '';
//         await response.forEach((task)=>{
            
//             console.log(task);
//             appendTask(task);
//         })
//     }).finally(()=>{
//         console.log('Simply wait!! Bringing your data')
//     })
// }

// const appendTask = (Task)=>{
//     const task = document.createElement('div');
//     task.classList.add('task');
//     const taskName = document.createElement('div');
//     taskName.classList.add('taskname');
//     taskName.innerHTML = `<span>${Task.taskname}</span>`;
    
//     const actions = document.createElement('div');
//     actions.classList.add('actions');
//     const edit = document.createElement('button');
//     edit.innerHTML = 'EDIT';
//     const delet = document.createElement('button');
//     delet.innerHTML = 'DELETE'
//     task.appendChild(taskName);
//     task.appendChild(actions);
//     actions.appendChild(edit);
//     actions.appendChild(delet);
//     content.appendChild(task)
// }

// const searchTask = ()=>{
//     search.addEventListener('input', (value)=>{
//         if(value.data)
//         searchText+= value.data;
//         else {
//             searchText = searchText.split('').splice(0, searchText.split('').length-2).join('');
//         }
//         payload.searchText = searchText;

//         setTimeout(()=>{
//             consoleData(payload.searchText)
//         }, 1)
//     })
// }

// main();