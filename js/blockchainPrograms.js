var category = [
    "BLOCKCHAIN"
];

var trackId = [
    "fundamentalsTrack",
    "fundamentalsTrack",
    "fundamentalsTrack",
    "solutionsArchitectureTrack",
    "solutionsArchitectureTrack",
    "solutionsArchitectureTrack",
    "solutionsArchitectureTrack",
    "solutionsArchitectureTrack",
    "technicalDevelopmentTrack",
    "technicalDevelopmentTrack",
    "technicalDevelopmentTrack"
];

var track = [
    " Fundamentals Track",
    " Fundamentals Track",
    " Fundamentals Track",
    " Solutions Architecture Track",
    " Solutions Architecture Track",
    " Solutions Architecture Track",
    " Solutions Architecture Track",
    " Solutions Architecture Track",
    " Solutions Architecture Track",
    " Technical Development Track",
    " Technical Development Track",
    " Technical Development Track"
];

var imgs = [
    "img/course/1.jpg",
    "img/course/2.jpg",
    "img/course/3.jpg",
    "img/course/4.jpg",
    "img/course/5.jpg",
    "img/course/6.jpg",
    "img/course/1.jpg",
    "img/course/2.jpg",
    "img/course/3.jpg",
    "img/course/4.jpg",
    "img/course/5.jpg",
    "img/course/6.jpg"
]

var programName = [
    'BC100: Introduction & Challenges',
    'BC101: Blockchain Technology from First Principles',
    'BC102: Blockchain Business & Legal',
    'BC200: Blockchain Opportunities',
    'BC201: Identity & Privacy',
    'BC202: Asset Tokenization & Digital Fiat',
    'BC203: Blockchain Governance',
    'BC204: Blockchain Solutions Architecture',
    'BC205: Blockchain in Fintech',
    'BC300: Blockchain Development with Java',
    'BC301: Blockchain Development with R3 Corda',
    'BC302: Blockchain Development with HL Fabric'
];

var money = [
    "100", "200",
    "100", "200",
    "100", "200",
    "100", "200",
    "100", "200",
    "100", "200"
];

var timeUnit = [
    " Per Lesson", " Per Lesson",
    " Per Lesson", " Per Lesson",
    " Per Lesson", " Per Lesson",
    " Per Lesson", " Per Lesson",
    " Per Lesson", " Per Lesson",
    " Per Lesson", " Per Lesson",
];

var courseDetails = [
    'courses/Blockchain/bc100-introduction&challenges.html',
    ''
];

var coursesRow = document.getElementById('coursesRow');

for (let i = 0; i < programName.length; i++) {
    coursesRow.innerHTML += (
        '<div class="col-lg-4 col-md-6 course-item" id="' + trackId[i] + '">' +
        '<div class="course-thumb">' +
        '<img src="' + imgs[i] + '" alt="">' +
        '<div class="course-cat">' +
        '<span><a href="" class="courseName2" target="_blank">' + category[0] + '</a></span>' +
        '</div>' +
        '</div>' +
        '<div class="course-info">' +
        '<div class="date f18"><i class=""></i>' + track[i] + '</div>' +
        '<h4><a href="' + courseDetails[i] + '" class="courseName" target="_blank">' + programName[i] + '</a></h4>' +
        '<h4 class="cource-price">$' + money[i] + '<span>' + timeUnit[i] + '</span></h4>' +
        '</div>' +
        '</div>');
}