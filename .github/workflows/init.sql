CREATE TABLE IF NOT EXISTS students (
    ID int NOT NULL,
    Username varchar(255) NOT NULL,
    Password varchar(255),
    Team varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS teachers (
    ID int NOT NULL,
    Username varchar(255) NOT NULL,
    Password varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS evaluations (
    ID int NOT NULL AUTO_INCREMENT,
    teammateID int,
    cooperation int,
    comments text,
    reviewerID int,
    PRIMARY KEY (ID)
);
