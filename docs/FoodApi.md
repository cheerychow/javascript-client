# CheeryChowRecipeApi.FoodApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**foodWeight**](FoodApi.md#foodWeight) | **GET** /food/{foodId}/weights | Return the measured food proportions for a particular food.
[**foodWeightNames**](FoodApi.md#foodWeightNames) | **GET** /food/{foodId}/weightnames | Weights of typical measurements
[**getFoods**](FoodApi.md#getFoods) | **GET** /food/{foodId} | List similar foods
[**listFoodGroups**](FoodApi.md#listFoodGroups) | **GET** /food/groups | A list of the food groups
[**popularFoods**](FoodApi.md#popularFoods) | **GET** /food/popular | Return a list of the most popular ingredients as food objects
[**searchAvailableIngredient**](FoodApi.md#searchAvailableIngredient) | **GET** /food/ingredients | Search through the known ingredients in the database
[**searchFoods**](FoodApi.md#searchFoods) | **GET** /food/search/{searchTerm} | Plain english search for foods.


<a name="foodWeight"></a>
# **foodWeight**
> [&#39;String&#39;] foodWeight(foodId)

Return the measured food proportions for a particular food.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var foodId = 56; // Integer | Food id which you want a list of known foods weights for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.foodWeight(foodId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **Integer**| Food id which you want a list of known foods weights for | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="foodWeightNames"></a>
# **foodWeightNames**
> [&#39;String&#39;] foodWeightNames(foodId)

Weights of typical measurements

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var foodId = 56; // Integer | Food id which you want a list of known foods weights for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.foodWeightNames(foodId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **Integer**| Food id which you want a list of known foods weights for | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFoods"></a>
# **getFoods**
> FoodDes getFoods(foodId)

List similar foods

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var foodId = 789; // Integer | The Food ID of the food object you want to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFoods(foodId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **Integer**| The Food ID of the food object you want to fetch | 

### Return type

[**FoodDes**](FoodDes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFoodGroups"></a>
# **listFoodGroups**
> [FoodGroup] listFoodGroups()

A list of the food groups

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFoodGroups(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[FoodGroup]**](FoodGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="popularFoods"></a>
# **popularFoods**
> [PopularFood] popularFoods()

Return a list of the most popular ingredients as food objects

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.popularFoods(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PopularFood]**](PopularFood.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchAvailableIngredient"></a>
# **searchAvailableIngredient**
> [IngredientFood] searchAvailableIngredient(opts)

Search through the known ingredients in the database

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var opts = { 
  'searchTerm': "searchTerm_example" // String | The search term to use when searching through ingredient names
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAvailableIngredient(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| The search term to use when searching through ingredient names | [optional] 

### Return type

[**[IngredientFood]**](IngredientFood.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchFoods"></a>
# **searchFoods**
> [FoodDes] searchFoods(searchTerm, opts)

Plain english search for foods.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodApi();

var searchTerm = "searchTerm_example"; // String | A search term for searching for foods.

var opts = { 
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
apiInstance.searchFoods(searchTerm, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| A search term for searching for foods. | 
 **offset** | **Integer**| The offset into search results. | [optional] 
 **limit** | **Integer**| Limit the number of results returned. | [optional] 

### Return type

[**[FoodDes]**](FoodDes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

