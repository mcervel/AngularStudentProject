using StudentDataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IStudentService
    {
        Task<List<Student>> GetAllStudentsAsync();
        Task<Student> GetStudentAsync(Guid idStudent);
        Task<Student> DeleteStudentAsync(Guid idStudent);
        Task UpdateStudentAsync(Student student);
        Task AddStudentAsync(Student student);
    }
}
