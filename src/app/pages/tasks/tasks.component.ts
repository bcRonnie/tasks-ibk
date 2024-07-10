import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegexConstants } from 'src/app/core/constants/RegexConstants';
import { Task } from 'src/app/core/models/task';
import { selectAuth, selectLoggedIn, selectUser } from 'src/app/core/redux/auth/selectors';
import { AppState } from 'src/app/core/redux/state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ){}
  
  taskForm!: FormGroup;

  tasks: Task[] = [];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.taskForm = this.formBuilder.group(
      {
        task: ['', 
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
            Validators.pattern(RegexConstants.ALPHA_NUMERIC)]
        ]
      }
    );
  }

  onSubmitAdd() {
    const task: Task = {
      id: Math.random(),
      name: this.taskForm.get('task')?.value,
      checked: false
    }

    this.tasks.push(task);

    this.taskForm.get('task')?.setValue('');
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  
}
