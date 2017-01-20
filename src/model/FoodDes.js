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
    root.CheeryChowRecipeApi.FoodDes = factory(root.CheeryChowRecipeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FoodDes model module.
   * @module model/FoodDes
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>FoodDes</code>.
   * @alias module:model/FoodDes
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>FoodDes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FoodDes} obj Optional instance to populate.
   * @return {module:model/FoodDes} The populated <code>FoodDes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('cho_factor')) {
        obj['cho_factor'] = ApiClient.convertToType(data['cho_factor'], 'Number');
      }
      if (data.hasOwnProperty('common_name')) {
        obj['common_name'] = ApiClient.convertToType(data['common_name'], 'String');
      }
      if (data.hasOwnProperty('fat_factor')) {
        obj['fat_factor'] = ApiClient.convertToType(data['fat_factor'], 'Number');
      }
      if (data.hasOwnProperty('food_id')) {
        obj['food_id'] = ApiClient.convertToType(data['food_id'], 'Integer');
      }
      if (data.hasOwnProperty('manufacturer')) {
        obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
      }
      if (data.hasOwnProperty('n_factor')) {
        obj['n_factor'] = ApiClient.convertToType(data['n_factor'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pro_factor')) {
        obj['pro_factor'] = ApiClient.convertToType(data['pro_factor'], 'Number');
      }
      if (data.hasOwnProperty('ref_desc')) {
        obj['ref_desc'] = ApiClient.convertToType(data['ref_desc'], 'String');
      }
      if (data.hasOwnProperty('refuse')) {
        obj['refuse'] = ApiClient.convertToType(data['refuse'], 'Integer');
      }
      if (data.hasOwnProperty('sciname')) {
        obj['sciname'] = ApiClient.convertToType(data['sciname'], 'String');
      }
      if (data.hasOwnProperty('shrt_desc')) {
        obj['shrt_desc'] = ApiClient.convertToType(data['shrt_desc'], 'String');
      }
      if (data.hasOwnProperty('survey')) {
        obj['survey'] = ApiClient.convertToType(data['survey'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Number} cho_factor
   */
  exports.prototype['cho_factor'] = undefined;
  /**
   * @member {String} common_name
   */
  exports.prototype['common_name'] = undefined;
  /**
   * @member {Number} fat_factor
   */
  exports.prototype['fat_factor'] = undefined;
  /**
   * @member {Integer} food_id
   */
  exports.prototype['food_id'] = undefined;
  /**
   * @member {String} manufacturer
   */
  exports.prototype['manufacturer'] = undefined;
  /**
   * @member {Number} n_factor
   */
  exports.prototype['n_factor'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} pro_factor
   */
  exports.prototype['pro_factor'] = undefined;
  /**
   * @member {String} ref_desc
   */
  exports.prototype['ref_desc'] = undefined;
  /**
   * @member {Integer} refuse
   */
  exports.prototype['refuse'] = undefined;
  /**
   * @member {String} sciname
   */
  exports.prototype['sciname'] = undefined;
  /**
   * @member {String} shrt_desc
   */
  exports.prototype['shrt_desc'] = undefined;
  /**
   * @member {String} survey
   */
  exports.prototype['survey'] = undefined;



  return exports;
}));


