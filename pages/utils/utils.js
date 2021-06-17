  function sendQuery(url, query, variables) {
    return my.request({method: 'POST', url: url, data: {query}});
  }

  function isGraphAllowed(fromVersion, toVersion) {
    var fromVersionNum = parseInt(fromVersion.split("").filter(function(c){ 
      return c != ".";
    }).join(""));

    var toVersionNum = parseInt(toVersion.split("").filter(function(c){ 
      return c != ".";
    }).join(""));

    return toVersionNum < fromVersionNum;
  }

  export default { sendQuery, isGraphAllowed}