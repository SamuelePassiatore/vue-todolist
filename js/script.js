console.log('Vue OK', Vue);

/* Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = Vue.createApp({
    name: 'List tasks',
    data(){
        return {
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false },
                { text: 'Imparare a programmare', done: false },
                { text: "Scalare l'Everest", done: true },
            ],
            textDecoration: 'text-decoration-line-through',
            newTaskText: '',
        }
    },

    computed: {
        newTask() {
            let newTaskContent;
            return newTaskContent = {
                text: this.newTaskText,
                done: false
            }
        },
    },

    methods: {
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        addTask (){
            this.tasks.push(this.newTask);
            this.newTaskText = '';
        },

        clearInput(){
            this.newTaskText = '';
        },

        toggle(task){
            task.done = !task.done;
        }
    },

});

app.mount('#root');
