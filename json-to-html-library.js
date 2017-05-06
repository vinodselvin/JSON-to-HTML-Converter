
(function(window) {
    var _private = {},
        methods = {},
        topic, init, _error;
    
    _error = "[ERROR]: ";
    
    /*
     * @Desc: Set Json Data
     */
    methods.setJson = function(value) {
        var resp = validateJSON(value);
        
        // Set the property & value
        _private[topic] = resp;
        
        return this;
    };
    
    /*
     * @Desc: Check whether it is proper json format
     */
    var validateJSON = function(response){
        
        try {
            var json_response = JSON.parse(response);
            console.log(json_response);
//            var json_deduplicate = deduplicateJson(json_response);
            var html = convertJsonToHtml(json_response);
            return html.innerHTML;
        }
        catch (exception) {
            var error = "Invalid Json Format";
            console.log("%c" + _error + error, 'background: red; color: white;');
        }
    }
    
    /*
     * @Desc: Convert Json to Html
     */
    
    var convertJsonToHtml = function(json_data){
        
        var html = document.createElement('body');
        
        for(var tag_name in json_data){
        
//            console.log(tag_name);return false;
            var _element_name = json_data[tag_name]["tag"];
            
            delete json_data[tag_name]["tag"];
            
            var _element = json_data[tag_name];

            var tag_root = document.createElement(_element_name);

            for(var attr_name in _element){
                
                var attr_value = _element[attr_name];

                if(attr_name == 'html'){
                    
                    var tag_html = document.createTextNode(attr_value);
                    
                    tag_root.appendChild(tag_html);
                    
                }else if(attr_name == '_child'){
                    
                    var _child = convertJsonToHtml(attr_value);
                    
                    tag_root.appendChild(_child);
                    
                }else{
                    
                    tag_root.setAttribute(attr_name, attr_value);
                }
            }
            
            html.appendChild(tag_root);
        }
        
        return html;
    }
    
    /*
     * @Desc: Returns Plain Html Text.
     */
    methods.getHtml = function(callback) {
        
        var response = null;

        // Return the value of topic (property) in a callback
        if (!!callback && typeof callback === 'function') {
            
            if (_private.hasOwnProperty(topic)) {
                response = _private[topic];
            }
            
            callback.call(this, response);
        }
        
        return this;
    };

    // Init method setting the topic and returning the methods.
    init = function(_topic) {
        topic = _topic;

        return methods;
    };

    // Exposure when being used in an AMD environment, e.g. RequireJS
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return init;
        });
        return;
    }

    // Exposure when being used with NodeJS
    if ('undefined' !== typeof module && module.exports) {
        module.exports = init;
        return;
    }

    // Last-in-the-line exposure to the window, if it exists
    window.json2Html = init;

    // This line either passes the `window` as an argument or
    // an empty Object-literal if `window` is not defined.
}(('undefined' !== typeof window) ? window : {}));


