  function sendQuery(method, url, query, variables) {
    console.log(url);
    return my.request({method: method, url: url, data: query});
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

  async function initialiseMagentoToken(env, url) {
    console.log(url);
    const payload = {
      username: env.ADMIN_USERNAME,
      password: env.ADMIN_PASSWORD
    }

    await sendQuery('POST', url + '/integration/admin/token', payload)
    .then(response => {
      // ToDo: Remember that the token times out, so you need to refresh it every hour
      env.ADMIN_TOKEN = response;
      return response;
    });
    
  }

  export default { sendQuery, isGraphAllowed, initialiseMagentoToken}