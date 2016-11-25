var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ngCsv"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    }).when("/who", {
//      controller: 'whoController',
        templateUrl: "templates/who.html"
    }).when("/what", {
//      controller: 'whatController',
        templateUrl: "templates/what.html"
    }).when("/why", {
//      controller: 'whyController',
        templateUrl: "templates/why.html"
    }).when("/about", {
        //controller: 'aboutController',
        templateUrl: "templates/about.html"
    }).when("/contact", {
  //        controller: 'ContactController'
        templateUrl: "templates/contact.html"
    }).when("/news", {
//        controller: 'newsController',
        templateUrl: "templates/news.html"
    }).when("/events", {
//        controller: 'eventsController',
        templateUrl: "templates/events.html"
    }).when("/calendar", {
//        controller: 'calendarController',
        templateUrl: "templates/calendar.html"
    }).when("/ceo", {
//        controller: 'ceoController'
        templateUrl: "templates/ceo.html"
    }).when("/bibleRead", {
//        controller: 'biblereadController',
        templateUrl: "templates/bibleRead.html"
    }).when("/pray", {
//        controller: 'prayController',
        templateUrl: "templates/pray.html"
    }).when("/who", {
//        controller: 'whoController',
        templateUrl: "templates/who.html"
    }).when("/history", {
//      controller: 'historyController',
      templateUrl: "templates/history.html"
    }).when("/ourhistory", {
//      controller: 'ourhistoryController',
      templateUrl: "templates/ourhistory.html"
    }).when("/board", {
//      controller: 'boardController',
      templateUrl: "templates/board.html"
    }).when("/team", {
//      controller: 'teamController',
      templateUrl: "templates/team.html"
    }).when("/supporters", {
//      controller: 'supportersController',
      templateUrl: "templates/supporters.html"
    }).when("/volunteers", {
//      controller: 'volunteersController',
      templateUrl: "templates/volunteers.html"
    }).when("/partners", {
//      controller: 'partnersController',
      templateUrl: "templates/partners.html"
    }).when("/photos", {
//      controller: 'photosController',
      templateUrl: "templates/photos.html"
    }).when("/reports", {
//      controller: 'reportsController',
      templateUrl: "templates/reports.html"
    }).when("/newsletter", {
//      controller: 'newsletterController',
      templateUrl: "templates/newsletter.html"
    }).when("/jobs", {
//      controller: 'jobsController',
      templateUrl: "templates/jobs.html"
    }).when("/policies", {
//      controller: 'policiesController',
      templateUrl: "templates/policies.html"
    }).when("/mothers", {
//      controller: 'mothersController',
      templateUrl: "templates/mothers.html"
    }).when("/child", {
//      controller: 'childController',
      templateUrl: "templates/child.html"
    }).when("/boys", {
//      controller: 'boysController',
      templateUrl: "templates/boys.html"
    }).when("/girls", {
//      controller: 'girlsController',
      templateUrl: "templates/girls.html"
    }).when("/teens", {
//      controller: 'teensController',
      templateUrl: "templates/teens.html"
    }).when("/youth", {
//      controller: 'youthController',
      templateUrl: "templates/youth.html"
    }).when("/adult", {
//      controller: 'adultController',
      templateUrl: "templates/adult.html"
    }).when("/bibleFellow", {
//      controller: 'bibleFellowController',
      templateUrl: "templates/bibleFellow.html"
    }).when("/backyard", {
//      controller: 'backyardController',
      templateUrl: "templates/backyard.html"
    }).when("/clubwork", {
//      controller: 'clubworkController',
      templateUrl: "templates/clubwork.html"
    }).when("/arts", {
//      controller: 'artsController',
      templateUrl: "templates/arts.html"
    }).when("/mens", {
//      controller: 'mensController',
      templateUrl: "templates/mens.html"
    }).when("/meal", {
//      controller: 'mealController',
      templateUrl: "templates/meal.html"
    }).when("/links", {
//      controller: 'linksController',
      templateUrl: "templates/links.html"
    }).when("/donations", {
//      controller: 'donationsController',
      templateUrl: "templates/donations.html"
    })
});

//The default ng-max validation attribute with Angular doesn't allow you to bind to
//something in your Controller, this should fix it.
//From http://jsfiddle.net/g/s5gKC/ accessed 4/10/2016
app.directive('ngMax', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMax, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function(value) {
              var max = scope.$eval(attr.ngMax) || Infinity;
              if (!isEmpty(value) && value > max) {
                ctrl.$setValidity('ngMax', false);
                return undefined;
              } else {
                ctrl.$setValidity('ngMax', true);
                return value;
              }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };
});

app.filter('startFrom', function () {
    return function (data, start) {
        return data.slice(start);
    };
});
