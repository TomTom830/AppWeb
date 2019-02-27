var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoCtrl',['$scope', function($scope){

    //init array of task
    $scope.taskSet = [
        {
            taskName: 'faire le ménage',
            done : false
        },{
            taskName: 'Ranger le courrier',
            done: true
        },{
            taskName: 'Pronmener le chien',
            done: false
        }];

    //method to add task
    $scope.addTask = function () {
        
        if($scope.taskName !== ''){
            //add task to array
            $scope.taskSet.push({
                taskName: $scope.taskName,
                done: false
            });

            //clear taskName value
            $scope.taskName = '';
        }
    };

    //method to delete task
    $scope.delTask = function () {
        for(var idx=0; idx < $scope.taskSet.length; idx++){
            if($scope.taskSet[idx].taskName.localeCompare($scope.taskName2)==0){
                $scope.taskSet.splice(idx,1);
            }
        }
        $scope.taskName2 = '';
    }
}]);