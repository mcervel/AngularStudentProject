using Microsoft.EntityFrameworkCore;
using StudentDataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentDataAccessLayer.Contexts
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions options)
        : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
