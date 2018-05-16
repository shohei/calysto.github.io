/** * @license * Visual Blocks Language * * Copyright 2012 Google Inc.
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
 * @fileoverview Generating Python for logic blocks.
 * @author shoaok@gmail.com (Shohei Aoki)
 */
'use strict';

goog.provide('Blockly.Python.overlay');

goog.require('Blockly.Python');


Blockly.Python['overlay'] = function(block) {
  var dropdown_bitstream = block.getFieldValue('bitstream');
  // TODO: Assemble Python into code variable.
  var code = 'from pynq.overlays.base import BaseOverlay\nbase = BaseOverlay("'+dropdown_bitstream+'")\n';
  return code;
};

Blockly.Python['hdmi_overlay'] = function(block) {
  var dropdown_bitstream = block.getFieldValue('bitstream');
  // TODO: Assemble Python into code variable.
  var code = 'from pynq_computervision import BareHDMIOverlay\nbase = BareHDMIOverlay("'+dropdown_bitstream+'")\nfrom pynq import Xlnk\nmem_manager = Xlnk()\nimport pynq_computervision.overlays.computer_vision.xv2Filter2DRemap as xv2\nheight = hdmi_in.mode.height\nwidth = hdmi_in.mode.width\nbpp = hdmi_in.mode.bits_per_pixel\n';
  return code;
};
