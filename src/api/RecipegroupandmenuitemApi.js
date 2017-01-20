/**
 * Cheery Chow Recipe API
 * Nutrition and recipe nutrition management API.
 *
 * OpenAPI spec version: 0.0.2
 * Contact: john@cheerychow.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HttpAPIError', 'model/MenuItem', 'model/RecipeGroupInserter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HttpAPIError'), require('../model/MenuItem'), require('../model/RecipeGroupInserter'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.RecipegroupandmenuitemApi = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.HttpAPIError, root.CheeryChowRecipeApi.MenuItem, root.CheeryChowRecipeApi.RecipeGroupInserter);
  }
}(this, function(ApiClient, HttpAPIError, MenuItem, RecipeGroupInserter) {
  'use strict';

  /**
   * Recipegroupandmenuitem service.
   * @module api/RecipegroupandmenuitemApi
   * @version 0.0.2
   */

  /**
   * Constructs a new RecipegroupandmenuitemApi. 
   * @alias module:api/RecipegroupandmenuitemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the postRecipeGroupAndMenuItem operation.
     * @callback module:api/RecipegroupandmenuitemApi~postRecipeGroupAndMenuItemCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MenuItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rate a recipe out of 5
     * @param {module:model/RecipeGroupInserter} recipeGroup The recipe group data. Some additional paramaters are provide finer control over the recipe group insertion. Such as overwriting a previous slug, making sure only one ever exists, or is inserted 
     * @param {module:api/RecipegroupandmenuitemApi~postRecipeGroupAndMenuItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MenuItem>}
     */
    this.postRecipeGroupAndMenuItem = function(recipeGroup, callback) {
      var postBody = recipeGroup;

      // verify the required parameter 'recipeGroup' is set
      if (recipeGroup == undefined || recipeGroup == null) {
        throw "Missing the required parameter 'recipeGroup' when calling postRecipeGroupAndMenuItem";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['chow_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [MenuItem];

      return this.apiClient.callApi(
        '/recipe-group-and-menu-item', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));