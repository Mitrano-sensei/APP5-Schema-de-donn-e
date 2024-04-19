export interface IFormProvider {
    getForms(): FormPart[][];
    getFormNames(): string[];
}

export interface FormPart {
    title: string;
    type: string;
    options: string[];
}