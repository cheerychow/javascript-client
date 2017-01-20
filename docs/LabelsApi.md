# CheeryChowRecipeApi.LabelsApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nutrientAbbrevs**](LabelsApi.md#nutrientAbbrevs) | **GET** /labels/nutrient-abbrevs | List the nutrient&#39;s field names that appear in json objects
[**nutrientDefinitions**](LabelsApi.md#nutrientDefinitions) | **GET** /labels/nutrient-definitions | List the nutrient&#39;s currently known to cheery chow.


<a name="nutrientAbbrevs"></a>
# **nutrientAbbrevs**
> [&#39;String&#39;] nutrientAbbrevs()

List the nutrient&#39;s field names that appear in json objects

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.LabelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nutrientAbbrevs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nutrientDefinitions"></a>
# **nutrientDefinitions**
> [NutrDef] nutrientDefinitions()

List the nutrient&#39;s currently known to cheery chow.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.LabelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nutrientDefinitions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[NutrDef]**](NutrDef.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

