var http = require("http");
var path = require("path");

var Data = require("./lib/data");
var Util = require("./lib/util");

var Cache = require("./lib/cache");

var exports = module.exports;

/**
 * Finds candidates.
 *
 * @param query
 * @param callback
 */
var queryCandidates = exports.queryCandidates = function(query, callback)
{
    Cache.clearAll();

    var gitana = process.gitana.appuser;

    var cacheKey = "candidates-" + JSON.stringify(query);

    // CACHE READ
    var list = Cache.read(gitana, cacheKey);
    if (list) {
        callback(null, list);
        return;
    }

    if (!query) {
        query = {};
    }
    query["_type"] = "edu:candidate";

    // read the candidates file
    Data.queryNodes(gitana, query, function(err, nodes) {

        var candidates = JSON.parse(JSON.stringify(nodes));

        // CACHE WRITE
        Cache.write(gitana, cacheKey, candidates);

        callback(err, candidates);
    });
};

/**
 * Reads a single candidate.
 *
 * @param candidateId
 * @param callback
 */
var readCandidate = exports.readCandidate = function(candidateId, callback)
{
    Cache.clearAll();

    var gitana = process.gitana.appuser;

    var cacheKey = "candidate-" + candidateId;

    // CACHE READ
    var list = Cache.read(gitana, cacheKey);
    if (list) {
        callback(null, list);
        return;
    }

    // read the candidate file
    Data.readNode(gitana, candidateId, function(err, candidate) {

        // CACHE WRITE
        Cache.write(gitana, cacheKey, candidate);

        callback(err, candidate);
    });
};

/**
 * Finds nodes.
 *
 * @param query
 * @param callback
 */
var queryNodes = exports.queryNodes = function(query, callback)
{
    Cache.clearAll();

    var gitana = process.gitana.appuser;

    var cacheKey = "nodes-" + JSON.stringify(query);

    // CACHE READ
    var list = Cache.read(gitana, cacheKey);
    if (list) {
        callback(null, list);
        return;
    }

    if (!query) {
        query = {};
    }

    // read the candidates file
    Data.queryNodes(gitana, query, function(err, nodes) {

        var candidates = JSON.parse(JSON.stringify(nodes));

        // CACHE WRITE
        Cache.write(gitana, cacheKey, candidates);

        callback(err, candidates);
    });
};

/**
 * Reads a single node.
 *
 * @param candidateId
 * @param callback
 */
var readNode = exports.readNode = function(nodeId, callback)
{
    Cache.clearAll();

    var gitana = process.gitana.appuser;

    var cacheKey = "node-" + nodeId;

    // CACHE READ
    var list = Cache.read(gitana, cacheKey);
    if (list) {
        callback(null, list);
        return;
    }

    // read the candidate file
    Data.readNode(gitana, nodeId, function(err, candidate) {

        // CACHE WRITE
        Cache.write(gitana, cacheKey, candidate);

        callback(err, candidate);
    });
};

/**
 * Queries for schools.
 *
 * @type {Function}
 */
var querySchools = exports.querySchools = function(query, callback)
{
    Cache.clearAll();

    var schools = {
        "architecture_and_planning": {
            "title": "School of Architecture and Planning",
            "foundationYear": 1932,
            "deanName": "Adèle Naudé Santos",
            "departments": {
                "architecture": {
                    "title": "Architecture"
                },
                "media_arts_and_sciences": {
                    "title": "Media Arts and Sciences"
                },
                "urban_studies_and_planning": {
                    "title": "Urban Studies and Planning"
                }
            }
        },
        "engineering": {
            "title": "School of Engineering",
            "departments": {
                "aeronautics_and_astronautics": {
                    "title": "Aeronautics and Astronautics"
                },
                "biological_engineering": {
                    "title": "Biological Engineering"
                },
                "chemical_engineering": {
                    "title": "Chemical Engineering"
                },
                "civil_and_environmental_engineering": {
                    "title": "Civil and Environmental Engineering"
                },
                "electrical_engineering_and_computer_science": {
                    "title": "Electrical Engineering and Computer Science"
                },
                "engineering_systems_subdivision": {
                    "title": "Engineering Systems Division"
                },
                "materials_science_and_engineering": {
                    "title": "Materials Science and Engineering"
                },
                "mechanical_engineering": {
                    "title": "Mechanical Engineering"
                },
                "nuclear_science_and_engineering": {
                    "title": "Nuclear Science and Engineering"
                },
                "institute_for_medical_engineering_and_science": {
                    "title": "Institute for Medical Engineering and Science"
                }
            }
        },
        "humanities_arts_and_social_sciences": {
            "title": "School of Humanities, Arts, and Social Sciences",
            "departments": {
                "anthropology": {
                    "title": "Anthropology"
                },
                "comparative_media_studies": {
                    "title": "Comparative Media Studies"
                },
                "economics": {
                    "title": "Economics"
                },
                "foreign_languages_and_literature": {
                    "title": "Foreign Languages and Literatures"
                },
                "history": {
                    "title": "History"
                },
                "humanities": {
                    "title": "Humanities"
                },
                "linguistics": {
                    "title": "Linguistics"
                },
                "philosophy": {
                    "title": "Philosophy"
                },
                "literature": {
                    "title": "Literature"
                },
                "music": {
                    "title": "Music"
                },
                "theater_arts": {
                    "title": "Theater Arts"
                },
                "political_sciences": {
                    "title": "Political Science"
                },
                "science_technology_and_society": {
                    "title": "Science, Technology, and Society"
                },
                "writing_and_humanistic_studies": {
                    "title": "Writing and Humanistic Studies"
                }
            }
        },
        "sloan": {
            "title": "MIT Sloan School of Management",
            "departments": {
                "management": {
                    "title": "Management"
                }
            }
        },
        "science": {
            "title": "School of Science",
            "departments": {
                "biology": {
                    "title": "Biology"
                },
                "brain_and_cognitive_sciences": {
                    "title": "Brain and Cognitive Sciences"
                },
                "chemistry": {
                    "title": "Chemistry"
                },
                "earth_atmospheric_and_planetary_sciences": {
                    "title": "Earth, Atmosphere, and Planetary Sciences"
                },
                "mathematics": {
                    "title": "Mathematics"
                },
                "physics": {
                    "title": "Physics"
                }
            }
        },
        "mit_whoi_oceanography": {
            "title": "MIT-WHOI Oceanography",
            "departments": {
                "mit_whoi_oceanography": {
                    "title": "MIT-WHOI Oceanography"
                }
            }
        }
    };

    callback(null, schools);
};

/**
 * Invalidates all cache state.
 *
 * @type {Function}
 */
var invalidate = exports.invalidate = function()
{
    Cache.clearAll();
};