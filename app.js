var app = angular.module("myApp", ["ngRoute"]);
app.controller("studentsController", function ($scope) {
    $scope.students = [

        {
            sname: "Sonu",
            course: "HTML"
                },
        {
            sname: "Nani",
            course: "AJS"
                },
        {
            sname: "chinnu",
            course: "Bootstrap"
                },
        {
            sname: "Banni",
            course: "AJS"
                },
        {
            sname: "Sonu",
            course: "HTML"
                },
        {
            sname: "Sonu",
            course: "HTML"
                },
        {
            sname: "Tinku",
            course: "jQuery"
                },
        {
            sname: "Pinky",
            course: "Javascript"
                },
        {
            sname: "Dolly",
            course: "CSS"
                },
        {
            sname: "Samy",
            course: "Bootstrap"
                },
        {
            sname: "Chinni",
            course: "Javasctipt"
                },
        {
            sname: "Deru",
            course: "jQuery"
                },

            ];
});

app.controller("coursesController", function ($scope) {
    $scope.courses = ["HTML", "CSS", "Javascript", "jQuery", "AngularJS", "Bootstrap"];
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/Students", {
            templateUrl: "students.html",
            controller: "studentsController"
        })
        .when("/Courses", {
            templateUrl: "courses.html",
            controller: "coursesController"
        })
        .when("/ContactUs", {
            templateUrl: "contactUs.html",
            controller: ""
        })
        .when("/Home", {
            templateUrl: "home.html",
            controller: ""
        })
        .otherwise({
            redirectTo: "/Home"
        });
});
