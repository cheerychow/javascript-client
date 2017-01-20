# CheeryChowRecipeApi.RecipegroupApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRecipeGroup**](RecipegroupApi.md#deleteRecipeGroup) | **DELETE** /recipe-group/{recipeGroupId} | Delete a recipe group. WARNING. Deleteing a group results in all of the recipe group&#39;s child menu item&#39;s being deleted too.
[**getRecipeGroups**](RecipegroupApi.md#getRecipeGroups) | **GET** /recipe-group | Rate a recipe out of 5
[**getSingleRecipeGroup**](RecipegroupApi.md#getSingleRecipeGroup) | **GET** /recipe-group/{recipeGroupId} | Rate a recipe out of 5
[**postRecipeGroup**](RecipegroupApi.md#postRecipeGroup) | **POST** /recipe-group | Create a new recipe group
[**putRecipeGroup**](RecipegroupApi.md#putRecipeGroup) | **PUT** /recipe-group/{recipeGroupId} | Rate a recipe out of 5
[**searchMyRecipeGroupForRecipe**](RecipegroupApi.md#searchMyRecipeGroupForRecipe) | **GET** /recipe-group/my-recipes/{recipeId} | Search the logged in user&#39;s recipe groups for a particular recipe.


<a name="deleteRecipeGroup"></a>
# **deleteRecipeGroup**
> RecipeGroup deleteRecipeGroup(recipeGroupId)

Delete a recipe group. WARNING. Deleteing a group results in all of the recipe group&#39;s child menu item&#39;s being deleted too.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var recipeGroupId = 789; // Integer | Rating out of 5


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipeGroup(recipeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroupId** | **Integer**| Rating out of 5 | 

### Return type

[**RecipeGroup**](RecipeGroup.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipeGroups"></a>
# **getRecipeGroups**
> [RecipeGroup] getRecipeGroups()

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

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeGroups(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RecipeGroup]**](RecipeGroup.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSingleRecipeGroup"></a>
# **getSingleRecipeGroup**
> RecipeGroup getSingleRecipeGroup(recipeGroupId)

Rate a recipe out of 5

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var recipeGroupId = 789; // Integer | The group ID required


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSingleRecipeGroup(recipeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroupId** | **Integer**| The group ID required | 

### Return type

[**RecipeGroup**](RecipeGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postRecipeGroup"></a>
# **postRecipeGroup**
> RecipeGroup postRecipeGroup(recipeGroup)

Create a new recipe group

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var recipeGroup = new CheeryChowRecipeApi.RecipeGroupInserter(); // RecipeGroupInserter | The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRecipeGroup(recipeGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroup** | [**RecipeGroupInserter**](RecipeGroupInserter.md)| The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted  | 

### Return type

[**RecipeGroup**](RecipeGroup.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putRecipeGroup"></a>
# **putRecipeGroup**
> RecipeGroup putRecipeGroup(recipeGroup)

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

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var recipeGroup = new CheeryChowRecipeApi.RecipeGroup(); // RecipeGroup | Rating out of 5


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putRecipeGroup(recipeGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroup** | [**RecipeGroup**](RecipeGroup.md)| Rating out of 5 | 

### Return type

[**RecipeGroup**](RecipeGroup.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchMyRecipeGroupForRecipe"></a>
# **searchMyRecipeGroupForRecipe**
> [RecipesAndRecipeGroups] searchMyRecipeGroupForRecipe(recipeId)

Search the logged in user&#39;s recipe groups for a particular recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipegroupApi();

var recipeId = 789; // Integer | The recipe ID to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchMyRecipeGroupForRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID to fetch | 

### Return type

[**[RecipesAndRecipeGroups]**](RecipesAndRecipeGroups.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

