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
    define(['ApiClient', 'model/Ingredient', 'model/HttpAPIError', 'model/Recipe', 'model/RecipeserverBasicauthHttpAPIResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Ingredient'), require('../model/HttpAPIError'), require('../model/Recipe'), require('../model/RecipeserverBasicauthHttpAPIResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.ScratchrecipeApi = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.Ingredient, root.CheeryChowRecipeApi.HttpAPIError, root.CheeryChowRecipeApi.Recipe, root.CheeryChowRecipeApi.RecipeserverBasicauthHttpAPIResponse);
  }
}(this, function(ApiClient, Ingredient, HttpAPIError, Recipe, RecipeserverBasicauthHttpAPIResponse) {
  'use strict';

  /**
   * Scratchrecipe service.
   * @module api/ScratchrecipeApi
   * @version 0.0.2
   */

  /**
   * Constructs a new ScratchrecipeApi. 
   * @alias module:api/ScratchrecipeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the changeIngredientForScratchPadRecipe operation.
     * @callback module:api/ScratchrecipeApi~changeIngredientForScratchPadRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Ingredient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds new ingredients to a scratch recipe
     * @param {Integer} recipeId The ID of the scratch pad recipe you want to change
     * @param {Integer} ingredientId The ID of the ingredient you want to make changes to.
     * @param {module:model/Ingredient} ingredient The ingredient to be changed
     * @param {module:api/ScratchrecipeApi~changeIngredientForScratchPadRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Ingredient}
     */
    this.changeIngredientForScratchPadRecipe = function(recipeId, ingredientId, ingredient, callback) {
      var postBody = ingredient;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling changeIngredientForScratchPadRecipe";
      }

      // verify the required parameter 'ingredientId' is set
      if (ingredientId == undefined || ingredientId == null) {
        throw "Missing the required parameter 'ingredientId' when calling changeIngredientForScratchPadRecipe";
      }

      // verify the required parameter 'ingredient' is set
      if (ingredient == undefined || ingredient == null) {
        throw "Missing the required parameter 'ingredient' when calling changeIngredientForScratchPadRecipe";
      }


      var pathParams = {
        'recipeId': recipeId,
        'ingredient-id': ingredientId
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
      var returnType = Ingredient;

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}/ingredient/{ingredient-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createAScratchPadRecipe operation.
     * @callback module:api/ScratchrecipeApi~createAScratchPadRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a temp recipe from plain english ingredients.
     * @param {module:model/Recipe} newrecipe The recipe to be created.
     * @param {module:api/ScratchrecipeApi~createAScratchPadRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipe}
     */
    this.createAScratchPadRecipe = function(newrecipe, callback) {
      var postBody = newrecipe;

      // verify the required parameter 'newrecipe' is set
      if (newrecipe == undefined || newrecipe == null) {
        throw "Missing the required parameter 'newrecipe' when calling createAScratchPadRecipe";
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
      var returnType = Recipe;

      return this.apiClient.callApi(
        '/scratch-recipe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScratchPadRecipe operation.
     * @callback module:api/ScratchrecipeApi~deleteScratchPadRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipeserverBasicauthHttpAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a scratch pad recipe
     * @param {Integer} recipeId The ID of the recipe you want to delete
     * @param {module:api/ScratchrecipeApi~deleteScratchPadRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipeserverBasicauthHttpAPIResponse}
     */
    this.deleteScratchPadRecipe = function(recipeId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling deleteScratchPadRecipe";
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
        '/scratch-recipe/{recipeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMyScratchRecipes operation.
     * @callback module:api/ScratchrecipeApi~getAllMyScratchRecipesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Recipe>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all of my scratch recipes
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNutrition Should the recipe&#39;s nutrition field be populated? (default to false)
     * @param {Boolean} opts.includeCommonNames Should the recipe&#39;s ingredient common names be included? (default to false)
     * @param {Boolean} opts.includeNutritionPerPortion Should the recipe&#39;s nutrition per portion be included? (default to false)
     * @param {Boolean} opts.includeGda Should the general daily provision for the recipe be included? (default to false)
     * @param {Boolean} opts.includeFoodNames Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) (default to false)
     * @param {Boolean} opts.includeFoodId Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. (default to false)
     * @param {Integer} opts.offset The offset into search results.
     * @param {Integer} opts.limit Limit the number of results returned.
     * @param {module:api/ScratchrecipeApi~getAllMyScratchRecipesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Recipe>}
     */
    this.getAllMyScratchRecipes = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'include-nutrition': opts['includeNutrition'],
        'include-common-names': opts['includeCommonNames'],
        'include-nutrition-per-portion': opts['includeNutritionPerPortion'],
        'include-gda': opts['includeGda'],
        'include-food-names': opts['includeFoodNames'],
        'include-food-id': opts['includeFoodId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['chow_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Recipe];

      return this.apiClient.callApi(
        '/scratch-recipe', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMyScratchRecipesAndNutrition operation.
     * @callback module:api/ScratchrecipeApi~getAllMyScratchRecipesAndNutritionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Recipe>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all of my scratch recipes, including the nutrition for the recipe
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNutrition Should the recipe&#39;s nutrition field be populated? (default to false)
     * @param {Boolean} opts.includeCommonNames Should the recipe&#39;s ingredient common names be included? (default to false)
     * @param {Boolean} opts.includeNutritionPerPortion Should the recipe&#39;s nutrition per portion be included? (default to false)
     * @param {Boolean} opts.includeGda Should the general daily provision for the recipe be included? (default to false)
     * @param {Boolean} opts.includeFoodNames Should the recipe&#39;s ingredient food names be included (this is different from the common names since the storage is a map, where key is the foodId and value is the ingredient common name) (default to false)
     * @param {Boolean} opts.includeFoodId Should the recipe&#39;s ingredient food id&#39;s be included? This can be useful if you need the names of foods as a map, where the key is the food id, the value the food name. (default to false)
     * @param {Integer} opts.offset The offset into search results.
     * @param {Integer} opts.limit Limit the number of results returned.
     * @param {module:api/ScratchrecipeApi~getAllMyScratchRecipesAndNutritionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Recipe>}
     */
    this.getAllMyScratchRecipesAndNutrition = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'include-nutrition': opts['includeNutrition'],
        'include-common-names': opts['includeCommonNames'],
        'include-nutrition-per-portion': opts['includeNutritionPerPortion'],
        'include-gda': opts['includeGda'],
        'include-food-names': opts['includeFoodNames'],
        'include-food-id': opts['includeFoodId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['chow_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Recipe];

      return this.apiClient.callApi(
        '/scratch-recipe/nutrition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMyScratchRecipesSingular operation.
     * @callback module:api/ScratchrecipeApi~getAllMyScratchRecipesSingularCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific scratch pad recipe
     * @param {Integer} recipeId The ID of the recipe that you want to fetch
     * @param {module:api/ScratchrecipeApi~getAllMyScratchRecipesSingularCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipe}
     */
    this.getAllMyScratchRecipesSingular = function(recipeId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling getAllMyScratchRecipesSingular";
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
      var returnType = Recipe;

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNutritionForSpecificScratchRecipe operation.
     * @callback module:api/ScratchrecipeApi~getNutritionForSpecificScratchRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the nutritional information for a specific Scratch Recipe
     * @param {Integer} recipeId The ID of the recipe that you want to change
     * @param {module:api/ScratchrecipeApi~getNutritionForSpecificScratchRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipe}
     */
    this.getNutritionForSpecificScratchRecipe = function(recipeId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling getNutritionForSpecificScratchRecipe";
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
      var returnType = Recipe;

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}/nutrition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScratchRecipeIngredientNames operation.
     * @callback module:api/ScratchrecipeApi~getScratchRecipeIngredientNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of the common names for a particular recipe
     * @param {Integer} recipeId Recipe ID
     * @param {module:api/ScratchrecipeApi~getScratchRecipeIngredientNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getScratchRecipeIngredientNames = function(recipeId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling getScratchRecipeIngredientNames";
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}/ingredient-names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putScratchPadRecipe operation.
     * @callback module:api/ScratchrecipeApi~putScratchPadRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save changes to a scratch pad recipe
     * @param {Integer} recipeId The ID of the scratch pad recipe you want to change
     * @param {module:model/Recipe} ingredient The recipe data to be changed.
     * @param {module:api/ScratchrecipeApi~putScratchPadRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipe}
     */
    this.putScratchPadRecipe = function(recipeId, ingredient, callback) {
      var postBody = ingredient;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling putScratchPadRecipe";
      }

      // verify the required parameter 'ingredient' is set
      if (ingredient == undefined || ingredient == null) {
        throw "Missing the required parameter 'ingredient' when calling putScratchPadRecipe";
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
      var returnType = Recipe;

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeIngredientFromScratchPadRecipe operation.
     * @callback module:api/ScratchrecipeApi~removeIngredientFromScratchPadRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipeserverBasicauthHttpAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes an ingredient from a scratch recipe
     * @param {Integer} recipeId The ID of the recipe that the ingredient belongs to
     * @param {Integer} ingredientId The ID of the ingredient that you want to delete
     * @param {module:api/ScratchrecipeApi~removeIngredientFromScratchPadRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipeserverBasicauthHttpAPIResponse}
     */
    this.removeIngredientFromScratchPadRecipe = function(recipeId, ingredientId, callback) {
      var postBody = null;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling removeIngredientFromScratchPadRecipe";
      }

      // verify the required parameter 'ingredientId' is set
      if (ingredientId == undefined || ingredientId == null) {
        throw "Missing the required parameter 'ingredientId' when calling removeIngredientFromScratchPadRecipe";
      }


      var pathParams = {
        'recipeId': recipeId,
        'ingredient-id': ingredientId
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
        '/scratch-recipe/{recipeId}/ingredient/{ingredient-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveIngredientsInScratchRecipe operation.
     * @callback module:api/ScratchrecipeApi~saveIngredientsInScratchRecipeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ingredient>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds new ingredients to a scratch recipe
     * @param {Integer} recipeId The ID of the recipe you want to change
     * @param {Array.<module:model/Ingredient>} ingredient The ingredient to be added to the recipe.
     * @param {module:api/ScratchrecipeApi~saveIngredientsInScratchRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ingredient>}
     */
    this.saveIngredientsInScratchRecipe = function(recipeId, ingredient, callback) {
      var postBody = ingredient;

      // verify the required parameter 'recipeId' is set
      if (recipeId == undefined || recipeId == null) {
        throw "Missing the required parameter 'recipeId' when calling saveIngredientsInScratchRecipe";
      }

      // verify the required parameter 'ingredient' is set
      if (ingredient == undefined || ingredient == null) {
        throw "Missing the required parameter 'ingredient' when calling saveIngredientsInScratchRecipe";
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
      var returnType = [Ingredient];

      return this.apiClient.callApi(
        '/scratch-recipe/{recipeId}/ingredient', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
