# todo module :

## todo service crud fertig stellen , update(find mit abgeänderten daten), delete(filter x => !x.id)

## ng g c todo --flat --routing (component erstellen)

### 3 views erstellen, für todolist(getTodoList),viewtodo(getTodo), addTodoTask(addTodo)

# login service erstellen: nur login komponente erstellen und hardcoded machen , = ist nutzer max passwort 123

## nutzername passwort aus der alten anwendung theoretischerweise abschreiben, auch die anderen sachen

<form *ngIf="selectedTodo" (submit)="onSubmit()">
  <input [(ngModel)]="selectedTodo.title" placeholder="Title" />
  <input [(ngModel)]="selectedTodo.todotask" placeholder="Task" />
  <input [(ngModel)]="selectedTodo.check" type="checkbox" />
  <button type="submit">Submit</button>
</form>
