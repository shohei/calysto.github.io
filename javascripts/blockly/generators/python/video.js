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

Blockly.JavaScript['hdmi_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hdmi_in = base.video.hdmi_in\nhdmi_out = base.video.hdmi_out\nhdmi_in.configure()\nhdmi_out.configure(hdmi_in.mode)\nhdmi_in.start()\nhdmi_out.start()\n';
  return code;
};

Blockly.JavaScript['hdmi_tie'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hdmi_in.tie(hdmi_out)\n';
  return code;
};