"use strict";

treeherder.controller('PluginCtrl',
    function PluginCtrl($scope, $rootScope) {

        $scope.tabs = [
            {
                title: "Jobs Detail",
                content: "plugins/jobdetail/main.html",
                active: true
            },
            {
                title: "Note History",
                content: "plugins/notehistory/main.html"
            }
        ];

    }
);
