using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StudentDataAccessLayer.Models
{
    public class Student
    {
        [Key]
        public Guid IDStudent { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string JMBAG { get; set; }

        public string Studij { get; set; }
        public int GodinaStudija { get; set; }
        public string Email { get; set; }

    }
}
