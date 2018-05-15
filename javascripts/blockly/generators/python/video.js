/* * @license * Visual Blocks Language * * Copyright 2012 Google Inc.
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

goog.provide('Blockly.Python.video');

goog.require('Blockly.Python');

Blockly.Python['hdmi_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hdmi_in = base.video.hdmi_in\nhdmi_out = base.video.hdmi_out\nhdmi_in.configure()\nhdmi_out.configure(hdmi_in.mode)\nhdmi_in.start()\nhdmi_out.start()\n';
  return code;
};

Blockly.Python['hdmi_tie'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hdmi_in.tie(hdmi_out)\n';
  return code;
};

Blockly.Python['setup_pipeline'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\nimport cv2\nimport numpy as np\ngrayscale = np.ndarray(shape=(hdmi_in.mode.height, hdmi_in.mode.width), dtype=np.uint8)\nresult = np.ndarray(shape=(hdmi_in.mode.height, hdmi_in.mode.width), dtype=np.uint8)\n';
  return code;
};

Blockly.Python['hdmi_readframe'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'inframe = hdmi_in.readframe()\n';
  return code;
};

Blockly.Python['hdmi_writeframe'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'hdmi_out.writeframe(outframe)\n';
  return code;
};

Blockly.Python['rgb2gray'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'cv2.cvtColor(inframe,cv2.COLOR_RGB2GRAY,dst=grayscale)\ninframe.freebuffer()\n';
  return code;
};

Blockly.Python['gray2rgb'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'outframe = hdmi_out.newframe()\ncv2.cvtColor(result, cv2.COLOR_GRAY2RGB,dst=outframe)\n';
  return code;
};

Blockly.Python['laplacian_filter'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'cv2.Laplacian(grayscale, cv2.CV_8U, dst=result)\n';
  return code;
};

Blockly.Python['terminate_hdmi'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'hdmi_in.close()\nhdmi_out.close()\n';
  return code;
};
