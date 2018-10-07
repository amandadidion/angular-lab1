"use strict"; {
    angular.module('app')
        .controller('todoController', function () {
            const $ctrl = this;
            $ctrl.tasks = [{
                    item: 'Walk the dog',
                    output: true
                },
                {
                    item: 'Go to the store.',
                    output: false
                },
                {
                    item: 'Get gas.',
                    output: true
                },
                {
                    item: 'Wash the car.',
                    output: false
                }
            ];
        });
}
//     $ctrl.add = function(){
//         console.log($ctrl.tasks);
//         $ctrl.tasks.push($ctrl.todo);
//     }
//    $ctrl.remove = function(index) {
//        $ctrl.tasks.splice(index, 1);
//    }