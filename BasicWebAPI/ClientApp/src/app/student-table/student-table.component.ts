import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';  
import { Component, Inject, OnInit} from '@angular/core';
import { IStudent } from './student'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  student: IStudent = new Student()
  modalWindowAction: string
  
  constructor(private httpService: HttpClient, @Inject('BASE_URL') baseUrl: string, private modalService: NgbModal) {
    this._baseUrl = baseUrl + 'api/students'
   }

  ngOnInit() {
    this.getStudents()
  }

  getStudents():void{
    this.httpService.get(this._baseUrl).subscribe(data =>
    this.students = data as IStudent[]
    )
  }

  deleteStudent(idStudent:String):void{
    this.httpService.delete(this._baseUrl + '/' + idStudent).subscribe(()=>{
      this.getStudents()
    })
  }

  openVerticallyCenteredModal(content):void {
    this.modalService.open(content, { centered: true });
  }

  openUpdateModal(content, student: IStudent){
    this.httpService.get(this._baseUrl + '/' + student.idStudent).subscribe(data => {
      this.student = data as IStudent
    })
    
    this.modalWindowAction = 'Ažuriraj'
    this.openVerticallyCenteredModal(content)
  }

  openAddModal(content){
    this.modalWindowAction = 'Dodaj'
    this.openVerticallyCenteredModal(content)
  }

  addUpdateStudent():void{
    if (this.modalWindowAction == 'Dodaj') {
      this.addStudent()
    }else{
      this.updateStudent(this.student)
    }
  }

  addStudent():void {
    this.httpService.post(this._baseUrl, this.student, httpOptions).subscribe(() => {
      this.resetModalWindow()
    })
  }

  updateStudent(student: IStudent):void {
    this.httpService.put(this._baseUrl + '/' + student.idStudent, student, httpOptions).subscribe(() => {
      this.resetModalWindow()
    })
  }
  
  resetModalWindow():void{
    this.getStudents()
    this.closeModal()
  }

  closeModal():void{
    this.student = new Student()
    this.modalService.dismissAll()
  }

}

export class Student implements IStudent{
  constructor(){}
  idStudent: string;
    ime: string;
    prezime: string;
    jmbag: string;
    studij: string;
    godinaStudija: number;
    email: string;
}