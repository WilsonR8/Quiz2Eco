const database = firebase.database();
const registerBtn = document.getElementById('registerBtn');

const desc = document.getElementById('description');

const todo = document.getElementById('todo');


const register = () => {

if(desc.value === ''){
    alert('No hay una tarea para registrar');
    return;
}

    
    let referencia= database.ref('Tasks').push();
    let task = {
        id:referencia.key,
        desc:description.value,

    };
referencia.set(task);

desc.value='';

}

registerBtn.addEventListener('click',register);


//Lectura

database.ref('Tasks').on('value', function(data){
    todo.innerHTML = ' ';
    data.forEach(
        task=>{
            let valor = task.val();
            console.log(valor.desc);
            let fila = new ToDo(valor);
            todo.appendChild(fila.render());
        }
    );
});