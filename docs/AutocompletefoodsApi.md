# CheeryChowRecipeApi.AutocompletefoodsApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**showFoodsContaining**](AutocompletefoodsApi.md#showFoodsContaining) | **GET** /autocomplete-foods/{search} | Simple wildcard food search.


<a name="showFoodsContaining"></a>
# **showFoodsContaining**
> {&#39;String&#39;: &#39;String&#39;} showFoodsContaining(search)

Simple wildcard food search.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.AutocompletefoodsApi();

var search = "search_example"; // String | Food ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showFoodsContaining(search, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Food ID | 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

