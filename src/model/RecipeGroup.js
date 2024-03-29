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
    root.CheeryChowRecipeApi.RecipeGroup = factory(root.CheeryChowRecipeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RecipeGroup model module.
   * @module model/RecipeGroup
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>RecipeGroup</code>.
   * @alias module:model/RecipeGroup
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RecipeGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeGroup} obj Optional instance to populate.
   * @return {module:model/RecipeGroup} The populated <code>RecipeGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Integer');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Integer');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Integer} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Integer} public
   */
  exports.prototype['public'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;



  return exports;
}));


