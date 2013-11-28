"use strict";

treeherder.controller('NoteHistoryPluginCtrl',
    function NoteHistoryPluginCtrl($scope, $resource, $http,
                                 thUrl, thJobNote, thStarTypes) {

        $scope.$watch('selectedJob', function(newValue, oldValue) {
            // preferred way to get access to the selected job
            if (newValue) {
                $scope.updateNotes();
            }
        }, true);

        $scope.starTypes = thStarTypes;

        var JobNote = $resource(thUrl.getProjectUrl("/note/"));

        // load the list of existing notes (including possibly a new one just
        // added).
        $scope.updateNotes = function() {
            $scope.notes = JobNote.query({job_id: $scope.selectedJob.job_id});
        };
    }
);

