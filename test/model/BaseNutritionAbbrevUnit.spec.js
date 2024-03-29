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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CheeryChowRecipeApi);
  }
}(this, function(expect, CheeryChowRecipeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BaseNutritionAbbrevUnit', function() {
    it('should create an instance of BaseNutritionAbbrevUnit', function() {
      // uncomment below and update the code to test BaseNutritionAbbrevUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be.a(CheeryChowRecipeApi.BaseNutritionAbbrevUnit);
    });

    it('should have the property waterUnit (base name: "water_unit")', function() {
      // uncomment below and update the code to test the property waterUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property caloriesUnit (base name: "calories_unit")', function() {
      // uncomment below and update the code to test the property caloriesUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property proteinUnit (base name: "protein_unit")', function() {
      // uncomment below and update the code to test the property proteinUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property totalFatUnit (base name: "total_fat_unit")', function() {
      // uncomment below and update the code to test the property totalFatUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property ashUnit (base name: "ash_unit")', function() {
      // uncomment below and update the code to test the property ashUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property carbsUnit (base name: "carbs_unit")', function() {
      // uncomment below and update the code to test the property carbsUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property fiberTdUnit (base name: "fiber_td_unit")', function() {
      // uncomment below and update the code to test the property fiberTdUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property totalSugarUnit (base name: "total_sugar_unit")', function() {
      // uncomment below and update the code to test the property totalSugarUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property calciumUnit (base name: "calcium_unit")', function() {
      // uncomment below and update the code to test the property calciumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property ironUnit (base name: "iron_unit")', function() {
      // uncomment below and update the code to test the property ironUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property magnesiumUnit (base name: "magnesium_unit")', function() {
      // uncomment below and update the code to test the property magnesiumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property phosphorusUnit (base name: "phosphorus_unit")', function() {
      // uncomment below and update the code to test the property phosphorusUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property potassiumUnit (base name: "potassium_unit")', function() {
      // uncomment below and update the code to test the property potassiumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property sodiumUnit (base name: "sodium_unit")', function() {
      // uncomment below and update the code to test the property sodiumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property zincUnit (base name: "zinc_unit")', function() {
      // uncomment below and update the code to test the property zincUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property copperUnit (base name: "copper_unit")', function() {
      // uncomment below and update the code to test the property copperUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property manganeseUnit (base name: "manganese_unit")', function() {
      // uncomment below and update the code to test the property manganeseUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property seleniumUnit (base name: "selenium_unit")', function() {
      // uncomment below and update the code to test the property seleniumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitCUnit (base name: "vit_c_unit")', function() {
      // uncomment below and update the code to test the property vitCUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB1Unit (base name: "vit_b1_unit")', function() {
      // uncomment below and update the code to test the property vitB1Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB2Unit (base name: "vit_b2_unit")', function() {
      // uncomment below and update the code to test the property vitB2Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB3Unit (base name: "vit_b3_unit")', function() {
      // uncomment below and update the code to test the property vitB3Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB5Unit (base name: "vit_b5_unit")', function() {
      // uncomment below and update the code to test the property vitB5Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB6Unit (base name: "vit_b6_unit")', function() {
      // uncomment below and update the code to test the property vitB6Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property folateTotUnit (base name: "folate_tot_unit")', function() {
      // uncomment below and update the code to test the property folateTotUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property folicAcidUnit (base name: "folic_acid_unit")', function() {
      // uncomment below and update the code to test the property folicAcidUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property foodFolateUnit (base name: "food_folate_unit")', function() {
      // uncomment below and update the code to test the property foodFolateUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property folateDfeUnit (base name: "folate_dfe_unit")', function() {
      // uncomment below and update the code to test the property folateDfeUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property cholineTotUnit (base name: "choline_tot_unit")', function() {
      // uncomment below and update the code to test the property cholineTotUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitB12Unit (base name: "vit_b12_unit")', function() {
      // uncomment below and update the code to test the property vitB12Unit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitAIuUnit (base name: "vit_a_iu_unit")', function() {
      // uncomment below and update the code to test the property vitAIuUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitARaeUnit (base name: "vit_a_rae_unit")', function() {
      // uncomment below and update the code to test the property vitARaeUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property retinolUnit (base name: "retinol_unit")', function() {
      // uncomment below and update the code to test the property retinolUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property alphaCarotUnit (base name: "alpha_carot_unit")', function() {
      // uncomment below and update the code to test the property alphaCarotUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property betaCarotUnit (base name: "beta_carot_unit")', function() {
      // uncomment below and update the code to test the property betaCarotUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property betaCryptUnit (base name: "beta_crypt_unit")', function() {
      // uncomment below and update the code to test the property betaCryptUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property lycopeneUnit (base name: "lycopene_unit")', function() {
      // uncomment below and update the code to test the property lycopeneUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property lutZeaUnit (base name: "lut_zea_unit")', function() {
      // uncomment below and update the code to test the property lutZeaUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitEUnit (base name: "vit_e_unit")', function() {
      // uncomment below and update the code to test the property vitEUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitDMcgUnit (base name: "vit_d_mcg_unit")', function() {
      // uncomment below and update the code to test the property vitDMcgUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitDIuUnit (base name: "vit_d_iu_unit")', function() {
      // uncomment below and update the code to test the property vitDIuUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property vitKUnit (base name: "vit_k_unit")', function() {
      // uncomment below and update the code to test the property vitKUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property satFatUnit (base name: "sat_fat_unit")', function() {
      // uncomment below and update the code to test the property satFatUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property monoFatUnit (base name: "mono_fat_unit")', function() {
      // uncomment below and update the code to test the property monoFatUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property polyFatUnit (base name: "poly_fat_unit")', function() {
      // uncomment below and update the code to test the property polyFatUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property cholestrlUnit (base name: "cholestrl_unit")', function() {
      // uncomment below and update the code to test the property cholestrlUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property biotonUnit (base name: "bioton_unit")', function() {
      // uncomment below and update the code to test the property biotonUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property chlorideUnit (base name: "chloride_unit")', function() {
      // uncomment below and update the code to test the property chlorideUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property chromiumUnit (base name: "chromium_unit")', function() {
      // uncomment below and update the code to test the property chromiumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property fluorideUnit (base name: "fluoride_unit")', function() {
      // uncomment below and update the code to test the property fluorideUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property iodineUnit (base name: "iodine_unit")', function() {
      // uncomment below and update the code to test the property iodineUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

    it('should have the property molybdenumUnit (base name: "molybdenum_unit")', function() {
      // uncomment below and update the code to test the property molybdenumUnit
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrevUnit();
      //expect(instance).to.be();
    });

  });

}));
