# CheeryChowRecipeApi.ParseApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**parsePlainTextIngredientLinesRequest**](ParseApi.md#parsePlainTextIngredientLinesRequest) | **POST** /parse/ingredients | Retrieves a list of ingredients and nutritional info.
[**parseRecipeByUrlGet**](ParseApi.md#parseRecipeByUrlGet) | **GET** /parse/via-url/recipe/{recipe-url} | Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.
[**parseRecipeByUrlPost**](ParseApi.md#parseRecipeByUrlPost) | **POST** /parse/via-url/recipe | Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.
[**parseRecipeViaPageContent**](ParseApi.md#parseRecipeViaPageContent) | **POST** /parse/via-page-content/recipe | Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.


<a name="parsePlainTextIngredientLinesRequest"></a>
# **parsePlainTextIngredientLinesRequest**
> Recipe parsePlainTextIngredientLinesRequest(ingredients, opts)

Retrieves a list of ingredients and nutritional info.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ParseApi();

var ingredients = [new CheeryChowRecipeApi.[String]()]; // [String] | A JSON array of plain english ingredients.

var opts = { 
  'country': "uk", // String | The country code which the RDA should reflect.
  'gender': "male" // String | The gender for which the RDA should apply.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parsePlainTextIngredientLinesRequest(ingredients, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingredients** | **[String]**| A JSON array of plain english ingredients. | 
 **country** | **String**| The country code which the RDA should reflect. | [optional] [default to uk]
 **gender** | **String**| The gender for which the RDA should apply. | [optional] [default to male]

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parseRecipeByUrlGet"></a>
# **parseRecipeByUrlGet**
> Recipe parseRecipeByUrlGet(recipeUrl)

Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.ParseApi();

var recipeUrl = "recipeUrl_example"; // String | A url to a recipe, which a sous bot will download and attempt, as best it can to parse into a recipe object and a list of ingredients.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseRecipeByUrlGet(recipeUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeUrl** | **String**| A url to a recipe, which a sous bot will download and attempt, as best it can to parse into a recipe object and a list of ingredients. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parseRecipeByUrlPost"></a>
# **parseRecipeByUrlPost**
> Recipe parseRecipeByUrlPost(recipeurl)

Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ParseApi();

var recipeurl = new CheeryChowRecipeApi.PlainString(); // PlainString | A url to a recipe, which a sous bot will download and attempt, as best it can to parse into a recipe object and a list of ingredients.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseRecipeByUrlPost(recipeurl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeurl** | [**PlainString**](PlainString.md)| A url to a recipe, which a sous bot will download and attempt, as best it can to parse into a recipe object and a list of ingredients. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parseRecipeViaPageContent"></a>
# **parseRecipeViaPageContent**
> Recipe parseRecipeViaPageContent(recipeParseRequest)

Takes a URL of a recipe on the internet, a sous bot will parse it (if it can), and then spit out a recipe object as the result.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ParseApi();

var recipeParseRequest = new CheeryChowRecipeApi.RecipeParseRequest(); // RecipeParseRequest | An object describing a recipe to be parsed into seperate ingredients.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseRecipeViaPageContent(recipeParseRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeParseRequest** | [**RecipeParseRequest**](RecipeParseRequest.md)| An object describing a recipe to be parsed into seperate ingredients. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

