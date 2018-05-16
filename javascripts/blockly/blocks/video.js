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

goog.provide('Blockly.Blocks.video');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
// Blockly.Blocks.arduino.HUE = 30;

Blockly.Blocks['hdmi_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HDMI setup")
        .appendField(new Blockly.FieldDropdown([["normal","normal"], ["GRAY","gray"], ["RGB","rgb"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};j

Blockly.Blocks['hdmi_tie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HDMI tie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setup_pipeline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup video pipeline");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hdmi_readframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HDMI readframe");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hdmi_writeframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HDMI writeframe");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rgb2gray'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RGB2GRAY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gray2rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GRAY2RGB");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['laplacian_filter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Laplacian filter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['terminate_hdmi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Terminate HDMI");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['init_ncs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize NCS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['run_yolo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Run YOLO");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['terminate_ncs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Terminate NCS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['software_filter_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Software 2D filter kernel")
        .appendField(new Blockly.FieldDropdown([["sobel (vertical)","sobel_ver"], ["sobel (horizontal)","sobel_hor"], ["Laplacian (high-pass)","lap_high"], ["Gaussian (high-pass)","gauss_high"], ["Average blur","ave_blur"], ["Gaussian blur","gauss_blur"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hardware_filter_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hardware 2D filter kernel")
        .appendField(new Blockly.FieldDropdown([["sobel (vertical)","sobel_ver"], ["sobel (horizontal)","sobel_hor"], ["Laplacian (high-pass)","lap_high"], ["Gaussian (high-pass)","gauss_high"], ["Average blur","ave_blur"], ["Gaussian blur","gauss_blur"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['init_filter_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize 2D filter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};