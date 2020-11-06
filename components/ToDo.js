class ToDo{
    constructor(task){
        this.task=task;

    }

    render = ()=>{
        let component = document.createElement('div');
        component.className='todo';

        let descont = document.createElement('div');
        descont.innerHTML = (
            this.task.desc
        );

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteBtn';
        deleteBtn.innerHTML = "";

        let passBtn = document.createElement('button');
        passBtn.className='passBtn';
        passBtn.innerHTML = "";

        let backBtn = document.createElement('button');
        backBtn.className='backBtn';
        backBtn.innerHTML = "";


        component.appendChild(descont);
        component.appendChild(deleteBtn);
        component.appendChild(passBtn);
        component.appendChild(backBtn);
        

deleteBtn.addEventListener('click',()=>{
    const database = firebase.database();
    database.ref('Tasks/'+this.task.id).set(null);
});





        return component;

    }



}