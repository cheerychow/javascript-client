# CheeryChowRecipeApi.ScratchrecipeApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeIngredientForScratchPadRecipe**](ScratchrecipeApi.md#changeIngredientForScratchPadRecipe) | **PUT** /scratch-recipe/{recipeId}/ingredient/{ingredient-id} | Adds new ingredients to a scratch recipe
[**createAScratchPadRecipe**](ScratchrecipeApi.md#createAScratchPadRecipe) | **POST** /scratch-recipe | Create a temp recipe from plain english ingredients.
[**deleteScratchPadRecipe**](ScratchrecipeApi.md#deleteScratchPadRecipe) | **DELETE** /scratch-recipe/{recipeId} | Delete a scratch pad recipe
[**getAllMyScratchRecipes**](ScratchrecipeApi.md#getAllMyScratchRecipes) | **GET** /scratch-recipe | Get all of my scratch recipes
[**getAllMyScratchRecipesAndNutrition**](ScratchrecipeApi.md#getAllMyScratchRecipesAndNutrition) | **GET** /scratch-recipe/nutrition | Get all of my scratch recipes, including the nutrition for the recipe
[**getAllMyScratchRecipesSingular**](ScratchrecipeApi.md#getAllMyScratchRecipesSingular) | **GET** /scratch-recipe/{recipeId} | Get a specific scratch pad recipe
[**getNutritionForSpecificScratchRecipe**](ScratchrecipeApi.md#getNutritionForSpecificScratchRecipe) | **GET** /scratch-recipe/{recipeId}/nutrition | Get the nutritional information for a specific Scratch Recipe
[**getScratchRecipeIngredientNames**](ScratchrecipeApi.md#getScratchRecipeIngredientNames) | **GET** /scratch-recipe/{recipeId}/ingredient-names | Get a list of the common names for a particular recipe
[**putScratchPadRecipe**](ScratchrecipeApi.md#putScratchPadRecipe) | **POST** /scratch-recipe/{recipeId} | Save changes to a scratch pad recipe
[**removeIngredientFromScratchPadRecipe**](ScratchrecipeApi.md#removeIngredientFromScratchPadRecipe) | **DELETE** /scratch-recipe/{recipeId}/ingredient/{ingredient-id} | Removes an ingredient from a scratch recipe
[**saveIngredientsInScratchRecipe**](ScratchrecipeApi.md#saveIngredientsInScratchRecipe) | **POST** /scratch-recipe/{recipeId}/ingredient | Adds new ingredients to a scratch recipe


<a name="changeIngredientForScratchPadRecipe"></a>
# **changeIngredientForScratchPadRecipe**
> Ingredient changeIngredientForScratchPadRecipe(recipeId, ingredientId, ingredient)

Adds new ingredients to a scratch recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the scratch pad recipe you want to change

var ingredientId = 789; // Integer | The ID of the ingredient you want to make changes to.

var ingredient = new CheeryChowRecipeApi.Ingredient(); // Ingredient | The ingredient to be changed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeIngredientForScratchPadRecipe(recipeId, ingredientId, ingredient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the scratch pad recipe you want to change | 
 **ingredientId** | **Integer**| The ID of the ingredient you want to make changes to. | 
 **ingredient** | [**Ingredient**](Ingredient.md)| The ingredient to be changed | 

### Return type

[**Ingredient**](Ingredient.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAScratchPadRecipe"></a>
# **createAScratchPadRecipe**
> Recipe createAScratchPadRecipe(newrecipe)

Create a temp recipe from plain english ingredients.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var newrecipe = new CheeryChowRecipeApi.Recipe(); // Recipe | The recipe to be created.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAScratchPadRecipe(newrecipe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newrecipe** | [**Recipe**](Recipe.md)| The recipe to be created. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScratchPadRecipe"></a>
# **deleteScratchPadRecipe**
> RecipeserverBasicauthHttpAPIResponse deleteScratchPadRecipe(recipeId)

Delete a scratch pad recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the recipe you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteScratchPadRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the recipe you want to delete | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllMyScratchRecipes"></a>
# **getAllMyScratchRecipes**
> [Recipe] getAllMyScratchRecipes(opts)

Get all of my scratch recipes

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

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
apiInstance.getAllMyScratchRecipes(opts, callback);
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

<a name="getAllMyScratchRecipesAndNutrition"></a>
# **getAllMyScratchRecipesAndNutrition**
> [Recipe] getAllMyScratchRecipesAndNutrition(opts)

Get all of my scratch recipes, including the nutrition for the recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

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
apiInstance.getAllMyScratchRecipesAndNutrition(opts, callback);
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

<a name="getAllMyScratchRecipesSingular"></a>
# **getAllMyScratchRecipesSingular**
> Recipe getAllMyScratchRecipesSingular(recipeId)

Get a specific scratch pad recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the recipe that you want to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMyScratchRecipesSingular(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the recipe that you want to fetch | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNutritionForSpecificScratchRecipe"></a>
# **getNutritionForSpecificScratchRecipe**
> Recipe getNutritionForSpecificScratchRecipe(recipeId)

Get the nutritional information for a specific Scratch Recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the recipe that you want to change


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNutritionForSpecificScratchRecipe(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the recipe that you want to change | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScratchRecipeIngredientNames"></a>
# **getScratchRecipeIngredientNames**
> [&#39;String&#39;] getScratchRecipeIngredientNames(recipeId)

Get a list of the common names for a particular recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | Recipe ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScratchRecipeIngredientNames(recipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| Recipe ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putScratchPadRecipe"></a>
# **putScratchPadRecipe**
> Recipe putScratchPadRecipe(recipeId, ingredient)

Save changes to a scratch pad recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the scratch pad recipe you want to change

var ingredient = new CheeryChowRecipeApi.Recipe(); // Recipe | The recipe data to be changed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putScratchPadRecipe(recipeId, ingredient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the scratch pad recipe you want to change | 
 **ingredient** | [**Recipe**](Recipe.md)| The recipe data to be changed. | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeIngredientFromScratchPadRecipe"></a>
# **removeIngredientFromScratchPadRecipe**
> RecipeserverBasicauthHttpAPIResponse removeIngredientFromScratchPadRecipe(recipeId, ingredientId)

Removes an ingredient from a scratch recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the recipe that the ingredient belongs to

var ingredientId = 789; // Integer | The ID of the ingredient that you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeIngredientFromScratchPadRecipe(recipeId, ingredientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the recipe that the ingredient belongs to | 
 **ingredientId** | **Integer**| The ID of the ingredient that you want to delete | 

### Return type

[**RecipeserverBasicauthHttpAPIResponse**](RecipeserverBasicauthHttpAPIResponse.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveIngredientsInScratchRecipe"></a>
# **saveIngredientsInScratchRecipe**
> [Ingredient] saveIngredientsInScratchRecipe(recipeId, ingredient)

Adds new ingredients to a scratch recipe

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.ScratchrecipeApi();

var recipeId = 789; // Integer | The ID of the recipe you want to change

var ingredient = [new CheeryChowRecipeApi.Ingredient()]; // [Ingredient] | The ingredient to be added to the recipe.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveIngredientsInScratchRecipe(recipeId, ingredient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeId** | **Integer**| The ID of the recipe you want to change | 
 **ingredient** | [**[Ingredient]**](Ingredient.md)| The ingredient to be added to the recipe. | 

### Return type

[**[Ingredient]**](Ingredient.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

