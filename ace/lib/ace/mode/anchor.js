define(function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var JavaScriptMode = require("./javascript").Mode;
    var JavaHighlightRules = require("./anchor_highlight_rules").JavaHighlightRules;
    var JavaFoldMode = require("./folding/java").FoldMode;
    
    var Mode = function() {
        JavaScriptMode.call(this);
        this.HighlightRules = JavaHighlightRules;
        this.foldingRules = new JavaFoldMode();
    };
    oop.inherits(Mode, JavaScriptMode);
    
    (function() {
        
        this.createWorker = function(session) {
            return null;
        };
    
        this.$id = "ace/mode/anchor";
        this.snippetFileId = "ace/snippets/anchor";
    }).call(Mode.prototype);
    
    exports.Mode = Mode;
    });
    