# CheeryChowRecipeApi.RdaApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRDAData**](RdaApi.md#getRDAData) | **GET** /rda/{country}/{gender} | Get the rating for a recipe, by it&#39;s id


<a name="getRDAData"></a>
# **getRDAData**
> RDA getRDAData(country, gender)

Get the rating for a recipe, by it&#39;s id

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RdaApi();

var country = "country_example"; // String | The country code which the RDA should reflect.

var gender = "gender_example"; // String | The gender for which the RDA should apply.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRDAData(country, gender, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The country code which the RDA should reflect. | 
 **gender** | **String**| The gender for which the RDA should apply. | 

### Return type

[**RDA**](RDA.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

