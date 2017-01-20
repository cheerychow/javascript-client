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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.NutrDef = factory(root.CheeryChowRecipeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NutrDef model module.
   * @module model/NutrDef
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>NutrDef</code>.
   * @alias module:model/NutrDef
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>NutrDef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NutrDef} obj Optional instance to populate.
   * @return {module:model/NutrDef} The populated <code>NutrDef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nutrient_id')) {
        obj['nutrient_id'] = ApiClient.convertToType(data['nutrient_id'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('units')) {
        obj['units'] = ApiClient.convertToType(data['units'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} nutrient_id
   */
  exports.prototype['nutrient_id'] = undefined;
  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {String} units
   */
  exports.prototype['units'] = undefined;



  return exports;
}));


