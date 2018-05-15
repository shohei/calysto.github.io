/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Variable blocks for Blockly.
 * @author shoaok@gmail.com (Shohei Aoki)
 */

'use strict';

goog.provide('Blockly.Blocks.overlay');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.overlay.HUE = 0;

Blockly.Blocks['overlay'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField("Set overlay to")
        .appendField(new Blockly.FieldDropdown([
                        ["base.bit","base.bit"], 
                        ["overlay1.bit","overlay1.bit"], 
                        ["overlay2.bit","overlay2.bit"]]), 
                    "bitstream");
    this.setNextStatement(true, null);
    // this.setHelpUrl(Blockly.Msg.OVERLAY_HELPURL);
  },
};
