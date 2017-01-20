# CheeryChowRecipeApi.RaterecipeApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteARecipeRating**](RaterecipeApi.md#deleteARecipeRating) | **DELETE** /rate-recipe/{ratingId} | Delete a recipe rating
[**getMyRecipeRatingByRatingID**](RaterecipeApi.md#getMyRecipeRatingByRatingID) | **GET** /rate-recipe/my-rating-by-id/{ratingId} | Get currently logged in users rating for a recipe, by it&#39;s id
[**getMyRecipeRatingByRecipeId**](RaterecipeApi.md#getMyRecipeRatingByRecipeId) | **GET** /rate-recipe/my-rating-by-recipe-id/{recipeId} | Get currently logged in users rating for a recipe, by recipe url
[**getMyRecipeRatingByUrl**](RaterecipeApi.md#getMyRecipeRatingByUrl) | **GET** /rate-recipe/my-rating-by-url/{url} | Get currently logged in users rating for a recipe, by recipe url
[**getRecipeRatingByRecipeID**](RaterecipeApi.md#getRecipeRatingByRecipeID) | **GET** /rate-recipe/by-id/{recipeId} | Get the rating for a recipe, by it&#39;s id
[**getRecipeRatingByUrl**](RaterecipeApi.md#getRecipeRatingByUrl) | **GET** /rate-recipe/by-url/{url} | Get the aggregate rating for a recipe, by it&#39;s url
[**rateARecipe**](RaterecipeApi.md#rateARecipe) | **POST** /rate-recipe | Rate a recipe out of 5


<a name="deleteARecipeRating"></a>
# **deleteARecipeRating**
> RecipeserverBasicauthHttpAPIResponse deleteARecipeRating(ratingId)

Delete a recipe rating

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var ratingId = 789; // Integer | The id of the rating object you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteARecipeRating(ratingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **Integer**| The id of the rating object you want to delete | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMyRecipeRatingByRatingID"></a>
# **getMyRecipeRatingByRatingID**
> RecipeRating getMyRecipeRatingByRatingID(ratingId)

Get currently logged in users rating for a recipe, by it&#39;s id

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var ratingId = 56; // Integer | The id of the rating.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyRecipeRatingByRatingID(ratingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **Integer**| The id of the rating. | 

### Return type

[**RecipeRating**](RecipeRating.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMyRecipeRatingByRecipeId"></a>
# **getMyRecipeRatingByRecipeId**
> RecipeRating getMyRecipeRatingByRecipeId(recipeId)

Get currently logged in users rating for a recipe, by recipe url

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var recipeId = 3.4; // Number | The url of the recipe, if it's already in the database.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyRecipeRatingByRecipeId(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Number**| The url of the recipe, if it&#39;s already in the database. | 

### Return type

[**RecipeRating**](RecipeRating.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMyRecipeRatingByUrl"></a>
# **getMyRecipeRatingByUrl**
> RecipeRating getMyRecipeRatingByUrl(url)

Get currently logged in users rating for a recipe, by recipe url

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var url = "url_example"; // String | The url of the recipe, if it's already in the database.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyRecipeRatingByUrl(url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| The url of the recipe, if it&#39;s already in the database. | 

### Return type

[**RecipeRating**](RecipeRating.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipeRatingByRecipeID"></a>
# **getRecipeRatingByRecipeID**
> AvgTotal getRecipeRatingByRecipeID(recipeId)

Get the rating for a recipe, by it&#39;s id

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var recipeId = 789; // Integer | The id of the recipe, if it's already in the database.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeRatingByRecipeID(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The id of the recipe, if it&#39;s already in the database. | 

### Return type

[**AvgTotal**](AvgTotal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipeRatingByUrl"></a>
# **getRecipeRatingByUrl**
> AvgTotal getRecipeRatingByUrl(url)

Get the aggregate rating for a recipe, by it&#39;s url

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var url = "url_example"; // String | The url of the recipe you want to rate.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeRatingByUrl(url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| The url of the recipe you want to rate. | 

### Return type

[**AvgTotal**](AvgTotal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rateARecipe"></a>
# **rateARecipe**
> RecipeRating rateARecipe(recipeRating)

Rate a recipe out of 5

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RaterecipeApi();

var recipeRating = new CheeryChowRecipeApi.RecipeRating(); // RecipeRating | Rating out of 5


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rateARecipe(recipeRating, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeRating** | [**RecipeRating**](RecipeRating.md)| Rating out of 5 | 

### Return type

[**RecipeRating**](RecipeRating.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

