# CheeryChowRecipeApi.FavrecipeApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**favoriteARecipe**](FavrecipeApi.md#favoriteARecipe) | **POST** /fav-recipe | Favorite a recipe
[**favoriteRecipes**](FavrecipeApi.md#favoriteRecipes) | **GET** /fav-recipe | List the logged in user&#39;s fav recipes.
[**unfavoriteARecipeByID**](FavrecipeApi.md#unfavoriteARecipeByID) | **DELETE** /fav-recipe/by-id/{fav-recipeId} | Remove1 a favorite recipe entry into the database, for a particular recipe.
[**unfavoriteARecipeByRecipeID**](FavrecipeApi.md#unfavoriteARecipeByRecipeID) | **DELETE** /fav-recipe/by-recipe-id/{recipeId} | Remove a favorite recipe entry into the database, for a particular recipe.
[**unfavoriteRecipeByUrl**](FavrecipeApi.md#unfavoriteRecipeByUrl) | **DELETE** /fav-recipe/by-recipe-url/{recipe-url} | Remove3 a favorite recipe entry into the database, for a particular recipe.


<a name="favoriteARecipe"></a>
# **favoriteARecipe**
> FavRecipe favoriteARecipe(recipeId)

Favorite a recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.FavrecipeApi();

var recipeId = new CheeryChowRecipeApi.FavRecipe(); // FavRecipe | The recipe information (either the recipe's url or the recipeId from the cheerychow DB) you want to favourite..


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoriteARecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | [**FavRecipe**](FavRecipe.md)| The recipe information (either the recipe&#39;s url or the recipeId from the cheerychow DB) you want to favourite.. | 

### Return type

[**FavRecipe**](FavRecipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="favoriteRecipes"></a>
# **favoriteRecipes**
> [FavRecipe] favoriteRecipes()

List the logged in user&#39;s fav recipes.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.FavrecipeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.favoriteRecipes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[FavRecipe]**](FavRecipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unfavoriteARecipeByID"></a>
# **unfavoriteARecipeByID**
> RecipeserverBasicauthHttpAPIResponse unfavoriteARecipeByID(favRecipeId)

Remove1 a favorite recipe entry into the database, for a particular recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.FavrecipeApi();

var favRecipeId = 789; // Integer | Favorite recipe ID to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unfavoriteARecipeByID(favRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **favRecipeId** | **Integer**| Favorite recipe ID to be deleted | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unfavoriteARecipeByRecipeID"></a>
# **unfavoriteARecipeByRecipeID**
> RecipeserverBasicauthHttpAPIResponse unfavoriteARecipeByRecipeID(recipeId)

Remove a favorite recipe entry into the database, for a particular recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.FavrecipeApi();

var recipeId = 789; // Integer | The recipe ID to be unfavourited.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unfavoriteARecipeByRecipeID(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID to be unfavourited. | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unfavoriteRecipeByUrl"></a>
# **unfavoriteRecipeByUrl**
> RecipeserverBasicauthHttpAPIResponse unfavoriteRecipeByUrl(recipeUrl)

Remove3 a favorite recipe entry into the database, for a particular recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.FavrecipeApi();

var recipeUrl = "recipeUrl_example"; // String | The recipe url you want to unfavourite.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unfavoriteRecipeByUrl(recipeUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeUrl** | **String**| The recipe url you want to unfavourite. | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

