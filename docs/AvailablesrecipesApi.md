# CheeryChowRecipeApi.AvailablesrecipesApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableRecipes**](AvailablesrecipesApi.md#availableRecipes) | **GET** /available-recipes/{foodids} | Find recipes which contain the supplied food ids


<a name="availableRecipes"></a>
# **availableRecipes**
> [Recipe] availableRecipes(foodids, opts)

Find recipes which contain the supplied food ids

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.AvailablesrecipesApi();

var foodids = "foodids_example"; // String | A comma deliminated list of Food IDs

var opts = { 
  'searchterm': "searchterm_example", // String | A term to be used for searching in the recipe name.
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': false, // Boolean | Should the recipe's ingredient common names be included?
  'includeNutritionPerPortion': false, // Boolean | Should the recipe's nutrition per portion be included?
  'includeGda': false, // Boolean | Should the general daily provision for the recipe be included?
  'includeFoodNames': false, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name)
  'includeFoodId': false // Boolean | Should the recipe's ingredient food id's be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name.
  'offset': 789, // Integer | The offset into search results.
  'limit': 56 // Integer | Limit the number of results returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.availableRecipes(foodids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodids** | **String**| A comma deliminated list of Food IDs | 
 **searchterm** | **String**| A term to be used for searching in the recipe name. | [optional] 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] [default to false]
 **includeNutritionPerPortion** | **Boolean**| Should the recipe&#39;s nutrition per portion be included? | [optional] [default to false]
 **includeGda** | **Boolean**| Should the general daily provision for the recipe be included? | [optional] [default to false]
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) | [optional] [default to false]
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. | [optional] [default to false]
 **offset** | **Integer**| The offset into search results. | [optional] 
 **limit** | **Integer**| Limit the number of results returned. | [optional] 

### Return type

[**[Recipe]**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

