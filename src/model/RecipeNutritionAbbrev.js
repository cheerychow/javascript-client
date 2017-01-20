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
    define(['ApiClient', 'model/BaseNutritionAbbrev', 'model/BaseNutritionAbbrevUnit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseNutritionAbbrev'), require('./BaseNutritionAbbrevUnit'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.RecipeNutritionAbbrev = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.BaseNutritionAbbrev, root.CheeryChowRecipeApi.BaseNutritionAbbrevUnit);
  }
}(this, function(ApiClient, BaseNutritionAbbrev, BaseNutritionAbbrevUnit) {
  'use strict';




  /**
   * The RecipeNutritionAbbrev model module.
   * @module model/RecipeNutritionAbbrev
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>RecipeNutritionAbbrev</code>.
   * @alias module:model/RecipeNutritionAbbrev
   * @class
   * @implements module:model/BaseNutritionAbbrev
   * @implements module:model/BaseNutritionAbbrevUnit
   */
  var exports = function() {
    var _this = this;

    BaseNutritionAbbrev.call(_this);
    BaseNutritionAbbrevUnit.call(_this);














  };

  /**
   * Constructs a <code>RecipeNutritionAbbrev</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeNutritionAbbrev} obj Optional instance to populate.
   * @return {module:model/RecipeNutritionAbbrev} The populated <code>RecipeNutritionAbbrev</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BaseNutritionAbbrev.constructFromObject(data, obj);
      BaseNutritionAbbrevUnit.constructFromObject(data, obj);
      if (data.hasOwnProperty('num_alcohol')) {
        obj['num_alcohol'] = ApiClient.convertToType(data['num_alcohol'], 'Integer');
      }
      if (data.hasOwnProperty('num_ceral')) {
        obj['num_ceral'] = ApiClient.convertToType(data['num_ceral'], 'Integer');
      }
      if (data.hasOwnProperty('num_dairy')) {
        obj['num_dairy'] = ApiClient.convertToType(data['num_dairy'], 'Integer');
      }
      if (data.hasOwnProperty('num_egg')) {
        obj['num_egg'] = ApiClient.convertToType(data['num_egg'], 'Integer');
      }
      if (data.hasOwnProperty('num_fish')) {
        obj['num_fish'] = ApiClient.convertToType(data['num_fish'], 'Integer');
      }
      if (data.hasOwnProperty('num_fruit')) {
        obj['num_fruit'] = ApiClient.convertToType(data['num_fruit'], 'Integer');
      }
      if (data.hasOwnProperty('num_meat')) {
        obj['num_meat'] = ApiClient.convertToType(data['num_meat'], 'Integer');
      }
      if (data.hasOwnProperty('num_nut')) {
        obj['num_nut'] = ApiClient.convertToType(data['num_nut'], 'Integer');
      }
      if (data.hasOwnProperty('num_sugar')) {
        obj['num_sugar'] = ApiClient.convertToType(data['num_sugar'], 'Integer');
      }
      if (data.hasOwnProperty('num_veg')) {
        obj['num_veg'] = ApiClient.convertToType(data['num_veg'], 'Integer');
      }
      if (data.hasOwnProperty('num_vegan')) {
        obj['num_vegan'] = ApiClient.convertToType(data['num_vegan'], 'Integer');
      }
      if (data.hasOwnProperty('portions')) {
        obj['portions'] = ApiClient.convertToType(data['portions'], 'Integer');
      }
      if (data.hasOwnProperty('recipe_nutrition_abbrev_id')) {
        obj['recipe_nutrition_abbrev_id'] = ApiClient.convertToType(data['recipe_nutrition_abbrev_id'], 'Integer');
      }
      if (data.hasOwnProperty('recipe_id')) {
        obj['recipe_id'] = ApiClient.convertToType(data['recipe_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} num_alcohol
   */
  exports.prototype['num_alcohol'] = undefined;
  /**
   * @member {Integer} num_ceral
   */
  exports.prototype['num_ceral'] = undefined;
  /**
   * @member {Integer} num_dairy
   */
  exports.prototype['num_dairy'] = undefined;
  /**
   * @member {Integer} num_egg
   */
  exports.prototype['num_egg'] = undefined;
  /**
   * @member {Integer} num_fish
   */
  exports.prototype['num_fish'] = undefined;
  /**
   * @member {Integer} num_fruit
   */
  exports.prototype['num_fruit'] = undefined;
  /**
   * @member {Integer} num_meat
   */
  exports.prototype['num_meat'] = undefined;
  /**
   * @member {Integer} num_nut
   */
  exports.prototype['num_nut'] = undefined;
  /**
   * @member {Integer} num_sugar
   */
  exports.prototype['num_sugar'] = undefined;
  /**
   * @member {Integer} num_veg
   */
  exports.prototype['num_veg'] = undefined;
  /**
   * @member {Integer} num_vegan
   */
  exports.prototype['num_vegan'] = undefined;
  /**
   * @member {Integer} portions
   */
  exports.prototype['portions'] = undefined;
  /**
   * @member {Integer} recipe_nutrition_abbrev_id
   */
  exports.prototype['recipe_nutrition_abbrev_id'] = undefined;
  /**
   * @member {Integer} recipe_id
   */
  exports.prototype['recipe_id'] = undefined;

  // Implement BaseNutritionAbbrev interface:
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

  // Implement BaseNutritionAbbrevUnit interface:
  /**
   * @member {String} water_unit
   */
exports.prototype['water_unit'] = undefined;

  /**
   * @member {String} calories_unit
   */
exports.prototype['calories_unit'] = undefined;

  /**
   * @member {String} protein_unit
   */
exports.prototype['protein_unit'] = undefined;

  /**
   * @member {String} total_fat_unit
   */
exports.prototype['total_fat_unit'] = undefined;

  /**
   * @member {String} ash_unit
   */
exports.prototype['ash_unit'] = undefined;

  /**
   * @member {String} carbs_unit
   */
exports.prototype['carbs_unit'] = undefined;

  /**
   * @member {String} fiber_td_unit
   */
exports.prototype['fiber_td_unit'] = undefined;

  /**
   * @member {String} total_sugar_unit
   */
exports.prototype['total_sugar_unit'] = undefined;

  /**
   * @member {String} calcium_unit
   */
exports.prototype['calcium_unit'] = undefined;

  /**
   * @member {String} iron_unit
   */
exports.prototype['iron_unit'] = undefined;

  /**
   * @member {String} magnesium_unit
   */
exports.prototype['magnesium_unit'] = undefined;

  /**
   * @member {String} phosphorus_unit
   */
exports.prototype['phosphorus_unit'] = undefined;

  /**
   * @member {String} potassium_unit
   */
exports.prototype['potassium_unit'] = undefined;

  /**
   * @member {String} sodium_unit
   */
exports.prototype['sodium_unit'] = undefined;

  /**
   * @member {String} zinc_unit
   */
exports.prototype['zinc_unit'] = undefined;

  /**
   * @member {String} copper_unit
   */
exports.prototype['copper_unit'] = undefined;

  /**
   * @member {String} manganese_unit
   */
exports.prototype['manganese_unit'] = undefined;

  /**
   * @member {String} selenium_unit
   */
exports.prototype['selenium_unit'] = undefined;

  /**
   * @member {String} vit_c_unit
   */
exports.prototype['vit_c_unit'] = undefined;

  /**
   * @member {String} vit_b1_unit
   */
exports.prototype['vit_b1_unit'] = undefined;

  /**
   * @member {String} vit_b2_unit
   */
exports.prototype['vit_b2_unit'] = undefined;

  /**
   * @member {String} vit_b3_unit
   */
exports.prototype['vit_b3_unit'] = undefined;

  /**
   * @member {String} vit_b5_unit
   */
exports.prototype['vit_b5_unit'] = undefined;

  /**
   * @member {String} vit_b6_unit
   */
exports.prototype['vit_b6_unit'] = undefined;

  /**
   * @member {String} folate_tot_unit
   */
exports.prototype['folate_tot_unit'] = undefined;

  /**
   * @member {String} folic_acid_unit
   */
exports.prototype['folic_acid_unit'] = undefined;

  /**
   * @member {String} food_folate_unit
   */
exports.prototype['food_folate_unit'] = undefined;

  /**
   * @member {String} folate_dfe_unit
   */
exports.prototype['folate_dfe_unit'] = undefined;

  /**
   * @member {String} choline_tot_unit
   */
exports.prototype['choline_tot_unit'] = undefined;

  /**
   * @member {String} vit_b12_unit
   */
exports.prototype['vit_b12_unit'] = undefined;

  /**
   * @member {String} vit_a_iu_unit
   */
exports.prototype['vit_a_iu_unit'] = undefined;

  /**
   * @member {String} vit_a_rae_unit
   */
exports.prototype['vit_a_rae_unit'] = undefined;

  /**
   * @member {String} retinol_unit
   */
exports.prototype['retinol_unit'] = undefined;

  /**
   * @member {String} alpha_carot_unit
   */
exports.prototype['alpha_carot_unit'] = undefined;

  /**
   * @member {String} beta_carot_unit
   */
exports.prototype['beta_carot_unit'] = undefined;

  /**
   * @member {String} beta_crypt_unit
   */
exports.prototype['beta_crypt_unit'] = undefined;

  /**
   * @member {String} lycopene_unit
   */
exports.prototype['lycopene_unit'] = undefined;

  /**
   * @member {String} lut_zea_unit
   */
exports.prototype['lut_zea_unit'] = undefined;

  /**
   * @member {String} vit_e_unit
   */
exports.prototype['vit_e_unit'] = undefined;

  /**
   * @member {String} vit_d_mcg_unit
   */
exports.prototype['vit_d_mcg_unit'] = undefined;

  /**
   * @member {String} vit_d_iu_unit
   */
exports.prototype['vit_d_iu_unit'] = undefined;

  /**
   * @member {String} vit_k_unit
   */
exports.prototype['vit_k_unit'] = undefined;

  /**
   * @member {String} sat_fat_unit
   */
exports.prototype['sat_fat_unit'] = undefined;

  /**
   * @member {String} mono_fat_unit
   */
exports.prototype['mono_fat_unit'] = undefined;

  /**
   * @member {String} poly_fat_unit
   */
exports.prototype['poly_fat_unit'] = undefined;

  /**
   * @member {String} cholestrl_unit
   */
exports.prototype['cholestrl_unit'] = undefined;

  /**
   * @member {String} bioton_unit
   */
exports.prototype['bioton_unit'] = undefined;

  /**
   * @member {String} chloride_unit
   */
exports.prototype['chloride_unit'] = undefined;

  /**
   * @member {String} chromium_unit
   */
exports.prototype['chromium_unit'] = undefined;

  /**
   * @member {String} fluoride_unit
   */
exports.prototype['fluoride_unit'] = undefined;

  /**
   * @member {String} iodine_unit
   */
exports.prototype['iodine_unit'] = undefined;

  /**
   * @member {String} molybdenum_unit
   */
exports.prototype['molybdenum_unit'] = undefined;



  return exports;
}));

