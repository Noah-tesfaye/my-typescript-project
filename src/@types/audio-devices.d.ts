declare module 'audio-devices' {
  type AudioDeviceType = 'input' | 'output';

  interface AudioDevice {
    id: string;
    name: string;
    type: AudioDeviceType;
    isDefault: boolean;
    sampleRate?: number;
    channels?: number;
  }

  // Main export is the getAudioDevices function
  function getAudioDevices(): Promise<AudioDevice[]>;
  
  // Export types for external use
  export { AudioDevice, AudioDeviceType };
}