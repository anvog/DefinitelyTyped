// Type definitions for x2js
// Project: https://code.google.com/p/x2js/
// Definitions by: Horiuchi_H <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Fork to use with Fork of x2js: https://github.com/anvog/x2js/tree/Feature-keepOrder
// Original sources are available at https://github.com/anvog/DefinitelyTyped 

interface IX2JS {
  new (config?: IX2JSOption): IX2JS;

  getVersion(): string;

  xml2json<T>(dom: Node): T;
  json2xml<T>(json: T): Node;
  xml_str2json<T>(xml: string): T;
  json2xml_str<T>(json: T): string;
  parseXmlString(xml: string): Node;

  asArray(prop: any): any[];
  asDateTime(key: string): string;
  asXmlDateTime(date: Date): string;
  asXmlDateTime(date: number): string;
}

interface IX2JSOption {
  escapeMode?: boolean;
  attributePrefix?: string;
  arrayAccessForm?: string;
  emptyNodeForm?: string;
  enableToStringFunc?: boolean;
  arrayAccessFormPaths?: any[];
  skipEmptyTextNodesForObj?: boolean;
  stripWhitespaces?: boolean;
  datetimeAccessFormPaths?: any[];
  // Added for x2js Fork: https://github.com/anvog/x2js/tree/Feature-keepOrder
  keepOrder?: boolean;
  orderContainerName?: string;
  arrayOrderItems?: any[];
}

declare var X2JS: IX2JS;

