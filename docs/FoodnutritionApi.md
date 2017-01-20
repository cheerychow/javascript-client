# CheeryChowRecipeApi.FoodnutritionApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAbbrevByFoodWithProvides**](FoodnutritionApi.md#listAbbrevByFoodWithProvides) | **GET** /food-nutrition/by-food/{foodId}/{amount} | Retrieves the nutrition for a particular food.
[**showNutritionForAFood**](FoodnutritionApi.md#showNutritionForAFood) | **GET** /food-nutrition/food/{food_id}/{amount} | Retrieves the nutrition present in a particular food, present in &#39;amount&#39; grams of the food.


<a name="listAbbrevByFoodWithProvides"></a>
# **listAbbrevByFoodWithProvides**
> AbbrevWithProvides listAbbrevByFoodWithProvides(foodId, amount, rdacountry, opts)

Retrieves the nutrition for a particular food.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodnutritionApi();

var foodId = 789; // Integer | The id for the food to be fetched

var amount = 3.4; // Number | Adjust the nutrition amount to per 'amount' grams. If you want to know the nutritional content in 200g of a particular food, then enter it here as 200.

var rdacountry = "uk"; // String | The country RDA to be used when calculating the RDA provided by the food.

var opts = { 
  'sortby': "calories", // String | The nutrition field to sort by.
  'sortdir': "desc" // String | The sort direction for the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAbbrevByFoodWithProvides(foodId, amount, rdacountry, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **Integer**| The id for the food to be fetched | 
 **amount** | **Number**| Adjust the nutrition amount to per &#39;amount&#39; grams. If you want to know the nutritional content in 200g of a particular food, then enter it here as 200. | 
 **rdacountry** | **String**| The country RDA to be used when calculating the RDA provided by the food. | [default to uk]
 **sortby** | **String**| The nutrition field to sort by. | [optional] [default to calories]
 **sortdir** | **String**| The sort direction for the results. | [optional] [default to desc]

### Return type

[**AbbrevWithProvides**](AbbrevWithProvides.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showNutritionForAFood"></a>
# **showNutritionForAFood**
> NutritionAbbrev showNutritionForAFood(foodId, amount)

Retrieves the nutrition present in a particular food, present in &#39;amount&#39; grams of the food.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.FoodnutritionApi();

var foodId = 789; // Integer | Food ID

var amount = 3.4; // Number | The amount of food in grams


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showNutritionForAFood(foodId, amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **Integer**| Food ID | 
 **amount** | **Number**| The amount of food in grams | 

### Return type

[**NutritionAbbrev**](NutritionAbbrev.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

