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
    define(['ApiClient', 'model/HttpAPIError', 'model/NutrDef'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HttpAPIError'), require('../model/NutrDef'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.LabelsApi = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.HttpAPIError, root.CheeryChowRecipeApi.NutrDef);
  }
}(this, function(ApiClient, HttpAPIError, NutrDef) {
  'use strict';

  /**
   * Labels service.
   * @module api/LabelsApi
   * @version 0.0.2
   */

  /**
   * Constructs a new LabelsApi. 
   * @alias module:api/LabelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the nutrientAbbrevs operation.
     * @callback module:api/LabelsApi~nutrientAbbrevsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the nutrient&#39;s field names that appear in json objects
     * @param {module:api/LabelsApi~nutrientAbbrevsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.nutrientAbbrevs = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/labels/nutrient-abbrevs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nutrientDefinitions operation.
     * @callback module:api/LabelsApi~nutrientDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NutrDef>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the nutrient&#39;s currently known to cheery chow.
     * @param {module:api/LabelsApi~nutrientDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NutrDef>}
     */
    this.nutrientDefinitions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [NutrDef];

      return this.apiClient.callApi(
        '/labels/nutrient-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
