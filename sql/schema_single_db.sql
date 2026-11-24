-- ============================================================================
-- SINGLE-DATABASE SCHEMA (Recommended for Online MySQL Hosting)
-- Free/cloud hosts usually give you 1 database. All 4 tables have unique names
-- and work together in a single database!
-- Just update the DB credentials in your PHP files to point to your host DB.
-- ============================================================================

-- 1. Subscribers table (used by AJAX/AJAX_PHP_MYSQL/1/ajax5.php)
CREATE TABLE IF NOT EXISTS abonne (
    cin VARCHAR(20) PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    email VARCHAR(120) NOT NULL
);

INSERT INTO abonne (cin, nom, adresse, email) VALUES
('08412345', 'Youssef Ben Ali', 'Route Gremda, Sfax', 'youssef.benali@example.com'),
('09523456', 'Amira Trabelsi', 'Avenue Habib Bourguiba, Sfax', 'amira.trabelsi@example.com'),
('11634567', 'Mehdi Karray', 'Route El Ain, Sfax', 'mehdi.karray@example.com'),
('12745678', 'Sarra Bouaziz', 'Sakiet Ezzit, Sfax', 'sarra.bouaziz@example.com');


-- 2. Departments & Employees tables (used by AJAX/AJAX_PHP_MYSQL/2/ajax6.php & ajax6_data.php)
CREATE TABLE IF NOT EXISTS service (
    codeser VARCHAR(20) PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS employe (
    cinemp VARCHAR(20) PRIMARY KEY,
    nomprenom VARCHAR(100) NOT NULL,
    grade VARCHAR(60) NOT NULL,
    etatcivil VARCHAR(30) NOT NULL,
    diplome VARCHAR(100) NOT NULL,
    dateemb DATE NOT NULL,
    codeser VARCHAR(20) NOT NULL,
    FOREIGN KEY (codeser) REFERENCES service(codeser)
);

INSERT INTO service (codeser, libelle) VALUES
('IT', 'Information Technology'),
('HR', 'Human Resources'),
('FIN', 'Finance'),
('MKT', 'Marketing');

INSERT INTO employe (cinemp, nomprenom, grade, etatcivil, diplome, dateemb, codeser) VALUES
('07111222', 'Karim Maalej', 'Senior Engineer', 'Married', 'Engineering Degree in CS', '2019-03-15', 'IT'),
('08222333', 'Ines Chaabouni', 'Full-Stack Developer', 'Single', 'Bachelor in Computer Science', '2022-09-01', 'IT'),
('09333444', 'Nour Ellouze', 'HR Manager', 'Married', 'Master in HR Management', '2018-06-10', 'HR'),
('10444555', 'Oussama Rekik', 'Financial Analyst', 'Single', 'Master in Finance', '2021-01-20', 'FIN');
-- Note: 'MKT' intentionally has 0 employees so you can test the "No employees in this department" message!


-- 3. Students table (used by ajax7, ajax8, ajax9 AND fetchapi6!)
-- ajax7/8/9 read columns [0..2] (numero, nomprenom, datenais)
-- fetchapi6 reads columns [0..3] (numero, nomprenom, datenais, moyenne)
CREATE TABLE IF NOT EXISTS eleve (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    nomprenom VARCHAR(100) NOT NULL,
    datenais DATE NOT NULL,
    moyenne DECIMAL(5,2) NOT NULL DEFAULT 0.00
);

INSERT INTO eleve (nomprenom, datenais, moyenne) VALUES
('Ahmed Siala', '2003-04-12', 15.75),
('Mariem Kammoun', '2004-08-23', 17.20),
('Bilel Masmoudi', '2003-11-05', 13.40),
('Chaima Fourati', '2004-02-19', 16.50),
('Rami Triki', '2003-07-30', 12.85),
('Ons Sellami', '2004-10-14', 18.10);
