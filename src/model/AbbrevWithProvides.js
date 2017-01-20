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
    define(['ApiClient', 'model/CountryRDA', 'model/NutritionAbbrev'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CountryRDA'), require('./NutritionAbbrev'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.AbbrevWithProvides = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.CountryRDA, root.CheeryChowRecipeApi.NutritionAbbrev);
  }
}(this, function(ApiClient, CountryRDA, NutritionAbbrev) {
  'use strict';




  /**
   * The AbbrevWithProvides model module.
   * @module model/AbbrevWithProvides
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>AbbrevWithProvides</code>.
   * @alias module:model/AbbrevWithProvides
   * @class
   * @implements module:model/NutritionAbbrev
   */
  var exports = function() {
    var _this = this;

    NutritionAbbrev.call(_this);

  };

  /**
   * Constructs a <code>AbbrevWithProvides</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbbrevWithProvides} obj Optional instance to populate.
   * @return {module:model/AbbrevWithProvides} The populated <code>AbbrevWithProvides</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NutritionAbbrev.constructFromObject(data, obj);
      if (data.hasOwnProperty('provides')) {
        obj['provides'] = CountryRDA.constructFromObject(data['provides']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CountryRDA} provides
   */
  exports.prototype['provides'] = undefined;

  // Implement NutritionAbbrev interface:
  /**
   * @member {Number} alpha_carot
   */
exports.prototype['alpha_carot'] = undefined;

  /**
   * @member {Number} ash
   */
exports.prototype['ash'] = undefined;

  /**
   * @member {Number} beta_carot
   */
exports.prototype['beta_carot'] = undefined;

  /**
   * @member {Number} beta_crypt
   */
exports.prototype['beta_crypt'] = undefined;

  /**
   * @member {Number} bioton
   */
exports.prototype['bioton'] = undefined;

  /**
   * @member {Number} calcium
   */
exports.prototype['calcium'] = undefined;

  /**
   * @member {Number} calories
   */
exports.prototype['calories'] = undefined;

  /**
   * @member {Number} carbs
   */
exports.prototype['carbs'] = undefined;

  /**
   * @member {Number} chloride
   */
exports.prototype['chloride'] = undefined;

  /**
   * @member {Number} cholestrl
   */
exports.prototype['cholestrl'] = undefined;

  /**
   * @member {Number} choline
   */
exports.prototype['choline'] = undefined;

  /**
   * @member {Number} choline_tot
   */
exports.prototype['choline_tot'] = undefined;

  /**
   * @member {Number} chromium
   */
exports.prototype['chromium'] = undefined;

  /**
   * @member {Number} copper
   */
exports.prototype['copper'] = undefined;

  /**
   * @member {Number} fiber_td
   */
exports.prototype['fiber_td'] = undefined;

  /**
   * @member {Number} fluoride
   */
exports.prototype['fluoride'] = undefined;

  /**
   * @member {Number} folate_dfe
   */
exports.prototype['folate_dfe'] = undefined;

  /**
   * @member {Number} folate_tot
   */
exports.prototype['folate_tot'] = undefined;

  /**
   * @member {Number} folic_acid
   */
exports.prototype['folic_acid'] = undefined;

  /**
   * @member {Number} food_folate
   */
exports.prototype['food_folate'] = undefined;

  /**
   * @member {Number} food_weight
   */
exports.prototype['food_weight'] = undefined;

  /**
   * @member {Number} iodine
   */
exports.prototype['iodine'] = undefined;

  /**
   * @member {Number} iron
   */
exports.prototype['iron'] = undefined;

  /**
   * @member {Number} lut_zea
   */
exports.prototype['lut_zea'] = undefined;

  /**
   * @member {Number} lycopene
   */
exports.prototype['lycopene'] = undefined;

  /**
   * @member {Number} magnesium
   */
exports.prototype['magnesium'] = undefined;

  /**
   * @member {Number} manganese
   */
exports.prototype['manganese'] = undefined;

  /**
   * @member {Number} molybdenum
   */
exports.prototype['molybdenum'] = undefined;

  /**
   * @member {Number} mono_fat
   */
exports.prototype['mono_fat'] = undefined;

  /**
   * @member {Number} phosphorus
   */
exports.prototype['phosphorus'] = undefined;

  /**
   * @member {Number} poly_fat
   */
exports.prototype['poly_fat'] = undefined;

  /**
   * @member {Number} potassium
   */
exports.prototype['potassium'] = undefined;

  /**
   * @member {Number} protein
   */
exports.prototype['protein'] = undefined;

  /**
   * @member {Number} retinol
   */
exports.prototype['retinol'] = undefined;

  /**
   * @member {Number} sat_fat
   */
exports.prototype['sat_fat'] = undefined;

  /**
   * @member {Number} selenium
   */
exports.prototype['selenium'] = undefined;

  /**
   * @member {Number} sodium
   */
exports.prototype['sodium'] = undefined;

  /**
   * The total amount of fat present.
   * @member {Number} total_fat
   */
exports.prototype['total_fat'] = undefined;

  /**
   * @member {Number} total_sugar
   */
exports.prototype['total_sugar'] = undefined;

  /**
   * @member {Number} vit_a_iu
   */
exports.prototype['vit_a_iu'] = undefined;

  /**
   * @member {Number} vit_a_rae
   */
exports.prototype['vit_a_rae'] = undefined;

  /**
   * @member {Number} vit_b1
   */
exports.prototype['vit_b1'] = undefined;

  /**
   * @member {Number} vit_b12
   */
exports.prototype['vit_b12'] = undefined;

  /**
   * @member {Number} vit_b2
   */
exports.prototype['vit_b2'] = undefined;

  /**
   * @member {Number} vit_b3
   */
exports.prototype['vit_b3'] = undefined;

  /**
   * @member {Number} vit_b5
   */
exports.prototype['vit_b5'] = undefined;

  /**
   * @member {Number} vit_b6
   */
exports.prototype['vit_b6'] = undefined;

  /**
   * @member {Number} vit_c
   */
exports.prototype['vit_c'] = undefined;

  /**
   * @member {Number} vit_d_iu
   */
exports.prototype['vit_d_iu'] = undefined;

  /**
   * @member {Number} vit_d_mcg
   */
exports.prototype['vit_d_mcg'] = undefined;

  /**
   * @member {Number} vit_e
   */
exports.prototype['vit_e'] = undefined;

  /**
   * @member {Number} vit_k
   */
exports.prototype['vit_k'] = undefined;

  /**
   * @member {Number} water
   */
exports.prototype['water'] = undefined;

  /**
   * @member {Number} zinc
   */
exports.prototype['zinc'] = undefined;

  /**
   * @member {Integer} nut_food_id
   */
exports.prototype['nut_food_id'] = undefined;

  /**
   * @member {String} shrt_desc
   */
exports.prototype['shrt_desc'] = undefined;



  return exports;
}));


