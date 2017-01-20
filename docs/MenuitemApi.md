# CheeryChowRecipeApi.MenuitemApi

All URIs are relative to *http://alphaapi.cheerychow.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMenuItem**](MenuitemApi.md#deleteMenuItem) | **DELETE** /menu-item/{menuItemId} | Delete a menu item
[**getMenuItemsInRecipeGroup**](MenuitemApi.md#getMenuItemsInRecipeGroup) | **GET** /recipe-groups/{recipeGroupId}/menu-items | Get the menu items in the recipe group
[**getSingleMenuItem**](MenuitemApi.md#getSingleMenuItem) | **GET** /menu-item/{menuItemId} | Get a single menu item by it&#39;s primary key.
[**postMenuItem**](MenuitemApi.md#postMenuItem) | **POST** /recipe-groups/{recipeGroupId}/menu-items | Rate a recipe out of 5
[**putMenuItem**](MenuitemApi.md#putMenuItem) | **PUT** /menu-item/{menuItemId} | Make changes to a menu item already in the database


<a name="deleteMenuItem"></a>
# **deleteMenuItem**
> MenuItem deleteMenuItem(menuItemId)

Delete a menu item

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.MenuitemApi();

var menuItemId = 789; // Integer | The primary key of the menu item to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMenuItem(menuItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuItemId** | **Integer**| The primary key of the menu item to be deleted. | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMenuItemsInRecipeGroup"></a>
# **getMenuItemsInRecipeGroup**
> [MenuItem] getMenuItemsInRecipeGroup(recipeGroupId)

Get the menu items in the recipe group

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.MenuitemApi();

var recipeGroupId = 789; // Integer | The group ID required


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemsInRecipeGroup(recipeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroupId** | **Integer**| The group ID required | 

### Return type

[**[MenuItem]**](MenuItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSingleMenuItem"></a>
# **getSingleMenuItem**
> MenuItem getSingleMenuItem(menuItemId)

Get a single menu item by it&#39;s primary key.

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');

var apiInstance = new CheeryChowRecipeApi.MenuitemApi();

var menuItemId = 789; // Integer | The id of the menu item to be fetched.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSingleMenuItem(menuItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuItemId** | **Integer**| The id of the menu item to be fetched. | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postMenuItem"></a>
# **postMenuItem**
> MenuItem postMenuItem(recipeGroupId, menuItem)

Rate a recipe out of 5

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.MenuitemApi();

var recipeGroupId = 789; // Integer | The group ID required

var menuItem = new CheeryChowRecipeApi.MenuItem(); // MenuItem | The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postMenuItem(recipeGroupId, menuItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipeGroupId** | **Integer**| The group ID required | 
 **menuItem** | [**MenuItem**](MenuItem.md)| The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted  | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMenuItem"></a>
# **putMenuItem**
> MenuItem putMenuItem(menuItemId, theMenuItem)

Make changes to a menu item already in the database

### Example
```javascript
var CheeryChowRecipeApi = require('cheery_chow_recipe_api');
var defaultClient = CheeryChowRecipeApi.ApiClient.default;

// Configure API key authorization: chow_auth
var chow_auth = defaultClient.authentications['chow_auth'];
chow_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//chow_auth.apiKeyPrefix = 'Token';

var apiInstance = new CheeryChowRecipeApi.MenuitemApi();

var menuItemId = 789; // Integer | The menu item ID of the item you want to change.

var theMenuItem = new CheeryChowRecipeApi.MenuItem(); // MenuItem | The menu item data to be changed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putMenuItem(menuItemId, theMenuItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuItemId** | **Integer**| The menu item ID of the item you want to change. | 
 **theMenuItem** | [**MenuItem**](MenuItem.md)| The menu item data to be changed. | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[chow_auth](../README.md#chow_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

