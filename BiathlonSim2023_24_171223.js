const COURSE_TIME_TOTAL = 0;
const COURSE_TIME_1 = 1;
const COURSE_TIME_2 = 2;
const COURSE_TIME_3 = 3;
const COURSE_TIME_4 = 4;
const COURSE_TIME_5 = 5;
const RANGE_TIME_TOTAL = 6;
const RANGE_TIME_1 = 7;
const RANGE_TIME_2 = 8;
const RANGE_TIME_3 = 9;
const RANGE_TIME_4 = 10;
const PENALTY_TIME_TOTAL = 11;
const PENALTY_TIME_1 = 12;
const PENALTY_TIME_2 = 13;
const PENALTY_TIME_3 = 14;
const PENALTY_TIME_4 = 15;
const PENALTY_COUNT_FINAL = 16;
const PENALTY_COUNT_1 = 17;
const PENALTY_COUNT_2 = 18;
const PENALTY_COUNT_3 = 19;
const PENALTY_COUNT_4 = 20;
const FINAL_TIME = 21;
const TOTAL_TIME = 22;
const TOTAL_PENALTY_COUNT = 23;
const ATHLETE_INFO = 24;
const CURRENT_SHOOTING = 25;
const CURRENT_RACE_STATS = 26;
const OLD_POS = 27;
const NEW_POS = 28;
const POS_SWING = 29;
const FORM_OF_THE_DAY = 30;                         // Dagsform jämfört med median

const INDIVIDUAL = 0;
const SPRINT = 1;
const PURSUIT = 2;
const MASS_START = 3;

const WOMEN = 0;
const MEN = 1;

const M_OSTERSUND_20KM_INDIVIDUAL = '47.25.0';
const F_OSTERSUND_15KM_INDIVIDUAL = '40.53.7';
const M_OSTERSUND_10KM_SPRINT = '22.54.0';
const F_OSTERSUND_7d5KM_SPRINT = '19.18.0';
const M_OSTERSUND_15KM_MASS_START = '32.04.2';
const F_OSTERSUND_12d5KM_MASS_START = '33.22.4';

const F = [     // Array of female biathletes.
    JBraisazBouchet = {
        name: 'Justine Braisaz-Bouchet',
        nationality: 'FRA',
        skiSpeed1: -2.8,
        skiSpeed2: -2.8,
        skiSpeed3: -3.4,
        skiSpeed4: -3.4,
        skiSpeedFinal: -4.2,
        proneShootAccuracy: 84.6,
        standingShootAccuracy: 84.6,
        proneRangeTime: 53.4,
        standingRangeTime: 51.2
    },
    ILTandrevold = {
        name: 'Ingrid Landmark Tandrevold',
        nationality: 'NOR',
        skiSpeed1: -2.0,
        skiSpeed2: -3.6,
        skiSpeed3: -2.7,
        skiSpeed4: -3.2,
        skiSpeedFinal: -2.3,
        proneShootAccuracy: 93.8,
        standingShootAccuracy: 81.5,
        proneRangeTime: 53.2,
        standingRangeTime: 51.4
    },
    EOeberg = {
        name: 'Elvira Oeberg',
        nationality: 'SWE',
        skiSpeed1: -2.9,
        skiSpeed2: -3.6,
        skiSpeed3: -2.4,
        skiSpeed4: -3.3,
        skiSpeedFinal: -5.6,
        proneShootAccuracy: 83.1,
        standingShootAccuracy: 83.1,
        proneRangeTime: 51.9,
        standingRangeTime: 49.4
    },
    LVittozzi = {
        name: 'Lisa Vittozzi',
        nationality: 'ITA',
        skiSpeed1: -0.9,
        skiSpeed2: -0.5,
        skiSpeed3: -0.6,
        skiSpeed4: -0.4,
        skiSpeedFinal: -1.2,
        proneShootAccuracy: 92.3,
        standingShootAccuracy: 95.4,
        proneRangeTime: 53.3,
        standingRangeTime: 48.2
    },
    FPreuss = {
        name: 'Franziska Preuss',
        nationality: 'GER',
        skiSpeed1: -0.3,
        skiSpeed2: -0.9,
        skiSpeed3: -0.3,
        skiSpeed4: -1.1,
        skiSpeedFinal: -2.2,
        proneShootAccuracy: 94.0,
        standingShootAccuracy: 96.0,
        proneRangeTime: 49.2,
        standingRangeTime: 47.5
    },
    JSimon = {
        name: 'Julia Simon',
        nationality: 'FRA',
        proneShootAccuracy: 90.8,
        standingShootAccuracy: 84.6,
        proneRangeTime: 48.3,
        standingRangeTime: 44.6,
        skiSpeed1: -1.5,
        skiSpeed2: -0.9,
        skiSpeed3: -1.6,
        skiSpeed4: -0.7,
        skiSpeedFinal: -0.9
    },
    KOKnotten = {
        name: 'Karoline Offigstad Knotten',
        nationality: 'NOR',
        proneShootAccuracy: 86.2,
        standingShootAccuracy: 93.8,
        proneRangeTime: 50.0,
        standingRangeTime: 46.0,
        skiSpeed1: 0.2,
        skiSpeed2: -0.6,
        skiSpeed3: 0.6,
        skiSpeed4: 0.9,
        skiSpeedFinal: 0.0
    },
    VVoigt = {
        name: 'Vanessa Voigt',
        nationality: 'GER',
        proneShootAccuracy: 96.9,
        standingShootAccuracy: 90.8,
        proneRangeTime: 54.5,
        standingRangeTime: 53.0,
        skiSpeed1: 0.6,
        skiSpeed2: -0.3,
        skiSpeed3: -0.5,
        skiSpeed4: -0.3,
        skiSpeedFinal: -1.8
    },
    LHaeckiGross = {
        name: 'Lena Haechi-Gross',
        nationality: 'SUI',
        proneShootAccuracy: 84.6,
        standingShootAccuracy: 84.6,
        proneRangeTime: 50.4,
        standingRangeTime: 45.6,
        skiSpeed1: -1.0,
        skiSpeed2: -1.9,
        skiSpeed3: -0.7,
        skiSpeed4: -0.2,
        skiSpeedFinal: -2.3
    },
    LJeanmonnot = {
        name: 'Lou Jeanmonnot',
        nationality: 'FRA',
        proneShootAccuracy: 96.0,
        standingShootAccuracy: 88.0,
        proneRangeTime: 54.8,
        standingRangeTime: 50.5,
        skiSpeed1: -0.6,
        skiSpeed2: 0.1,
        skiSpeed3: -0.0,
        skiSpeed4: 0.4,
        skiSpeedFinal: -0.5
    },
    HOeberg = {
        name: 'Hanna Oeberg',
        nationality: 'SWE',
        proneShootAccuracy: 83.1,
        standingShootAccuracy: 87.7,
        proneRangeTime: 50.2,
        standingRangeTime: 45.8,
        skiSpeed1: -1.6,
        skiSpeed2: -2.0,
        skiSpeed3: -1.8,
        skiSpeed4: -1.7,
        skiSpeedFinal: -0.6
    },
    JArnekleiv = {
        name: 'Juni Arnekleiv',
        nationality: 'NOR',
        proneShootAccuracy: 87.7,
        standingShootAccuracy: 86.2,
        proneRangeTime: 52.5,
        standingRangeTime: 49.1,
        skiSpeed1: -0.6,
        skiSpeed2: -0.9,
        skiSpeed3: -0.1,
        skiSpeed4: -0.3,
        skiSpeedFinal: 0.0
    },
    LPersson = {
        name: 'Linn Persson',
        nationality: 'SWE',
        proneShootAccuracy: 92.3,
        standingShootAccuracy: 86.2,
        proneRangeTime: 54.8,
        standingRangeTime: 49.9,
        skiSpeed1: 0.1,
        skiSpeed2: 0.4,
        skiSpeed3: -0.1,
        skiSpeed4: 0.1,
        skiSpeedFinal: -0.6
    },
    MISkogan = {
        name: 'Marit Ishol Skogan',
        nationality: 'NOR',
        proneShootAccuracy: 89.2,
        standingShootAccuracy: 83.1,
        proneRangeTime: 54.1,
        standingRangeTime: 49.6,
        skiSpeed1: 0.8,
        skiSpeed2: 1.1,
        skiSpeed3: 1.8,
        skiSpeed4: 2.4,
        skiSpeedFinal: 2.6
    },
    MBrorsson = {
        name: 'Mona Brorsson',
        nationality: 'SWE',
        proneShootAccuracy: 93.8,
        standingShootAccuracy: 83.1,
        proneRangeTime: 50.1,
        standingRangeTime: 48.7,
        skiSpeed1: 0.6,
        skiSpeed2: 2.7,
        skiSpeed3: 4.0,
        skiSpeed4: 5.0,
        skiSpeedFinal: 3.2
    },
    JHettichWalz = {
        name: 'Janina Hettich-Walz',
        nationality: 'GER',
        proneShootAccuracy: 98.5,
        standingShootAccuracy: 78.5,
        proneRangeTime: 49.9,
        standingRangeTime: 49.9,
        skiSpeed1: 1.8,
        skiSpeed2: 1.3,
        skiSpeed3: 0.7,
        skiSpeed4: 1.1,
        skiSpeedFinal: 1.0
    },
    TTomingas = {
        name: 'Tuuli Tomingas',
        nationality: 'EST',
        proneShootAccuracy: 86.2,
        standingShootAccuracy: 83.1,
        proneRangeTime: 55.4,
        standingRangeTime: 54.6,
        skiSpeed1: 2.1,
        skiSpeed2: 0.2,
        skiSpeed3: -0.5,
        skiSpeed4: -1.2,
        skiSpeedFinal: -0.4
    },
    TVobornikova = {
        name: 'Tereza Vobornikova',
        nationality: 'CZE',
        proneShootAccuracy: 87.3,
        standingShootAccuracy: 87.3,
        proneRangeTime: 53.9,
        standingRangeTime: 50.0,
        skiSpeed1: 2.3,
        skiSpeed2: 1.9,
        skiSpeed3: 1.6,
        skiSpeed4: 0.7,
        skiSpeedFinal: 1.4
    },
    MKJohansen = {
        name: 'Marthe Krakstad Johansen',
        nationality: 'NOR',
        proneShootAccuracy: 90.0,
        standingShootAccuracy: 90.0,
        proneRangeTime: 51.3,
        standingRangeTime: 47.8,
        skiSpeed1: 2.3,
        skiSpeed2: 1.5,
        skiSpeed3: 2.2,
        skiSpeed4: 2.7,
        skiSpeedFinal: 2.3
    },
    ALampic = {
        name: 'Anamarija Lampic',
        nationality: 'SLO',
        proneShootAccuracy: 64.6,
        standingShootAccuracy: 58.5,
        proneRangeTime: 59.9,
        standingRangeTime: 52.6,
        skiSpeed1: -3.1,
        skiSpeed2: -4.5,
        skiSpeed3: -4.1,
        skiSpeed4: -4.2,
        skiSpeedFinal: -5.8
    },
    SChauveau = {
        name: 'Sophie Chauveau',
        nationality: 'FRA',
        proneShootAccuracy: 90.8,
        standingShootAccuracy: 70.8,
        proneRangeTime: 56.1,
        standingRangeTime: 53.0,
        skiSpeed1: -0.7,
        skiSpeed2: -1.2,
        skiSpeed3: -1.0,
        skiSpeed4: -1.0,
        skiSpeedFinal: -0.6
    },
    DWierer = {
        name: 'Dorothea Wierer',
        nationality: 'ITA',
        proneShootAccuracy: 93.3,
        standingShootAccuracy: 86.7,
        proneRangeTime: 50.2,
        standingRangeTime: 48.7,
        skiSpeed1: 2.3,
        skiSpeed2: 1.4,
        skiSpeed3: 1.3,
        skiSpeed4: 1.9,
        skiSpeedFinal: 3.6
    },
    MDavidova = {
        name: 'Marketa Davidova',
        nationality: 'CZE',
        proneShootAccuracy: 83.1,
        standingShootAccuracy: 78.5,
        proneRangeTime: 52.3,
        standingRangeTime: 51.7,
        skiSpeed1: -0.7,
        skiSpeed2: -1.0,
        skiSpeed3: -1.4,
        skiSpeed4: -0.9,
        skiSpeedFinal: 0.0
    },
    AMagnusson = {
        name: 'Anna Magnusson',
        nationality: 'SWE',
        proneShootAccuracy: 85.5,
        standingShootAccuracy: 85.5,
        proneRangeTime: 54.5,
        standingRangeTime: 49.1,
        skiSpeed1: 0.8,
        skiSpeed2: 2.1,
        skiSpeed3: 0.7,
        skiSpeed4: 2.5,
        skiSpeedFinal: 4.1
    },
    JJislova = {
        name: 'Jessica Jislova',
        nationality: 'CZE',
        proneShootAccuracy: 87.3,
        standingShootAccuracy: 87.3,
        proneRangeTime: 53.6,
        standingRangeTime: 48.2,
        skiSpeed1: 2.5,
        skiSpeed2: 2.0,
        skiSpeed3: 3.8,
        skiSpeed4: 3.5,
        skiSpeedFinal: 1.4
    },
    IPetrenko = {
        name: 'Iryna Petrenko',
        nationality: 'UKR',
        proneShootAccuracy: 98.0,
        standingShootAccuracy: 82.0,
        proneRangeTime: 50.4,
        standingRangeTime: 47.7,
        skiSpeed1: 2.0,
        skiSpeed2: 2.6,
        skiSpeed3: 3.0,
        skiSpeed4: 2.2,
        skiSpeedFinal: 2.6
    },
    DIrwin = {
        name: 'Deedra Irwin',
        nationality: 'USA',
        proneShootAccuracy: 89.2,
        standingShootAccuracy: 89.2,
        proneRangeTime: 55.6,
        standingRangeTime: 56.6,
        skiSpeed1: 2.1,
        skiSpeed2: 2.7,
        skiSpeed3: 1.8,
        skiSpeed4: 2.7,
        skiSpeedFinal: 2.5
    },
    TSteiner = {
        name: 'Tamara Steiner',
        nationality: 'AUT',
        proneShootAccuracy: 89.2,
        standingShootAccuracy: 93.8,
        proneRangeTime: 53.7,
        standingRangeTime: 51.0,
        skiSpeed1: 5.0,
        skiSpeed2: 5.1,
        skiSpeed3: 6.3,
        skiSpeed4: 6.1,
        skiSpeedFinal: 5.8
    },
    LLie = {
        name: 'Lotte Lie',
        nationality: 'BEL',
        proneShootAccuracy: 80.0,
        standingShootAccuracy: 87.5,
        proneRangeTime: 58.6,
        standingRangeTime: 52.6,
        skiSpeed1: 1.3,
        skiSpeed2: 3.0,
        skiSpeed3: 3.4,
        skiSpeed4: 4.8,
        skiSpeedFinal: 3.5
    },
    YDzhima = {
        name: 'Yuliia Dzhima',
        nationality: 'UKR',
        proneShootAccuracy: 95.0,
        standingShootAccuracy: 82.5,
        proneRangeTime: 53.4,
        standingRangeTime: 51.2,
        skiSpeed1: 2.1,
        skiSpeed2: 2.3,
        skiSpeed3: 1.1,
        skiSpeed4: 0.7,
        skiSpeedFinal: 1.9
    },
    GGuigonnat = {
        name: 'Gilonne Guigonnat',
        nationality: 'FRA',
        proneShootAccuracy: 93.3,
        standingShootAccuracy: 86.7,
        proneRangeTime: 57.6,
        standingRangeTime: 50.8,
        skiSpeed1: 2.7,
        skiSpeed2: 2.5,
        skiSpeed3: 3.8,
        skiSpeed4: 2.7,
        skiSpeedFinal: 3.9
    },
    AGandler = {
        name: 'Anna Gandler',
        nationality: 'AUT',
        proneShootAccuracy: 88.9,
        standingShootAccuracy: 75.6,
        proneRangeTime: 58.0,
        standingRangeTime: 54.0,
        skiSpeed1: 1.6,
        skiSpeed2: 1.1,
        skiSpeed3: 0.9,
        skiSpeed4: 0.4,
        skiSpeedFinal: 1.0
    },
    AMerkushyna = {
        name: 'Anastasiya Merkushyna',
        nationality: 'UKR',
        proneShootAccuracy: 86.2,
        standingShootAccuracy: 80.0,
        proneRangeTime: 50.0,
        standingRangeTime: 48.0,
        skiSpeed1: 4.0,
        skiSpeed2: 4.6,
        skiSpeed3: 4.7,
        skiSpeed4: 5.1,
        skiSpeedFinal: 5.6
    },
    LTHauser = {
        name: 'Lisa Theresa Hauser',
        nationality: 'AUT',
        proneShootAccuracy: 87.5,
        standingShootAccuracy: 85.0,
        proneRangeTime: 54.9,
        standingRangeTime: 51.0,
        skiSpeed1: 1.4,
        skiSpeed2: 3.0,
        skiSpeed3: 3.1,
        skiSpeed4: 2.5,
        skiSpeedFinal: 2.1
    },
    SSchneider = {
        name: 'Sophia Schneider',
        nationality: 'GER',
        proneShootAccuracy: 85.0,
        standingShootAccuracy: 82.5,
        proneRangeTime: 59.3,
        standingRangeTime: 54.7,
        skiSpeed1: 1.3,
        skiSpeed2: 1.5,
        skiSpeed3: 0.9,
        skiSpeed4: 0.5,
        skiSpeedFinal: 1.1
    },
    RPassler = {
        name: 'Rebecca Passler',
        nationality: 'ITA',
        proneShootAccuracy: 84.4,
        standingShootAccuracy: 84.4,
        proneRangeTime: 48.9,
        standingRangeTime: 44.1,
        skiSpeed1: 4.4,
        skiSpeed2: 3.8,
        skiSpeed3: 3.5,
        skiSpeed4: 3.3,
        skiSpeedFinal: 3.0
    },
    EGasparin = {
        name: 'Elisa Gasparin',
        nationality: 'SUI',
        proneShootAccuracy: 95.0,
        standingShootAccuracy: 87.5,
        proneRangeTime: 54.7,
        standingRangeTime: 51.3,
        skiSpeed1: 3.9,
        skiSpeed2: 3.8,
        skiSpeed3: 5.3,
        skiSpeed4: 5.3,
        skiSpeedFinal: 3.0
    },
    ABaserga = {
        name: 'Amy Baserga',
        nationality: 'SUI',
        proneShootAccuracy: 90.0,
        standingShootAccuracy: 83.3,
        proneRangeTime: 51.0,
        standingRangeTime: 46.2,
        skiSpeed1: 2.9,
        skiSpeed2: 3.0,
        skiSpeed3: 2.2,
        skiSpeed4: 3.0,
        skiSpeedFinal: 1.7
    },
    SMinkkinen = {
        name: 'Suvi Minkkinen',
        nationality: 'FIN',
        proneShootAccuracy: 92.7,
        standingShootAccuracy: 89.1,
        proneRangeTime: 54.1,
        standingRangeTime: 48.0,
        skiSpeed1: 5.3,
        skiSpeed2: 5.7,
        skiSpeed3: 6.4,
        skiSpeed4: 6.5,
        skiSpeedFinal: 4.5
    },
    KErdal = {
        name: 'Karoline Erdal',
        nationality: 'NOR',
        proneShootAccuracy: 84.0,
        standingShootAccuracy: 92.0,
        proneRangeTime: 51.0,
        standingRangeTime: 44.4,
        skiSpeed1: 1.3,
        skiSpeed2: 1.9,
        skiSpeed3: 1.9,
        skiSpeed4: 2.6,
        skiSpeedFinal: 1.4
    },
    VDimitrova = {
        name: 'Valentina Dimitrova',
        nationality: 'BUL',
        proneShootAccuracy: 86.7,
        standingShootAccuracy: 91.1,
        proneRangeTime: 55.0,
        standingRangeTime: 51.9,
        skiSpeed1: 5.5,
        skiSpeed2: 6.4,
        skiSpeed3: 6.1,
        skiSpeed4: 5.4,
        skiSpeedFinal: 4.7
    },
    SGrotian = {
        name: 'Selina Grotian',
        nationality: 'GER',
        proneShootAccuracy: 72.7,
        standingShootAccuracy: 81.8,
        proneRangeTime: 54.3,
        standingRangeTime: 47.4,
        skiSpeed1: 3.0,
        skiSpeed2: 2.1,
        skiSpeed3: 1.9,
        skiSpeed4: 0.2,
        skiSpeedFinal: 0.3
    },
    AMaka = {
        name: 'Anna Maka',
        nationality: 'POL',
        proneShootAccuracy: 86.7,
        standingShootAccuracy: 86.7,
        proneRangeTime: 58.1,
        standingRangeTime: 54.0,
        skiSpeed1: 3.9,
        skiSpeed2: 2.2,
        skiSpeed3: 3.1,
        skiSpeed4: 2.9,
        skiSpeedFinal: 2.6
    },
    AGasparin = {
        name: 'Aita Gasparin',
        nationality: 'SUI',
        proneShootAccuracy: 87.3,
        standingShootAccuracy: 83.6,
        proneRangeTime: 52.2,
        standingRangeTime: 52.1,
        skiSpeed1: 2.2,
        skiSpeed2: 3.4,
        skiSpeed3: 4.8,
        skiSpeed4: 4.6,
        skiSpeedFinal: 3.3
    },
    AStremous = {
        name: 'Alina Stremous',
        nationality: 'MDA',
        proneShootAccuracy: 90.9,
        standingShootAccuracy: 81.8,
        proneRangeTime: 67.1,
        standingRangeTime: 54.7,
        skiSpeed1: 1.8,
        skiSpeed2: 2.8,
        skiSpeed3: 3.4,
        skiSpeed4: 3.2,
        skiSpeedFinal: 2.5
    },
    CChevalier = {
        name: 'Chloe Chevalier',
        nationality: 'FRA',
        proneShootAccuracy: 88.6,
        standingShootAccuracy: 85.7,
        proneRangeTime: 52.7,
        standingRangeTime: 56.3,
        skiSpeed1: -0.4,
        skiSpeed2: 1.1,
        skiSpeed3: 1.1,
        skiSpeed4: 2.2,
        skiSpeedFinal: -0.4
    },
    LCharvatova = {
        name: 'Lucie Charvatova',
        nationality: 'CZE',
        proneShootAccuracy: 77.8,
        standingShootAccuracy: 55.6,
        proneRangeTime: 54.4,
        standingRangeTime: 53.3,
        skiSpeed1: 0.1,
        skiSpeed2: 1.0,
        skiSpeed3: 0.0,
        skiSpeed4: 0.7,
        skiSpeedFinal: 2.6
    },
    AJuppe = {
        name: 'Anna Juppe',
        nationality: 'AUT',
        proneShootAccuracy: 77.8,
        standingShootAccuracy: 71.1,
        proneRangeTime: 56.6,
        standingRangeTime: 59.1,
        skiSpeed1: 1.7,
        skiSpeed2: 1.9,
        skiSpeed3: 1.0,
        skiSpeed4: 0.5,
        skiSpeedFinal: 2.8
    }
]
const M = [
    JTBoe = {
        name: 'Johannes Thingnes Boe',
        nationality: 'NOR',
        proneShootAccuracy: 89.2,
        standingShootAccuracy: 83.1,
        proneRangeTime: 51.1,
        standingRangeTime: 44.4,
        skiSpeed1: -2.6,
        skiSpeed2: -2.8,
        skiSpeed3: -2.3,
        skiSpeed4: -3.4,
        skiSpeedFinal: -1.4
    },
    TBoe = {
        name: 'Tarjei Boe',
        nationality: 'NOR',
        proneShootAccuracy: 92.3,
        standingShootAccuracy: 87.7,
        proneRangeTime: 51.4,
        standingRangeTime: 46.5,
        skiSpeed1: -0.1,
        skiSpeed2: -0.5,
        skiSpeed3: -0.0,
        skiSpeed4: -1.5,
        skiSpeedFinal: -1.8
    },
    JDaleSkjevdal = {
        name: 'Johannes Dale-Skjevdal',
        nationality: 'NOR',
        proneShootAccuracy: 84.6,
        standingShootAccuracy: 84.6,
        proneRangeTime: 51.4,
        standingRangeTime: 47.7,
        skiSpeed1: -1.3,
        skiSpeed2: -2.4,
        skiSpeed3: -2.2,
        skiSpeed4: -2.0,
        skiSpeedFinal: -5.0
    },
    EStroemsheim = {
        name: 'Endre Stroemsheim',
        nationality: 'NOR',
        proneShootAccuracy: 90.8,
        standingShootAccuracy: 81.5,
        proneRangeTime: 48.7,
        standingRangeTime: 44.1,
        skiSpeed1: -1.1,
        skiSpeed2: -0.7,
        skiSpeed3: -0.6,
        skiSpeed4: -1.2,
        skiSpeedFinal: -2.1
    },
    SHLaegreid = {
        name: 'Sturla Holm Laegreid',
        nationality: 'NOR',
        proneShootAccuracy: 89.1,
        standingShootAccuracy: 96.4,
        proneRangeTime: 48.6,
        standingRangeTime: 44.8,
        skiSpeed1: 0.6,
        skiSpeed2: 1.3,
        skiSpeed3: 2.0,
        skiSpeed4: 0.9,
        skiSpeedFinal: 2.4
    },
    PNawrath = {
        name: 'Philipp Nawrath',
        nationality: 'GER',
        proneShootAccuracy: 80.0,
        standingShootAccuracy: 80.0,
        proneRangeTime: 49.8,
        standingRangeTime: 46.7,
        skiSpeed1: -0.9,
        skiSpeed2: -1.0,
        skiSpeed3: -0.8,
        skiSpeed4: -1.9,
        skiSpeedFinal: 0.3
    },
    VSChristiansen = {
        name: 'Vetle Sjaastad Christiansen',
        nationality: 'NOR',
        proneShootAccuracy: 92.3,
        standingShootAccuracy: 81.5,
        proneRangeTime: 49.3,
        standingRangeTime: 48.7,
        skiSpeed1: -1.8,
        skiSpeed2: -1.0,
        skiSpeed3: -1.4,
        skiSpeed4: -0.7,
        skiSpeedFinal: 0.3
    },
    BDoll = {
        name: 'Benedikt Doll',
        nationality: 'GER',
        proneShootAccuracy: 86.2,
        standingShootAccuracy: 76.9,
        proneRangeTime: 45.5,
        standingRangeTime: 46.2,
        skiSpeed1: 0.1,
        skiSpeed2: -0.4,
        skiSpeed3: -1.0,
        skiSpeed4: -0.4,
        skiSpeedFinal: -1.1
    },
    MPonsiluoma = {
        name: 'Martin Ponsiluoma',
        nationality: 'SWE',
        proneShootAccuracy: 81.5,
        standingShootAccuracy: 83.1,
        proneRangeTime: 48.5,
        standingRangeTime: 45.0,
        skiSpeed1: -0.3,
        skiSpeed2: -1.3,
        skiSpeed3: -1.7,
        skiSpeed4: -1.7,
        skiSpeedFinal: -1.1
    },
    SSamuelsson = {
        name: 'Sebastian Samuelsson',
        nationality: 'SWE',
        proneShootAccuracy: 87.5,
        standingShootAccuracy: 82.5,
        proneRangeTime: 49.7,
        standingRangeTime: 48.5,
        skiSpeed1: -2.2,
        skiSpeed2: -2.6,
        skiSpeed3: -3.0,
        skiSpeed4:  -2.1,
        skiSpeedFinal: -3.3
    },
    JStrelow = {
        name: 'Justus Strelow',
        nationality: 'GER',
        proneShootAccuracy: 93.8,
        standingShootAccuracy: 92.3,
        proneRangeTime: 45.8,
        standingRangeTime: 45.9,
        skiSpeed1: 1.0,
        skiSpeed2: 2.1,
        skiSpeed3: 2.9,
        skiSpeed4: 2.2,
        skiSpeedFinal: 2.9
    },
    JKuehn = {
        name: 'Johannes Kuehn',
        nationality: 'GER',
        proneShootAccuracy: 95.4,
        standingShootAccuracy: 75.4,
        proneRangeTime: 51.7,
        standingRangeTime: 50.0,
        skiSpeed1: -0.2,
        skiSpeed2: 0.2,
        skiSpeed3: -0.7,
        skiSpeed4: -0.5,
        skiSpeedFinal: -1.7
    },
    TGiacomel = {
        name: 'Tommaso Giacomel',
        nationality: 'ITA',
        proneShootAccuracy: 80.0,
        standingShootAccuracy: 83.1,
        proneRangeTime: 48.0,
        standingRangeTime: 40.4,
        skiSpeed1: -0.1,
        skiSpeed2: -0.9,
        skiSpeed3: -0.9,
        skiSpeed4: -0.9,
        skiSpeedFinal: -0.6
    },
    QFillonMaillet = {
        name: 'Quentin Fillon Maillet',
        nationality: 'FRA',
        proneShootAccuracy: 78.5,
        standingShootAccuracy: 87.7,
        proneRangeTime: 49.3,
        standingRangeTime: 41.8,
        skiSpeed1: -0.6,
        skiSpeed2: -0.6,
        skiSpeed3: -1.2,
        skiSpeed4: -1.4,
        skiSpeedFinal: -0.4
    },
    VSoerum = {
        name: 'Vebjoern Soerum',
        nationality: 'NOR',
        proneShootAccuracy: 86.0,
        standingShootAccuracy: 80.0,
        proneRangeTime: 49.9,
        standingRangeTime: 44.7,
        skiSpeed1: 0.3,
        skiSpeed2: -0.8,
        skiSpeed3: -0.6,
        skiSpeed4: 0.5,
        skiSpeedFinal: -1.5
    },
    EPerrot = {
        name: 'Eric Perrot',
        nationality: 'FRA',
        proneShootAccuracy: 81.5,
        standingShootAccuracy: 87.7,
        proneRangeTime: 49.3,
        standingRangeTime: 43.4,
        skiSpeed1: 0.2,
        skiSpeed2: -0.6,
        skiSpeed3: 0.0,
        skiSpeed4: 0.0,
        skiSpeedFinal: -0.3
    },
    SStalder = {
        name: 'Sebastian Stalder',
        nationality: 'SUI',
        proneShootAccuracy: 95.4,
        standingShootAccuracy: 89.2,
        proneRangeTime: 49.4,
        standingRangeTime: 45.3,
        skiSpeed1: 1.7,
        skiSpeed2: 2.1,
        skiSpeed3: 0.4,
        skiSpeed4: 1.9,
        skiSpeedFinal: 1.5
    },
    EJacquelin = {
        name: 'Emilien Jacquelin',
        nationality: 'FRA',
        proneShootAccuracy: 86.2,
        standingShootAccuracy: 73.8,
        proneRangeTime: 47.7,
        standingRangeTime: 40.5,
        skiSpeed1: -2.3,
        skiSpeed2: -1.4,
        skiSpeed3: 0.7,
        skiSpeed4: 0.7,
        skiSpeedFinal: 1.5
    },
    DBionaz = {
        name: 'Didier Bionaz',
        nationality: 'ITA',
        proneShootAccuracy: 85.8,
        standingShootAccuracy: 81.7,
        proneRangeTime: 52.8,
        standingRangeTime: 52.4,
        skiSpeed1: 0.3,
        skiSpeed2: -0.3,
        skiSpeed3: -0.9,
        skiSpeed4: -1.2,
        skiSpeedFinal: 1.0
    },
    FaClaude = {
        name: 'Fabien Claude',
        nationality: 'FRA',
        proneShootAccuracy: 80.0,
        standingShootAccuracy: 83.1,
        proneRangeTime: 50.4,
        standingRangeTime: 44.2,
        skiSpeed1: -0.7,
        skiSpeed2: -0.0,
        skiSpeed3: 0.2,
        skiSpeed4: 0.6,
        skiSpeedFinal: -0.2
    },
    MKrcmar = {
        name: 'Michal Krcmar',
        nationality: 'CZE',
        proneShootAccuracy: 81.5,
        standingShootAccuracy: 84.6,
        proneRangeTime: 52.3,
        standingRangeTime: 48.6,
        skiSpeed1: 1.3,
        skiSpeed2: 0.8,
        skiSpeed3: 0.1,
        skiSpeed4: 1.0,
        skiSpeedFinal: 0.5
    },
    ARastorgujevs = {
        name: 'Andrejs Rastorgujevs',
        nationality: 'LAT',
        proneShootAccuracy: 98.5,
        standingShootAccuracy: 80.0,
        proneRangeTime: 50.4,
        standingRangeTime: 49.1,
        skiSpeed1: 0.9,
        skiSpeed2: 1.6,
        skiSpeed3: 2.0,
        skiSpeed4: 2.2,
        skiSpeedFinal: 2.6
    },
    LHofer = {
        name: 'Lukas Hofer',
        nationality: 'ITA',
        proneShootAccuracy: 78.5,
        standingShootAccuracy: 83.1,
        proneRangeTime: 56.3,
        standingRangeTime: 47.0,
        skiSpeed1: 0.2,
        skiSpeed2: -0.1,
        skiSpeed3: 0.5,
        skiSpeed4: -0.6,
        skiSpeedFinal: -0.5
    },
    DZobel = {
        name: 'David Zobel',
        nationality: 'GER',
        proneShootAccuracy: 95.4,
        standingShootAccuracy: 76.9,
        proneRangeTime: 51.0,
        standingRangeTime: 48.0,
        skiSpeed1: 0.9,
        skiSpeed2: 0.9,
        skiSpeed3: 1.1,
        skiSpeed4: 0.9,
        skiSpeedFinal: 0.2
    },
    FlClaude = {
        name: 'Florent Claude',
        nationality: 'BEL',
        proneShootAccuracy: 92.3,
        standingShootAccuracy: 84.6,
        proneRangeTime: 53.2,
        standingRangeTime: 47.5,
        skiSpeed1: 3.0,
        skiSpeed2: 3.0,
        skiSpeed3: 3.6,
        skiSpeed4: 2.2,
        skiSpeedFinal: 4.3
    },
    PHorn = {
        name: 'Philipp Horn',
        nationality: 'GER',
        proneShootAccuracy: 88.0,
        standingShootAccuracy: 84.0,
        proneRangeTime: 49.3,
        standingRangeTime: 41.9,
        skiSpeed1: -0.2,
        skiSpeed2: -0.8,
        skiSpeed3: -0.4,
        skiSpeed4: -0.6,
        skiSpeedFinal: -1.7
    },
    RRees = {
        name: 'Roman Rees',
        nationality: 'GER',
        proneShootAccuracy: 96.7,
        standingShootAccuracy: 66.7,
        proneRangeTime: 52.1,
        standingRangeTime: 50.2,
        skiSpeed1: 2.6,
        skiSpeed2: 1.4,
        skiSpeed3: 1.9,
        skiSpeed4: 2.2,
        skiSpeedFinal: 2.1
    },
    FLeitner = {
        name: 'Felix Leitner',
        nationality: 'AUT',
        proneShootAccuracy: 96.4,
        standingShootAccuracy: 90.9,
        proneRangeTime: 51.7,
        standingRangeTime: 44.4,
        skiSpeed1: 3.5,
        skiSpeed2: 4.7,
        skiSpeed3: 5.3,
        skiSpeed4: 5.7,
        skiSpeedFinal: 6.4
    },
    NHartweg = {
        name: 'Niklas Hartweg',
        nationality: 'SUI',
        proneShootAccuracy: 84.0,
        standingShootAccuracy: 92.0,
        proneRangeTime: 45.1,
        standingRangeTime: 45.1,
        skiSpeed1: 1.2,
        skiSpeed2: 2.3,
        skiSpeed3: 3.7,
        skiSpeed4: 3.6,
        skiSpeedFinal: 1.8
    },
    LPlanko = {
        name: 'Lovro Planko',
        nationality: 'SLO',
        proneShootAccuracy: 89.2,
        standingShootAccuracy: 75.4,
        proneRangeTime: 54.3,
        standingRangeTime: 48.6,
        skiSpeed1: 1.6,
        skiSpeed2: 2.1,
        skiSpeed3: 4.1,
        skiSpeed4: 3.0,
        skiSpeedFinal: 3.6
    },
    AMukhin = {
        name: 'Alexandr Mukhin',
        nationality: 'KAZ',
        proneShootAccuracy: 84.6,
        standingShootAccuracy: 92.3,
        proneRangeTime: 55.0,
        standingRangeTime: 51.7,
        skiSpeed1: 2.0,
        skiSpeed2: 1.9,
        skiSpeed3: 2.8,
        skiSpeed4: 2.9,
        skiSpeedFinal: 5.0
    },
    AGuigonnat = {
        name: 'Antonin Guigonnat',
        nationality: 'FRA',
        proneShootAccuracy: 89.1,
        standingShootAccuracy: 80.0,
        proneRangeTime: 52.8,
        standingRangeTime: 44.9,
        skiSpeed1: 1.2,
        skiSpeed2: 3.0,
        skiSpeed3: 3.0,
        skiSpeed4: 4.7,
        skiSpeedFinal: 4.5
    },
    JFak = {
        name: 'Jakov Fak',
        nationality: 'SLO',
        proneShootAccuracy: 90.0,
        standingShootAccuracy: 85.0,
        proneRangeTime: 52.0,
        standingRangeTime: 51.4,
        skiSpeed1: 2.0,
        skiSpeed2: 1.6,
        skiSpeed3: 1.5,
        skiSpeed4: 1.4,
        skiSpeedFinal: 1.8
    },
    DPidruchnyi = {
        name: 'Dmytro Pidruchnyi',
        nationality: 'UKR',
        proneShootAccuracy: 85.0,
        standingShootAccuracy: 80.0,
        proneRangeTime: 48.3,
        standingRangeTime: 45.4,
        skiSpeed1: 0.2,
        skiSpeed2: 1.0,
        skiSpeed3: 2.2,
        skiSpeed4: 3.9,
        skiSpeedFinal: 2.4
    },
    SEder = {
        name: 'Simon Eder',
        nationality: 'AUT',
        proneShootAccuracy: 87.5,
        standingShootAccuracy: 85.0,
        proneRangeTime: 45.2,
        standingRangeTime: 43.1,
        skiSpeed1: 2.2,
        skiSpeed2: 3.2,
        skiSpeed3: 2.0,
        skiSpeed4: 2.7,
        skiSpeedFinal: 2.6
    },
    DKomatz = {
        name: 'David Komatz',
        nationality: 'AUT',
        proneShootAccuracy: 98.2,
        standingShootAccuracy: 80.0,
        proneRangeTime: 50.9,
        standingRangeTime: 45.8,
        skiSpeed1: 4.0,
        skiSpeed2: 5.4,
        skiSpeed3: 6.2,
        skiSpeed4: 8.9,
        skiSpeedFinal: 6.2
    },
    AVidmar = {
        name: 'Anton Vidmar',
        nationality: 'SLO',
        proneShootAccuracy: 77.8,
        standingShootAccuracy: 82.2,
        proneRangeTime: 55.0,
        standingRangeTime: 48.1,
        skiSpeed1: 2.7,
        skiSpeed2: 2.0,
        skiSpeed3: 3.5,
        skiSpeed4: 3.8,
        skiSpeedFinal: 3.9
    },
    PMagazeev = {
        name: 'Pavel Magazeev',
        nationality: 'MDA',
        proneShootAccuracy: 76.4,
        standingShootAccuracy: 81.8,
        proneRangeTime: 53.4,
        standingRangeTime: 47.1,
        skiSpeed1: 2.2,
        skiSpeed2: 2.6,
        skiSpeed3: 2.8,
        skiSpeed4: 2.8,
        skiSpeedFinal: 5.2
    },
    JNelin = {
        name: 'Jesper Nelin',
        nationality: 'SWE',
        proneShootAccuracy: 80.0,
        standingShootAccuracy: 80.0,
        proneRangeTime: 49.9,
        standingRangeTime: 50.5,
        skiSpeed1: -0.2,
        skiSpeed2: -0.6,
        skiSpeed3: -0.0,
        skiSpeed4: -0.3,
        skiSpeedFinal: 0.7
    },
    JBurkhalter = {
        name: 'Joshua Burkhalter',
        nationality: 'SUI',
        proneShootAccuracy: 86.7,
        standingShootAccuracy: 86.7,
        proneRangeTime: 49.5,
        standingRangeTime: 47.1,
        skiSpeed1: 4.1,
        skiSpeed2: 4.5,
        skiSpeed3: 6.0,
        skiSpeed4: 5.7,
        skiSpeedFinal: 6.4
    },
    TLanger = {
        name: 'Thierry Langer',
        nationality: 'BEL',
        proneShootAccuracy: 75.0,
        standingShootAccuracy: 90.0,
        proneRangeTime: 53.6,
        standingRangeTime: 49.3,
        skiSpeed1: 3.3,
        skiSpeed2: 3.7,
        skiSpeed3: 3.2,
        skiSpeed4: 3.6,
        skiSpeedFinal: 4.0
    },
    GColtea = {
        name: 'George Coltea',
        nationality: 'ROU',
        proneShootAccuracy: 91.4,
        standingShootAccuracy: 82.9,
        proneRangeTime: 56.2,
        standingRangeTime: 49.2,
        skiSpeed1: 3.8,
        skiSpeed2: 4.1,
        skiSpeed3: 3.0,
        skiSpeed4: 2.5,
        skiSpeedFinal: 5.1
    },
    EClaude = {
        name: 'Emilien Claude',
        nationality: 'FRA',
        proneShootAccuracy: 85.7,
        standingShootAccuracy: 80.0,
        proneRangeTime: 53.1,
        standingRangeTime: 49.7,
        skiSpeed1: 2.3,
        skiSpeed2: 4.1,
        skiSpeed3: 3.4,
        skiSpeed4: 3.6,
        skiSpeedFinal: 5.2
    },
    JMarecek = {
        name: 'Jonas Marecek',
        nationality: 'CZE',
        proneShootAccuracy: 83.6,
        standingShootAccuracy: 85.5,
        proneRangeTime: 55.4,
        standingRangeTime: 47.0,
        skiSpeed1: 3.4,
        skiSpeed2: 1.7,
        skiSpeed3: 3.6,
        skiSpeed4: 3.9,
        skiSpeedFinal: 3.7
    },
    PBraunhofer = {
        name: 'Patrick Braunhofer',
        nationality: 'ITA',
        proneShootAccuracy: 88.9,
        standingShootAccuracy: 86.7,
        proneRangeTime: 53.9,
        standingRangeTime: 47.5,
        skiSpeed1: 3.2,
        skiSpeed2: 5.5,
        skiSpeed3: 7.2,
        skiSpeed4: 6.3,
        skiSpeedFinal: 8.0
    },
    VStrolia = {
        name: 'Vytautas Strolia',
        nationality: 'LTU',
        proneShootAccuracy: 83.3,
        standingShootAccuracy: 90.0,
        proneRangeTime: 54.4,
        standingRangeTime: 53.0,
        skiSpeed1: 3.0,
        skiSpeed2: 4.4,
        skiSpeed3: 4.8,
        skiSpeed4: 5.2,
        skiSpeedFinal: 6.2
    },
    ARunnalls = {
        name: 'Adam Runnalls',
        nationality: 'CAN',
        proneShootAccuracy: 93.3,
        standingShootAccuracy: 82.2,
        proneRangeTime: 47.9,
        standingRangeTime: 42.4,
        skiSpeed1: 4.7,
        skiSpeed2: 5.2,
        skiSpeed3: 5.2,
        skiSpeed4: 5.0,
        skiSpeedFinal: 3.0
    }

]

    /*,
     = {
        name: '',
        nationality: '',
        proneShootAccuracy: ,
        standingShootAccuracy: ,
        proneRangeTime: ,
        standingRangeTime: ,
        skiSpeed1: ,
        skiSpeed2: ,
        skiSpeed3: ,
        skiSpeed4: ,
        skiSpeedFinal:
    }*/

let raceData;           // 2d Array with all race information in it.
let medianCourseTime;   // Medianen för åktid.
let discipline;
let field;              // Herrar eller damer.

let mainElement = document.querySelector('.main');
let buttonContainerElement = document.querySelector('#button_container');
document.querySelector('#f_individual').addEventListener('click', function () {
    discipline = INDIVIDUAL;
    medianCourseTime = F_OSTERSUND_15KM_INDIVIDUAL;
    createWomenStartList();
    assignCompetitionData();
});
document.querySelector('#m_individual').addEventListener('click', function () {
    discipline = INDIVIDUAL;
    medianCourseTime = M_OSTERSUND_20KM_INDIVIDUAL;
    createMenStartList();
    assignCompetitionData();
});
document.querySelector('#f_sprint').addEventListener('click', function () {
    discipline = SPRINT;
    medianCourseTime = F_OSTERSUND_7d5KM_SPRINT;
    createWomenStartList();
    assignCompetitionData();
});
document.querySelector('#m_sprint').addEventListener('click', function () {
    discipline = SPRINT;
    medianCourseTime = M_OSTERSUND_10KM_SPRINT;
    createMenStartList();
    assignCompetitionData();
});
document.querySelector('#f_mass_start').addEventListener('click', function () {
    discipline = MASS_START;
    medianCourseTime = F_OSTERSUND_12d5KM_MASS_START;
    createWomenStartList();
    assignCompetitionData();
});
document.querySelector('#m_mass_start').addEventListener('click', function () {
    discipline = MASS_START;
    medianCourseTime = M_OSTERSUND_15KM_MASS_START;
    createMenStartList();
    assignCompetitionData();
});

function createWomenStartList () {
    field = WOMEN;
    let size;
    if (discipline === MASS_START)
        size = 30;
    else
        size = F.length;
    raceData = new Array(size);
    for (let i=0; i<raceData.length; i++) {
        raceData[i] = new Array(100);
        raceData[i][ATHLETE_INFO] = F[i];
    }
    console.log(raceData);
}
function createMenStartList () {
    field = MEN;
    let size;
    if (discipline === MASS_START)
        size = 30;
    else
        size = M.length;
    raceData = new Array(size);
    for (let i=0; i<raceData.length; i++) {
        raceData[i] = new Array(100);
        raceData[i][ATHLETE_INFO] = M[i];
    }
    console.log(raceData);
}

function assignCompetitionData () {
    buttonContainerElement.remove();
    // Tilldelar värden för alla individuella delar för alla åkare.
    for (let i=0; i<raceData.length; i++) {
        raceData[i][FORM_OF_THE_DAY] = decideFormOfTheDay();
        console.log(raceData[i][ATHLETE_INFO].name + ': ' + raceData[i][FORM_OF_THE_DAY]);

        if (discipline === SPRINT) {
            raceData[i][COURSE_TIME_1] = calcCourseTime(displayToRaw(medianCourseTime)/3, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed1);
            raceData[i][COURSE_TIME_2] = calcCourseTime(displayToRaw(medianCourseTime)/3, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed2);
            raceData[i][COURSE_TIME_3] = calcCourseTime(displayToRaw(medianCourseTime)/3, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeedFinal);
            raceData[i][COURSE_TIME_TOTAL] = raceData[i][COURSE_TIME_1] + raceData[i][COURSE_TIME_2] + raceData[i][COURSE_TIME_3];
        }
        else {
            raceData[i][COURSE_TIME_1] = calcCourseTime(displayToRaw(medianCourseTime)/5, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed1);
            raceData[i][COURSE_TIME_2] = calcCourseTime(displayToRaw(medianCourseTime)/5, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed2);
            raceData[i][COURSE_TIME_3] = calcCourseTime(displayToRaw(medianCourseTime)/5, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed3);
            raceData[i][COURSE_TIME_4] = calcCourseTime(displayToRaw(medianCourseTime)/5, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeed4);
            raceData[i][COURSE_TIME_5] = calcCourseTime(displayToRaw(medianCourseTime)/5, raceData[i][FORM_OF_THE_DAY], raceData[i][ATHLETE_INFO].skiSpeedFinal);
            raceData[i][COURSE_TIME_TOTAL] = raceData[i][COURSE_TIME_1] + raceData[i][COURSE_TIME_2] + raceData[i][COURSE_TIME_3] + raceData[i][COURSE_TIME_4] + raceData[i][COURSE_TIME_5];
        }

        raceData[i][PENALTY_COUNT_1] = calcShootingResults(raceData[i][ATHLETE_INFO].proneShootAccuracy);     // Skytte 1
        raceData[i][PENALTY_TIME_1] = calcPenaltyTime(raceData[i][PENALTY_COUNT_1]);
        raceData[i][RANGE_TIME_1] = calcRangeTime(raceData[i][ATHLETE_INFO].proneRangeTime);
        if (discipline === SPRINT ||  discipline === INDIVIDUAL) {
            console.log('Shoot 2: Standing');
            raceData[i][PENALTY_COUNT_2] = calcShootingResults(raceData[i][ATHLETE_INFO].standingShootAccuracy);     // Skytte 2
            raceData[i][RANGE_TIME_2] = calcRangeTime(raceData[i][ATHLETE_INFO].standingRangeTime);
        }
        else {
            console.log('Shoot 2: Prone');
            raceData[i][PENALTY_COUNT_2] = calcShootingResults(raceData[i][ATHLETE_INFO].proneShootAccuracy);     // Skytte 2
            raceData[i][RANGE_TIME_2] = calcRangeTime(raceData[i][ATHLETE_INFO].proneShootAccuracy);
        }
        raceData[i][PENALTY_TIME_2] = calcPenaltyTime(raceData[i][PENALTY_COUNT_2]);

        if (discipline === SPRINT) {
            raceData[i][RANGE_TIME_TOTAL] = raceData[i][RANGE_TIME_1] + raceData[i][RANGE_TIME_2];
            raceData[i][PENALTY_TIME_TOTAL] = raceData[i][PENALTY_TIME_1] + raceData[i][PENALTY_TIME_2];
        }
        else {
            if (discipline === INDIVIDUAL) {
                console.log('Shoot 3: Prone');
                raceData[i][PENALTY_COUNT_3] = calcShootingResults(raceData[i][ATHLETE_INFO].proneShootAccuracy);
                raceData[i][RANGE_TIME_3] = calcRangeTime(raceData[i][ATHLETE_INFO].proneRangeTime);
            }
            else {
                console.log('Shoot 3: Standing');
                raceData[i][PENALTY_COUNT_3] = calcShootingResults(raceData[i][ATHLETE_INFO].standingShootAccuracy);
                raceData[i][RANGE_TIME_3] = calcRangeTime(raceData[i][ATHLETE_INFO].standingRangeTime);
            }
            raceData[i][PENALTY_TIME_3] = calcPenaltyTime(raceData[i][PENALTY_COUNT_3]);

            raceData[i][PENALTY_COUNT_4] = calcShootingResults(raceData[i][ATHLETE_INFO].standingShootAccuracy);
            raceData[i][PENALTY_TIME_4] = calcPenaltyTime(raceData[i][PENALTY_COUNT_4]);
            raceData[i][RANGE_TIME_4] = calcRangeTime(raceData[i][ATHLETE_INFO].standingRangeTime);
            raceData[i][RANGE_TIME_TOTAL] = raceData[i][RANGE_TIME_1] + raceData[i][RANGE_TIME_2] + raceData[i][RANGE_TIME_3] + raceData[i][RANGE_TIME_4];
            raceData[i][PENALTY_TIME_TOTAL] = raceData[i][PENALTY_TIME_1] + raceData[i][PENALTY_TIME_2] + raceData[i][PENALTY_TIME_3] + raceData[i][PENALTY_TIME_4];
        }
        raceData[i][FINAL_TIME] = raceData[i][COURSE_TIME_TOTAL] + raceData[i][PENALTY_TIME_TOTAL] + raceData[i][RANGE_TIME_TOTAL];

    }
    console.log(raceData);
    printCompInfo();
}

function printCompInfo () {
    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_1];
        raceData[i][TOTAL_PENALTY_COUNT] = 0;
    }
    printIntermediateHeadline('Pre-Shooting 1');
    printTableNoShootInfo();

    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] += raceData[i][RANGE_TIME_1] + raceData[i][PENALTY_TIME_1];
        raceData[i][TOTAL_PENALTY_COUNT] += raceData[i][PENALTY_COUNT_1];
        raceData[i][CURRENT_SHOOTING] = raceData[i][PENALTY_COUNT_1] + '';
    }
    printIntermediateHeadline('Shooting 1');
    printTableOneShoot();

    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] += raceData[i][COURSE_TIME_2];
    }
    printIntermediateHeadline('Pre-Shooting 2');
    printTableOneShoot();

    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] += raceData[i][RANGE_TIME_2] + raceData[i][PENALTY_TIME_2];
        raceData[i][TOTAL_PENALTY_COUNT] += raceData[i][PENALTY_COUNT_2];
        raceData[i][CURRENT_SHOOTING] += '+' + raceData[i][PENALTY_COUNT_2];
    }
    printIntermediateHeadline('Shooting 2');
    printTableAllShootInfo();

    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] += raceData[i][COURSE_TIME_3];
    }

    if (discipline !== SPRINT) {
        printIntermediateHeadline('Pre-Shooting 3');
        printTableAllShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] += raceData[i][RANGE_TIME_3] + raceData[i][PENALTY_TIME_3];
            raceData[i][TOTAL_PENALTY_COUNT] += raceData[i][PENALTY_COUNT_3];
            raceData[i][CURRENT_SHOOTING] += '+' + raceData[i][PENALTY_COUNT_3];
        }
        printIntermediateHeadline('Shooting 3');
        printTableAllShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] += raceData[i][COURSE_TIME_4];
        }
        printIntermediateHeadline('Pre-Shooting 4');
        printTableAllShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] += raceData[i][RANGE_TIME_4] + raceData[i][PENALTY_TIME_4];
            raceData[i][TOTAL_PENALTY_COUNT] += raceData[i][PENALTY_COUNT_4];
            raceData[i][CURRENT_SHOOTING] += '+' + raceData[i][PENALTY_COUNT_4];
        }
        printIntermediateHeadline('Shooting 4');
        printTableAllShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][FINAL_TIME];
        }
        printIntermediateHeadline('Final Results');
        printTableAllShootInfo();

        if (discipline === INDIVIDUAL) {
            for (let i=0; i<raceData.length; i++) {
                raceData[i][TOTAL_TIME] = raceData[i][FINAL_TIME] - raceData[i][PENALTY_TIME_TOTAL];
            }
            printIntermediateHeadline('Ski Time');
            printTableNoShootInfo();
        }

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_1];
        }
        printIntermediateHeadline('Course Time 1');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_2];
        }
        printIntermediateHeadline('Course Time 2');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_3];
        }
        printIntermediateHeadline('Course Time 3');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_4];
        }
        printIntermediateHeadline('Course Time 4');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_5];
        }
        printIntermediateHeadline('Course Time 5');
        printTableNoShootInfo();

    }
    else if (discipline === SPRINT) {
        printIntermediateHeadline('Final Results');
        printTableAllShootInfo();




        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_1];
        }
        printIntermediateHeadline('Course Time 1');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_2];
        }
        printIntermediateHeadline('Course Time 2');
        printTableNoShootInfo();

        for (let i=0; i<raceData.length; i++) {
            raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_3];
        }
        printIntermediateHeadline('Course Time 3');
        printTableNoShootInfo();
    }

    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] = raceData[i][COURSE_TIME_TOTAL];
    }
    printIntermediateHeadline('Course Time');
    printTableNoShootInfo();

    // F12 prints first 40 names in final result
    let copyCourseRank = [];
    for (let i=0; i<raceData.length; i++) {
        copyCourseRank.push(raceData[i][ATHLETE_INFO]);
    }
    console.log('Course Time:')
    console.log(copyCourseRank);


    for (let i=0; i<raceData.length; i++) {
        raceData[i][TOTAL_TIME] = raceData[i][RANGE_TIME_TOTAL];
    }
    printIntermediateHeadline('Range Time');
    printTableNoShootInfo();


}

function printIntermediateHeadline (currentIntermediate) {
    let headlineElement = document.createElement('h2');
    headlineElement.textContent = currentIntermediate;
    mainElement.appendChild(headlineElement);
}

function printTableOneShoot () {

    raceData.sort(sortFunctionIntermediate);

    let tableElement = document.createElement('table');
    tableElement.className = 'results';
    let firstTableRowElement = document.createElement('tr');

    let thRank = document.createElement('th');
    thRank.textContent = 'Rk';
    firstTableRowElement.appendChild(thRank);

    let thSwing = document.createElement('th');
    thSwing.textContent = '+-';
    firstTableRowElement.appendChild(thSwing);

    let thNat = document.createElement('th');
    thNat.textContent = 'Nat';
    firstTableRowElement.appendChild(thNat);

    let thName = document.createElement('th');
    thName.textContent = 'Name';
    firstTableRowElement.appendChild(thName);

    let thT = document.createElement('th');
    thT.textContent = 'T';
    firstTableRowElement.appendChild(thT);

    let thRes = document.createElement('th');
    thRes.textContent = 'Result';
    firstTableRowElement.appendChild(thRes);

    let thGap = document.createElement('th');
    thGap.textContent = '';
    firstTableRowElement.appendChild(thGap);

    tableElement.appendChild(firstTableRowElement);
    mainElement.appendChild(tableElement);

    for (let i=0; i<raceData.length; i++) {
        let tableRowElement = document.createElement('tr');
        tableElement.appendChild(tableRowElement);

        let tdRk = document.createElement('td');
        tdRk.textContent = String(i+1);
        tableRowElement.appendChild(tdRk);

        let tdSwing = document.createElement('td');
        raceData[i][NEW_POS] = i;
        raceData[i][POS_SWING] = raceData[i][NEW_POS] - raceData[i][OLD_POS];
        if (raceData[i][POS_SWING] > 0) {
            tdSwing.textContent = '+' + String(raceData[i][POS_SWING]);
            tdSwing.style.setProperty('color', 'red');
        }
        else {
            tdSwing.textContent = String(raceData[i][POS_SWING]);
            if (raceData[i][POS_SWING] < 0)
                tdSwing.style.setProperty('color', 'green');
        }

        tableRowElement.appendChild(tdSwing);
        raceData[i][OLD_POS] = raceData[i][NEW_POS];


        let tdNat = document.createElement('td');
        let nation = document.createElement('img');
        tdNat.appendChild(nation);
        nation.src =  raceData[i][ATHLETE_INFO].nationality + '.png';
        tableRowElement.appendChild(tdNat);

        let tdName = document.createElement('td');
        tdName.textContent = raceData[i][ATHLETE_INFO].name;
        tableRowElement.appendChild(tdName);

        let tdT = document.createElement('td');
        tdT.textContent = raceData[i][TOTAL_PENALTY_COUNT];
        tableRowElement.appendChild(tdT);

        let tdRes = document.createElement('td');
        tdRes.textContent = rawToDisplay(raceData[i][TOTAL_TIME]);
        tableRowElement.appendChild(tdRes);

        let tdGap = document.createElement('td');
        if (raceData[0][TOTAL_TIME] === raceData[i][TOTAL_TIME])
            tdGap.textContent = '';
        else
            tdGap.textContent = '+' + rawToDisplay(calcTimeBehind(raceData[0][TOTAL_TIME], raceData[i][TOTAL_TIME]));
        tableRowElement.appendChild(tdGap);
    }
}

function printTableAllShootInfo () {
    raceData.sort(sortFunctionIntermediate);

    let tableElement = document.createElement('table');
    tableElement.className = 'results';
    let firstTableRowElement = document.createElement('tr');

    let thRank = document.createElement('th');
    thRank.textContent = 'Rk';
    firstTableRowElement.appendChild(thRank);

    let thSwing = document.createElement('th');
    thSwing.textContent = '+-';
    firstTableRowElement.appendChild(thSwing);

    let thNat = document.createElement('th');
    thNat.textContent = 'Nat';
    firstTableRowElement.appendChild(thNat);

    let thName = document.createElement('th');
    thName.textContent = 'Name';
    firstTableRowElement.appendChild(thName);

    let thP = document.createElement('th');
    thP.textContent = 'P';
    firstTableRowElement.appendChild(thP);

    let thT = document.createElement('th');
    thT.textContent = 'T';
    firstTableRowElement.appendChild(thT);

    let thRes = document.createElement('th');
    thRes.textContent = 'Result';
    firstTableRowElement.appendChild(thRes);

    let thGap = document.createElement('th');
    thGap.textContent = '';
    firstTableRowElement.appendChild(thGap);

    tableElement.appendChild(firstTableRowElement);
    mainElement.appendChild(tableElement);

    for (let i=0; i<raceData.length; i++) {
        let tableRowElement = document.createElement('tr');
        tableElement.appendChild(tableRowElement);

        let tdRk = document.createElement('td');
        tdRk.textContent = String(i+1);
        tableRowElement.appendChild(tdRk);

        let tdSwing = document.createElement('td');
        raceData[i][NEW_POS] = i;
        raceData[i][POS_SWING] = raceData[i][NEW_POS] - raceData[i][OLD_POS];
        if (raceData[i][POS_SWING] > 0) {
            tdSwing.textContent = '+' + String(raceData[i][POS_SWING]);
            tdSwing.style.setProperty('color', 'red');
        }
        else {
            tdSwing.textContent = String(raceData[i][POS_SWING]);
            if (raceData[i][POS_SWING] < 0)
                tdSwing.style.setProperty('color', 'green');
        }

        tableRowElement.appendChild(tdSwing);
        raceData[i][OLD_POS] = raceData[i][NEW_POS];


        let tdNat = document.createElement('td');
        let nation = document.createElement('img');
        tdNat.appendChild(nation);
        nation.src =  raceData[i][ATHLETE_INFO].nationality + '.png';
        tableRowElement.appendChild(tdNat);

        let tdName = document.createElement('td');
        tdName.textContent = raceData[i][ATHLETE_INFO].name;
        tableRowElement.appendChild(tdName);

        let tdP = document.createElement('td');
        tdP.textContent = raceData[i][CURRENT_SHOOTING];
        tableRowElement.appendChild(tdP);

        let tdT = document.createElement('td');
        tdT.textContent = raceData[i][TOTAL_PENALTY_COUNT];
        tableRowElement.appendChild(tdT);

        let tdRes = document.createElement('td');
        tdRes.textContent = rawToDisplay(raceData[i][TOTAL_TIME]);
        tableRowElement.appendChild(tdRes);

        let tdGap = document.createElement('td');
        if (raceData[0][TOTAL_TIME] === raceData[i][TOTAL_TIME])
            tdGap.textContent = '';
        else
            tdGap.textContent = '+' + rawToDisplay(calcTimeBehind(raceData[0][TOTAL_TIME], raceData[i][TOTAL_TIME]));
        tableRowElement.appendChild(tdGap);
    }

}

function printTableNoShootInfo () {

    raceData.sort(sortFunctionIntermediate);

    let tableElement = document.createElement('table');
    tableElement.className = 'results';
    let firstTableRowElement = document.createElement('tr');

    let thRank = document.createElement('th');
    thRank.textContent = 'Rk';
    firstTableRowElement.appendChild(thRank);

    let thNat = document.createElement('th');
    thNat.textContent = 'Nat';
    firstTableRowElement.appendChild(thNat);

    let thName = document.createElement('th');
    thName.textContent = 'Name';
    firstTableRowElement.appendChild(thName);

    let thRes = document.createElement('th');
    thRes.textContent = 'Result';
    firstTableRowElement.appendChild(thRes);

    let thGap = document.createElement('th');
    thGap.textContent = '';
    firstTableRowElement.appendChild(thGap);

    tableElement.appendChild(firstTableRowElement);
    mainElement.appendChild(tableElement);

    for (let i=0; i<raceData.length; i++) {

        let tableRowElement = document.createElement('tr');
        tableElement.appendChild(tableRowElement);

        let tdRk = document.createElement('td');
        tdRk.textContent = String(i+1);
        tableRowElement.appendChild(tdRk);

        raceData[i][OLD_POS] = i;

        let tdNat = document.createElement('td');
        let nation = document.createElement('img');
        tdNat.appendChild(nation);
        nation.src =  raceData[i][ATHLETE_INFO].nationality + '.png';
        tableRowElement.appendChild(tdNat);

        let tdName = document.createElement('td');
        tdName.textContent = raceData[i][ATHLETE_INFO].name;
        tableRowElement.appendChild(tdName);

        let tdRes = document.createElement('td');
        tdRes.textContent = rawToDisplay(raceData[i][TOTAL_TIME]);
        tableRowElement.appendChild(tdRes);

        let tdGap = document.createElement('td');
        if (raceData[0][TOTAL_TIME] === raceData[i][TOTAL_TIME])
            tdGap.textContent = '';
        else
            tdGap.textContent = '+' + rawToDisplay(calcTimeBehind(raceData[0][TOTAL_TIME], raceData[i][TOTAL_TIME]));
        tableRowElement.appendChild(tdGap);
    }
}


function decideFormOfTheDay () {
    return 0.98 + Math.random() / 25;
}

function calcCourseTime (medianLapTime, formOftheDay, skiSpeed) {
    // Beräknar en åkares åktid baserat på deras åkhastighet.
    console.log('1. Form: ' + formOftheDay + 'SkiSpeed: ' + skiSpeed);
     skiSpeed *= 0.01;
     skiSpeed += 1;
    console.log('2. Form: ' + formOftheDay + 'SkiSpeed: ' + skiSpeed);
    let change = formOftheDay * skiSpeed;
    console.log('2. Form: ' + formOftheDay + ' SkiSpeed: ' + skiSpeed + ' Change: ' + change);

    return medianLapTime * change;
}

function calcShootingResults (shotAccuracy) {
    // Calculates how many missed shots an athlete has during a shooting.
    shotAccuracy *= 0.01;
    //console.log(athlete + ': ' + shotAccuracy);
    let penalties = 0;
    for (let numberOfShots = 0; numberOfShots < 5; numberOfShots++) {
        let shot = Math.random();
        //console.log(shot);
        if (shot >= shotAccuracy)
            penalties++;
        //console.log('Shot: ' + (numberOfShots + 1));
        //console.log('Shot ' + (numberOfShots + 1) + ", " + penalties + 'penalties.')
    }
    return penalties;
}

function calcPenaltyTime (missedShots) {
    // Calculates penalty time based on amount of missed shots.
    let avgPenTime;
    if (field === WOMEN)
        avgPenTime = 24.0;
    else if (field === MEN)
        avgPenTime = 21.0;
    let loopTime = (avgPenTime - 1) + (Math.random() * 2);
    console.log(loopTime + 's');
    return (discipline === INDIVIDUAL) ? 60 * missedShots : loopTime * missedShots;
    //return 60 * missedShots;
}

function calcRangeTime (rangeTimeSec) {
    // Calculates range time for one shooting.
    return rangeTimeSec * (0.875 + Math.random() / 4);
}

function calcTimeBehind (leadingTime, otherTime) {
    //console.log(leadingTime + ' ' + otherTime);
    return otherTime - leadingTime;
}

function rawToDisplay (seconds) {
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
}

function displayToRaw (Time) {
    let min = Number(Time.substring(0,2) * 60);
    let s = Number(Time.substring(3,5));
    let dec = Number(Time.substring(6,7) / 10);
    return min + s + dec;
}

function sortFunctionIntermediate (a, b) {
    if (a[TOTAL_TIME] === b[TOTAL_TIME])
        return 0;
    else
        return (a[TOTAL_TIME] < b[TOTAL_TIME]) ? - 1 : 1;
}