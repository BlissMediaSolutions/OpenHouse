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
        controller: 'ContactController',
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
    }).when("/origins", {
//      controller: 'historyController',
      templateUrl: "templates/origins.html"
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
    }).when("/individual", {
//      controller: 'individualController',
      templateUrl: "templates/individual.html"
    }).when("/meal", {
//      controller: 'mealController',
      templateUrl: "templates/meal.html"
    }).when("/participants", {
//      controller: 'participantsController',
      templateUrl: "templates/participants.html"
    }).when("/caregive", {
//      controller: 'caregiveController',
      templateUrl: "templates/caregive.html"
    }).when("/sponsors", {
//      controller: 'sponsorsController',
      templateUrl: "templates/sponsors.html"
    }).when("/links", {
//      controller: 'linksController',
      templateUrl: "templates/links.html"
    }).when("/donations", {
//      controller: 'DonationsController',
      templateUrl: "templates/donations.html"
    })
});

//The default ng-max validation attribute with Angular doesn't allow you to bind to
//something in your Controller, this should fix it.
//From http://jsfiddle.net/g/s5gKC/ accessed 4/10/2016
//app.directive('ngMax', function() {
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function(scope, elem, attr, ctrl) {
//            scope.$watch(attr.ngMax, function(){
//                ctrl.$setViewValue(ctrl.$viewValue);
//            });
//            var maxValidator = function(value) {
//              var max = scope.$eval(attr.ngMax) || Infinity;
//              if (!isEmpty(value) && value > max) {
//                ctrl.$setValidity('ngMax', false);
//                return undefined;
//              } else {
//                ctrl.$setValidity('ngMax', true);
//                return value;
//              }
//            };

//            ctrl.$parsers.push(maxValidator);
//            ctrl.$formatters.push(maxValidator);
//        }
//    };
//});

//app.filter('startFrom', function () {
//    return function (data, start) {
//        return data.slice(start);
//    };
//});

app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false;
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        $scope.result = 'bg-warning';
        $scope.resultMessage = "Please wait, while we try to send your message..."
            var promise = $http({
                method  : 'POST',
                url     : 'php/contact.php',
                data    : {
                    firstname: $scope.formData.inputFirstName,
                    lastname: $scope.formData.inputLastName,
                    emailid: $scope.formData.inputEmail,
                    phoneno: $scope.formData.inputPhone,
                    message: $scope.formData.inputMessage
                },
                headers : {'Content-Type': 'application/json'}
            })
            promise.then(function (response) {
              var request = JSON.stringify(response.data);  //convert JSON data to string for manipulation
              var startpos = request.indexOf("{");          //locate '{' as its the start of the data we want
              var endpos = request.lastIndexOf("}");        //locate '}' as its the end of the data we want
              var res = request.slice(startpos, endpos);    //Extract the actual data now we know where it is.
              var newresponse = res.split("\\");            //Split the data into new array
              var answer = request.search("true");          //search the string to see if it contains the word "true" meaning an email was sent.

              if (answer >= 0) {
                $scope.submitButtonDisabled = false;
                $scope.result='bg-success';
                $scope.resultMessage = newresponse[5].replace('"', " ");
              } else {
                $scope.submitButtonDisabled = true;
                $scope.resultMessage = newresponse[5].replace('"', " ");
                $scope.result='bg-danger';
              }
          });
        }
    });
