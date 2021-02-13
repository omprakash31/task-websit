document.querySelector('form').addEventListener('submit',addTask)
function addTask(e)
{
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(document.querySelector('#task').value));
    const link=document.createElement('a');
    link.innerHTML='<i class="fas fa-remove"></i>';
    link.className='delete secondary-content';
    li.appendChild(link);
    document.querySelector('.collection').appendChild(li);
    store(document.querySelector('#task').value);
    document.querySelector('#task').value='';
    e.preventDefault();
}
function store(task)
{let tasks
    if(localStorage.getItem('tasks')===null)
    {
        tasks=[]
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
document.addEventListener('DOMContentLoaded',getfromlocalstorage)
function getfromlocalstorage(e)
{let tasks
    if(localStorage.getItem('tasks')===null)
    {
        tasks=[]
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(task));
    const link=document.createElement('a');
    link.innerHTML='<i class="fas fa-remove"></i>';
    link.className='delete secondary-content';
    li.appendChild(link);
    document.querySelector('.collection').appendChild(li);
})
}

document.querySelector('.collection').addEventListener('click',deletetask)
function deletetask(e)
{if(confirm('Ae you sure!! you want to delete this task!!'))
   { if(e.target.classList.contains('fa-remove'))
    {
        e.target.parentElement.parentElement.remove()
    }
    removetaskfromlocalstorage(e.target.parentElement.parentElement)
    }
}
function removetaskfromlocalstorage(task)
{
    let tasks
    if(localStorage.getItem('tasks')===null)
    {
        tasks=[]
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(taskItem,index)
    {
        if(task.textContent===taskItem)
        {
            tasks.splice(index,1)
        }
        localStorage.setItem('tasks',JSON.stringify(tasks))
    })
}

document.querySelector('.clear-tasks').addEventListener('click',cleartask)
function cleartask(e)
{if(confirm('Are You Sure!!!, you want to delete all the tasks!!!'))
    {document.querySelector('.collection').innerHTML=''
    localStorage.removeItem('tasks')
    }  
}