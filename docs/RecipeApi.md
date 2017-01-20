# CheeryChowRecipeApi.RecipeApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyRecipeExactly**](RecipeApi.md#copyRecipeExactly) | **GET** /recipe/copy/{recipeId} | Allows you to make a copy of a recipe, which you&#39;re free to make changes to as if it were your own.
[**copyRecipeToMyRecipesWithChanges**](RecipeApi.md#copyRecipeToMyRecipesWithChanges) | **POST** /recipe/copy/{recipeId} | Allows you to make a copy of a recipe, which you&#39;re free to make changes to as if it were your own.
[**deleteRecipe**](RecipeApi.md#deleteRecipe) | **DELETE** /recipe/{recipeId} | Remove one of your recipes
[**getCategoriesForRecipe**](RecipeApi.md#getCategoriesForRecipe) | **GET** /recipe/{recipeId}/categories | Get a list of the categories the food belongs to
[**getImageQRCodePNG**](RecipeApi.md#getImageQRCodePNG) | **GET** /recipe/{recipeId}/qr-image/png | Get the QR code image
[**getIngredientFromRecipeWithNutrition**](RecipeApi.md#getIngredientFromRecipeWithNutrition) | **GET** /recipe/{recipeId}/ingredient/{ingredient-id} | Get a particular ingredient in a recipe.
[**getIngredientsForRecipe**](RecipeApi.md#getIngredientsForRecipe) | **GET** /recipe/{recipeId}/ingredient | Get a particular recipe&#39;s ingredients.
[**getNutritionLabelHtml**](RecipeApi.md#getNutritionLabelHtml) | **GET** /recipe/{recipeId}/nutrition-label/html | Get HTML source which draws a dynamic (javascript operated) version of the nutrition label
[**getNutritionLabelImage**](RecipeApi.md#getNutritionLabelImage) | **GET** /recipe/{recipeId}/nutrition-label/png | Get a PNG of the nutrition label
[**getRecipeCSV**](RecipeApi.md#getRecipeCSV) | **GET** /recipe/{recipeId}/csv | Create a detailed CSV file from a Recipe. Includes data on the calories per portion, and calorie for each ingredient in the recipe.
[**getRecipeFoodNames**](RecipeApi.md#getRecipeFoodNames) | **GET** /recipe/{recipeId}/food | Get a recipe object&#39;s food names
[**getRecipeIngredientNames**](RecipeApi.md#getRecipeIngredientNames) | **GET** /recipe/{recipeId}/ingredient-names | Get a list of the common names for a particular recipe
[**getRecipeObject**](RecipeApi.md#getRecipeObject) | **GET** /recipe/{recipeId} | Get a recipe object and include the total recipe nutrition
[**getRecipePNG**](RecipeApi.md#getRecipePNG) | **GET** /recipe/{recipeId}/image | Get the URL for a recipe&#39;s image
[**getRecipeWithNutrition**](RecipeApi.md#getRecipeWithNutrition) | **GET** /recipe | Get all of the recipes owned by the currently logged in or authorised user. Include the recipe&#39;s nutrition per portion.
[**latestRecipes**](RecipeApi.md#latestRecipes) | **GET** /recipe/latest | Get the latest recipe object (with nutrition data), and include the nutrition information for the ingredients in this object.
[**listIngredientsWithNutrition**](RecipeApi.md#listIngredientsWithNutrition) | **GET** /recipe/{recipeId}/ingredient/nutrition | Get a list of ingredients in a recipe
[**pagedSearchRecipes**](RecipeApi.md#pagedSearchRecipes) | **GET** /recipe/search/paged | Parse up a list of plain text ingredients and produce an itemised list of foods, amounts (in grams or ml) and nutritional content of the foods. The food parsed by the sous bot may not exactly match the food the human operator intended, so other api end points are available to tweak foods and thus create a more accurate nutritional report for a recipe.
[**searchRecipes**](RecipeApi.md#searchRecipes) | **GET** /recipe/search | Parse up a list of plain text ingredients and produce an itemised list of foods, amounts (in grams or ml) and nutritional content of the foods. The food parsed by the sous bot may not exactly match the food the human operator intended, so other api end points are available to tweak foods and thus create a more accurate nutritional report for a recipe.
[**searchRecipesByFoodIdsWithNutrition**](RecipeApi.md#searchRecipesByFoodIdsWithNutrition) | **GET** /recipe/search-by-food-id/{foodIds} | Search for recipes with particular ingredients


<a name="copyRecipeExactly"></a>
# **copyRecipeExactly**
> Recipe copyRecipeExactly(recipeId)

Allows you to make a copy of a recipe, which you&#39;re free to make changes to as if it were your own.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe you want to make changes to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyRecipeExactly(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe you want to make changes to | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyRecipeToMyRecipesWithChanges"></a>
# **copyRecipeToMyRecipesWithChanges**
> Recipe copyRecipeToMyRecipesWithChanges(recipeId, recipe)

Allows you to make a copy of a recipe, which you&#39;re free to make changes to as if it were your own.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe you want to make changes to

var recipe = new CheeryChowRecipeApi.Recipe(); // Recipe | The recipe object with changes you want to make to the original recipe.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyRecipeToMyRecipesWithChanges(recipeId, recipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe you want to make changes to | 
 **recipe** | [**Recipe**](Recipe.md)| The recipe object with changes you want to make to the original recipe. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRecipe"></a>
# **deleteRecipe**
> RecipeserverBasicauthHttpAPIResponse deleteRecipe(recipeId)

Remove one of your recipes

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | Recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe ID | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategoriesForRecipe"></a>
# **getCategoriesForRecipe**
> [&#39;String&#39;] getCategoriesForRecipe(recipeId)

Get a list of the categories the food belongs to

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | Recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoriesForRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageQRCodePNG"></a>
# **getImageQRCodePNG**
> getImageQRCodePNG(recipeId)

Get the QR code image

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID of the recipe which the image is to be fetched.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getImageQRCodePNG(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID of the recipe which the image is to be fetched. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

<a name="getIngredientFromRecipeWithNutrition"></a>
# **getIngredientFromRecipeWithNutrition**
> IngredientWithNutritionAbbrev getIngredientFromRecipeWithNutrition(recipeId, ingredientId)

Get a particular ingredient in a recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID

var ingredientId = 789; // Integer | The ingredient ID, if you want a particular ingredient in the recipe.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIngredientFromRecipeWithNutrition(recipeId, ingredientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID | 
 **ingredientId** | **Integer**| The ingredient ID, if you want a particular ingredient in the recipe. | 

### Return type

[**IngredientWithNutritionAbbrev**](IngredientWithNutritionAbbrev.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIngredientsForRecipe"></a>
# **getIngredientsForRecipe**
> [Ingredient] getIngredientsForRecipe(recipeId)

Get a particular recipe&#39;s ingredients.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIngredientsForRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID | 

### Return type

[**[Ingredient]**](Ingredient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNutritionLabelHtml"></a>
# **getNutritionLabelHtml**
> &#39;Integer&#39; getNutritionLabelHtml(recipeId, opts)

Get HTML source which draws a dynamic (javascript operated) version of the nutrition label

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID which the nutritional label should be calculated from.

var opts = { 
  'country': "uk", // String | The country code which the RDA should reflect.
  'gender': "male" // String | The gender for which the RDA should apply.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNutritionLabelHtml(recipeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID which the nutritional label should be calculated from. | 
 **country** | **String**| The country code which the RDA should reflect. | [optional] [default to uk]
 **gender** | **String**| The gender for which the RDA should apply. | [optional] [default to male]

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

<a name="getNutritionLabelImage"></a>
# **getNutritionLabelImage**
> &#39;Integer&#39; getNutritionLabelImage(recipeId, opts)

Get a PNG of the nutrition label

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID which the nutritional label should be calculated from.

var opts = { 
  'country': "uk", // String | The country code which the RDA should reflect.
  'gender': "male" // String | The gender for which the RDA should apply.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNutritionLabelImage(recipeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID which the nutritional label should be calculated from. | 
 **country** | **String**| The country code which the RDA should reflect. | [optional] [default to uk]
 **gender** | **String**| The gender for which the RDA should apply. | [optional] [default to male]

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

<a name="getRecipeCSV"></a>
# **getRecipeCSV**
> &#39;String&#39; getRecipeCSV(recipeId, opts)

Create a detailed CSV file from a Recipe. Includes data on the calories per portion, and calorie for each ingredient in the recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID which the nutritional label should be calculated from.

var opts = { 
  'country': "uk", // String | The country code which the RDA should reflect.
  'gender': "male" // String | The gender for which the RDA should apply.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeCSV(recipeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID which the nutritional label should be calculated from. | 
 **country** | **String**| The country code which the RDA should reflect. | [optional] [default to uk]
 **gender** | **String**| The gender for which the RDA should apply. | [optional] [default to male]

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv

<a name="getRecipeFoodNames"></a>
# **getRecipeFoodNames**
> [FoodWithID] getRecipeFoodNames(recipeId)

Get a recipe object&#39;s food names

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | Recipe id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeFoodNames(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe id | 

### Return type

[**[FoodWithID]**](FoodWithID.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipeIngredientNames"></a>
# **getRecipeIngredientNames**
> [&#39;String&#39;] getRecipeIngredientNames(recipeId)

Get a list of the common names for a particular recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | Recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeIngredientNames(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipeObject"></a>
# **getRecipeObject**
> Recipe getRecipeObject(recipeId)

Get a recipe object and include the total recipe nutrition

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | Recipe id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecipeObject(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe id | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecipePNG"></a>
# **getRecipePNG**
> getRecipePNG(recipeId)

Get the URL for a recipe&#39;s image

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID of the recipe which the image is to be fetched.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRecipePNG(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID of the recipe which the image is to be fetched. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

<a name="getRecipeWithNutrition"></a>
# **getRecipeWithNutrition**
> [Recipe] getRecipeWithNutrition(opts)

Get all of the recipes owned by the currently logged in or authorised user. Include the recipe&#39;s nutrition per portion.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var opts = { 
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
apiInstance.getRecipeWithNutrition(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="latestRecipes"></a>
# **latestRecipes**
> [Recipe] latestRecipes(opts)

Get the latest recipe object (with nutrition data), and include the nutrition information for the ingredients in this object.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var opts = { 
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
apiInstance.latestRecipes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="listIngredientsWithNutrition"></a>
# **listIngredientsWithNutrition**
> [IngredientWithNutritionAbbrev] listIngredientsWithNutrition(recipeId)

Get a list of ingredients in a recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var recipeId = 789; // Integer | The recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listIngredientsWithNutrition(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The recipe ID | 

### Return type

[**[IngredientWithNutritionAbbrev]**](IngredientWithNutritionAbbrev.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pagedSearchRecipes"></a>
# **pagedSearchRecipes**
> PagedRecipeResults pagedSearchRecipes(opts)

Parse up a list of plain text ingredients and produce an itemised list of foods, amounts (in grams or ml) and nutritional content of the foods. The food parsed by the sous bot may not exactly match the food the human operator intended, so other api end points are available to tweak foods and thus create a more accurate nutritional report for a recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var opts = { 
  'recipeName': "recipeName_example", // String | Search the recipe name, used as a wild card on the name column like so; '%name%'
  'fewerCalories': "fewerCalories_example", // String | Search for recipes that have a less than or equal to 'fewercalories' calories per portion.
  'moreCalories': "moreCalories_example", // String | Search for recipes that have a greater than 'morecalories' calories per portion.
  'ingredient': "ingredient_example", // String | Search the list of ingredients in each recipe. The value is used as a wild card on the ingredient line as typed in by a human operator.
  'foodIds': "foodIds_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'calories': "calories_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'protein': "protein_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'totalFat': "totalFat_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'vegetarian': true, // Boolean | List only recipes which have ingredients that are vegetarian friendly.
  'veganFriendly': true, // Boolean | List only recipes which have ingredients that are vegan friendly.
  'pescatarian': true, // Boolean | List only recipes which have ingredients that are pescatarianfriendly.
  'glutenFree': true, // Boolean | List only recipes which have ingredients that are gluten free.
  'quickAndEasy': true, // Boolean | List only recipes which are quick and easy to cook.
  'lowFat': true, // Boolean | List only recipes which are low in fat.
  'hasNuts': true, // Boolean | List only recipes which has-nuts.
  'hasEggs': true, // Boolean | List only recipes which has-eggs.
  'hasSugar': true, // Boolean | List only recipes which has high sugar levels.
  'hasFruit': true, // Boolean | List only recipes which has fruit.
  'hasDairy': true, // Boolean | List only recipes which has dairy.
  'hasMeat': true, // Boolean | List only recipes which has meat (non fish meats).
  'hasCeral': true, // Boolean | List only recipes which has ceral.
  'hasAlcohol': true, // Boolean | List only recipes which has alcohol.
  'sweetFood': true, // Boolean | List only sweet recipes.
  'savoryFood': true, // Boolean | List only savory recipes.
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': false, // Boolean | Should the recipe's ingredient common names be included?
  'includeNutritionPerPortion': false, // Boolean | Should the recipe's nutrition per portion be included?
  'includeGda': false, // Boolean | Should the general daily provision for the recipe be included?
  'includeFoodNames': false, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name)
  'includeFoodId': false // Boolean | Should the recipe's ingredient food id's be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name.
  'offset': 789, // Integer | The offset into search results.
  'limit': 56 // Integer | Limit the number of results returned.
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
apiInstance.pagedSearchRecipes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeName** | **String**| Search the recipe name, used as a wild card on the name column like so; &#39;%name%&#39; | [optional] 
 **fewerCalories** | **String**| Search for recipes that have a less than or equal to &#39;fewercalories&#39; calories per portion. | [optional] 
 **moreCalories** | **String**| Search for recipes that have a greater than &#39;morecalories&#39; calories per portion. | [optional] 
 **ingredient** | **String**| Search the list of ingredients in each recipe. The value is used as a wild card on the ingredient line as typed in by a human operator. | [optional] 
 **foodIds** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **calories** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **protein** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **totalFat** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **vegetarian** | **Boolean**| List only recipes which have ingredients that are vegetarian friendly. | [optional] 
 **veganFriendly** | **Boolean**| List only recipes which have ingredients that are vegan friendly. | [optional] 
 **pescatarian** | **Boolean**| List only recipes which have ingredients that are pescatarianfriendly. | [optional] 
 **glutenFree** | **Boolean**| List only recipes which have ingredients that are gluten free. | [optional] 
 **quickAndEasy** | **Boolean**| List only recipes which are quick and easy to cook. | [optional] 
 **lowFat** | **Boolean**| List only recipes which are low in fat. | [optional] 
 **hasNuts** | **Boolean**| List only recipes which has-nuts. | [optional] 
 **hasEggs** | **Boolean**| List only recipes which has-eggs. | [optional] 
 **hasSugar** | **Boolean**| List only recipes which has high sugar levels. | [optional] 
 **hasFruit** | **Boolean**| List only recipes which has fruit. | [optional] 
 **hasDairy** | **Boolean**| List only recipes which has dairy. | [optional] 
 **hasMeat** | **Boolean**| List only recipes which has meat (non fish meats). | [optional] 
 **hasCeral** | **Boolean**| List only recipes which has ceral. | [optional] 
 **hasAlcohol** | **Boolean**| List only recipes which has alcohol. | [optional] 
 **sweetFood** | **Boolean**| List only sweet recipes. | [optional] 
 **savoryFood** | **Boolean**| List only savory recipes. | [optional] 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] [default to false]
 **includeNutritionPerPortion** | **Boolean**| Should the recipe&#39;s nutrition per portion be included? | [optional] [default to false]
 **includeGda** | **Boolean**| Should the general daily provision for the recipe be included? | [optional] [default to false]
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) | [optional] [default to false]
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. | [optional] [default to false]
 **offset** | **Integer**| The offset into search results. | [optional] 
 **limit** | **Integer**| Limit the number of results returned. | [optional] 
 **sortby** | **String**| The nutrition field to sort by. | [optional] [default to calories]
 **sortdir** | **String**| The sort direction for the results. | [optional] [default to desc]

### Return type

[**PagedRecipeResults**](PagedRecipeResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchRecipes"></a>
# **searchRecipes**
> [Recipe] searchRecipes(opts)

Parse up a list of plain text ingredients and produce an itemised list of foods, amounts (in grams or ml) and nutritional content of the foods. The food parsed by the sous bot may not exactly match the food the human operator intended, so other api end points are available to tweak foods and thus create a more accurate nutritional report for a recipe.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var opts = { 
  'recipeName': "recipeName_example", // String | Search the recipe name, used as a wild card on the name column like so; '%name%'
  'fewerCalories': "fewerCalories_example", // String | Search for recipes that have a less than or equal to 'fewercalories' calories per portion.
  'moreCalories': "moreCalories_example", // String | Search for recipes that have a greater than 'morecalories' calories per portion.
  'ingredient': "ingredient_example", // String | Search the list of ingredients in each recipe. The value is used as a wild card on the ingredient line as typed in by a human operator.
  'foodIds': "foodIds_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'calories': "calories_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'protein': "protein_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'totalFat': "totalFat_example", // String | A comma separated list of food IDs which each recipe MUST contain.
  'vegetarian': true, // Boolean | List only recipes which have ingredients that are vegetarian friendly.
  'veganFriendly': true, // Boolean | List only recipes which have ingredients that are vegan friendly.
  'pescatarian': true, // Boolean | List only recipes which have ingredients that are pescatarianfriendly.
  'glutenFree': true, // Boolean | List only recipes which have ingredients that are gluten free.
  'quickAndEasy': true, // Boolean | List only recipes which are quick and easy to cook.
  'lowFat': true, // Boolean | List only recipes which are low in fat.
  'hasNuts': true, // Boolean | List only recipes which has-nuts.
  'hasEggs': true, // Boolean | List only recipes which has-eggs.
  'hasSugar': true, // Boolean | List only recipes which has high sugar levels.
  'hasFruit': true, // Boolean | List only recipes which has fruit.
  'hasDairy': true, // Boolean | List only recipes which has dairy.
  'hasMeat': true, // Boolean | List only recipes which has meat (non fish meats).
  'hasCeral': true, // Boolean | List only recipes which has ceral.
  'hasAlcohol': true, // Boolean | List only recipes which has alcohol.
  'sweetFood': true, // Boolean | List only sweet recipes.
  'savoryFood': true, // Boolean | List only savory recipes.
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': false, // Boolean | Should the recipe's ingredient common names be included?
  'includeNutritionPerPortion': false, // Boolean | Should the recipe's nutrition per portion be included?
  'includeGda': false, // Boolean | Should the general daily provision for the recipe be included?
  'includeFoodNames': false, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name)
  'includeFoodId': false // Boolean | Should the recipe's ingredient food id's be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name.
  'offset': 789, // Integer | The offset into search results.
  'limit': 56 // Integer | Limit the number of results returned.
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
apiInstance.searchRecipes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeName** | **String**| Search the recipe name, used as a wild card on the name column like so; &#39;%name%&#39; | [optional] 
 **fewerCalories** | **String**| Search for recipes that have a less than or equal to &#39;fewercalories&#39; calories per portion. | [optional] 
 **moreCalories** | **String**| Search for recipes that have a greater than &#39;morecalories&#39; calories per portion. | [optional] 
 **ingredient** | **String**| Search the list of ingredients in each recipe. The value is used as a wild card on the ingredient line as typed in by a human operator. | [optional] 
 **foodIds** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **calories** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **protein** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **totalFat** | **String**| A comma separated list of food IDs which each recipe MUST contain. | [optional] 
 **vegetarian** | **Boolean**| List only recipes which have ingredients that are vegetarian friendly. | [optional] 
 **veganFriendly** | **Boolean**| List only recipes which have ingredients that are vegan friendly. | [optional] 
 **pescatarian** | **Boolean**| List only recipes which have ingredients that are pescatarianfriendly. | [optional] 
 **glutenFree** | **Boolean**| List only recipes which have ingredients that are gluten free. | [optional] 
 **quickAndEasy** | **Boolean**| List only recipes which are quick and easy to cook. | [optional] 
 **lowFat** | **Boolean**| List only recipes which are low in fat. | [optional] 
 **hasNuts** | **Boolean**| List only recipes which has-nuts. | [optional] 
 **hasEggs** | **Boolean**| List only recipes which has-eggs. | [optional] 
 **hasSugar** | **Boolean**| List only recipes which has high sugar levels. | [optional] 
 **hasFruit** | **Boolean**| List only recipes which has fruit. | [optional] 
 **hasDairy** | **Boolean**| List only recipes which has dairy. | [optional] 
 **hasMeat** | **Boolean**| List only recipes which has meat (non fish meats). | [optional] 
 **hasCeral** | **Boolean**| List only recipes which has ceral. | [optional] 
 **hasAlcohol** | **Boolean**| List only recipes which has alcohol. | [optional] 
 **sweetFood** | **Boolean**| List only sweet recipes. | [optional] 
 **savoryFood** | **Boolean**| List only savory recipes. | [optional] 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] [default to false]
 **includeNutritionPerPortion** | **Boolean**| Should the recipe&#39;s nutrition per portion be included? | [optional] [default to false]
 **includeGda** | **Boolean**| Should the general daily provision for the recipe be included? | [optional] [default to false]
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) | [optional] [default to false]
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. | [optional] [default to false]
 **offset** | **Integer**| The offset into search results. | [optional] 
 **limit** | **Integer**| Limit the number of results returned. | [optional] 
 **sortby** | **String**| The nutrition field to sort by. | [optional] [default to calories]
 **sortdir** | **String**| The sort direction for the results. | [optional] [default to desc]

### Return type

[**[Recipe]**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchRecipesByFoodIdsWithNutrition"></a>
# **searchRecipesByFoodIdsWithNutrition**
> [Recipe] searchRecipesByFoodIdsWithNutrition(foodIds, opts)

Search for recipes with particular ingredients

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RecipeApi();

var foodIds = "foodIds_example"; // String | A comma separated list of food IDs which each recipe MUST contain.

var opts = { 
  'name': "name_example", // String | Search the recipe name, used as a wild card on the name column like so; '%name%'
  'includeNutrition': false, // Boolean | Should the recipe's nutrition field be populated?
  'includeCommonNames': true, // Boolean | Should the recipe's ingredient common names be included?
  'includeFoodNames': true, // Boolean | Should the recipe's ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name)
  'includeFoodId': true, // Boolean | Should the recipe's ingredient food id's be included?
  'offset': 789, // Integer | The offset into search results.
  'limit': 56, // Integer | Limit the number of results returned.
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
apiInstance.searchRecipesByFoodIdsWithNutrition(foodIds, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodIds** | **String**| A comma separated list of food IDs which each recipe MUST contain. | 
 **name** | **String**| Search the recipe name, used as a wild card on the name column like so; &#39;%name%&#39; | [optional] 
 **includeNutrition** | **Boolean**| Should the recipe&#39;s nutrition field be populated? | [optional] [default to false]
 **includeCommonNames** | **Boolean**| Should the recipe&#39;s ingredient common names be included? | [optional] 
 **includeFoodNames** | **Boolean**| Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) | [optional] 
 **includeFoodId** | **Boolean**| Should the recipe&#39;s ingredient food id&#39;s be included? | [optional] 
 **offset** | **Integer**| The offset into search results. | [optional] 
 **limit** | **Integer**| Limit the number of results returned. | [optional] 
 **sortby** | **String**| The nutrition field to sort by. | [optional] [default to calories]
 **sortdir** | **String**| The sort direction for the results. | [optional] [default to desc]

### Return type

[**[Recipe]**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

