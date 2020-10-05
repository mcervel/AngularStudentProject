import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IStudent } from './student'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})

export class StudentTableComponent implements OnInit {

  _baseUrl: string
  students: IStudent[]
  student: IStudent
  modalWindowAction: string
  emailPattern: string

  constructor(private httpService: HttpClient, @Inject('BASE_URL') baseUrl: string, private modalService: NgbModal) {
    this._baseUrl = baseUrl + 'api/students'
  }

  ngOnInit() {
    this.student = new Student()
    this.emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    this.getStudents()
  }

  getStudents() {
    this.httpService.get(this._baseUrl).subscribe(data =>
      this.students = data as IStudent[]
    )
  }

  deleteStudent(idStudent: String) {
    this.httpService.delete(this._baseUrl + '/' + idStudent).subscribe(() => {
      this.getStudents()
    })
  }

  openVerticallyCenteredModal(content) {
    this.modalService.open(content, { centered: true });
  }

  openModal(content, student?: IStudent) {
    this.student = new Student()

    if (student) {
      this.modalWindowAction = 'Ažuriraj'
      this.httpService.get(this._baseUrl + '/' + student.idStudent).subscribe(data => {
        this.student = data as IStudent
      })  
    }else{
      this.modalWindowAction = 'Dodaj'
    }

    this.openVerticallyCenteredModal(content)
  }

  addStudent() {
    this.httpService.post(this._baseUrl, this.student, httpOptions).subscribe(() => {
      this.resetStudents()
    })
  }

  updateStudent(student: IStudent) {
    this.httpService.put(this._baseUrl + '/' + student.idStudent, student, httpOptions).subscribe(() => {
      this.resetStudents()
    })
  }
  
  resetStudents() {
    this.getStudents()
    this.modalService.dismissAll()
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (this.modalWindowAction == 'Dodaj') {
        this.addStudent()
      } else {
        this.updateStudent(this.student)
      }
    }
  }

}

export class Student implements IStudent {
  constructor() { }
  idStudent: string;
  ime: string;
  prezime: string;
  jmbag: string;
  studij: string;
  godinaStudija: number;
  email: string;
}