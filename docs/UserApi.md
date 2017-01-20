# CheeryChowRecipeApi.UserApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserMetaInfo**](UserApi.md#getUserMetaInfo) | **GET** /user_meta/{fields} | Fetch a user&#39;s meta fields.
[**saveUserInfo**](UserApi.md#saveUserInfo) | **PUT** /user/{userId} | Save changes to the user object.
[**saveUserMetaInfo**](UserApi.md#saveUserMetaInfo) | **PUT** /user-meta/{userId} | Save changes to the user object.


<a name="getUserMetaInfo"></a>
# **getUserMetaInfo**
> [UserMeta] getUserMetaInfo(fields)

Fetch a user&#39;s meta fields.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.UserApi();

var fields = "fields_example"; // String | A comma deliminated list of meta keys


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserMetaInfo(fields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| A comma deliminated list of meta keys | 

### Return type

[**[UserMeta]**](UserMeta.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUserInfo"></a>
# **saveUserInfo**
> saveUserInfo(userId, suggestedUser)

Save changes to the user object.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.UserApi();

var userId = 789; // Integer | The ID of the user to which is to be changed.

var suggestedUser = new CheeryChowRecipeApi.RecipeserverBasicauthSuggestUser(); // RecipeserverBasicauthSuggestUser | A user object containing the changes to be made.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUserInfo(userId, suggestedUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| The ID of the user to which is to be changed. | 
 **suggestedUser** | [**RecipeserverBasicauthSuggestUser**](RecipeserverBasicauthSuggestUser.md)| A user object containing the changes to be made. | 

### Return type

null (empty response body)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUserMetaInfo"></a>
# **saveUserMetaInfo**
> saveUserMetaInfo(userId, body)

Save changes to the user object.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.UserApi();

var userId = 789; // Integer | The ID of the user to which the user-meta is to be added to

var body = new CheeryChowRecipeApi.UserMeta(); // UserMeta | A user object containing the changes to be made.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUserMetaInfo(userId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| The ID of the user to which the user-meta is to be added to | 
 **body** | [**UserMeta**](UserMeta.md)| A user object containing the changes to be made. | 

### Return type

null (empty response body)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

