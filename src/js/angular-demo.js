

// import sugar from './sugar/sugar';
let angular = require('angular');
// import angular from 'angular';
// import { SSelectElement, SActivateElement } from './sugar/index';
//
//
import querySelectorVisibleLiveOnce from 'sugarcss/dom/querySelectorLiveOnce';
//
import sSettings from './sugar/core/sSettings';
//
import sActivateManager from './sugar/components/sActivateManager';
import SSelectComponent from './sugar/components/SSelectComponent';
import SDatepickerComponent from './sugar/components/SDatepickerComponent';
import sLocalStorageFonts from './sugar/fonts/sLocalStorageFonts';
import SRangeComponent from './sugar/components/SRangeComponent';
import SRadioboxComponent from './sugar/components/SRadioboxComponent';
import sForm from 'sugarcss/components/sForm';
import SRippleComponent from 'sugarcss/components/SRippleComponent';

SRangeComponent.autoInit();

// import sDrawerManager from './sugar/components/s-drawer-manager';
//
// import SSelectComponent from './sugar/index';
// import SActivateElement from './sugar/index';

// let myCoolSelect = new SSelectElement(document.createElement('select'), {
// 	searchPlaceholder : 'Coco world'
// });

// console.log('my cool select', myCoolSelect);

// setTimeout(() => {
// 	document.body.appendChild(myCoolSelect.elm);
// }, 1000);

// setTimeout(() => {
// 	// myCoolSelect.elm.setAttribute('s-select-search-placeholder', 'hello');
// 	myCoolSelect.settings.searchPlaceholder = 'yopyopyop';
// }, 3000);

querySelectorVisibleLiveOnce('.btn, .nav > li', (elm) => {
	new SRippleComponent(elm);
});

const app = angular.module('angular-demo', []).run(() => {

});

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
