using Interfaces;
using Microsoft.EntityFrameworkCore;
using StudentDataAccessLayer.Contexts;
using StudentDataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class StudentService : IStudentService
    {
        private readonly StudentContext _studentContext;

        public StudentService(StudentContext studentContext)
        {
            _studentContext = studentContext;
        }

        public async Task AddStudentAsync(Student student)
        {
            _studentContext.Students.Add(student);
            await _studentContext.SaveChangesAsync();
        }

        public async Task<Student> DeleteStudentAsync(Guid idStudent)
        {
            var student = await _studentContext.Students.FindAsync(idStudent);
            
            _studentContext.Students.Remove(student);
            await _studentContext.SaveChangesAsync();

            return student;

        }

        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await _studentContext.Students.ToListAsync();
        }

        public async Task<Student> GetStudentAsync(Guid idStudent)
        {
            var student = await _studentContext.Students.FindAsync(idStudent);

            return student;
        }

        public async Task UpdateStudentAsync(Student student)
        {
            Student studentFromDb = await GetStudentAsync(student.IDStudent);

            studentFromDb.Ime = student.Ime;
            studentFromDb.Prezime = student.Prezime;
            studentFromDb.GodinaStudija = student.GodinaStudija;
            studentFromDb.Studij = student.Studij;
            studentFromDb.Email = student.Email;
            studentFromDb.JMBAG = student.JMBAG;

            await _studentContext.SaveChangesAsync();
        }

        public async Task<Student> GetStudentForGuidAsync(Guid idStudent)
        {
            return await _studentContext.Students.FirstAsync(o => o.IDStudent == idStudent);
        }
    }
}
