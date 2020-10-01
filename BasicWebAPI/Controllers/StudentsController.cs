using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
using StudentDataAccessLayer.Models;

namespace BasicWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        protected IStudentService _StudentService { get; set; }

        public StudentsController(IStudentService StudentService)
        {
            _StudentService = StudentService;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            return await _StudentService.GetAllStudentsAsync();
        }

        // GET: api/Students/5
        [HttpGet("{idStudent}")]
        public async Task<ActionResult<Student>> GetStudent(Guid idStudent)
        {
            return await _StudentService.GetStudentAsync(idStudent);
        }

        // DELETE: api/Students/5
        [HttpDelete("{idStudent}")]
        public async Task<ActionResult<Student>> DeleteStudent(Guid idStudent)
        {
            return await _StudentService.DeleteStudentAsync(idStudent);
        }

        // POST: api/Students
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task PostStudent(Student student)
        {
            await _StudentService.AddStudentAsync(student);
        }

        // PUT: api/StudentsCRUD/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task PutStudent(Student student)
        {
            await _StudentService.UpdateStudentAsync(student);
        }

    }
}
