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

goog.provide('Blockly.Python.gcode');

goog.require('Blockly.Python');

Blockly.Python['send_gcode_string'] = function(block) {
  var value_gcode = Blockly.Python.valueToCode(block, 'gcode', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'arduino.write("'+value_gcode.slice(1).slice(0,-1)+'\\n")\n';
  return code;
};

Blockly.Python['homing'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'arduino.write("G28\\n")\n';
  return code;
};

Blockly.Python['send_gcode_file'] = function(block) {
  var dropdown_gcode_filename = block.getFieldValue('gcode_filename');
  // TODO: Assemble Python into code variable.
  var code = "import time\narduino.write('G1 Z0.325 F3000\\n')\ntime.sleep(15)\nwith open('data/20mm_cube.gcode') as file:\n    lines = file.readlines()\n    for idx,line in enumerate(lines):\n        cmd = line.strip()+'\\n'\n        if(cmd[0]==';'):\n            continue\n        time.sleep(0.7)\n        arduino.write(cmd)\n";
  return code;
};

