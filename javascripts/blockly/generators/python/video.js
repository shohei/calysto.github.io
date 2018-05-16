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

Blockly.Python['init_ncs'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ncsdev = ncs.MovidiusNCS()\nif ncsdev.load_graph('../graph'):\n    print('Graph file loaded to Movidius NCS')\nframe_in_width = hdmi_in.mode.width\nframe_in_height = hdmi_in.mode.height\nyolo_width = 448\nyolo_height = 448\nframe_top = (frame_in_height-yolo_height)//2\nframe_bot = frame_in_height-frame_top\nframe_left = (frame_in_width-yolo_width)//2\nframe_right = frame_in_width-frame_left\n';
  return code;
};

Blockly.Python['run_yolo'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'small_frame = inframe[frame_top:frame_bot,frame_left:frame_right,:]\nncs_frame = small_frame.copy()/255.0\nncsdev.graph.LoadTensor(ncs_frame.astype(np.float16), 'user object')\nout, userobj = ncsdev.graph.GetResult()\nresults = yolo_ncs.interpret_output(out.astype(np.float32), small_frame.shape[1], small_frame.shape[0])\nimg_res = yolo_ncs.draw_boxes(small_frame, results, small_frame.shape[1], small_frame.shape[0])\noutframe = hdmi_out.newframe()\noutframe[frame_top:frame_bot,frame_left:frame_right,:] = img_res[:,:,:]\n';
  return code;
};

Blockly.Python['terminate_ncs'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ncsdev.close()\n';
  return code;
};


