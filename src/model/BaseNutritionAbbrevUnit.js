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
    root.CheeryChowRecipeApi.BaseNutritionAbbrevUnit = factory(root.CheeryChowRecipeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BaseNutritionAbbrevUnit model module.
   * @module model/BaseNutritionAbbrevUnit
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>BaseNutritionAbbrevUnit</code>.
   * @alias module:model/BaseNutritionAbbrevUnit
   * @class
   */
  var exports = function() {
    var _this = this;





















































  };

  /**
   * Constructs a <code>BaseNutritionAbbrevUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseNutritionAbbrevUnit} obj Optional instance to populate.
   * @return {module:model/BaseNutritionAbbrevUnit} The populated <code>BaseNutritionAbbrevUnit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('water_unit')) {
        obj['water_unit'] = ApiClient.convertToType(data['water_unit'], 'String');
      }
      if (data.hasOwnProperty('calories_unit')) {
        obj['calories_unit'] = ApiClient.convertToType(data['calories_unit'], 'String');
      }
      if (data.hasOwnProperty('protein_unit')) {
        obj['protein_unit'] = ApiClient.convertToType(data['protein_unit'], 'String');
      }
      if (data.hasOwnProperty('total_fat_unit')) {
        obj['total_fat_unit'] = ApiClient.convertToType(data['total_fat_unit'], 'String');
      }
      if (data.hasOwnProperty('ash_unit')) {
        obj['ash_unit'] = ApiClient.convertToType(data['ash_unit'], 'String');
      }
      if (data.hasOwnProperty('carbs_unit')) {
        obj['carbs_unit'] = ApiClient.convertToType(data['carbs_unit'], 'String');
      }
      if (data.hasOwnProperty('fiber_td_unit')) {
        obj['fiber_td_unit'] = ApiClient.convertToType(data['fiber_td_unit'], 'String');
      }
      if (data.hasOwnProperty('total_sugar_unit')) {
        obj['total_sugar_unit'] = ApiClient.convertToType(data['total_sugar_unit'], 'String');
      }
      if (data.hasOwnProperty('calcium_unit')) {
        obj['calcium_unit'] = ApiClient.convertToType(data['calcium_unit'], 'String');
      }
      if (data.hasOwnProperty('iron_unit')) {
        obj['iron_unit'] = ApiClient.convertToType(data['iron_unit'], 'String');
      }
      if (data.hasOwnProperty('magnesium_unit')) {
        obj['magnesium_unit'] = ApiClient.convertToType(data['magnesium_unit'], 'String');
      }
      if (data.hasOwnProperty('phosphorus_unit')) {
        obj['phosphorus_unit'] = ApiClient.convertToType(data['phosphorus_unit'], 'String');
      }
      if (data.hasOwnProperty('potassium_unit')) {
        obj['potassium_unit'] = ApiClient.convertToType(data['potassium_unit'], 'String');
      }
      if (data.hasOwnProperty('sodium_unit')) {
        obj['sodium_unit'] = ApiClient.convertToType(data['sodium_unit'], 'String');
      }
      if (data.hasOwnProperty('zinc_unit')) {
        obj['zinc_unit'] = ApiClient.convertToType(data['zinc_unit'], 'String');
      }
      if (data.hasOwnProperty('copper_unit')) {
        obj['copper_unit'] = ApiClient.convertToType(data['copper_unit'], 'String');
      }
      if (data.hasOwnProperty('manganese_unit')) {
        obj['manganese_unit'] = ApiClient.convertToType(data['manganese_unit'], 'String');
      }
      if (data.hasOwnProperty('selenium_unit')) {
        obj['selenium_unit'] = ApiClient.convertToType(data['selenium_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_c_unit')) {
        obj['vit_c_unit'] = ApiClient.convertToType(data['vit_c_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b1_unit')) {
        obj['vit_b1_unit'] = ApiClient.convertToType(data['vit_b1_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b2_unit')) {
        obj['vit_b2_unit'] = ApiClient.convertToType(data['vit_b2_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b3_unit')) {
        obj['vit_b3_unit'] = ApiClient.convertToType(data['vit_b3_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b5_unit')) {
        obj['vit_b5_unit'] = ApiClient.convertToType(data['vit_b5_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b6_unit')) {
        obj['vit_b6_unit'] = ApiClient.convertToType(data['vit_b6_unit'], 'String');
      }
      if (data.hasOwnProperty('folate_tot_unit')) {
        obj['folate_tot_unit'] = ApiClient.convertToType(data['folate_tot_unit'], 'String');
      }
      if (data.hasOwnProperty('folic_acid_unit')) {
        obj['folic_acid_unit'] = ApiClient.convertToType(data['folic_acid_unit'], 'String');
      }
      if (data.hasOwnProperty('food_folate_unit')) {
        obj['food_folate_unit'] = ApiClient.convertToType(data['food_folate_unit'], 'String');
      }
      if (data.hasOwnProperty('folate_dfe_unit')) {
        obj['folate_dfe_unit'] = ApiClient.convertToType(data['folate_dfe_unit'], 'String');
      }
      if (data.hasOwnProperty('choline_tot_unit')) {
        obj['choline_tot_unit'] = ApiClient.convertToType(data['choline_tot_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_b12_unit')) {
        obj['vit_b12_unit'] = ApiClient.convertToType(data['vit_b12_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_a_iu_unit')) {
        obj['vit_a_iu_unit'] = ApiClient.convertToType(data['vit_a_iu_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_a_rae_unit')) {
        obj['vit_a_rae_unit'] = ApiClient.convertToType(data['vit_a_rae_unit'], 'String');
      }
      if (data.hasOwnProperty('retinol_unit')) {
        obj['retinol_unit'] = ApiClient.convertToType(data['retinol_unit'], 'String');
      }
      if (data.hasOwnProperty('alpha_carot_unit')) {
        obj['alpha_carot_unit'] = ApiClient.convertToType(data['alpha_carot_unit'], 'String');
      }
      if (data.hasOwnProperty('beta_carot_unit')) {
        obj['beta_carot_unit'] = ApiClient.convertToType(data['beta_carot_unit'], 'String');
      }
      if (data.hasOwnProperty('beta_crypt_unit')) {
        obj['beta_crypt_unit'] = ApiClient.convertToType(data['beta_crypt_unit'], 'String');
      }
      if (data.hasOwnProperty('lycopene_unit')) {
        obj['lycopene_unit'] = ApiClient.convertToType(data['lycopene_unit'], 'String');
      }
      if (data.hasOwnProperty('lut_zea_unit')) {
        obj['lut_zea_unit'] = ApiClient.convertToType(data['lut_zea_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_e_unit')) {
        obj['vit_e_unit'] = ApiClient.convertToType(data['vit_e_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_d_mcg_unit')) {
        obj['vit_d_mcg_unit'] = ApiClient.convertToType(data['vit_d_mcg_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_d_iu_unit')) {
        obj['vit_d_iu_unit'] = ApiClient.convertToType(data['vit_d_iu_unit'], 'String');
      }
      if (data.hasOwnProperty('vit_k_unit')) {
        obj['vit_k_unit'] = ApiClient.convertToType(data['vit_k_unit'], 'String');
      }
      if (data.hasOwnProperty('sat_fat_unit')) {
        obj['sat_fat_unit'] = ApiClient.convertToType(data['sat_fat_unit'], 'String');
      }
      if (data.hasOwnProperty('mono_fat_unit')) {
        obj['mono_fat_unit'] = ApiClient.convertToType(data['mono_fat_unit'], 'String');
      }
      if (data.hasOwnProperty('poly_fat_unit')) {
        obj['poly_fat_unit'] = ApiClient.convertToType(data['poly_fat_unit'], 'String');
      }
      if (data.hasOwnProperty('cholestrl_unit')) {
        obj['cholestrl_unit'] = ApiClient.convertToType(data['cholestrl_unit'], 'String');
      }
      if (data.hasOwnProperty('bioton_unit')) {
        obj['bioton_unit'] = ApiClient.convertToType(data['bioton_unit'], 'String');
      }
      if (data.hasOwnProperty('chloride_unit')) {
        obj['chloride_unit'] = ApiClient.convertToType(data['chloride_unit'], 'String');
      }
      if (data.hasOwnProperty('chromium_unit')) {
        obj['chromium_unit'] = ApiClient.convertToType(data['chromium_unit'], 'String');
      }
      if (data.hasOwnProperty('fluoride_unit')) {
        obj['fluoride_unit'] = ApiClient.convertToType(data['fluoride_unit'], 'String');
      }
      if (data.hasOwnProperty('iodine_unit')) {
        obj['iodine_unit'] = ApiClient.convertToType(data['iodine_unit'], 'String');
      }
      if (data.hasOwnProperty('molybdenum_unit')) {
        obj['molybdenum_unit'] = ApiClient.convertToType(data['molybdenum_unit'], 'String');
      }
    }
    return obj;
  }

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

