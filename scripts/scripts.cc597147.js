"use strict";angular.module("ulanMApp",["angular-multistate-toggle","ui.bootstrap"]),angular.module("ulanMApp").controller("MainCtrl",["$scope",function(a){a.apples=[{src:"/images/apples/red.jpg",color:"red",description:"red apple #1"},{src:"/images/apples/red-2.jpg",color:"red",description:"red apple #2"},{src:"/images/apples/green.jpg",color:"green",description:"green apple #1"},{src:"/images/apples/green-2.jpg",color:"green",description:"green apple #2"},{src:"/images/apples/green-3.jpg",color:"green",description:"green apple #3"},{src:"/images/apples/white.png",color:"white",description:"white apple #1"},{src:"/images/apples/white-2.png",color:"white",description:"white apple #2"},{src:"/images/apples/white-3.jpg",color:"white",description:"white apple #3"},{src:"/images/apples/yellow.jpg",color:"yellow",description:"yellow apple #1"}],a.comparator=function(a,b){return"all"===b?!0:a===b?!0:!1}}]);