# CheeryChowRecipeApi.RequestguestidApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggestAGuestIDForNewClient**](RequestguestidApi.md#suggestAGuestIDForNewClient) | **POST** /request-guestid | Request a user id for a client.


<a name="suggestAGuestIDForNewClient"></a>
# **suggestAGuestIDForNewClient**
> User suggestAGuestIDForNewClient(suggestedUserInfo)

Request a user id for a client.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RequestguestidApi();

var suggestedUserInfo = new CheeryChowRecipeApi.RecipeserverBasicauthSuggestUser(); // RecipeserverBasicauthSuggestUser | A valid push note token.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suggestAGuestIDForNewClient(suggestedUserInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suggestedUserInfo** | [**RecipeserverBasicauthSuggestUser**](RecipeserverBasicauthSuggestUser.md)| A valid push note token. | 

### Return type

[**User**](User.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

