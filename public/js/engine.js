define([
    "cms/storage",
    "cms/auth",
    "js/remote"
],
    function(Storage, Auth, Remote)
{
    var r = {};

    var currentDegreeFilter = r.currentDegreeFilter = function(degreeFilter)
    {
        if (typeof(degreeFilter) === "string") {
            degreeFilter = [degreeFilter];
        }

        return Storage.poke("degreeFilter", degreeFilter);
    };

    var currentSchool = r.currentSchool = function(school)
    {
        return Storage.poke("school", school);
    };

    var currentSchoolId = r.currentSchoolId = function(schoolId)
    {
        return Storage.poke("schoolId", schoolId);
    };

    var currentSchoolDepartmentId = r.currentSchoolDepartmentId = function(schoolDepartmentId)
    {
        return Storage.poke("schoolDepartmentId", schoolDepartmentId);
    };

    var currentCandidateId = r.currentCandidateId = function(candidateId)
    {
        return Storage.poke("candidate", candidateId);
    };

    var currentQuery = r.currentQuery = function(query)
    {
        return Storage.poke("query", query);
    };

    var currentNewsItem = r.currentNewsItem = function(newsItemId)
    {
        return Storage.poke("newsitem", newsItemId);
    };

    var queryCandidates = r.queryCandidates = function(query, callback)
    {
        var CACHE_KEY = "candidates-" + JSON.stringify(query);

        var games = Storage.poke(CACHE_KEY);
        if (games) {
            callback(null, games);
            return;
        }

        Remote.queryCandidates(query, function(err, candidates) {

            if (err)
            {
                callback(err);
                return;
            }

            Storage.poke(CACHE_KEY, candidates);
            callback(null, candidates);
        });
    };

    var readCandidate = r.readCandidate = function(candidateId, callback)
    {
        var CACHE_KEY = "candidate-" + candidateId;

        var game = Storage.poke(CACHE_KEY);
        if (game) {
            callback(null, game);
            return;
        }

        Remote.readCandidate(candidateId, function(err, candidate) {

            if (err) {
                callback(err);
                return;
            }

            Storage.poke(CACHE_KEY, candidate);
            callback(null, candidate);
        });
    };

    var querySchools = r.querySchools = function(query, callback)
    {
        Remote.querySchools(query, function(err, schools) {

            if (err) {
                callback(err);
                return;
            }

            callback(null, schools);
        });
    };

    var queryNodes = r.queryNodes = function(query, callback)
    {
        var CACHE_KEY = "nodes-" + JSON.stringify(query);

        var games = Storage.poke(CACHE_KEY);
        if (games) {
            callback(null, games);
            return;
        }

        Remote.queryNodes(query, function(err, nodes) {

            if (err)
            {
                callback(err);
                return;
            }

            Storage.poke(CACHE_KEY, nodes);
            callback(null, nodes);
        });
    };

    var readNode = r.readNode = function(nodeId, callback)
    {
        var CACHE_KEY = "node-" + nodeId;

        var game = Storage.poke(CACHE_KEY);
        if (game) {
            callback(null, game);
            return;
        }

        Remote.readNode(nodeId, function(err, node) {

            if (err) {
                callback(err);
                return;
            }

            Storage.poke(CACHE_KEY, node);
            callback(null, node);
        });
    };


    return r;
});