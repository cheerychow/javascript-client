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
    instance = new CheeryChowRecipeApi.BaseNutritionAbbrev();
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

  describe('BaseNutritionAbbrev', function() {
    it('should create an instance of BaseNutritionAbbrev', function() {
      // uncomment below and update the code to test BaseNutritionAbbrev
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be.a(CheeryChowRecipeApi.BaseNutritionAbbrev);
    });

    it('should have the property alphaCarot (base name: "alpha_carot")', function() {
      // uncomment below and update the code to test the property alphaCarot
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property ash (base name: "ash")', function() {
      // uncomment below and update the code to test the property ash
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property betaCarot (base name: "beta_carot")', function() {
      // uncomment below and update the code to test the property betaCarot
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property betaCrypt (base name: "beta_crypt")', function() {
      // uncomment below and update the code to test the property betaCrypt
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property bioton (base name: "bioton")', function() {
      // uncomment below and update the code to test the property bioton
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property calcium (base name: "calcium")', function() {
      // uncomment below and update the code to test the property calcium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property calories (base name: "calories")', function() {
      // uncomment below and update the code to test the property calories
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property carbs (base name: "carbs")', function() {
      // uncomment below and update the code to test the property carbs
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property chloride (base name: "chloride")', function() {
      // uncomment below and update the code to test the property chloride
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property cholestrl (base name: "cholestrl")', function() {
      // uncomment below and update the code to test the property cholestrl
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property choline (base name: "choline")', function() {
      // uncomment below and update the code to test the property choline
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property cholineTot (base name: "choline_tot")', function() {
      // uncomment below and update the code to test the property cholineTot
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property chromium (base name: "chromium")', function() {
      // uncomment below and update the code to test the property chromium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property copper (base name: "copper")', function() {
      // uncomment below and update the code to test the property copper
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property fiberTd (base name: "fiber_td")', function() {
      // uncomment below and update the code to test the property fiberTd
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property fluoride (base name: "fluoride")', function() {
      // uncomment below and update the code to test the property fluoride
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property folateDfe (base name: "folate_dfe")', function() {
      // uncomment below and update the code to test the property folateDfe
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property folateTot (base name: "folate_tot")', function() {
      // uncomment below and update the code to test the property folateTot
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property folicAcid (base name: "folic_acid")', function() {
      // uncomment below and update the code to test the property folicAcid
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property foodFolate (base name: "food_folate")', function() {
      // uncomment below and update the code to test the property foodFolate
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property foodWeight (base name: "food_weight")', function() {
      // uncomment below and update the code to test the property foodWeight
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property iodine (base name: "iodine")', function() {
      // uncomment below and update the code to test the property iodine
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property iron (base name: "iron")', function() {
      // uncomment below and update the code to test the property iron
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property lutZea (base name: "lut_zea")', function() {
      // uncomment below and update the code to test the property lutZea
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property lycopene (base name: "lycopene")', function() {
      // uncomment below and update the code to test the property lycopene
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property magnesium (base name: "magnesium")', function() {
      // uncomment below and update the code to test the property magnesium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property manganese (base name: "manganese")', function() {
      // uncomment below and update the code to test the property manganese
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property molybdenum (base name: "molybdenum")', function() {
      // uncomment below and update the code to test the property molybdenum
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property monoFat (base name: "mono_fat")', function() {
      // uncomment below and update the code to test the property monoFat
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property phosphorus (base name: "phosphorus")', function() {
      // uncomment below and update the code to test the property phosphorus
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property polyFat (base name: "poly_fat")', function() {
      // uncomment below and update the code to test the property polyFat
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property potassium (base name: "potassium")', function() {
      // uncomment below and update the code to test the property potassium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property protein (base name: "protein")', function() {
      // uncomment below and update the code to test the property protein
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property retinol (base name: "retinol")', function() {
      // uncomment below and update the code to test the property retinol
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property satFat (base name: "sat_fat")', function() {
      // uncomment below and update the code to test the property satFat
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property selenium (base name: "selenium")', function() {
      // uncomment below and update the code to test the property selenium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property sodium (base name: "sodium")', function() {
      // uncomment below and update the code to test the property sodium
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property totalFat (base name: "total_fat")', function() {
      // uncomment below and update the code to test the property totalFat
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property totalSugar (base name: "total_sugar")', function() {
      // uncomment below and update the code to test the property totalSugar
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitAIu (base name: "vit_a_iu")', function() {
      // uncomment below and update the code to test the property vitAIu
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitARae (base name: "vit_a_rae")', function() {
      // uncomment below and update the code to test the property vitARae
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB1 (base name: "vit_b1")', function() {
      // uncomment below and update the code to test the property vitB1
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB12 (base name: "vit_b12")', function() {
      // uncomment below and update the code to test the property vitB12
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB2 (base name: "vit_b2")', function() {
      // uncomment below and update the code to test the property vitB2
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB3 (base name: "vit_b3")', function() {
      // uncomment below and update the code to test the property vitB3
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB5 (base name: "vit_b5")', function() {
      // uncomment below and update the code to test the property vitB5
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitB6 (base name: "vit_b6")', function() {
      // uncomment below and update the code to test the property vitB6
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitC (base name: "vit_c")', function() {
      // uncomment below and update the code to test the property vitC
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitDIu (base name: "vit_d_iu")', function() {
      // uncomment below and update the code to test the property vitDIu
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitDMcg (base name: "vit_d_mcg")', function() {
      // uncomment below and update the code to test the property vitDMcg
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitE (base name: "vit_e")', function() {
      // uncomment below and update the code to test the property vitE
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property vitK (base name: "vit_k")', function() {
      // uncomment below and update the code to test the property vitK
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property water (base name: "water")', function() {
      // uncomment below and update the code to test the property water
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property zinc (base name: "zinc")', function() {
      // uncomment below and update the code to test the property zinc
      //var instane = new CheeryChowRecipeApi.BaseNutritionAbbrev();
      //expect(instance).to.be();
    });

  });

}));