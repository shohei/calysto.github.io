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

goog.provide('Blockly.Blocks.gcode');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.gcode.HUE = 90;

Blockly.Blocks['send_gcode_string'] = {
  init: function() {
    this.appendValueInput("gcode")
        .setCheck("String")
        .appendField("Send G-code string");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['send_gcode_variable'] = {
  init: function() {
    this.appendValueInput("gcode")
        .setCheck("String")
        .appendField("Send G-code variable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['homing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Home axes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['send_gcode_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send gcode file")
        .appendField(new Blockly.FieldDropdown([["20mm_cube.gcode","20mm_cube.gcode"], ["test1.gcode","test2.gcode"], ["test2.gcode","test3.gcode"]]), "gcode_filename");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['send_g1_x_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send G1");
    this.appendValueInput("X")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['open_gcode_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Open G-code file")
        .appendField(new Blockly.FieldDropdown([["octo.gcode","/home/xilinx/jupyter_notebooks/base/arduino/data/octo.gcode"], ["octo2.gcode","/home/xilinx/jupyter_notebooks/base/arduino/data/octo2.gcode"], ["20mm_cube","/home/xilinx/jupyter_notebooks/base/arduino/data/20mm_cube.gcode"]]), "gcode_file");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};