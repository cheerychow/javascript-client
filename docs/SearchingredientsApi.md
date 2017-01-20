# CheeryChowRecipeApi.SearchingredientsApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchIngredients**](SearchingredientsApi.md#searchIngredients) | **GET** /search-ingredients/{search} | Search common foods and parse the search term as an ingredient. This is a convenience end point for auto xcomplete boxes where a user typing in a text can either pick a food item or the ingredient&#39;s parsed value from a drop down.


<a name="searchIngredients"></a>
# **searchIngredients**
> [IngredientWithNutritionAbbrev] searchIngredients(search)

Search common foods and parse the search term as an ingredient. This is a convenience end point for auto xcomplete boxes where a user typing in a text can either pick a food item or the ingredient&#39;s parsed value from a drop down.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.SearchingredientsApi();

var search = "search_example"; // String | Case insensitive search term, for ingredients or foods. Ingredients will be parsed as ingredient lines and returned as IngredientWithNutritionAbbrev objects.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchIngredients(search, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Case insensitive search term, for ingredients or foods. Ingredients will be parsed as ingredient lines and returned as IngredientWithNutritionAbbrev objects. | 

### Return type

[**[IngredientWithNutritionAbbrev]**](IngredientWithNutritionAbbrev.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

