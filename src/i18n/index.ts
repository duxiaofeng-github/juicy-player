import { ComponentChild } from "preact";

export interface ILang {
  SourceN: string;
  UnknownSource: string;
  Progress: string;
  Volume: string;
  Brightness: string;
  SourceNotSupproted: string;
  NetworkError: string;
  DecodeError: string;
  OtherErrors: string;
  RetryPlaying: string;
}

export function printf(template: string, ...data: ComponentChild[]): ComponentChild[] {
  const templateArr = template.split("%s");
  const result = [];

  templateArr.forEach((item, index) => {
    const replacement = data && data[index];
    result.push(item, replacement);
  });

  return result;
}
