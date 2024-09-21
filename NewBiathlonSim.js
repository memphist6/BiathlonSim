class Biathlete {
    name; nationality;
    proneShootAccuracy; standingShootAccuracy;
    proneRangeTime; standingRangeTime;
    skiSpeed1; skiSpeed2; skiSpeed3; skiSpeed4; skiSpeedFinal;
    constructor(name, nat, skiSpeed1, skiSpeed2, skiSpeed3, skiSpeed4, skiSpeedFinal, pAcc, sAcc, pTime, sTime) {
        this.name = name; this.nationality = nat;
        this.skiSpeed1 = skiSpeed1; this.skiSpeed2 = skiSpeed2; this.skiSpeed3 = skiSpeed3; this.skiSpeed4 = skiSpeed4; this.skiSpeedFinal = skiSpeedFinal;
        this.proneShootAccuracy = pAcc; this.standingShootAccuracy = sAcc;
        this.proneRangeTime = pTime; this.standingRangeTime = sTime;
    }

    toString() {
        return this.name;
    }
}

const DATA = {
    COURSE_TIME_TOTAL: 0,
    COURSE_TIME_1: 1,
    COURSE_TIME_2: 2,
    COURSE_TIME_3: 3,
    COURSE_TIME_4: 4,
    COURSE_TIME_FINAL: 5,
    RANGE_TIME_TOTAL: 6,
    RANGE_TIME_1: 7,
    RANGE_TIME_2: 8,
    RANGE_TIME_3: 9,
    RANGE_TIME_FINAL: 10,
    PENALTY_TIME_TOTAL: 11,
    PENALTY_TIME_1: 12,
    PENALTY_TIME_2: 13,
    PENALTY_TIME_3: 14,
    PENALTY_TIME_FINAL: 15,
    PENALTY_COUNT_TOTAL: 16,
    PENALTY_COUNT_1: 17,
    PENALTY_COUNT_2: 18,
    PENALTY_COUNT_3: 19,
    PENALTY_COUNT_FINAL: 20,
    FINISH_TIME: 21,
    CURRENT_TIME: 22,
    CURRENT_PENALTY_COUNT: 23,
    ATHLETE_INFO: 24,
    START_DEFICIT: 25,      // Time behind 1st place in pursuit.
    CURRENT_SHOOTING_RECORD: 26,         // An athletes current shooting record in string form. e.g. '0+0+1'

    OLD_POS: 27,
    NEW_POS: 28,
    POS_SWING: 29,
    FORM_OF_THE_DAY: 30,                        // Dagsform jämfört med median

    // Constants for the different disciplines.
    INDIVIDUAL: 0,
    SPRINT: 1,
    PURSUIT: 2,
    MASS_START: 3,

    // Constants for men or women.
    WOMEN: 0,
    MEN: 1,

    // Constants for if and how shooting results should be printed in tables.
    NONE: 0,
    ONE: 1,
    ALL: 2,
    PUR_START: 3,
}

const allAthletes = {
    // new Biathlete('','', , , , , , , , , ),
    standardFList: [
        new Biathlete('Lisa Vittozzi', 'ITA', -0.3, -0.9, -1.2, -1.8, -1.4, 93.3, 92.9, 51.3, 47.4),
        new Biathlete('Lou Jeanmonnot', 'FRA', -1.4, -1.4, -0.9, -1.0, -1.0, 93.8, 91.8, 52.9, 48.1),
        new Biathlete('Ingrid Landmark Tandrevold', 'NOR', -1.7, -2.4, -1.9, -2.0, -1.5, 96.2, 73.8, 52.9, 49.3),
        new Biathlete('Justine Braisaz-Bouchet', 'FRA', -2.8, -2.9, -3.7, -4.2, -4.2, 82.9, 82.9, 51.8, 49.2),
        new Biathlete('Julia Simon', 'FRA', -1.6, -0.9, -2.1, -2.1, -0.8, 91.4, 82.4, 45.7, 41.8),
        new Biathlete('Lena Haecki-Gross', 'SUI', -0.6, -0.9, -0.5, -0.4, -1.2, 87.0, 81.5, 48.1, 44.4),
        new Biathlete('Elvira Oeberg', 'SWE', -2.2, -1.7, -0.8, -1.4, -2.3, 84.3, 83.3, 51.2, 47.7),
        new Biathlete('Vanessa Voigt', 'GER', 0.8, 0.6, 0.1, -0.1, 0.1, 95.7, 91.4, 53.1, 55.0),
        new Biathlete('Karoline Offigstad Knotten', 'NOR', 0.8, 0.9, 1.3, 1.2, 1.1, 87.6, 87.6, 48.2, 45.5),
        new Biathlete('Janina Hettich-Walz', 'GER', 1.3, 1.1, 1.3, 0.8, 1.0, 94.5, 81.0, 48.1, 48.1),
        new Biathlete('Franziska Preuss', 'GER', -0.4, -0.4, 0.0, -0.8, -1.2, 95.2, 90.4, 49.7, 48.3),
        new Biathlete('Hanna Oeberg', 'SWE', -0.9, -0.6, -1.2, -0.8, -0.1, 86.8, 84.7, 48.8, 45.9),
        new Biathlete('Juni Arnekleiv', 'NOR', -0.4, -0.4, -0.2, -0.4, 1.5, 86.8, 81.6, 50.8, 48.6),
        new Biathlete('Anna Magnusson', 'SWE', 0.1, 1.1, 0.4, 2.1, 2.2, 88.0, 83.0, 52.2, 47.8),
        new Biathlete('Tereza Vobornikova', 'CZE', 2.3, 1.8, 2.2, 1.3, 1.9, 87.8, 86.1, 52.9, 49.8),
        new Biathlete('Anamarija Lampic', 'SLO', -2.8, -3.8, -4.2, -4.6, -5.5, 67.5, 60.0, 56.1, 52.0),
        new Biathlete('Marketa Davidova', 'CZE', -0.6, -0.9, -1.1, -1.2, -0.3, 85.2, 76.7, 51.7, 49.7),
        new Biathlete('Anna Gandler', 'AUT', 1.4, 0.7, 0.8, 1.1, 1.6, 91.7, 81.1, 52.5, 49.9),
        new Biathlete('Sophie Chauveau', 'FRA', -1.0, -1.9, -1.6, -1.8, -1.4, 84.9, 73.0, 53.4, 49.8),
        new Biathlete('Linn Persson', 'SWE', 0.1, 1.6, 1.1, 1.0, 0.6, 88.9, 88.1, 54.3, 49.0),
        new Biathlete('Gilonne Guigonnat', 'FRA', 1.4, 1.1, 0.7, 0.6, 2.0, 94.4, 84.8, 56.1, 50.6),
        new Biathlete('Tuuli Tomingas', 'EST', 1.9, 0.2, -0.6, -1.1, 0.6, 83.5, 77.0, 53.5, 52.5),
        new Biathlete('Yuliia Dzhima', 'UKR', 2.3, 3.2, 3.0, 2.3, 2.1, 93.9, 83.0, 53.5, 51.3),
        new Biathlete('Amy Baserga', 'SUI', 3.6, 3.5, 3.0, 2.3, 2.2, 92.0, 81.3, 50.2, 45.4),
        new Biathlete('Jessica Jislova', 'CZE', 3.1, 3.7, 4.4, 4.8, 3.2, 88.4, 88.4, 53.9, 49.3),
        new Biathlete('Sophia Schneider', 'GER', 0.9, 0.8, 0.9, 0.5, 1.5, 87.1, 78.7, 55.2, 51.1),
        new Biathlete('Lotte Lie', 'BEL', 2.1, 3.1, 3.2, 3.8, 4.0, 88.6, 86.3, 54.2, 50.2),
        new Biathlete('Selina Grotian', 'GER', 2.6, 2.3, 1.8, 0.9, -0.1, 79.3, 83.6, 52.2, 47.1),
        new Biathlete('Marit Ishol Skogan', 'NOR', 1.3, 1.7, 2.1, 2.8, 3.6, 81.5, 74.1, 53.4, 49.7),
        new Biathlete('Aita Gasparin', 'SUI', 2.2, 3.4, 3.4, 4.1, 4.7, 88.7, 86.0, 50.2, 49.9),
        new Biathlete('Lucie Charvatova', 'CZE', 0.5, 0.9, 0.1, 0.4, 1.0, 82.0, 64.7, 52.7, 51.4),
        new Biathlete('Lisa Theresa Hauser', 'AUT', 1.9, 2.1, 2.7, 2.4, 2.6, 89.7, 83.4, 50.8, 48.0),
        new Biathlete('Marthe Krakstad Johansen', 'NOR', 2.9, 3.0, 3.0, 3.7, 4.9, 89.4, 87.1, 50.6, 47.5),
        new Biathlete('Anastasiya Merkushyna', 'UKR', 4.4, 4.6, 4.5, 4.8, 5.0, 90.3, 82.4, 49.4, 48.5),
        new Biathlete('Ida Lien', 'NOR', -0.9, -1.7, -1.1, -0.6, -1.6, 88.4, 64.2, 54.5, 53.3),
        new Biathlete('Samuela Comola', 'ITA', 2.4, 2.7, 3.3, 4.1, 6.3, 95.6, 85.0, 53.8, 54.9),
        new Biathlete('Deedra Irwin', 'USA', 1.4, 2.2, 2.6, 3.0, 4.0, 86.7, 83.3, 54.2, 55.1),
        new Biathlete('Jeanne Richard', 'FRA', 1.2, -0.3, 0.3, -0.3, 0.8, 94.7, 73.7, 53.5, 51.6),
        new Biathlete('Dorothea Wierer', 'ITA', 2.8, 1.4, 1.2, 0.7, 3.3, 91.1, 87.8, 50.2, 48.1),
        new Biathlete('Iryna Petrenko', 'UKR', 2.4, 3.9, 5.4, 5.1, 5.4, 92.2, 81.7, 50.4, 46.9),
        new Biathlete('Suvi Minkkinen', 'FIN', 5.1, 5.8, 6.6, 6.5, 5.7, 93.1, 88.8, 51.2, 46.2),
        new Biathlete('Michela Carrara', 'ITA', 1.1, 0.4, 0.6, 1.6, -0.5, 76.8, 72.6, 53.4, 47.5),
        new Biathlete('Anna Maka', 'POL', 3.7, 2.7, 2.9, 3.3, 3.9, 88.7, 81.3, 54.8, 52.0),
        new Biathlete('Beatrice Trabucchi', 'ITA', 3.9, 3.7, 4.5, 5.1, 6.2, 89.6, 88.7, 56.8, 54.7),
        new Biathlete('Rebecca Passler', 'ITA', 5.2, 4.5, 4.4, 4.1, 5.7, 83.6, 80.0, 47.7, 44.1),
        new Biathlete('Regina Ermits', 'EST', 3.2, 4.0, 3.3, 3.6, 2.5, 73.8, 90.0, 53.8, 47.7),
        new Biathlete('Sara Andersson', 'SWE', 3.5, 4.9, 4.9, 2.8, 6.8, 83.8, 75.0, 53.8, 50.5),
        new Biathlete('Natalia Sidorowicz','POL', 4.0, 4.7, 4.2, 3.9, 4.4, 91.9, 80.6, 50.1, 48.1),
        new Biathlete('Emma Lunder','CAN', 4.8, 4.9, 3.0, 3.3, 4.9, 73.3, 90.7, 52.9, 46.4),
        new Biathlete('Baiba Bendika','LAT', 0.6, 0.9, -0.3, -1.0, 0.5, 79.2, 64.2, 52.0, 47.7),
        new Biathlete('Johanna Puff','GER', 4.1, 5.3, 5.8, 5.5, 5.8, 92.7, 81.8, 49.1, 45.4),
        new Biathlete('Elisa Gasparin','SUI', 4.4, 5.6, 6.3, 6.8, 6.0, 90.5, 84.8, 53.7, 49.8),
        new Biathlete('Joanna Jakiela','POL', 2.3, 2.3, 2.5, 3.7, 3.1, 88.7, 70.7, 55.1, 50.5),
        new Biathlete('Khrystyna Dmytrenko','UKR', 4.1, 4.0, 3.6, 4.3, 6.1, 93.1, 82.3, 48.1, 49.0),
        new Biathlete('Anna Juppe','AUT', 1.4, 1.6, 0.7, 0.7, 3.5, 77.5, 71.7, 58.3, 56.6),
        new Biathlete('Alina Stremous','MDA', 1.8, 2.6, 3.5, 3.5, 2.8, 89.5, 82.1, 65.7, 55.5),
    ],
    standardMList: [
        new Biathlete('Johannes Thingnes Boe', 'NOR', -2.7, -3.0, -3.2, -3.9, -2.8, 87.6, 86.7, 50.1, 43.8),
        new Biathlete('Tarjei Boe', 'NOR', -0.6, -1.6, -1.4, -2.5, -3.2, 94.3, 82.9, 51.3, 45.3),
        new Biathlete('Johannes Dale-Skjevdal', 'NOR', -1.4, -1.9, -1.7, -1.9, -4.1, 87.5, 81.0, 51.9, 46.8),
        new Biathlete('Sturla Holm Laegreid', 'NOR', -0.1, -0.3, 0.6, -0.2, 0.2, 88.0, 88.5, 48.7, 43.7),
        new Biathlete('Vetle Sjaastad Christiansen', 'NOR', -1.5, -1.1, -0.8, -0.0, 0.1, 88.7, 86.7, 47.8, 45.4),
        new Biathlete('Emilien Jacquelin', 'FRA', -2.0, -1.9, -0.2, -0.1, 0.6, 84.8, 80.5, 47.2, 40.1),
        new Biathlete('Endre Stroemsheim', 'NOR', 0.0, 0.4, 0.6, 0.7, -0.7, 89.5, 80.5, 48.5, 42.3),
        new Biathlete('Tommaso Giacomel', 'ITA', -0.3, -0.9, -0.9, -1.0, -0.8, 80.0, 77.1, 48.1, 39.7),
        new Biathlete('Sebastian Samuelsson', 'SWE', -1.4, -1.3, -0.5, -0.2, -0.7, 86.5, 80.5, 48.0, 45.2),
        new Biathlete('Martin Ponsiluoma', 'SWE', -1.6, -1.9, -2.1, -1.6, -2.4, 77.1, 80.0, 48.1, 43.8),
        new Biathlete('Eric Perrot', 'FRA', -0.3, -0.4, -0.5, -0.8, -0.1, 83.3, 86.2, 48.3, 43.7),
        new Biathlete('Johannes Kuehn', 'GER', -0.2, -0.0, -0.1, -0.5, -1.3, 94.3, 72.9, 50.4, 49.3),
        new Biathlete('Justus Strelow', 'GER', 0.8, 2.4, 3.3, 2.7, 2.9, 94.6, 93.0, 44.9, 44.3),
        new Biathlete('Philipp Nawrath', 'GER', -0.8, -0.7, -0.3, -0.5, 0.3, 85.0, 77.0, 49.8, 47.3),
        new Biathlete('Quentin Fillon Maillet', 'FRA', -0.9, -0.8, -1.4, -1.6, -0.4, 81.5, 84.5, 48.3, 40.3),
        new Biathlete('Andrejs Rastorgujevs', 'LAT', 1.0, 0.8, 0.6, 0.4, 1.3, 92.9, 83.8, 49.1, 46.7),
        new Biathlete('Fabien Claude', 'FRA', -0.3, 0.2, 0.7, 0.5, 0.6, 87.6, 80.5, 49.3, 44.5),
        new Biathlete('Sebastian Stalder', 'SUI', 1.8, 2.8, 2.5, 3.8, 4.3, 92.9, 88.1, 49.3, 43.8),
        new Biathlete('Philipp Horn', 'GER', -0.5, 0.0, -0.2, 0.2, -0.6, 85.0, 79.3, 51.3, 45.1),
        new Biathlete('Didier Bionaz', 'ITA', 0.3, -0.2, -0.0, -0.0, 1.2, 85.5, 75.5, 53.6, 49.3),
        new Biathlete('Florent Claude', 'BEL', 2.8, 2.5, 3.1, 1.7, 3.2, 91.0, 86.0, 53.4, 46.5),
        new Biathlete('Jesper Nelin', 'SWE', 0.4, 0.7, 0.4, 0.0, 0.4, 86.3, 80.6, 49.5, 50.5),
        new Biathlete('Jakov Fak', 'SLO', 2.2, 2.1, 2.6, 1.8, 1.7, 94.2, 87.1, 49.4, 48.0),
        new Biathlete('Lukas Hofer', 'ITA', -0.4, -0.1, 0.1, 0.2, 0.4, 81.6, 80.0, 56.2, 47.1),
        new Biathlete('Roman Rees', 'GER', 2.5, 2.6, 2.4, 2.4, 2.0, 89.3, 80.0, 50.0, 47.4),
        new Biathlete('Michal Krcmar', 'CZE', 1.4, 1.7, 1.5, 1.6, 2.9, 82.8, 83.9, 52.3, 49.1),
        new Biathlete('Simon Eder', 'AUT', 2.8, 3.7, 4.2, 4.1, 4.4, 90.3, 86.5, 45.0, 43.3),
        new Biathlete('Campbell Wright', 'USA', 2.5, 1.7, 2.6, 2.1, 1.8, 83.6, 85.0, 49.4, 45.2),
        new Biathlete('Niklas Hartweg', 'SUI', 1.5, 2.5, 3.8, 4.4, 3.3, 83.7, 89.6, 45.3, 44.2),
        new Biathlete('Alexandr Mukhin', 'KAZ', 2.2, 1.9, 3.6, 3.9, 5.0, 78.2, 86.5, 55.3, 50.7),
        new Biathlete('Otto Invenius', 'FIN', 2.6, 3.1, 2.3, 2.2, 2.1, 84.0, 76.7, 48.5, 46.9),
        new Biathlete('Tero Seppala', 'FIN', 2.1, 2.4, 1.6, 2.1, 2.8, 80.0, 79.2, 47.9, 44.4),
        new Biathlete('Antonin Guigonnat', 'FRA', 2.0, 3.0, 2.6, 3.8, 4.4, 86.4, 80.0, 51.5, 43.3),
        new Biathlete('Dmytro Pidruchnyi', 'UKR', 1.1, 1.6, 2.2, 3.6, 3.5, 85.0, 80.0, 48.3, 45.5),
        new Biathlete('Lovro Planko','SLO', 2.7, 3.3, 4.7, 4.7, 4.5, 86.4, 76.4, 55.5, 48.6),
        new Biathlete('David Komatz','AUT', 4.0, 5.8, 6.1, 7.2, 4.9, 92.4, 87.1, 51.9, 45.5),
        new Biathlete('Felix Leitner','AUT', 4.6, 5.6, 6.3, 6.6, 7.8, 95.0, 85.0, 51.2, 44.9),
        new Biathlete('Vytautas Strolia','LTU', 3.4, 4.3, 3.8, 4.2, 4.9, 87.0, 88.7, 52.2, 48.8),
        new Biathlete('Timofei Lapshin','KOR', 2.2, 4.0, 3.8, 4.5, 7.1, 79.2, 79.2, 46.6, 44.4),
        new Biathlete('Pavel Magazeev','MDA', 2.8, 2.8, 3.3, 3.4, 4.7, 78.3, 82.6, 53.2, 47.0),
        new Biathlete('Joscha Burkhalter','SUI', 4.2, 4.2, 4.7, 5.1, 5.8, 81.5, 80.8, 47.6, 44.8),
        new Biathlete('Anton Vidmar','SLO', 3.6, 3.3, 4.6, 5.9, 5.2, 76.7, 80.8, 55.5, 48.8),
        new Biathlete('Elia Zeni','ITA', 4.8, 5.2, 4.9, 6.5, 5.3, 84.8, 90.3, 54.5, 47.0),
        new Biathlete('Patrick Braunhofer','ITA', 3.5, 5.4, 6.5, 6.2, 7.3, 93.1, 84.6, 51.9, 46.0),
        new Biathlete('Miha Dovzan','SLO', 5.6, 7.4, 6.5, 6.8, 6.8, 95.2, 85.7, 48.7, 42.2)
    ],

    subFList: [
        new Biathlete('Maren Kirkeeide','NOR', 3.1, 3.0, 4.1, 2.6, 1.6, 77.3, 89.3, 56.4, 50.5),
        new Biathlete('Hannah Auchentaller','ITA', 4.0, 5.1, 5.3, 5.1, 6.1, 84.2, 77.9, 53.5, 50.6),

        new Biathlete('Anais Chevalier-Bouchet', 'FRA', -0.8, -1.1, -1.2, -1.7, -0.4, 83.0, 88.5, 51.4, 48.4),
        new Biathlete('Anais Bescond','FRA', 0.3, -0.6, -0.6, -0.4, 1.8, 85.5, 76.5, 55.0, 54.5),
        new Biathlete('Marie Dorin Habert','FRA', -0.8, -1.9, -2.2, -2.1, -1.4, 88.0, 80.5, 54.0, 53.5),

        new Biathlete('Marte Olsbu Roeiseland', 'NOR', -0.1, -0.9, -0.6, -1.3, 0.1, 89.6, 89.6, 49.0, 44.1),
        new Biathlete('Tiril Eckhoff','NOR', -1.2, -1.2, -2.4, -2.3, -2.1, 88.5, 76.4, 52.8, 51.7),
        new Biathlete('Tora Berger','NOR', 0.1, -0.7, -1.4, -2.0, -4.0, 85.7, 85.2, 55.3, 46.8),

        new Biathlete('Mona Brorsson', 'SWE', 0.3, 2.1, 3.5, 4.5, 3.8, 90.5, 86.5, 49.1, 48.8),
        new Biathlete('Elisabeth Hoegberg','SWE', 1.6, 1.3, -0.7, -0.3, 3.6, 89.2, 80.0, 50.2, 50.9),
        new Biathlete('Helena Ekholm','SWE', 0.3, -0.1, -0.7, -1.5, -1.2, 90.0, 91.0, 55.4, 53.9),
        new Biathlete('Denise Herrmann-Wick', 'GER', -1.3, -1.5, -1.5, -2.0, -2.6, 85.3, 85.3, 55.7, 49.8),
        new Biathlete('Franziska Hildebrand','GER', -0.9, 0.2, -0.2, 0.3, 2.5, 89.8, 82.4, 54.8, 55.1),
        new Biathlete('Vanessa Hinz','GER', 1.4, 1.3, 1.3, 0.9, 0.9, 87.3, 79.3, 51.3, 53.4),
        new Biathlete('Laura Dahlmeier','GER', -0.6, -1.0, -1.2, -1.5, -1.3, 89.5, 92.6, 54.1, 52.5), 
        new Biathlete('Andrea Henkel','GER', 0.7, 0.3, 0.3, 0.2, 1.0, 90.5, 83.0, 51.5, 52.1),
        new Biathlete('Magdalena Neuner','GER', -2.0, -3.6, -3.9, -4.6, -5.1, 91.0, 73.0, 50.5, 51.6),

        new Biathlete('Selina Gasparin','SUI', -0.4, 0.1, 0.3, -0.3, -2.2, 81.0, 79.5, 54.5, 54.0),
        new Biathlete('Veronika Vitkova','CZE', 0.3, 0.3, 1.2, 0.8, 1.1, 86.8, 87.9, 54.5, 48.0),
        new Biathlete('Gabriela Koukalova','CZE', -1.3, -2.6, -2.6, -2.5, -0.8, 91.2, 86.5, 56.6, 52.9),        
        new Biathlete('Olena Bilosiuk','UKR', 2.6, 2.3, 2.8, 2.9, -0.1, 84.8, 81.9, 53.2, 51.6),
        new Biathlete('Valentina Semerenko','UKR', 2.0, 1.8, 1.5, 2.2, 4.5, 92.4, 93.1, 52.6, 53.6),
        new Biathlete('Vita Semerenko','UKR', 1.2, 1.2, 1.3, 1.6, 1.8, 90.6, 82.6, 51.4, 50.0),
        new Biathlete('Monika Hojnisz-Starega','POL', 1.3, 0.2, -0.5, -0.5, 1.5, 93.5, 80.0, 53.9, 55.2),
        new Biathlete('Mari Eder', 'FIN', -0.5, -0.1, 0.3, 0.5, 0.5, 78.1, 72.3, 58.5, 54.2),
        new Biathlete('Kaisa Makarainen','FIN', -1.8, -2.2, -2.6, -3.1, -3.4, 85.1, 83.7, 55.9, 54.2),
        new Biathlete('Susan Dunklee','USA', -0.7, 0.4, 0.6, 0.3, 0.6, 82.9, 73.7, 49.6, 47.8),
        new Biathlete('Anastasiya Kuzmina','SVK', -2.4, -2.4, -2.3, -2.4, -1.1, 73.7, 84.4, 51.9, 48.7),
        new Biathlete('Kristina Reztsova', 'RUS', -0.4, -0.8, -1.0, -1.6, -1.2, 80.0, 80.0, 55.6, 52.0),
        new Biathlete('Uliana Nigmatullina', 'RUS', 2.7, 1.9, 1.2, 0.8, -1.1, 84.1, 86.2, 55.5, 54.5),
        new Biathlete('Svetlana Mironova', 'RUS', 1.8, 0.5, 0.3, 0.4, 1.9, 90.4, 73.9, 57.5, 51.9),
        new Biathlete('Irina Kazakevich', 'RUS', 0.5, 0.6, 1.0, 1.8, 1.6, 85.5, 71.7, 58.4, 57.1),
        new Biathlete('Valeriia Vasnetcova', 'RUS', 2.3, 1.1, 0.2, 0.5, 2.8, 89.0, 73.0, 54.5, 51.5),
        new Biathlete('Ekaterina Yurlova-Percht','RUS', 0.8, 1.6, 0.9, 0.7, 1.3, 95.0, 73.9, 48.9, 50.2),
        new Biathlete('Dzinara Alimbekava', 'BLR', -0.2, -0.7, -0.9, -1.1, 0.5, 93.5, 81.0, 53.8, 53.2),
        new Biathlete('Hanna Sola', 'BLR', -1.8, -1.4, -1.1, -0.6, -0.7, 80.0, 75.2, 51.6, 50.2),
        new Biathlete('Iryna Leshchanka','BLR', 1.4, 0.9, 0.3, -0.1, -0.2, 87.6, 82.9, 54.4, 54.7),
        new Biathlete('Darya Domracheva','BLR', -0.3, -1.9, -2.3, -2.3, -3.1, 93.7, 82.3, 55.8, 53.5),
        new Biathlete('Nadezhda Skardino','BLR', 1.1, 1.1, 0.2, 0.0, 1.2, 96.3, 91.9, 58.5, 56.8),
    ],
    subMList: [
        new Biathlete('Vebjoern Soerum', 'NOR', 1.7, 1.4, 1.5, 2.8, 2.3, 80.0, 80.9, 44.9, 44.0),
        new Biathlete('Johan-Olav Botn', 'NOR', 1.3, -2.3, -2.0, -2.4, -2.0, 81.8, 80.0, 51.9, 44.1),
        new Biathlete('Sivert Guttorm Bakken','NOR', 0.1, 0.4, 0.4, 0.2, -0.1, 91.9, 84.4, 46.5, 46.8),
        new Biathlete('Danilo Riethmueller', 'GER', 0.6, -0.4, 1.6, 2.5, 1.2, 85.0, 88.3, 53.7, 51.2),
        new Biathlete('David Zobel', 'GER', 0.9, 0.9, 1.1, 0.9, 0.2, 95.4, 76.9, 51.0, 48.0),

        new Biathlete('Erlend Bjoentegaard','NOR', 0.3, -0.6, -0.6, -1.3, -2.1, 92.4, 80.7, 51.6, 47.4), 
        new Biathlete('Emil Hegle Svendsen','NOR', -0.2, -0.6, -0.8, -0.7, 0.3, 91.3, 86.0, 50.4, 48.3),
        new Biathlete('Ole Einar Bjoerndalen', 'NOR', 0.3, 0.2, 0.7, 1.0, 1.3, 85.9, 85.4, 48.3, 46.2),
        new Biathlete('Lars Berger','NOR', -0.5, -1.2, 0.7, -1.3, -1.8, 92.0, 65.3, 51.5, 46.0),
        new Biathlete('Simon Desthieux','FRA', 0.2, 0.6, -0.0, -0.2, -1.7, 84.3, 86.7, 53.2, 47.7),
        new Biathlete('Martin Fourcade', 'FRA', -1.7, -1.6, -1.8, -2.6, -1.0, 96.5, 87.1, 50.3, 46.0),
        new Biathlete('Simon Fourcade','FRA', -0.1, 0.7, 0.9, 0.8, 1.9, 91.6, 85.8, 50.0, 48.2),
        new Biathlete('Benedikt Doll', 'GER', 0.3, -0.6, -1.0, -0.4, -0.4, 84.8, 73.8, 47.1, 45.2),
        new Biathlete('Erik Lesser','GER', 0.4, -0.1, 0.1, -0.4, 1.8, 96.8, 80.6, 47.0, 45.9),
        new Biathlete('Arnd Peiffer','GER', 0.2, 0.1, -0.5, 0.0, -0.8, 92.9, 82.9, 50.2, 47.2),
        new Biathlete('Simon Schempp','GER', -0.3, -0.7, -0.8, -1.5, -0.9, 90.8, 86.5, 51.9, 51.3),
        new Biathlete('Andreas Birnbacher','GER', 0.7, 0.1, -0.1, -0.1, 0.6, 91.4, 83.2, 46.9, 44.4),
        new Biathlete('Fredrik Lindstroem','SWE', 1.4, 0.9, 1.3, 1.5, 1.0, 93.2, 83.7, 49.5, 47.5),
        new Biathlete('Bjoern Ferry', 'SWE', 1.3, 0.1, 0.0, 0.5, -0.6, 87.0, 87.6, 49.2, 43.9),
        new Biathlete('Carl Johan Bergman','SWE', 0.3, -0.7, -0.4, 0.1, 2.0, 83.1, 76.9, 49.2, 48.8),
        new Biathlete('Dominik Windisch','ITA', 1.3, 0.0, -0.4, -0.1, 1.2, 82.9, 77.1, 51,9, 47.3),
        new Biathlete('Benjamin Weger','SUI', 1.1, 1.1, 1.0, 1.5, 2.3, 86.8, 86.8, 50.9, 49.5),
        new Biathlete('Julian Eberhard','AUT', 0.1, -0.4, -0.2, -0.7, -2.7, 77.6, 80.5, 49.9, 45.5),
        new Biathlete('Dominik Landertinger','AUT', -0.0, 0.7, 0.0, -0.9, -1.5, 89.0, 80.0, 52.3, 52.4),
        new Biathlete('Ondrej Moravec','CZE', 0.9, 1.7, 1.7, 1.4, 0.5, 88.5, 86.5, 52.4, 46.5),
        new Biathlete('Michal Slesingr','CZE', 0.5, 0.4, 0.0, 0.7, 0.7, 82.9, 79.5, 52.3, 50.6),
        new Biathlete('Lowell Bailey','USA', 1.2, 1.1, 0.8, 1.1, 1.6, 96.8, 85.3, 46.7, 47.0),
        new Biathlete('Tim Burke','USA', 0.7, 0.2, 0.4, -0.5, 0.4, 90.2, 80.5, 52.9, 47.2),
        new Biathlete('Alexandr Loginov', 'RUS', -0.7, -0.4, -1.4, -1.6, -0.3, 92.4, 69.7, 53.7, 50.3),
        new Biathlete('Eduard Latypov', 'RUS', -0.5, -0.4, -1.1, -0.0, -0.9, 84.3, 83.5, 50.4, 52.5),
        new Biathlete('Said Karimulla Khalili', 'RUS', 1.0, 0.9, 0.9, 2.2, 2.0, 86.7, 89.2, 55.5, 49.0),
        new Biathlete('Anton Babikov', 'RUS', 0.5, 1.5, 1.4, 0.1, -0.5, 90.0, 85.0, 48.5, 53.0),
        new Biathlete('Anton Shipulin','RUS', 0.2, 0.3, 0.7, -0.3, 1.8, 91.1, 91.1, 45.9, 44.8),
        new Biathlete('Daniil Serokhvostov', 'RUS', 0.5, 0.2, -1.0, 0.5, 0.7, 78.9, 74.7, 55.3, 51.0),
        new Biathlete('Anton Smolski', 'BLR', 0.7, 0.1, 0.4, -0.4, -0.9, 83.9, 85.2, 54.7, 52.2),

    ]
}

//let athletesToSearch = [];      // S et to biathletes to search through

//let b = new Biathlete('Maxine Loze', 'FRA', -0.2, -1.4, -1.9, -1.0, -2,6, 89.2, 92.8, 50.8, 47.9);

let raceData;

const site = {
    mainElement: null,

    init: () => {
        //document.addEventListener('DOMContentLoaded', site.load());
        site.load();
    },
    load: () => {
        //console.log('LOCKED N LOADED');
        site.getData();
    },
    // Loads data to page depending on which page.
    getData: () => {
        //console.log("GetData check 1");
        //console.log(document.body.id);

        let page = document.body.id;
        console.log(page);      // Prints ID for the page we are on

        site.mainElement = document.querySelector("main");      // Sets mainElement to the <main> of whatever page we are on.

        switch (page) {
            case 'start_page':
                console.log("StartPage Check 1")
                site.getStartPage();
                break;
            case 'list_page':
                site.getListPage();
                break;
            case 'results_page':
                site.getResultsPage();
                break;
            default:
                break;
        }
    },

    getStartPage: () => {
        // Add eventlisteners to all these links to store relevent discipline and class
        site.mainElement.appendChild(site.createButton('Women 15km Individual', 'start', 'NewBiathlonSim_List.html', DATA.INDIVIDUAL, DATA.WOMEN, '40.53.7'));
        site.mainElement.appendChild(site.createButton('Men 20km Individual', 'start', 'NewBiathlonSim_List.html', DATA.INDIVIDUAL, DATA.MEN, '47.25.0'));
        site.mainElement.appendChild(site.createButton('Women 7.5km Sprint', 'start', 'NewBiathlonSim_List.html', DATA.SPRINT, DATA.WOMEN, '19.18.0'));
        site.mainElement.appendChild(site.createButton('Men 10km Sprint', 'start', 'NewBiathlonSim_List.html', DATA.SPRINT, DATA.MEN, '22.54.0'));
        //site.mainElement.appendChild(site.createButton('Women 10km Pursuit', 'start', 'NewBiathlonSim_List.html', DATA.PURSUIT, DATA.WOMEN, '27.55.6'));
        //site.mainElement.appendChild(site.createButton('Men 12.5km Pursuit', 'start', 'NewBiathlonSim_List.html', DATA.PURSUIT, DATA.MEN, '27.24.8'));
        site.mainElement.appendChild(site.createButton('Women 12.5km Mass Start', 'start', 'NewBiathlonSim_List.html', DATA.MASS_START, DATA.WOMEN, '31.31.5'));
        site.mainElement.appendChild(site.createButton('Men 15km Mass Start', 'start', 'NewBiathlonSim_List.html', DATA.MASS_START, DATA.MEN, '32.34.5'));
        let allButtons = document.querySelectorAll('.start');
        console.log(allButtons);
        allButtons.forEach(site.setEventListener);
    },
    getListPage: () => {
        //let f0; // Variable for final start list.
        let defaultBiathletes;
        let extraBiathletes;
        let unactiveBiathletes;

        if (getClass() === DATA.MEN) {
            defaultBiathletes = allAthletes.standardMList;
            unactiveBiathletes = allAthletes.subMList;
        }
        else if (getClass() === DATA.WOMEN) {
            defaultBiathletes = allAthletes.standardFList;
            unactiveBiathletes = allAthletes.subFList;
        }
        else
            alert('ERROR');


        //console.log(athletesToSearch);

        // Size of default start_list based on discupline
        let sizeDefault;

        if (getDiscipline() === DATA.MASS_START) {
            sizeDefault = 30;
        }
        else if (getDiscipline() === DATA.PURSUIT)
            sizeDefault = 60;
        else
            sizeDefault = defaultBiathletes.length;

        extraBiathletes = defaultBiathletes.splice(sizeDefault, defaultBiathletes.length);
        console.log(defaultBiathletes);
        console.log(extraBiathletes);
        console.log(unactiveBiathletes);

        //let sizeExtra = defaultBiathletes.length - sizeDefault;
        let sizeExtra = extraBiathletes.length;

        extraBiathletes = extraBiathletes.concat(unactiveBiathletes);

        console.log(extraBiathletes);

        sizeExtra += unactiveBiathletes.length;
        console.log(sizeExtra);

        site.mainElement.appendChild(site.createButton('Start Race', 'start', 'NewBiathlonSim_Results.html'));

        // Add DOM tree for start list containers.
        let flexContainer = document.createElement('div');
        flexContainer.id = 'flex_container';

        let defContainer = site.createContainer('Start List');
        let extraContainer = site.createContainer('Unactive Athletes');
        flexContainer.appendChild(defContainer);
        flexContainer.appendChild(extraContainer);

        site.mainElement.appendChild(flexContainer);

        // Creates intial lists.

        defContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[0]);
        extraContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[1]);


        document.querySelector('.start').addEventListener('click', function () {

            let startList = document.querySelector('#active');
            console.log(startList);
            let allRows = startList.querySelectorAll('tr');
            allRows = Array.from(allRows);  // Converts nodelist into an array
            allRows.shift();        // Removes th row fron array
            let txt = '';

            allRows.forEach(row => {
                let name = row.querySelector('span');
                txt += name.textContent + ',';
            });

            localStorage.setItem('startField', txt);
        });
    },
    getResultsPage: () => {
        // Runs when results page is loaded
        console.log('Resultspage check 1.');



        sim.runRace();

        site.mainElement.appendChild(site.createButton('Back to Start', 'start', 'NewBiathlonSim_Default.html'));
        document.querySelector('.start').style.setProperty('margin-top', '30px');


        // Temp value: standardM
        //sim.runRace(allAthletes.standardMList, DATA.INDIVIDUAL);
        //sim.runRace(allAthletes.standardMList, sim.discipline);

    },
    createButton: function (text, className, goal, disc, gCla, medTime) {

        let link = document.createElement('a');
        link.href = goal;
        link.textContent = text;
        link.title = text;
        link.className = className;
        link.discipline = disc;
        link.gClass = gCla;
        link.medianTime = medTime;

        return link;
    },
    setEventListener: function (button) {
        console.log('button disc: ' + button.discipline);
        console.log(button);

        button.addEventListener('click', function () {

            localStorage.setItem('discipline', button.discipline);
            localStorage.setItem('gClass', button.gClass);
            localStorage.setItem('raceTitle', button.title);
            localStorage.setItem('medianCourseTime', button.medianTime);

        });
    },

    updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra) {
        let startList = site.createStartList(defaultBiathletes, sizeDefault, true)[0];
        //let startRows = site.createStartList(defaultBiathletes, sizeDefault, true)[1];
        let subList = site.createStartList(extraBiathletes, sizeExtra, false)[0];
        //let subRows = site.createStartList(extraBiathletes, sizeExtra, true)[1];

        let startRows = Array.from(startList.querySelectorAll('tr'));
        startRows.shift();
        let subRows = Array.from(subList.querySelectorAll('tr'));
        subRows.shift();


        console.log(startList);
        console.log(startRows);
        console.log(subList);
        console.log(subRows);

        startRows.forEach((row, index) => {

            let button = row.querySelector('.change');

            // Only adds eventlistener to startRows, not StartList.
            button.addEventListener('click', () => {
                //console.log('!');
                console.log(defaultBiathletes);
                console.log(defaultBiathletes[index]);
                let athlete = defaultBiathletes.splice(index, 1);
                console.log(athlete);
                extraBiathletes.push(athlete[0]);
                console.log(defaultBiathletes);
                console.log(extraBiathletes);

                sizeDefault--;
                sizeExtra++;
                console.log(sizeDefault);
                console.log(sizeExtra);

                let flexContainer = document.querySelector('#flex_container');
                console.log(flexContainer);

                console.log(flexContainer.firstChild);


                let defContainer = site.createContainer('Start List');
                let extraContainer = site.createContainer('Unactive Athletes');
                flexContainer.replaceChild(defContainer, flexContainer.firstChild);
                flexContainer.replaceChild(extraContainer, flexContainer.lastChild);

                defContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[0]);
                extraContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[1]);

            });

        });

        subRows.forEach((row, index) => {

            let button = row.querySelector('.change');

            button.addEventListener('click', () => {
                //console.log('!');
                let athlete = extraBiathletes.splice(index, 1);
                defaultBiathletes.push(athlete[0]);

                sizeExtra--;
                sizeDefault++;

                let flexContainer = document.querySelector('#flex_container');

                let defContainer = site.createContainer('Start List');
                let extraContainer = site.createContainer('Unactive Athletes');
                flexContainer.replaceChild(defContainer, flexContainer.firstChild);
                flexContainer.replaceChild(extraContainer, flexContainer.lastChild);

                defContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[0]);
                extraContainer.appendChild(site.updateLists(defaultBiathletes, sizeDefault, extraBiathletes, sizeExtra)[1]);

            });

        });


        return [startList, subList];
    },

    createStartList: (defaultBiathletes, size, active) => {
        // DefaultBiathletes is all athletes.

        let startList = document.createElement('table');
        startList.className = 'start_list'; // This table is a start list table.
        if (active)
            startList.id = 'active';
        else
            startList.id = 'unactive';

        let txt = '';       // Creates string containing names of all athletes in created table.


        let firstTableRowElement = document.createElement('tr');
        if (active)
            firstTableRowElement.appendChild(site.createThCell('Rk'));
        firstTableRowElement.appendChild(site.createThCell('Nat'));
        firstTableRowElement.appendChild(site.createThCell('Name'));

        startList.appendChild(firstTableRowElement);

        for (let i = 0; i < size; i++) {
            // Can be deleted later, necessary only because i don't have 60 athletes yet.
            //console.log(defaultBiathletes[i])
            if (defaultBiathletes[i] === undefined)
                break;

            let tableRowElement = document.createElement('tr');

            if (active) {
                let tdRk = document.createElement('td');
                tdRk.textContent = String(i + 1);
                tableRowElement.appendChild(tdRk);
            }

            let tdNat = document.createElement('td');
            let nation = document.createElement('img');
            tdNat.appendChild(nation);
            nation.src = defaultBiathletes[i].nationality + '.png';
            tableRowElement.appendChild(tdNat);

            let tdName = document.createElement('td');

            let nameSpan = document.createElement('span');
            nameSpan.className = 'name';
            nameSpan.textContent = defaultBiathletes[i].name;
            tdName.appendChild(nameSpan);

            txt += defaultBiathletes[i].name + ',';

            // Adds button to name cell.
            let changeButton = document.createElement('button');
            changeButton.className = 'change';
            if (active)
                changeButton.textContent = 'Delete';
            else
                changeButton.textContent = 'Add';

            // Sets index to button
            changeButton.index = i;

            /*changeButton.addEventListener('click', function () {

            })*/

            tdName.appendChild(changeButton);

            //changeButton.addEventListener('click', );


            tableRowElement.appendChild(tdName);

    

            startList.appendChild(tableRowElement);
        }

        let allRows = Array.from(startList.querySelectorAll('tr'));
        allRows.shift();

        console.log(allRows);

        return [startList, allRows, txt];
    },

    createContainer: (text) => {
        let container = document.createElement('div');
        container.className = 'container';

        container.appendChild(site.createIntermediateHeader(text));

        return container;
    },

    createIntermediateHeader: (text) => {
        let header = document.createElement('h3');
        header.textContent = text;
        return header;
    },


    createResultsTable: (compare, shootInfo, swing) => {
        // Sorts raceData in correct order.
        //raceData.sort(calc.sortRaceData(compare));
        raceData.sort(calc.sortRaceData);

        let table = document.createElement('table');
        table.className = 'results';

        let firstTableRowElement = document.createElement('tr');
        firstTableRowElement.appendChild(site.createThCell('Rk'));


        if (swing)
            firstTableRowElement.appendChild(site.createThCell('+-'));
        firstTableRowElement.appendChild(site.createThCell('Nat'));
        firstTableRowElement.appendChild(site.createThCell('Name'));
        if (shootInfo === DATA.ALL)
            firstTableRowElement.appendChild(site.createThCell('P'));
        if (shootInfo === DATA.ONE || shootInfo === DATA.ALL)
            firstTableRowElement.appendChild(site.createThCell('T'));
        if (shootInfo !== DATA.PUR_START)
            firstTableRowElement.appendChild(site.createThCell('Result'));
        firstTableRowElement.appendChild(site.createThCell(''));
        table.appendChild(firstTableRowElement);

        // raceData.forEach(site.createTableRowData());
        for (let i = 0; i < raceData.length; i++) {
            table.appendChild(site.createAthleteRowData(raceData[i], compare, i, shootInfo, swing));
            raceData[i][DATA.OLD_POS] = i;
        }

        return table;


    },

    createAthleteRowData: (data, compare, index, shootInfo, swing) => {
        //console.log(data);
        //console.log(compare);
        //console.log(index);

        let row = document.createElement('tr');
        row.appendChild(site.createRkData(index));
        if (swing)
            row.appendChild(site.createSwingData(index));
        row.appendChild(site.createNatData(data[DATA.ATHLETE_INFO].nationality));
        row.appendChild(site.createNameData(data[DATA.ATHLETE_INFO].name));
        if (shootInfo === DATA.ALL)
            row.appendChild(site.createPenData(data[DATA.CURRENT_SHOOTING_RECORD]));
        if (shootInfo === DATA.ONE || shootInfo === DATA.ALL)
            row.appendChild(site.createPenData(data[DATA.CURRENT_PENALTY_COUNT]));
        if (shootInfo !== DATA.PUR_START)
            row.appendChild(site.createTimeData(data[compare]));
        row.appendChild(site.createTimeBehindData(compare, index));

        return row;
    },

    createThCell: (text) => {
        let cell = document.createElement('th');
        cell.textContent = text;
        return cell;
    },
    createRkData: (rank) => {
        let cell = document.createElement('td');
        cell.textContent = rank + 1;
        return cell;
    },
    createSwingData: (newPos) => {
        let cell = document.createElement('td');
        raceData[newPos][DATA.POS_SWING] = newPos - raceData[newPos][DATA.OLD_POS];
        if (raceData[newPos][DATA.POS_SWING] > 0) {
            cell.textContent = '+' + String(raceData[newPos][DATA.POS_SWING]);
            cell.style.setProperty('color', 'red');
        }
        else {
            cell.textContent = String(raceData[newPos][DATA.POS_SWING]);
            if (raceData[newPos][DATA.POS_SWING] < 0)
                cell.style.setProperty('color', 'green');
        }

        return cell;
    },
    createNatData: (nationality) => {
        //console.log(nationality);

        let cell = document.createElement('td');
        let flag = document.createElement('img');
        cell.appendChild(flag);
        flag.src = nationality + '.png';
        return cell;
    },
    createNameData: (name) => {
        let cell = document.createElement('td');
        cell.textContent = name;
        return cell;
    },
    createPenData: (penalties) => {
        let cell = document.createElement('td');
        cell.textContent = penalties;
        return cell;
    },
    createTimeData: (time) => {
        //console.log(time);
        let cell = document.createElement('td');
        cell.textContent = calc.rawToDisplay(time);
        return cell;
    },
    createTimeBehindData: (compare, index) => {
        let cell = document.createElement('td');
        if (index === 0)
            cell.textContent = '';
        else
            cell.textContent = '+' + calc.rawToDisplay(raceData[index][compare] - raceData[0][compare]);
        return cell;
    }

}

// Stores all data related to the race. Subject to be moved?
const sim = {
    //raceData: null,
    numOfShoots: null,
    numOfLaps: null,

    runRace: () => {
        if (getDiscipline() === DATA.SPRINT) {
            sim.numOfLaps = 3;
            sim.numOfShoots = 2;
        }
        else {
            sim.numOfLaps = 5;
            sim.numOfShoots = 4;
        }

        sim.createRaceData(getStartField());
        // Create start deficits if the discipline is pursuit

        sim.assignCompData();
        sim.printResults();
    },

    // Creates relevant raceData and assign the correct biathletes.
    createRaceData: (athletes) => {
        raceData = new Array(athletes.length);
        for (let i = 0; i < raceData.length; i++) {
            raceData[i] = new Array(100);
            raceData[i][DATA.ATHLETE_INFO] = athletes[i];
        }
    },

    assignCompData: () => {

        console.log(localStorage.getItem('pursuitDeficits'));
        let deficits = getDeficits();
        console.log(deficits);

        // Sets all data for one athlete at a time.
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.FORM_OF_THE_DAY] = calc.formOfTheDay();

            if (getDiscipline() === DATA.PURSUIT) {
                raceData[i][DATA.START_DEFICIT] = deficits[i];
                // Set start deficits here.
            }
            //for (let i = 0; i < raceData.length; i++)
            //     raceData[i][DATA.START_DEFICIT] = i; // Change LATER

            else {
                for (let i = 0; i < raceData.length; i++)
                    raceData[i][DATA.START_DEFICIT] = 0;
            }

            // Calcs course times.
            raceData[i][DATA.COURSE_TIME_1] = calc.lapTime(getMedianCourseTime() / sim.numOfLaps, raceData[i][DATA.FORM_OF_THE_DAY], raceData[i][DATA.ATHLETE_INFO].skiSpeed1);
            raceData[i][DATA.COURSE_TIME_2] = calc.lapTime(getMedianCourseTime() / sim.numOfLaps, raceData[i][DATA.FORM_OF_THE_DAY], raceData[i][DATA.ATHLETE_INFO].skiSpeed2);
            raceData[i][DATA.COURSE_TIME_3] = calc.lapTime(getMedianCourseTime() / sim.numOfLaps, raceData[i][DATA.FORM_OF_THE_DAY], raceData[i][DATA.ATHLETE_INFO].skiSpeed3);
            raceData[i][DATA.COURSE_TIME_4] = calc.lapTime(getMedianCourseTime() / sim.numOfLaps, raceData[i][DATA.FORM_OF_THE_DAY], raceData[i][DATA.ATHLETE_INFO].skiSpeed4);
            raceData[i][DATA.COURSE_TIME_FINAL] = calc.lapTime(getMedianCourseTime() / sim.numOfLaps, raceData[i][DATA.FORM_OF_THE_DAY], raceData[i][DATA.ATHLETE_INFO].skiSpeedFinal);
            if (sim.numOfLaps === 3)
                raceData[i][DATA.COURSE_TIME_TOTAL] = raceData[i][DATA.COURSE_TIME_1] + raceData[i][DATA.COURSE_TIME_2] + raceData[i][DATA.COURSE_TIME_FINAL];
            else
                raceData[i][DATA.COURSE_TIME_TOTAL] = raceData[i][DATA.COURSE_TIME_1] + raceData[i][DATA.COURSE_TIME_2] + raceData[i][DATA.COURSE_TIME_3] + raceData[i][DATA.COURSE_TIME_4] + raceData[i][DATA.COURSE_TIME_FINAL]

            // Calcs shooting data.
            raceData[i][DATA.PENALTY_COUNT_1] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].proneShootAccuracy);
            raceData[i][DATA.RANGE_TIME_1] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].proneRangeTime);
            if (getDiscipline() === DATA.PURSUIT || getDiscipline() === DATA.MASS_START) {
                raceData[i][DATA.PENALTY_COUNT_2] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].proneShootAccuracy);
                raceData[i][DATA.RANGE_TIME_2] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].proneRangeTime);
            }
            else {
                raceData[i][DATA.PENALTY_COUNT_2] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].standingShootAccuracy);
                raceData[i][DATA.RANGE_TIME_2] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].standingRangeTime);
            }
            if (getDiscipline() === DATA.INDIVIDUAL) {
                raceData[i][DATA.PENALTY_COUNT_3] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].proneShootAccuracy);
                raceData[i][DATA.RANGE_TIME_3] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].proneRangeTime);
            }
            else {
                raceData[i][DATA.PENALTY_COUNT_3] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].standingShootAccuracy);
                raceData[i][DATA.RANGE_TIME_3] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].standingRangeTime);
            }
            raceData[i][DATA.PENALTY_COUNT_FINAL] = calc.shootingResult(raceData[i][DATA.ATHLETE_INFO].standingShootAccuracy);
            raceData[i][DATA.RANGE_TIME_FINAL] = calc.rangeTime(raceData[i][DATA.ATHLETE_INFO].standingRangeTime);

            raceData[i][DATA.PENALTY_TIME_1] = calc.penaltyTime(raceData[i][DATA.PENALTY_COUNT_1]);
            raceData[i][DATA.PENALTY_TIME_2] = calc.penaltyTime(raceData[i][DATA.PENALTY_COUNT_2]);
            raceData[i][DATA.PENALTY_TIME_3] = calc.penaltyTime(raceData[i][DATA.PENALTY_COUNT_3]);
            raceData[i][DATA.PENALTY_TIME_FINAL] = calc.penaltyTime(raceData[i][DATA.PENALTY_COUNT_FINAL]);

            if (sim.numOfShoots === 2) {
                raceData[i][DATA.PENALTY_COUNT_TOTAL] = raceData[i][DATA.PENALTY_COUNT_1] + raceData[i][DATA.PENALTY_COUNT_FINAL];
                raceData[i][DATA.RANGE_TIME_TOTAL] = raceData[i][DATA.RANGE_TIME_1] + raceData[i][DATA.RANGE_TIME_FINAL];
                raceData[i][DATA.PENALTY_TIME_TOTAL] = raceData[i][DATA.PENALTY_TIME_1] + raceData[i][DATA.PENALTY_TIME_FINAL];
            }
            else {
                raceData[i][DATA.PENALTY_COUNT_TOTAL] = raceData[i][DATA.PENALTY_COUNT_1] + raceData[i][DATA.PENALTY_COUNT_2] + raceData[i][DATA.PENALTY_COUNT_3] + raceData[i][DATA.PENALTY_COUNT_FINAL];
                raceData[i][DATA.RANGE_TIME_TOTAL] = raceData[i][DATA.RANGE_TIME_1] + raceData[i][DATA.RANGE_TIME_2] + raceData[i][DATA.RANGE_TIME_3] + raceData[i][DATA.RANGE_TIME_FINAL];
                raceData[i][DATA.PENALTY_TIME_TOTAL] = raceData[i][DATA.PENALTY_TIME_1] + raceData[i][DATA.PENALTY_TIME_2] + raceData[i][DATA.PENALTY_TIME_3] + raceData[i][DATA.PENALTY_TIME_FINAL];
            }

            //raceData[i][DATA.FINISH_TIME] = raceData[i][DATA.START_DEFICIT] + raceData[i][DATA.COURSE_TIME_TOTAL] + raceData[i][DATA.RANGE_TIME_TOTAL] + raceData[i][DATA.PENALTY_TIME_TOTAL];
            //console.log(raceData[i][DATA.FINISH_TIME]);
        }
    },

    printResults: () => {
        // Start
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = 0;
            raceData[i][DATA.CURRENT_PENALTY_COUNT] = 0;
            raceData[i][DATA.CURRENT_SHOOTING_RECORD] = '';

            // Set CURRENT TIME to START DEFICIT for pursuit.
        }

        // Pursuit start.
        if (getDiscipline() === DATA.PURSUIT) {
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.START_DEFICIT];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Start'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.PUR_START, false));
        }

        // Pre-shooting 1.
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.COURSE_TIME_1];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Pre-Shooting 1'));
        if (getDiscipline() === DATA.PURSUIT)
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, true));
        else
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        // Shooting 1
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.RANGE_TIME_1] + raceData[i][DATA.PENALTY_TIME_1];
            raceData[i][DATA.CURRENT_PENALTY_COUNT] += raceData[i][DATA.PENALTY_COUNT_1];
            raceData[i][DATA.CURRENT_SHOOTING_RECORD] += raceData[i][DATA.PENALTY_COUNT_1] + '';

        }
        site.mainElement.appendChild(site.createIntermediateHeader('Shooting 1'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ONE, true));

        // Pre-shooting 2
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.COURSE_TIME_2];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Pre-Shooting 2'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ONE, true));

        // Sprint needs to skip until final shooting.
        if (getDiscipline() !== DATA.SPRINT) {
            // Shooting 2:
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.RANGE_TIME_2] + raceData[i][DATA.PENALTY_TIME_2];
                raceData[i][DATA.CURRENT_PENALTY_COUNT] += raceData[i][DATA.PENALTY_COUNT_2];
                raceData[i][DATA.CURRENT_SHOOTING_RECORD] += '+' + raceData[i][DATA.PENALTY_COUNT_2];

            }
            site.mainElement.appendChild(site.createIntermediateHeader('Shooting 2'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

            // Pre-shooting 3
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.COURSE_TIME_3];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Pre-Shooting 3'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

            // Shooting 3:
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.RANGE_TIME_3] + raceData[i][DATA.PENALTY_TIME_3];
                raceData[i][DATA.CURRENT_PENALTY_COUNT] += raceData[i][DATA.PENALTY_COUNT_3];
                raceData[i][DATA.CURRENT_SHOOTING_RECORD] += '+' + raceData[i][DATA.PENALTY_COUNT_3];

            }
            site.mainElement.appendChild(site.createIntermediateHeader('Shooting 3'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

            // Pre-Shooting 4.
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.COURSE_TIME_4];

            }
            site.mainElement.appendChild(site.createIntermediateHeader('Pre-Shooting 4'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

        }

        // Final Shooting
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.RANGE_TIME_FINAL] + raceData[i][DATA.PENALTY_TIME_FINAL];
            raceData[i][DATA.CURRENT_PENALTY_COUNT] += raceData[i][DATA.PENALTY_COUNT_FINAL];
            raceData[i][DATA.CURRENT_SHOOTING_RECORD] += '+' + raceData[i][DATA.PENALTY_COUNT_FINAL];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Shooting ' + sim.numOfShoots));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

        // Final Results
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] += raceData[i][DATA.COURSE_TIME_FINAL];
            raceData[i][DATA.FINISH_TIME] = raceData[i][DATA.CURRENT_TIME];
            //raceData[i][DATA.CURRENT_SHOOTING_RECORD] = raceData[i][DATA.PENALTY_COUNT_1] + '+' + raceData[i][DATA.PENALTY_COUNT_2] + '+' + raceData[i][DATA.PENALTY_COUNT_3] + '+' + raceData[i][DATA.PENALTY_COUNT_FINAL];
            //raceData[i][DATA.CURRENT_PENALTY_COUNT] = raceData[i][DATA.PENALTY_COUNT_TOTAL];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Final Results'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.ALL, true));

        // Set pursuit
        if (getDiscipline() === DATA.SPRINT) {
            //console.log(calc.rawToDisplay(raceData[0][DATA.CURRENT_TIME]));
            //console.log(Math.floor(raceData[1][DATA.CURRENT_TIME] - raceData[0][DATA.CURRENT_TIME]));

            let nameData = '';
            let timeData = [];
            for (let i = 0; i < 60; i++) {

                // Breaks in case less than 60 athletes compete.
                if (raceData[i] === undefined)
                    break;

                //console.log(calc.rawToDisplay(raceData[i][DATA.CURRENT_TIME]));
                console.log(Math.floor(raceData[i][DATA.CURRENT_TIME] - raceData[0][DATA.CURRENT_TIME]));
                timeData.push(Math.floor(raceData[i][DATA.CURRENT_TIME] - raceData[0][DATA.CURRENT_TIME]));

                nameData += raceData[i][DATA.ATHLETE_INFO].name + ',';
                //timeData += site.createTimeBehindData(raceData[0][DATA.CURRENT_TIME], i).textContent
            }
            console.log(nameData);
            //console.log(timeData);
            console.log(timeData.toString());


            localStorage.setItem('startField', nameData);
            localStorage.setItem('pursuitDeficits', timeData.toString() + ',');
            //console.log(raceData[i][DATA.ATHLETE_INFO].name);
        }

        // Extra Info

        // Ski Time for individual
        if (getDiscipline() === DATA.INDIVIDUAL) {
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.FINISH_TIME] - raceData[i][DATA.PENALTY_TIME_TOTAL];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Ski Time'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));
        }

        if (getDiscipline() === DATA.PURSUIT) {
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.FINISH_TIME] - raceData[i][DATA.START_DEFICIT];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Pursuit Time'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));
        }

        // Course Time 1
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_1];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Course Time 1'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        // Course Time 2
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_2];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Course Time 2'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        // Sprint skips course times 3 and 4
        if (getDiscipline() !== DATA.SPRINT) {
            // Course Time 3
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_3];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Course Time 3'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

            // Course Time 4
            for (let i = 0; i < raceData.length; i++) {
                raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_4];
            }
            site.mainElement.appendChild(site.createIntermediateHeader('Course Time 4'));
            site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));
        }

        // Course Time Final
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_FINAL];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Course Time ' + sim.numOfLaps));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        // Course Time Total
        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.COURSE_TIME_TOTAL];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Course Time Total'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        for (let i = 0; i < raceData.length; i++) {
            raceData[i][DATA.CURRENT_TIME] = raceData[i][DATA.RANGE_TIME_TOTAL];
        }
        site.mainElement.appendChild(site.createIntermediateHeader('Range Time Total'));
        site.mainElement.appendChild(site.createResultsTable(DATA.CURRENT_TIME, DATA.NONE, false));

        if (getDiscipline() === DATA.SPRINT) {
            if (getClass() === DATA.WOMEN)
                site.mainElement.appendChild(site.createButton('Women 10km Pursuit', 'start', 'NewBiathlonSim_Results.html', DATA.PURSUIT, DATA.WOMEN, '27.55.6'));

            else
                site.mainElement.appendChild(site.createButton('Men 12.5km Pursuit', 'start', 'NewBiathlonSim_Results.html', DATA.PURSUIT, DATA.MEN, '27.24.8'));


            document.querySelector('.start').textContent = 'Start Pursuit';
            site.setEventListener(document.querySelector('.start'));
        }


    }

}


const calc = {
    formOfTheDay: () => {
        return 0.98 + Math.random() / 25;
    },

    lapTime: (medianLapTime, formOfTheDay, skiSpeed) => {
        skiSpeed *= 0.01;
        skiSpeed += 1;
        return medianLapTime * (formOfTheDay * skiSpeed);
    },

    shootingResult: (acc) => {
        acc *= 0.01;
        let penCount = 0;
        for (let numberOfShots = 0; numberOfShots < 5; numberOfShots++) {
            let shot = Math.random();
            if (shot >= acc)
                penCount++;
        }
        return penCount;
    },

    rangeTime: (avgTime) => {
        return avgTime * (0.875 + Math.random() / 4);
    },

    penaltyTime: (penCount) => {
        let avgTime;
        if (getClass() === DATA.WOMEN)
            avgTime = 24.0;
        else if (getClass() === DATA.MEN)
            avgTime = 21.0;
        else
            alert('ERROR');
        let loopTime = (avgTime - 1) + (Math.random() * 2);
        return (getDiscipline() === DATA.INDIVIDUAL) ? 60 * penCount : loopTime * penCount;
    },

    sortRaceData: (a, b) => {
        //console.log('a: ' + a);
        //console.log('b: ' + b);
        //console.log('compare' + compare);

        if (a[DATA.CURRENT_TIME] === b[DATA.CURRENT_TIME])
            return 0;
        else
            return (a[DATA.CURRENT_TIME] < b[DATA.CURRENT_TIME]) ? - 1 : 1;

    },


    rawToDisplay: (seconds) => {
        // Läser in antal sekunder och returnerar en utskrift av hur mycket tid det motsvarar.
        if (seconds === 0)
            return '';
        if (seconds < 60) {
            // Använder Math.floor för att räkna ut helt antal sekunder.
            let s = Math.floor(seconds % 60);
            let dec = Math.floor(seconds % 1 * 10);
            return s + '.' + dec;
        }
        else {
            let min = Math.floor(seconds / 60);    // Använder Math.floor för att räkna ut helt antal minuter från antal sekunder.
            // Använder Math.floor för att räkna ut helt antal sekunder och String.padStart för att se till att sekundvärdet har två siffror.
            let s = String(Math.floor(seconds % 60)).padStart(2, '0');
            let dec = Math.floor(seconds % 1 * 10);
            return min + '.' + s + '.' + dec;
        }
    },

    displayToRaw: (Time) => {
        let min = Number(Time.substring(0, 2) * 60);
        let s = Number(Time.substring(3, 5));
        let dec = Number(Time.substring(6, 7) / 10);
        return min + s + dec;
    }

}




class buttonElement {
    constructor(text, id, className) {
        this.btn = document.createElement('button');
        this.btn.textContent = text;
        this.btn.id = id;
        this.btn.className = className;
    }

}

site.init();

function getDiscipline() {
    return parseInt(localStorage.getItem('discipline'));
}
function getClass() {
    return parseInt(localStorage.getItem('gClass'));
}
function printRaceTitle() {
    let header = document.querySelector('.race_title_header');
    header.textContent = localStorage.getItem('raceTitle');
}
function getMedianCourseTime() {
    return calc.displayToRaw(localStorage.getItem('medianCourseTime'));
}
function getStartField() {
    let fieldArray = [];
    let toSearch = []; // ALL male or female athletes.
    //console.log(toSearch);

    if (getClass() === DATA.MEN) {
        allAthletes.standardMList.forEach((biathlete) => toSearch.push(biathlete));
        allAthletes.subMList.forEach((biathlete) => toSearch.push(biathlete));
    }
    else if (getClass() === DATA.WOMEN) {
        allAthletes.standardFList.forEach((biathlete) => toSearch.push(biathlete));
        allAthletes.subFList.forEach((biathlete) => toSearch.push(biathlete));
    }
    else
        alert('ERROR');

    //console.log(toSearch);

    let text = localStorage.getItem('startField');

    for (let indexStart = 0; true;) {

        let comma = text.indexOf(',', indexStart);
        let name;
        let stop = false;
        if (comma === -1) {
            break;
        }
        else
            name = text.substring(indexStart, comma);

        fieldArray.push(toSearch.find((a => a.name === name)));

        indexStart = comma + 1;
    }

    return fieldArray;
}
function getDeficits() {
    let deficits = localStorage.getItem('pursuitDeficits');
    let timeArray = [];

    for (let indexStart = 0; true;) {
        let comma = deficits.indexOf(',', indexStart);
        let time;

        if (comma === -1) {
            break;
        }
        else
            time = deficits.substring(indexStart, comma);
        
            timeArray.push(parseInt(time));

        indexStart = comma + 1;
    }

    return timeArray;

}