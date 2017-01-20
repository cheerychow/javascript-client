# CheeryChowRecipeApi.RequestapikeyApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestApiKey**](RequestapikeyApi.md#requestApiKey) | **GET** /request-apikey | Get an API key


<a name="requestApiKey"></a>
# **requestApiKey**
> ApiKey requestApiKey()

Get an API key

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.RequestapikeyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestApiKey(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

