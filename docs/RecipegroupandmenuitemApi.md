# CheeryChowRecipeApi.RecipegroupandmenuitemApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postRecipeGroupAndMenuItem**](RecipegroupandmenuitemApi.md#postRecipeGroupAndMenuItem) | **POST** /recipe-group-and-menu-item | Rate a recipe out of 5


<a name="postRecipeGroupAndMenuItem"></a>
# **postRecipeGroupAndMenuItem**
> [MenuItem] postRecipeGroupAndMenuItem(recipeGroup)

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

var apiInstance = new CheeryChowRecipeApi.RecipegroupandmenuitemApi();

var recipeGroup = new CheeryChowRecipeApi.RecipeGroupInserter(); // RecipeGroupInserter | The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRecipeGroupAndMenuItem(recipeGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroup** | [**RecipeGroupInserter**](RecipeGroupInserter.md)| The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted  | 

### Return type

[**[MenuItem]**](MenuItem.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

