

// import sugar from 'sugarcss/sugar';
// let angular = require('angular');
// import angular from 'angular';
// import { SSelectElement, SActivateElement } from 'sugarcss/index';
//
//
import querySelectorLive from 'sugarcss/dom/querySelectorLive';
//
import sSettings from 'sugarcss/core/sSettings';
//
import SActivateComponent from 'sugarcss/components/SActivateComponent';
import sActivateManager from 'sugarcss/components/sActivateManager';
import SSelectComponent from 'sugarcss/components/SSelectComponent';
import SDatepickerComponent from 'sugarcss/components/SDatepickerComponent';
import sLocalStorageFonts from 'sugarcss/fonts/sLocalStorageFonts';
import SRangeComponent from 'sugarcss/components/SRangeComponent';
import SRadioboxComponent from 'sugarcss/components/SRadioboxComponent';
import sForm from 'sugarcss/components/sForm';
import SRippleComponent from 'sugarcss/components/SRippleComponent';
import SDrawerComponent from 'sugarcss/components/SDrawerComponent';
import domReady from 'sugarcss/dom/domReady';

import SObject from 'sugarcss/core/SObject';
import STemplate from 'sugarcss/core/STemplate';

SDrawerComponent.initOn('[s-drawer]');
SActivateComponent.initOn('[s-activate]');
SRangeComponent.initOn('[s-range]');
SSelectComponent.initOn('[s-select]');
SDatepickerComponent.initOn('[s-datepicker]');
SRadioboxComponent.initOn('input[type="radio"],input[type="checkbox"]');
SRippleComponent.initOn('.btn, .nav > li', {
	initWhen : 'hover'
});

querySelectorLive('.checker').once().subscribe((elm) => {
	console.log('CHECKER', elm);
});

querySelectorLive('#coco').once().inViewport().subscribe((elm) => {
	console.log('ONCE CHECKER', elm);
});

// const app = angular.module('angular-demo', []).run(() => {
//
// });

// const obs = querySelectorLive('.btn');
// console.log(obs);
// obs.subscribe((elm) => {
// 	console.log('ELEMENT', elm);
// });

// app.directive('sSelect', () => {
// 	return {
// 		restrict : 'A',
// 		link : (scope, elm, attrs) => {
// 			console.log('elm', elm);

// 			const select = new sugar.SelectElement(elm[0]);

// 		}
// 	}
// })
//
// app.controller('myForm',
// 	['$scope',
// 	 '$timeout',
// 	(
// 	 $scope,
// 	 $timeout
// 	) => {
//
// 		// $scope.select_1_model = null;
// 		$scope.select_1_items = [{
// 			id : 622487880,
// 			group : 'coco',
// 			label : 'Hello world'
// 		}, {
// 			id : 622487880,
// 			group : 'caca',
// 			label : 'Hello coco'
// 		}];
// 		$scope.select_1_model = $scope.select_1_items[0];
// 		$scope.select_2_model = [];
// 		$scope.select_3_model = $scope.select_1_items[0];
// 		$scope.select_4_model = [];
//
// 		// $scope.keywords = 'efwefew';
//
// 		// $timeout(() => {
// 			for(let i = 0; i<10; i++) {
// 				$scope.select_1_items.push({
// 					id : Math.round(Math.random() * 622487880),
// 					group : (Math.random() < 0.5) ? 'coco' : 'caca',
// 					label : Math.random()*99999
// 				});
// 			}
// 		// }, 2000);
//
// 		$scope.$watch('select_1_model', (newVal, oldVal) => {
// 			console.log('select_1_model updated', newVal, oldVal);
// 		});
//
// }]);
