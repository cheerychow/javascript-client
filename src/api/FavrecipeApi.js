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
    define(['ApiClient', 'model/HttpAPIError', 'model/FavRecipe', 'model/RecipeserverBasicauthHttpAPIResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HttpAPIError'), require('../model/FavRecipe'), require('../model/RecipeserverBasicauthHttpAPIResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.FavrecipeApi = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.HttpAPIError, root.CheeryChowRecipeApi.FavRecipe, root.CheeryChowRecipeApi.RecipeserverBasicauthHttpAPIResponse);
  }
}(this, function(ApiClient, HttpAPIError, FavRecipe, RecipeserverBasicauthHttpAPIResponse) {
  'use strict';

  /**
   * Favrecipe service.
   * @module api/FavrecipeApi
   * @version 0.0.2
   */

  /**
   * Constructs a new FavrecipeApi. 
   * @alias module:api/FavrecipeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the favoriteARecipe operation.
     * @callback module:api/FavrecipeApi~favoriteARecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavRecipe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Favorite a recipe
     * @param {module:model/FavRecipe} recipeId The recipe information (either the recipe&#39;s url or the recipeId from the cheerychow DB) you want to favourite..
     * @param {module:api/FavrecipeApi~favoriteARecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FavRecipe}
     */
    this.favoriteARecipe = function(recipeId, callback) {
      var postBody = recipeId;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling favoriteARecipe";
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
      var returnType = FavRecipe;

      return this.apiClient.callApi(
        '/fav-recipe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the favoriteRecipes operation.
     * @callback module:api/FavrecipeApi~favoriteRecipesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FavRecipe>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the logged in user&#39;s fav recipes.
     * @param {module:api/FavrecipeApi~favoriteRecipesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FavRecipe>}
     */
    this.favoriteRecipes = function(callback) {
      var postBody = null;


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
      var returnType = [FavRecipe];

      return this.apiClient.callApi(
        '/fav-recipe', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unfavoriteARecipeByID operation.
     * @callback module:api/FavrecipeApi~unfavoriteARecipeByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipeserverBasicauthHttpAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove1 a favorite recipe entry into the database, for a particular recipe.
     * @param {Integer} favRecipeId Favorite recipe ID to be deleted
     * @param {module:api/FavrecipeApi~unfavoriteARecipeByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipeserverBasicauthHttpAPIResponse}
     */
    this.unfavoriteARecipeByID = function(favRecipeId, callback) {
      var postBody = null;

      // verify the required parameter 'favRecipeId' is set
      if (favRecipeId == undefined || favRecipeId == null) {
        throw "Missing the required parameter 'favRecipeId' when calling unfavoriteARecipeByID";
      }


      var pathParams = {
        'fav-recipeId': favRecipeId
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
      var returnType = RecipeserverBasicauthHttpAPIResponse;

      return this.apiClient.callApi(
        '/fav-recipe/by-id/{fav-recipeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unfavoriteARecipeByRecipeID operation.
     * @callback module:api/FavrecipeApi~unfavoriteARecipeByRecipeIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipeserverBasicauthHttpAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a favorite recipe entry into the database, for a particular recipe.
     * @param {Integer} recipeId The recipe ID to be unfavourited.
     * @param {module:api/FavrecipeApi~unfavoriteARecipeByRecipeIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipeserverBasicauthHttpAPIResponse}
     */
    this.unfavoriteARecipeByRecipeID = function(recipeId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling unfavoriteARecipeByRecipeID";
      }


      var pathParams = {
        'recipeId': recipeId
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
      var returnType = RecipeserverBasicauthHttpAPIResponse;

      return this.apiClient.callApi(
        '/fav-recipe/by-recipe-id/{recipeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unfavoriteRecipeByUrl operation.
     * @callback module:api/FavrecipeApi~unfavoriteRecipeByUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipeserverBasicauthHttpAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove3 a favorite recipe entry into the database, for a particular recipe.
     * @param {String} recipeUrl The recipe url you want to unfavourite.
     * @param {module:api/FavrecipeApi~unfavoriteRecipeByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipeserverBasicauthHttpAPIResponse}
     */
    this.unfavoriteRecipeByUrl = function(recipeUrl, callback) {
      var postBody = null;

      // verify the required parameter 'recipeUrl' is set
      if (recipeUrl == undefined || recipeUrl == null) {
        throw "Missing the required parameter 'recipeUrl' when calling unfavoriteRecipeByUrl";
      }


      var pathParams = {
        'recipe-url': recipeUrl
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
      var returnType = RecipeserverBasicauthHttpAPIResponse;

      return this.apiClient.callApi(
        '/fav-recipe/by-recipe-url/{recipe-url}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));