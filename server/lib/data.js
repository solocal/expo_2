var http = require("http");
var path = require("path");
var Gitana = require("gitana");

var exports = module.exports;

/**
 * Produces a Gitana driver instance connected as the current authenticated user.
 *
 * @param ticket
 * @param callback
 */
var userConnect = exports.userConnect = function(ticket, callback)
{
    Gitana.connect({
        "clientKey": process.gitana.config.clientKey,
        "clientSecret": process.gitana.config.clientSecret,
        "baseURL": process.gitana.config.baseURL,
        "application": process.gitana.config.application,
        "ticket": ticket
    }, function(err) {
        callback.call(this, err);
    });
};

/**
 * Acquires the Cloud CMS branch.
 *
 * @param gitana
 * @param callback
 */
var masterBranch = exports.masterBranch = function(gitana, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    Chain(gitana.datastore("content")).trap(errHandler).readBranch("master").then(function() {

        callback.call(this, null);
    });
};

/**
 * Reads a file relative to the root node.
 *
 * @param gitana
 * @param filePath
 * @param callback
 */
var readFile = exports.readFile = function(gitana, filePath, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        if (err) {
            callback(err);
            return;
        }

        this.trap(errHandler).readNode("root", filePath).then(function() {
            callback(null, this);
        });

    });
};

/**
 * Lists files in a directory relative to the root node.
 *
 * @param gitana
 * @param parentFolderPath
 * @param callback
 */
var listFiles = exports.listFiles = function(gitana, parentFolderPath, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        if (err) {
            callback(err);
            return;
        }

        parentFolderPath = "/" + parentFolderPath;

        this.trap(errHandler).readNode("root", parentFolderPath).then(function() {

            this.listChildren().then(function() {
                callback(null, this);
            });
        });

    });
};

/**
 * Creates a file at a file path relative to the root node.
 *
 * @param gitana
 * @param object
 * @param filePath
 * @param callback
 */
var createFile = exports.createFile = function(gitana, object, filePath, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        this.trap(errHandler).createNode(object, path.join("root", filePath)).then(function() {
            callback(null, this);
        });
    });
};

/**
 * Reads a node by id.
 *
 * @param gitana
 * @param nodeId
 * @param callback
 */
var readNode = exports.readNode = function(gitana, nodeId, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        if (err) {
            callback(err);
            return;
        }

        this.trap(errHandler).readNode(nodeId).then(function() {
            callback(null, this);
        });

    });
};

/**
 * Updates a node.
 *
 * @param gitana
 * @param nodeId
 * @param object
 * @param callback
 */
var updateNode = exports.updateNode = function(gitana, nodeId, object, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        this.trap(errHandler).readNode(nodeId).then(function() {

            // copy properties
            if (object) {
                for (var k in object) {
                    this[k] = object[k];
                }
            }

            this.update().then(function() {
                callback(null, this);
            });

        });
    });
};


/**
 * Queries for nodes of a given type.
 *
 * @param gitana
 * @param typeQName
 * @param callback
 */
var queryNodes = exports.queryNodes = function(gitana, query, callback)
{
    var errHandler = function(err) {
        callback({
            "message": err.message
        });
    };

    masterBranch(gitana, function(err) {

        if (err) {
            callback(err);
            return;
        }

        this.trap(errHandler).queryNodes(query).then(function() {
            callback(null, this);
        });

    });
};


