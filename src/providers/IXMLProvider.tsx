export interface IXMLProvider {
    getForms(): FormPart[][];
    getFormNames(): string[];
}

export interface FormPart {
    title: string;
    type: string;
    options: string[];
}