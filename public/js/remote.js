define([
    "cms/socket",
    "cms/auth"
],
    function(Socket, Auth)
    {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //
        // PUBLIC METHODS
        //
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var r = {};

        var querySchools = r.querySchools = function(query, callback)
        {
            Socket.request("querySchools", {
                "query": query
            }, function(err, response) {

                if (err) {
                    callback(err);
                    return;
                }

                callback(null, response.schools);
            });
        };

        var queryCandidates = r.queryCandidates = function(query, callback)
        {
            Socket.request("queryCandidates", {
                "query": query
            }, function(err, response) {

                if (err) {
                    callback(err);
                    return;
                }

                // copy into array
                var candidates = [];
                for (var k in response.candidates) {
                    candidates.push(response.candidates[k]);
                }

                callback(null, candidates);
            });
        };

        var readCandidate = r.readCandidate = function(candidateId, callback)
        {
            Socket.request("readCandidate", {
                "candidateId": candidateId
            }, function(err, response) {

                if (err) {
                    callback(err);
                    return;
                }

                callback(null, response.candidate);
            });
        };

        var queryNodes = r.queryNodes = function(query, callback)
        {
            Socket.request("queryNodes", {
                "query": query
            }, function(err, response) {

                if (err) {
                    callback(err);
                    return;
                }

                // copy into array
                var nodes = [];
                for (var k in response.nodes) {
                    nodes.push(response.nodes[k]);
                }

                callback(null, nodes);
            });
        };

        var readNode = r.readNode = function(nodeId, callback)
        {
            Socket.request("readNode", {
                "nodeId": nodeId
            }, function(err, response) {

                if (err) {
                    callback(err);
                    return;
                }

                callback(null, response.node);
            });
        };

        return r;
    });