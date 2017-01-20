# CheeryChowRecipeApi.AccountApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountInfo**](AccountApi.md#accountInfo) | **GET** /me | The currently signed in user account info.
[**accountSignUp**](AccountApi.md#accountSignUp) | **POST** /signup | Sign a user up to your app.
[**accountSignin**](AccountApi.md#accountSignin) | **POST** /signin | Sign a user in to your app.
[**addPushNoteToAccount**](AccountApi.md#addPushNoteToAccount) | **POST** /updatenote | Sign a user up to your app.
[**facebookSignupSignin**](AccountApi.md#facebookSignupSignin) | **POST** /fb_signin | Using a valid Facebook access token, sign the user up (or in if the user is already signed up).
[**saveUser**](AccountApi.md#saveUser) | **POST** /fb_signup | Using a valid Facebook access token, sign the user up (or in if the user is already signed up).


<a name="accountInfo"></a>
# **accountInfo**
> User accountInfo()

The currently signed in user account info.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountSignUp"></a>
# **accountSignUp**
> accountSignUp(user)

Sign a user up to your app.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var user = new CheeryChowRecipeApi.User(); // User | The username, must be unique.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountSignUp(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| The username, must be unique. | 

### Return type

null (empty response body)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountSignin"></a>
# **accountSignin**
> User accountSignin(username)

Sign a user in to your app.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var username = new CheeryChowRecipeApi.RecipeserverBasicauthSigninObject(); // RecipeserverBasicauthSigninObject | The username, must be unique and the password for the account.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountSignin(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**RecipeserverBasicauthSigninObject**](RecipeserverBasicauthSigninObject.md)| The username, must be unique and the password for the account. | 

### Return type

[**User**](User.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPushNoteToAccount"></a>
# **addPushNoteToAccount**
> PushDevice addPushNoteToAccount(token)

Sign a user up to your app.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var token = new CheeryChowRecipeApi.PushDevice(); // PushDevice | A valid push note token along with the platform the push token is for (ios/android/chrome/safari).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPushNoteToAccount(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**PushDevice**](PushDevice.md)| A valid push note token along with the platform the push token is for (ios/android/chrome/safari). | 

### Return type

[**PushDevice**](PushDevice.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="facebookSignupSignin"></a>
# **facebookSignupSignin**
> User facebookSignupSignin(accessToken)

Using a valid Facebook access token, sign the user up (or in if the user is already signed up).

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var accessToken = new CheeryChowRecipeApi.RecipeserverBasicauthFacebookSigninObject(); // RecipeserverBasicauthFacebookSigninObject | A valid facebook access token which will be used to sign the user up.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.facebookSignupSignin(accessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**RecipeserverBasicauthFacebookSigninObject**](RecipeserverBasicauthFacebookSigninObject.md)| A valid facebook access token which will be used to sign the user up. | 

### Return type

[**User**](User.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUser"></a>
# **saveUser**
> saveUser(accessToken)

Using a valid Facebook access token, sign the user up (or in if the user is already signed up).

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.AccountApi();

var accessToken = new CheeryChowRecipeApi.RecipeserverBasicauthFacebookSignupObject(); // RecipeserverBasicauthFacebookSignupObject | A valid facebook access token which will be used to sign the user up.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUser(accessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**RecipeserverBasicauthFacebookSignupObject**](RecipeserverBasicauthFacebookSignupObject.md)| A valid facebook access token which will be used to sign the user up. | 

### Return type

null (empty response body)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

