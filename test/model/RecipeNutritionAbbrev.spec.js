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
    instance = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
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

  describe('RecipeNutritionAbbrev', function() {
    it('should create an instance of RecipeNutritionAbbrev', function() {
      // uncomment below and update the code to test RecipeNutritionAbbrev
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be.a(CheeryChowRecipeApi.RecipeNutritionAbbrev);
    });

    it('should have the property numAlcohol (base name: "num_alcohol")', function() {
      // uncomment below and update the code to test the property numAlcohol
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numCeral (base name: "num_ceral")', function() {
      // uncomment below and update the code to test the property numCeral
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numDairy (base name: "num_dairy")', function() {
      // uncomment below and update the code to test the property numDairy
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numEgg (base name: "num_egg")', function() {
      // uncomment below and update the code to test the property numEgg
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numFish (base name: "num_fish")', function() {
      // uncomment below and update the code to test the property numFish
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numFruit (base name: "num_fruit")', function() {
      // uncomment below and update the code to test the property numFruit
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numMeat (base name: "num_meat")', function() {
      // uncomment below and update the code to test the property numMeat
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numNut (base name: "num_nut")', function() {
      // uncomment below and update the code to test the property numNut
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numSugar (base name: "num_sugar")', function() {
      // uncomment below and update the code to test the property numSugar
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numVeg (base name: "num_veg")', function() {
      // uncomment below and update the code to test the property numVeg
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property numVegan (base name: "num_vegan")', function() {
      // uncomment below and update the code to test the property numVegan
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property portions (base name: "portions")', function() {
      // uncomment below and update the code to test the property portions
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property recipeNutritionAbbrevId (base name: "recipe_nutrition_abbrev_id")', function() {
      // uncomment below and update the code to test the property recipeNutritionAbbrevId
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

    it('should have the property recipeId (base name: "recipe_id")', function() {
      // uncomment below and update the code to test the property recipeId
      //var instane = new CheeryChowRecipeApi.RecipeNutritionAbbrev();
      //expect(instance).to.be();
    });

  });

}));
