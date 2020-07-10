var category = [
    "Data Science Program"
];

var trackId = [
    "epidemiologyTrack",
    "epidemiologyTrack",
    "epidemiologyTrack",
    "epidemiologyTrack",
    "juliaProgrammingTrack",
    "juliaProgrammingTrack",
    "juliaProgrammingTrack",
    "juliaProgrammingTrack"
];

var track = [
    " Epidemiology Track",
    " Epidemiology Track",
    " Epidemiology Track",
    " Epidemiology Track",
    " Julia Programming Track",
    " Julia Programming Track",
    " Julia Programming Track",
    " Julia Programming Track",
    " Julia Programming Track"
];

var imgs = [
    "img/course/1.jpg",
    "img/course/2.jpg",
    "img/course/3.jpg",
    "img/course/4.jpg",
    "img/course/1.jpg",
    "img/course/2.jpg",
    "img/course/3.jpg",
    "img/course/4.jpg"

]

var programName = [
    'EP 101: Introduction to Epidemiology',
    'EP 102: Infectious Disease Modeling',
    'EP 103: Advanced Mathematical Models and Case Studies',
    'EP 104: Parameter Estimation Techniques',
    'JU 101: Introduction to Julia',
    'JU 102: Introduction to Control Flow in Julia',
    'JU 103: Handling Data in Julia',
    'JU 104: Visualizing Data in Julia'
];

var money = [
    "100",
    "200",
    "100",
    "200",
    "100",
    "200",
    "100",
    "200",
    "100",
    "200",
    "100",
    "200"
];

var timeUnit = [
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson",
    " Per Lesson"
];

var coursesRow = document.getElementById('coursesRow');

for (let i = 0; i < programName.length; i++) {
    coursesRow.innerHTML += (
        '<div class="col-lg-4 col-md-6 course-item" id="' + trackId[i] + '">' +
        '<div class="course-thumb">' +
        '<img src="' + imgs[i] + '" alt="">' +
        '<div class="course-cat">' +
        // '<span><a href="" class="courseName2" target="_blank">' + category[0] + '</a></span>' +
        '<span><a  class="courseName2" >' + category[0] + '</a></span>' +
        '</div>' +
        '</div>' +
        '<div class="course-info">' +
        '<div class="date f18"><i class=""></i>' + track[i] + '</div>' +
        // '<h4><a href="" class="courseName" target="_blank">' + programName[i] + '</a></h4>' +
        '<h4><a class="courseName" >' + programName[i] + '</a></h4>' +
        '<h4 class="cource-price">$' + money[i] + '<span>' + timeUnit[i] + '</span></h4>' +
        '</div>' +
        '</div>');
}