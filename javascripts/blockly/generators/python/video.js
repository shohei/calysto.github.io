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
  var dropdown_name = block.getFieldValue('NAME');
  if(dropdown_name=='gray'){
    var code = 'hdmi_in = base.video.hdmi_in\nhdmi_out = base.video.hdmi_out\nhdmi_in.configure(PIXEL_GRAY)\nhdmi_out.configure(hdmi_in.mode)\nhdmi_in.start()\nhdmi_out.start()\n';
  } else if(dropdown_name=='rgb') {
    var code = 'hdmi_in = base.video.hdmi_in\nhdmi_out = base.video.hdmi_out\nhdmi_in.configure(PIXEL_RGB)\nhdmi_out.configure(hdmi_in.mode)\nhdmi_in.start()\nhdmi_out.start()\n';
  } else {
    var code = 'hdmi_in = base.video.hdmi_in\nhdmi_out = base.video.hdmi_out\nhdmi_in.configure()\nhdmi_out.configure(hdmi_in.mode)\nhdmi_in.start()\nhdmi_out.start()\n';
  }
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
  var code = "from mvnc import mvncapi as mvnc\nimport cv2\nimport numpy as np\nimport time\nimport yolo_ncs,ncs\nncsdev = ncs.MovidiusNCS()\nif ncsdev.load_graph('./graph'):\n    print('Graph file loaded to Movidius NCS')\nframe_in_width = hdmi_in.mode.width\nframe_in_height = hdmi_in.mode.height\nyolo_width = 448\nyolo_height = 448\nframe_top = (frame_in_height-yolo_height)//2\nframe_bot = frame_in_height-frame_top\nframe_left = (frame_in_width-yolo_width)//2\nframe_right = frame_in_width-frame_left\n";
  return code;
};

Blockly.Python['run_yolo'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "small_frame = inframe[frame_top:frame_bot,frame_left:frame_right,:]\nncs_frame = small_frame.copy()/255.0\nncsdev.graph.LoadTensor(ncs_frame.astype(np.float16), 'user object')\nout, userobj = ncsdev.graph.GetResult()\nresults = yolo_ncs.interpret_output(out.astype(np.float32), small_frame.shape[1], small_frame.shape[0])\nimg_res = yolo_ncs.draw_boxes(small_frame, results, small_frame.shape[1], small_frame.shape[0])\noutframe = hdmi_out.newframe()\noutframe[frame_top:frame_bot,frame_left:frame_right,:] = img_res[:,:,:]\n";
  return code;
};

Blockly.Python['terminate_ncs'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ncsdev.close()\n';
  return code;
};

Blockly.Python['software_filter_2d'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  if(dropdown_name=='lap_high'){
    var kernel = 'np.array([[0.0,1.0,0.0],[1.0,-4.0,1.0],[0.0,1.0,0.0]],np.float32)';
  } else if(dropdown_name=='gauss_high'){
    var kernel = 'np.array([[-0.0625,-0.125,-0.0625],[-0.125,0.75,-0.125],[-0.0625,-0.125,-0.0625]],np.float32)';
  } else if(dropdown_name=='ave_blur'){
    var kernel = 'np.ones((3,3),np.float32)/9.0';
  } else if(dropdown_name=='gauss_blur'){
    var kernel = 'np.array([[0.0625,0.125,0.0625],[0.125,0.25,0.125]';
  } else if(dropdown_name=='sobel_ver'){
    var kernel = 'np.array([[1.0,0.0,-1.0],[2.0,0.0,-2.0],[1.0,0.0,-1.0]],np.float32)';
  } else if(dropdown_name=='sobel_hor'){
    var kernel = 'np.array([[1.0,2.0,1.0],[0.0,0.0,0.0],[-1.0,-2.0,-1.0]],np.float32)';
  }
  // TODO: Assemble Python into code variable.
  var code = 'outframe = hdmi_out.newframe()\ncv2.filter2D(inframe, -1, '+kernel+', dst=outframe, borderType=cv2.BORDER_CONSTANT)\n';
  return code;
};

Blockly.Python['hardware_filter_2d'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  if(dropdown_name=='lap_high'){
    var kernel = 'np.array([[0.0,1.0,0.0],[1.0,-4.0,1.0],[0.0,1.0,0.0]],np.float32)';
  } else if(dropdown_name=='gauss_high'){
    var kernel = 'np.array([[-0.0625,-0.125,-0.0625],[-0.125,0.75,-0.125],[-0.0625,-0.125,-0.0625]],np.float32)';
  } else if(dropdown_name=='ave_blur'){
    var kernel = 'np.ones((3,3),np.float32)/9.0';
  } else if(dropdown_name=='gauss_blur'){
    var kernel = 'np.array([[0.0625,0.125,0.0625],[0.125,0.25,0.125],[0.0625,0.125,0.0625]],np.float32)';
  } else if(dropdown_name=='sobel_ver'){
    var kernel = 'np.array([[1.0,0.0,-1.0],[2.0,0.0,-2.0],[1.0,0.0,-1.0]],np.float32)';
  } else if(dropdown_name=='sobel_hor'){
    var kernel = 'np.array([[1.0,2.0,1.0],[0.0,0.0,0.0],[-1.0,-2.0,-1.0]],np.float32)';
  }
  // TODO: Assemble Python into code variable.
  var code = 'outframe = hdmi_out.newframe()\nxv2.filter2D(inframe, -1, '+kernel+', dst=outframe, borderType=cv2.BORDER_CONSTANT)\n';
  return code;
};

Blockly.Python['init_filter_2d'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'height = hdmi_in.mode.height\nwidth = hdmi_in.mode.width\nbpp = hdmi_in.mode.bits_per_pixel\n';
  return code;
};

Blockly.Python['binarize'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'gray = cv2.cvtColor(inframe, cv2.COLOR_BGR2GRAY)\npreprocessed = cv2.GaussianBlur(gray, (5, 5), 0)\n_, binary = cv2.threshold(preprocessed, '+number_name+', 255, cv2.THRESH_BINARY)\nbinary = cv2.bitwise_not(binary)\n';
  return code;
};

Blockly.Python['hdmi_writeframe_binary'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'outframe = hdmi_out.newframe()\ncv2.cvtColor(binary,cv2.COLOR_GRAY2RGB,dst=outframe)\nhdmi_out.writeframe(outframe)\n';
  return code;
};

Blockly.Python['detect_center_and_angle'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "_, contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\nmin_frame_area = 60\nlarge_contours = [cnt for cnt in contours if cv2.contourArea(cnt) > min_frame_area]\nbounding_img = np.copy(inframe)\nfor contour in large_contours:\n    rect = cv2.minAreaRect(contour)\n    box = cv2.boxPoints(rect)\n    box = np.int0(box)\n    cgx = int(rect[0][0])\n    cgy = int(rect[0][1])\n    leftx = int(cgx - (rect[1][0]/2.0))\n    lefty = int(cgy - (rect[1][1]/2.0))\n    angle = round(rect[2],1)\n    cv2.drawContours(bounding_img,[box],0,(0,0,255),2)\n    cv2.circle(bounding_img,(cgx,cgy), 10, (255,0,0), -1)\n    font = cv2.FONT_HERSHEY_SIMPLEX\n    cv2.putText(bounding_img,'Rot: '+str(angle)+'[deg]',(leftx,lefty), font, 0.7, (0,0,0),2,cv2.LINE_AA)\n";
  return code;
};

Blockly.Python['hdmi_writeframe_center_angle'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'outframe = hdmi_out.newframe()\noutframe[:] = bounding_img\nhdmi_out.writeframe(outframe)\n';
  return code;
};


