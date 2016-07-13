

// import sugar from './sugar/sugar';
let angular = require('angular');
// import angular from 'angular';
// import { SSelectElement, SActivateElement } from './sugar/index';
//
//
import querySelectorLive from 'sugarcss/dom/querySelectorLive';
import querySelectorVisibleLiveOnce from 'sugarcss/dom/querySelectorLiveOnce';
import querySelectorViewportVisibleLiveOnce from 'sugarcss/dom/querySelectorViewportVisibleLiveOnce';
//
import sSettings from './sugar/core/sSettings';
//
import SActivateComponent from './sugar/components/SActivateComponent';
import sActivateManager from './sugar/components/sActivateManager';
import SSelectComponent from './sugar/components/SSelectComponent';
import SDatepickerComponent from './sugar/components/SDatepickerComponent';
import sLocalStorageFonts from './sugar/fonts/sLocalStorageFonts';
import SRangeComponent from './sugar/components/SRangeComponent';
import SRadioboxComponent from './sugar/components/SRadioboxComponent';
import sForm from 'sugarcss/components/sForm';
import SRippleComponent from 'sugarcss/components/SRippleComponent';


SActivateComponent.initOn('[s-activate]');
SRangeComponent.initOn('[s-range]');
SSelectComponent.initOn('[s-select]');
SDatepickerComponent.initOn('input[type="date"]');
SRadioboxComponent.initOn('input[type="radio"],input[type="checkbox"]');
SRippleComponent.initOn('.btn, .nav > li');

const app = angular.module('angular-demo', []).run(() => {

});

const whenVisibleObs = querySelectorViewportVisibleLiveOnce('.btn').subscribe((elm) => {
	console.log('VISIBLE', elm);
});

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

app.controller('myForm',
	['$scope',
	 '$timeout',
	(
	 $scope,
	 $timeout
	) => {

		// $scope.select_1_model = null;
		$scope.select_1_items = [{
			id : 622487880,
			group : 'coco',
			label : 'Hello world'
		}, {
			id : 622487880,
			group : 'caca',
			label : 'Hello coco'
		}];
		$scope.select_1_model = $scope.select_1_items[0];
		$scope.select_2_model = [];
		$scope.select_3_model = $scope.select_1_items[0];
		$scope.select_4_model = [];

		// $scope.keywords = 'efwefew';

		// $timeout(() => {
			for(let i = 0; i<10; i++) {
				$scope.select_1_items.push({
					id : Math.round(Math.random() * 622487880),
					group : (Math.random() < 0.5) ? 'coco' : 'caca',
					label : Math.random()*99999
				});
			}
		// }, 2000);

		$scope.$watch('select_1_model', (newVal, oldVal) => {
			console.log('select_1_model updated', newVal, oldVal);
		});

}]);
