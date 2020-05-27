var category = [
    "QUANTITATIVE FINANCE"
];

var trackId = [
    "securityPricing",
    "securityPricing",
    "securityPricing",
    "securityPricing",
    "securityPricing",
    "securityPricing",
    "portfolioManagement",
    "portfolioManagement",
    "portfolioManagement",
    "portfolioManagement",
    "algorithmicTradingStrategies",
    "algorithmicTradingStrategies",
    "algorithmicTradingStrategies",
    "algorithmicTradingStrategies",
];

var track = [
    " Security Pricing",
    " Security Pricing",
    " Security Pricing",
    " Security Pricing",
    " Security Pricing",
    " Security Pricing",
    " Portfolio Management",
    " Portfolio Management",
    " Portfolio Management",
    " Portfolio Management",
    " Algorithmic Trading Strategies",
    " Algorithmic Trading Strategies",
    " Algorithmic Trading Strategies",
    " Algorithmic Trading Strategies"
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
    "img/course/6.jpg",
    "img/course/1.jpg", 
    "img/course/2.jpg"
]

var programName = [
    'QSP 101 – Introduction to Basic Fixed Income Securities',
    'QSP 102 – Introduction to Derivative Securities',
    'QSP 103 – Option Pricing',
    'QSP 104 – Pricing of Equity Options and Foreign Currency Equity Options',
    'QSP 105 – Overview of Interest Rate Models and Pricing of Vanilla & Interest Rate Options',
    'QSP 106 – Pricing and Hedging of Exotic Interest Rate Options',
    'QPM 101 – General Introduction and Key Concepts',
    'QPM 102 – Modern Portfolio Theory and Beyond',
    'QPM 103 – Asset Allocation',
    'QPM 104 – Risk Management',
    'QAT 101 – Introduction to Algorithmic Trading',
    'QAT 102 – Mean Reversion',
    'QAT 103 – Ensemble Methods',
    'QAT 104 – Snooping and Bad Science'

];

var money = [
    "100", "200",
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
    " Per Lesson", " Per Lesson",
];

var coursesRow = document.getElementById('coursesRow');

for (let i = 0; i < programName.length; i++) {
    coursesRow.innerHTML += (
        '<div class="col-lg-4 col-md-6 course-item" id="'+trackId[i]+'">' +
        '<div class="course-thumb">' +
        '<img src="'+imgs[i]+'" alt="">' +
        '<div class="course-cat">' +
        '<span><a href="" class="courseName2" target="_blank">'+category[0]+'</a></span>' +
        '</div>' +
        '</div>' +
        '<div class="course-info">' +
        '<div class="date f18"><i class=""></i>'+track[i]+'</div>' +
        '<h4><a href="" class="courseName" target="_blank">'+programName[i]+'</a></h4>' +
        '<h4 class="cource-price">$'+money[i]+'<span>'+timeUnit[i]+'</span></h4>' +
        '</div>' +
        '</div>');
}