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
    instance = new CheeryChowRecipeApi.PagedRecipeResults();
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

  describe('PagedRecipeResults', function() {
    it('should create an instance of PagedRecipeResults', function() {
      // uncomment below and update the code to test PagedRecipeResults
      //var instane = new CheeryChowRecipeApi.PagedRecipeResults();
      //expect(instance).to.be.a(CheeryChowRecipeApi.PagedRecipeResults);
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new CheeryChowRecipeApi.PagedRecipeResults();
      //expect(instance).to.be();
    });

    it('should have the property totalRows (base name: "totalRows")', function() {
      // uncomment below and update the code to test the property totalRows
      //var instane = new CheeryChowRecipeApi.PagedRecipeResults();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instane = new CheeryChowRecipeApi.PagedRecipeResults();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new CheeryChowRecipeApi.PagedRecipeResults();
      //expect(instance).to.be();
    });

  });

}));
