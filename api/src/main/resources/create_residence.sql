CREATE TABLE RESIDENCE
(
    ID           INT AUTO_INCREMENT PRIMARY KEY,
    CEP          VARCHAR(8)   NOT NULL,
    NUMBER       INT          NULL,
    LATITUDE     float(10, 6) NOT NULL,
    LONGITUDE    float(10, 6) NOT NULL,
    QT_RESIDENTS INT          NOT NULL
);

