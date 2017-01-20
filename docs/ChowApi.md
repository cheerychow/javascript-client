# CheeryChowRecipeApi.ChowApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecipeByUniqueHandle**](ChowApi.md#getRecipeByUniqueHandle) | **GET** /chow/{recipeName}/{recipeNameIndex} | Get a particular recipe via a unique name and index
[**getSuperRecipeByUniqueHandle**](ChowApi.md#getSuperRecipeByUniqueHandle) | **GET** /super-chow/{recipename}/{recipenameindex} | Get a particular recipe via a unique name and index


<a name="getRecipeByUniqueHandle"></a>
# **getRecipeByUniqueHandle**
> Recipe getRecipeByUniqueHandle(recipeName, recipeNameIndex, opts)

Get a particular recipe via a unique name and index

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.ChowApi();

var recipeName = "recipeName_example"; // String | The recipe's unique handle; a name and a number seperated by a forward slash.

var recipeNameIndex = 56; // Integer | An index to differentiate recipes with the same name.

var opts = { 
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': true, // Boolean | Should the recipe's ingredient common names be included?
  'includeNutritionPerPortion': true, // Boolean | Should the recipe's nutrition per portion be included?
  'includeGda': true, // Boolean | Should the general daily provision for the recipe be included?
  'includeFoodNames': true, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name.)
  'includeFoodId': true // Boolean | Should the recipe's ingredient food id's be included?
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeByUniqueHandle(recipeName, recipeNameIndex, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeName** | **String**| The recipe&#39;s unique handle; a name and a number seperated by a forward slash. | 
 **recipeNameIndex** | **Integer**| An index to differentiate recipes with the same name. | 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] 
 **includeNutritionPerPortion** | **Boolean**| Should the recipe&#39;s nutrition per portion be included? | [optional] 
 **includeGda** | **Boolean**| Should the general daily provision for the recipe be included? | [optional] 
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name.) | [optional] 
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? | [optional] 

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSuperRecipeByUniqueHandle"></a>
# **getSuperRecipeByUniqueHandle**
> Recipe getSuperRecipeByUniqueHandle(recipename, recipenameindex, opts)

Get a particular recipe via a unique name and index

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.ChowApi();

var recipename = "recipename_example"; // String | The recipe's unique name

var recipenameindex = 56; // Integer | An index to differentiate recipe's with the same name

var opts = { 
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': false, // Boolean | Should the recipe's ingredient common names be included?
  'includeNutritionPerPortion': false, // Boolean | Should the recipe's nutrition per portion be included?
  'includeGda': false, // Boolean | Should the general daily provision for the recipe be included?
  'includeFoodNames': false, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name)
  'includeFoodId': false // Boolean | Should the recipe's ingredient food id's be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSuperRecipeByUniqueHandle(recipename, recipenameindex, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipename** | **String**| The recipe&#39;s unique name | 
 **recipenameindex** | **Integer**| An index to differentiate recipe&#39;s with the same name | 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] [default to false]
 **includeNutritionPerPortion** | **Boolean**| Should the recipe&#39;s nutrition per portion be included? | [optional] [default to false]
 **includeGda** | **Boolean**| Should the general daily provision for the recipe be included? | [optional] [default to false]
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) | [optional] [default to false]
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. | [optional] [default to false]

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

