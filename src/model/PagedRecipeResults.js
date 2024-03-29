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
    define(['ApiClient', 'model/Recipe'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Recipe'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.PagedRecipeResults = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.Recipe);
  }
}(this, function(ApiClient, Recipe) {
  'use strict';




  /**
   * The PagedRecipeResults model module.
   * @module model/PagedRecipeResults
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>PagedRecipeResults</code>.
   * @alias module:model/PagedRecipeResults
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PagedRecipeResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PagedRecipeResults} obj Optional instance to populate.
   * @return {module:model/PagedRecipeResults} The populated <code>PagedRecipeResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Recipe]);
      }
      if (data.hasOwnProperty('totalRows')) {
        obj['totalRows'] = ApiClient.convertToType(data['totalRows'], 'Integer');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Integer');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Recipe>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * @member {Integer} totalRows
   */
  exports.prototype['totalRows'] = undefined;
  /**
   * @member {Integer} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));


