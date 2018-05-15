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

goog.provide('Blockly.Blocks.arduino');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.arduino.HUE = 30;

Blockly.Blocks['arduino'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Arduino firmware to")
        .appendField(new Blockly.FieldDropdown([["arduino_zsprinter.elf","arduino_zsprinter.elf"], ["hoge.elf","hoge.elf"], ["foo.elf","foo.elf"]]), "elf");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setColour(Blockly.Blocks.arduino.HUE); //undefined ??
    this.setColour(30);
    // // this.setHelpUrl(Blockly.Msg.ARDUINO_HELPURL);
    // this.setTooltip(Blockly.Msg.ARDUINO_GET_TOOLTIP);
  },
};