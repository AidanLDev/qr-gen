import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QrCode() {
  return (
    <QRCodeSVG
      value='https://dailydevhub.com'
      size={128}
      bgColor='#FFF'
      fgColor='#000'
    />
  );
}
