export interface ILang {
  SourceN: string;
  UnknownSource: string;
}

export function printf(template: string, ...data: (number | string)[]) {
  let content = template;

  data.forEach((item) => {
    content = content.replace("%s", `${item}`);
  });

  return content;
}
