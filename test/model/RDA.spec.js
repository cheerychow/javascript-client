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
    instance = new CheeryChowRecipeApi.RDA();
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

  describe('RDA', function() {
    it('should create an instance of RDA', function() {
      // uncomment below and update the code to test RDA
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be.a(CheeryChowRecipeApi.RDA);
    });

    it('should have the property alphaCarot (base name: "alpha_carot")', function() {
      // uncomment below and update the code to test the property alphaCarot
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property alphaCarotUnit (base name: "alpha_carot_unit")', function() {
      // uncomment below and update the code to test the property alphaCarotUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property betaCarot (base name: "beta_carot")', function() {
      // uncomment below and update the code to test the property betaCarot
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property betaCarotUnit (base name: "beta_carot_unit")', function() {
      // uncomment below and update the code to test the property betaCarotUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property betaCrypt (base name: "beta_crypt")', function() {
      // uncomment below and update the code to test the property betaCrypt
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property betaCryptUnit (base name: "beta_crypt_unit")', function() {
      // uncomment below and update the code to test the property betaCryptUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property biotinUnit (base name: "biotin_unit")', function() {
      // uncomment below and update the code to test the property biotinUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property bioton (base name: "bioton")', function() {
      // uncomment below and update the code to test the property bioton
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property calcium (base name: "calcium")', function() {
      // uncomment below and update the code to test the property calcium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property calciumUnit (base name: "calcium_unit")', function() {
      // uncomment below and update the code to test the property calciumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property calories (base name: "calories")', function() {
      // uncomment below and update the code to test the property calories
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property caloriesUnit (base name: "calories_unit")', function() {
      // uncomment below and update the code to test the property caloriesUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property carbs (base name: "carbs")', function() {
      // uncomment below and update the code to test the property carbs
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property carbsUnit (base name: "carbs_unit")', function() {
      // uncomment below and update the code to test the property carbsUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property chloride (base name: "chloride")', function() {
      // uncomment below and update the code to test the property chloride
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property chlorideUnit (base name: "chloride_unit")', function() {
      // uncomment below and update the code to test the property chlorideUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property cholestrl (base name: "cholestrl")', function() {
      // uncomment below and update the code to test the property cholestrl
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property cholestrlUnit (base name: "cholestrl_unit")', function() {
      // uncomment below and update the code to test the property cholestrlUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property cholineTot (base name: "choline_tot")', function() {
      // uncomment below and update the code to test the property cholineTot
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property cholineTotUnit (base name: "choline_tot_unit")', function() {
      // uncomment below and update the code to test the property cholineTotUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property chromium (base name: "chromium")', function() {
      // uncomment below and update the code to test the property chromium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property chromiumUnit (base name: "chromium_unit")', function() {
      // uncomment below and update the code to test the property chromiumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property copper (base name: "copper")', function() {
      // uncomment below and update the code to test the property copper
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property copperUnit (base name: "copper_unit")', function() {
      // uncomment below and update the code to test the property copperUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property fiberTd (base name: "fiber_td")', function() {
      // uncomment below and update the code to test the property fiberTd
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property fiberTdUnit (base name: "fiber_td_unit")', function() {
      // uncomment below and update the code to test the property fiberTdUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property fluoride (base name: "fluoride")', function() {
      // uncomment below and update the code to test the property fluoride
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property fluorideUnit (base name: "fluoride_unit")', function() {
      // uncomment below and update the code to test the property fluorideUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folateDfe (base name: "folate_dfe")', function() {
      // uncomment below and update the code to test the property folateDfe
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folateDfeUnit (base name: "folate_dfe_unit")', function() {
      // uncomment below and update the code to test the property folateDfeUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folateTot (base name: "folate_tot")', function() {
      // uncomment below and update the code to test the property folateTot
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folateTotUnit (base name: "folate_tot_unit")', function() {
      // uncomment below and update the code to test the property folateTotUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folicAcid (base name: "folic_acid")', function() {
      // uncomment below and update the code to test the property folicAcid
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property folicAcidUnit (base name: "folic_acid_unit")', function() {
      // uncomment below and update the code to test the property folicAcidUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property foodFolate (base name: "food_folate")', function() {
      // uncomment below and update the code to test the property foodFolate
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property foodFolateUnit (base name: "food_folate_unit")', function() {
      // uncomment below and update the code to test the property foodFolateUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property iodine (base name: "iodine")', function() {
      // uncomment below and update the code to test the property iodine
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property iodineUnit (base name: "iodine_unit")', function() {
      // uncomment below and update the code to test the property iodineUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property iron (base name: "iron")', function() {
      // uncomment below and update the code to test the property iron
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property ironUnit (base name: "iron_unit")', function() {
      // uncomment below and update the code to test the property ironUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property lutZea (base name: "lut_zea")', function() {
      // uncomment below and update the code to test the property lutZea
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property lutZeaUnit (base name: "lut_zea_unit")', function() {
      // uncomment below and update the code to test the property lutZeaUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property lycopene (base name: "lycopene")', function() {
      // uncomment below and update the code to test the property lycopene
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property lycopeneUnit (base name: "lycopene_unit")', function() {
      // uncomment below and update the code to test the property lycopeneUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property magnesium (base name: "magnesium")', function() {
      // uncomment below and update the code to test the property magnesium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property magnesiumUnit (base name: "magnesium_unit")', function() {
      // uncomment below and update the code to test the property magnesiumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property manganese (base name: "manganese")', function() {
      // uncomment below and update the code to test the property manganese
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property manganeseUnit (base name: "manganese_unit")', function() {
      // uncomment below and update the code to test the property manganeseUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property molybdenum (base name: "molybdenum")', function() {
      // uncomment below and update the code to test the property molybdenum
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property molybdenumUnit (base name: "molybdenum_unit")', function() {
      // uncomment below and update the code to test the property molybdenumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property monoFat (base name: "mono_fat")', function() {
      // uncomment below and update the code to test the property monoFat
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property monoFatUnit (base name: "mono_fat_unit")', function() {
      // uncomment below and update the code to test the property monoFatUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property phosphorus (base name: "phosphorus")', function() {
      // uncomment below and update the code to test the property phosphorus
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property phosphorusUnit (base name: "phosphorus_unit")', function() {
      // uncomment below and update the code to test the property phosphorusUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property polyFat (base name: "poly_fat")', function() {
      // uncomment below and update the code to test the property polyFat
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property polyFatUnit (base name: "poly_fat_unit")', function() {
      // uncomment below and update the code to test the property polyFatUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property potassium (base name: "potassium")', function() {
      // uncomment below and update the code to test the property potassium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property potassiumUnit (base name: "potassium_unit")', function() {
      // uncomment below and update the code to test the property potassiumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property protein (base name: "protein")', function() {
      // uncomment below and update the code to test the property protein
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property proteinUnit (base name: "protein_unit")', function() {
      // uncomment below and update the code to test the property proteinUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property retinol (base name: "retinol")', function() {
      // uncomment below and update the code to test the property retinol
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property retinolUnit (base name: "retinol_unit")', function() {
      // uncomment below and update the code to test the property retinolUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property satFat (base name: "sat_fat")', function() {
      // uncomment below and update the code to test the property satFat
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property satFatUnit (base name: "sat_fat_unit")', function() {
      // uncomment below and update the code to test the property satFatUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property selenium (base name: "selenium")', function() {
      // uncomment below and update the code to test the property selenium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property seleniumUnit (base name: "selenium_unit")', function() {
      // uncomment below and update the code to test the property seleniumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property sodium (base name: "sodium")', function() {
      // uncomment below and update the code to test the property sodium
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property sodiumUnit (base name: "sodium_unit")', function() {
      // uncomment below and update the code to test the property sodiumUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property totalFat (base name: "total_fat")', function() {
      // uncomment below and update the code to test the property totalFat
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property totalFatUnit (base name: "total_fat_unit")', function() {
      // uncomment below and update the code to test the property totalFatUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property totalSugar (base name: "total_sugar")', function() {
      // uncomment below and update the code to test the property totalSugar
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property totalSugarUnit (base name: "total_sugar_unit")', function() {
      // uncomment below and update the code to test the property totalSugarUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitAIu (base name: "vit_a_iu")', function() {
      // uncomment below and update the code to test the property vitAIu
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitAIuUnit (base name: "vit_a_iu_unit")', function() {
      // uncomment below and update the code to test the property vitAIuUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitARae (base name: "vit_a_rae")', function() {
      // uncomment below and update the code to test the property vitARae
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitARaeUnit (base name: "vit_a_rae_unit")', function() {
      // uncomment below and update the code to test the property vitARaeUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB1 (base name: "vit_b1")', function() {
      // uncomment below and update the code to test the property vitB1
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB12 (base name: "vit_b12")', function() {
      // uncomment below and update the code to test the property vitB12
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB12Unit (base name: "vit_b12_unit")', function() {
      // uncomment below and update the code to test the property vitB12Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB1Unit (base name: "vit_b1_unit")', function() {
      // uncomment below and update the code to test the property vitB1Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB2 (base name: "vit_b2")', function() {
      // uncomment below and update the code to test the property vitB2
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB2Unit (base name: "vit_b2_unit")', function() {
      // uncomment below and update the code to test the property vitB2Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB3 (base name: "vit_b3")', function() {
      // uncomment below and update the code to test the property vitB3
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB3Unit (base name: "vit_b3_unit")', function() {
      // uncomment below and update the code to test the property vitB3Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB5 (base name: "vit_b5")', function() {
      // uncomment below and update the code to test the property vitB5
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB5Unit (base name: "vit_b5_unit")', function() {
      // uncomment below and update the code to test the property vitB5Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB6 (base name: "vit_b6")', function() {
      // uncomment below and update the code to test the property vitB6
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitB6Unit (base name: "vit_b6_unit")', function() {
      // uncomment below and update the code to test the property vitB6Unit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitC (base name: "vit_c")', function() {
      // uncomment below and update the code to test the property vitC
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitCUnit (base name: "vit_c_unit")', function() {
      // uncomment below and update the code to test the property vitCUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitDIu (base name: "vit_d_iu")', function() {
      // uncomment below and update the code to test the property vitDIu
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitDMcg (base name: "vit_d_mcg")', function() {
      // uncomment below and update the code to test the property vitDMcg
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitDMcgUnit (base name: "vit_d_mcg_unit")', function() {
      // uncomment below and update the code to test the property vitDMcgUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitE (base name: "vit_e")', function() {
      // uncomment below and update the code to test the property vitE
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitEUnit (base name: "vit_e_unit")', function() {
      // uncomment below and update the code to test the property vitEUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitK (base name: "vit_k")', function() {
      // uncomment below and update the code to test the property vitK
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vitKUnit (base name: "vit_k_unit")', function() {
      // uncomment below and update the code to test the property vitKUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property vivitDIuUnit (base name: "vivit_d_iu_unit")', function() {
      // uncomment below and update the code to test the property vivitDIuUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property zinc (base name: "zinc")', function() {
      // uncomment below and update the code to test the property zinc
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

    it('should have the property zincUnit (base name: "zinc_unit")', function() {
      // uncomment below and update the code to test the property zincUnit
      //var instane = new CheeryChowRecipeApi.RDA();
      //expect(instance).to.be();
    });

  });

}));
