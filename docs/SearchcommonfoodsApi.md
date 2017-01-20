# CheeryChowRecipeApi.SearchcommonfoodsApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCommonFoods**](SearchcommonfoodsApi.md#searchCommonFoods) | **GET** /search-common-foods/{search} | Search the available foods by text string


<a name="searchCommonFoods"></a>
# **searchCommonFoods**
> [FoodDes] searchCommonFoods(search)

Search the available foods by text string

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.SearchcommonfoodsApi();

var search = "search_example"; // String | Case insensitive search term, for ingredients or foods. Ingredients will be parsed as ingredient lines and returned as IngredientWithNutritionAbbrev objects.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchCommonFoods(search, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Case insensitive search term, for ingredients or foods. Ingredients will be parsed as ingredient lines and returned as IngredientWithNutritionAbbrev objects. | 

### Return type

[**[FoodDes]**](FoodDes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

