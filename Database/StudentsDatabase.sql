create database StudentsDatabase
use StudentsDatabase

CREATE TABLE Students
(
IDStudent uniqueidentifier CONSTRAINT PK_Student PRIMARY KEY,
Ime nvarchar(50) NOT NULL,
Prezime nvarchar(50) NOT NULL,
JMBAG nvarchar(50) NOT NULL,
Studij nvarchar(50) NOT NULL,
GodinaStudija int NOT NULL,
Email nvarchar(50) NOT NULL
)

INSERT INTO Students (IDStudent, Ime, Prezime, JMBAG, Studij, GodinaStudija, Email)
VALUES (NEWID(), 'Pero', 'Peric', '1233337789', 'Algebra', 3, 'pero.peric@mail.hr')

INSERT INTO Students (IDStudent, Ime, Prezime, JMBAG, Studij, GodinaStudija, Email)
VALUES (NEWID(), 'Ivo', 'Ivic', '1234522289', 'Algebra', 2, 'ivo.ivic@mail.hr')

INSERT INTO Students (IDStudent, Ime, Prezime, JMBAG, Studij, GodinaStudija, Email)
VALUES (NEWID(), 'Maro', 'Maric', '1231117789', 'Algebra', 4, 'maro.maric@mail.hr')

INSERT INTO Students (IDStudent, Ime, Prezime, JMBAG, Studij, GodinaStudija, Email)
VALUES (NEWID(), 'Toni', 'Josipic', '1234666789', 'Algebra', 1, 'toni.josipic@mail.hr')

INSERT INTO Students (IDStudent, Ime, Prezime, JMBAG, Studij, GodinaStudija, Email)
VALUES (NEWID(), 'Ivan', 'Marin', '1234568999', 'Algebra', 5, 'ivan.marin@mail.hr')