import { QRCodeSVG } from 'qrcode.react';

interface IQrCode {
  url: string;
  size: number;
  bgColour: string;
  fgColour: string;
}

export default function QrCode({
  bgColour,
  fgColour,
  size,
  url
}: IQrCode) {
  return (
    <QRCodeSVG
      value={url ?? 'https://devdailyhub.com'}
      size={size ?? 128}
      bgColor={bgColour ?? '#FFF'}
      fgColor={fgColour ?? '#000'}
    />
  );
}
