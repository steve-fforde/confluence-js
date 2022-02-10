const chayote = {
	jira: {
		__API__: function(params){ 
			AppLinks.get('/rest/jira-integration/latest/servers')
				.success(function(response){
					AppLinks.jsonRequest('/plugins/servlet/applinks/proxy?appId=' + response[0].id + '&path=' + params.api, params.method)
						.success(params.callback);
				});
		},
		issues: {
			get: function(id, callback){chayote.jira.__API__({method:'GET',api:'/rest/api/latest/issue/' + id, callback})}
		}
	}
}
