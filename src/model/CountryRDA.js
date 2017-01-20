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
    define(['ApiClient', 'model/RDP'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RDP'));
  } else {
    // Browser globals (root is window)
    if (!root.CheeryChowRecipeApi) {
      root.CheeryChowRecipeApi = {};
    }
    root.CheeryChowRecipeApi.CountryRDA = factory(root.CheeryChowRecipeApi.ApiClient, root.CheeryChowRecipeApi.RDP);
  }
}(this, function(ApiClient, RDP) {
  'use strict';




  /**
   * The CountryRDA model module.
   * @module model/CountryRDA
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>CountryRDA</code>.
   * @alias module:model/CountryRDA
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CountryRDA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryRDA} obj Optional instance to populate.
   * @return {module:model/CountryRDA} The populated <code>CountryRDA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('female')) {
        obj['female'] = RDP.constructFromObject(data['female']);
      }
      if (data.hasOwnProperty('male')) {
        obj['male'] = RDP.constructFromObject(data['male']);
      }
    }
    return obj;
  }

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/RDP} female
   */
  exports.prototype['female'] = undefined;
  /**
   * @member {module:model/RDP} male
   */
  exports.prototype['male'] = undefined;



  return exports;
}));


