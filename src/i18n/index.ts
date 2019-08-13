import en from "./en";

export enum I18nKey {
  SourceN,
  UnknownSource,
}

export interface IDict {
  [key: string]: string;
}

export class I18n {
  dict: IDict = en;

  use(dict: IDict) {
    this.dict = dict;
  }

  translate(key: I18nKey, ...data: (number | string)[]) {
    let content = this.dict[key];

    if (content == null) {
      return en[key] ? en[key] : "no translation";
    }

    data.forEach((item) => {
      content = content.replace("%s", `${item}`);
    });

    return content;
  }
}
