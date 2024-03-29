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
    define(['ApiClient', 'model/Ingredient', 'model/IngredientParser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ingredient'), require('./IngredientParser'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.IngredientDebug = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.Ingredient, root.CheeryChowRecipeApi.IngredientParser);
  }
}(this, function(ApiClient, Ingredient, IngredientParser) {
  'use strict';




  /**
   * The IngredientDebug model module.
   * @module model/IngredientDebug
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>IngredientDebug</code>.
   * @alias module:model/IngredientDebug
   * @class
   * @implements module:model/Ingredient
   * @implements module:model/IngredientParser
   */
  var exports = function() {
    var _this = this;

    Ingredient.call(_this);
    IngredientParser.call(_this);
  };

  /**
   * Constructs a <code>IngredientDebug</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IngredientDebug} obj Optional instance to populate.
   * @return {module:model/IngredientDebug} The populated <code>IngredientDebug</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Ingredient.constructFromObject(data, obj);
      IngredientParser.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Ingredient interface:
  /**
   * @member {Integer} added
   */
exports.prototype['added'] = undefined;

  /**
   * @member {Number} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * @member {String} amount_unit
   */
exports.prototype['amount_unit'] = undefined;

  /**
   * @member {String} common_name
   */
exports.prototype['common_name'] = undefined;

  /**
   * @member {Integer} food_id
   */
exports.prototype['food_id'] = undefined;

  /**
   * @member {Integer} group_id
   */
exports.prototype['group_id'] = undefined;

  /**
   * @member {Integer} ingredient_id
   */
exports.prototype['ingredient_id'] = undefined;

  /**
   * @member {String} ingredient_line
   */
exports.prototype['ingredient_line'] = undefined;

  /**
   * @member {Integer} multiplier
   */
exports.prototype['multiplier'] = undefined;

  /**
   * @member {Integer} recipe_id
   */
exports.prototype['recipe_id'] = undefined;

  /**
   * @member {String} result
   */
exports.prototype['result'] = undefined;

  /**
   * @member {Integer} seq
   */
exports.prototype['seq'] = undefined;

  // Implement IngredientParser interface:
  /**
   * @member {Integer} ingredient_parser_id
   */
exports.prototype['ingredient_parser_id'] = undefined;

  /**
   * @member {Integer} matcher_id
   */
exports.prototype['matcher_id'] = undefined;

  /**
   * @member {Integer} regex_id
   */
exports.prototype['regex_id'] = undefined;

  /**
   * @member {String} multiple_s
   */
exports.prototype['multiple_s'] = undefined;

  /**
   * @member {Number} confidence
   */
exports.prototype['confidence'] = undefined;

  /**
   * @member {String} amount_s
   */
exports.prototype['amount_s'] = undefined;

  /**
   * @member {String} processed_line
   */
exports.prototype['processed_line'] = undefined;

  /**
   * @member {String} debug_output
   */
exports.prototype['debug_output'] = undefined;



  return exports;
}));


