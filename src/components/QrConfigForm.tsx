import React, { Dispatch, SetStateAction } from 'react';
import TextInput from './TextInput';

interface IQrConfigForm {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  bgColour: string;
  setBgColour: Dispatch<SetStateAction<string>>;
  fgColour: string;
  setFgColour: Dispatch<SetStateAction<string>>;
}

export default function QrConfigForm({
  url,
  setUrl,
  size,
  setSize,
  bgColour,
  setBgColour,
  fgColour,
  setFgColour,
}: IQrConfigForm) {
  return (
    <div className='qr-config-form-container'>
      <TextInput<string>
        id='url'
        label='QR URL'
        setValue={setUrl}
        value={url}
      />
      <TextInput<number>
        id='size'
        label='QR Size'
        setValue={setSize}
        value={size}
        type='number'
        min={1}
        max={10000}
      />
      <TextInput<string>
        id='background-colour'
        value={bgColour}
        setValue={setBgColour}
        label='Background Colour'
      />
      <TextInput<string>
        id='foreground-colour'
        value={fgColour}
        setValue={setFgColour}
        label='Foreground Colour'
      />
    </div>
  );
}
