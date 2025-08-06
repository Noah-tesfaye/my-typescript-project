import { ValidatorFunction } from './../node_modules/@typescript-eslint/eslint-plugin/dist/rules/naming-convention-utils/types.d';
const audioDevices = require('audio-devices');

interface AudioDevice {
  id: string;
  name: string;
  type: 'input' | 'output';
  isDefault: boolean;
  sampleRate?: number;
  channels?: number;
}

async function listAudioDevices() {
  try {
    // This will open a popup window listing audio devices (cannot list in console)
    await audioDevices.getDevices();
    await audioDevices.ValidatorFunction
    console.log('A popup window should appear listing your audio devices.');
  } catch (error) {
    console.error('Error listing audio devices:', error);
  }
}

listAudioDevices();