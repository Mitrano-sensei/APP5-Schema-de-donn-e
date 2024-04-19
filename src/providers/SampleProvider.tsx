import { FormPart, IFormProvider } from "./IFormProvider";

export class SampleProvider implements IFormProvider {
    constructor(){}

    getFormNames(): string[] {
        return ['Form 1', 'Form 2'];
    }

    getForms(): FormPart[][] {
        const exampleFormParts: FormPart[] = [
            {title: 'Décrit ton plat préféré', type: 'text', options: []},
            {title: 'Choisis ta couleur préférée', type: 'select', options: ['Rouge', 'Bleu', 'Vert']},
            {title: 'Choisis ta forme préférée', type: 'select', options: ['Carré', 'Rond', 'Triangle']}
        ]; // TODO : Devrait être remplacé par un formProvider qui lirait le XML correspondant à l'option sélectionnée
    
        const exampleFormParts2: FormPart[] = [
            {title: 'Décrit ton truc préféré', type: 'text', options: []},
            {title: 'Choisis ta chose préférée', type: 'select', options: ['Table', 'Chaise', 'Maison']},
            {title: 'Choisis ta forme préférée', type: 'select', options: ['Carré', 'Rond', 'Triangle']}
        ]; // TODO : Devrait être remplacé par un formProvider qui lirait le XML correspondant à l'option sélectionnée

        return [exampleFormParts, exampleFormParts2];
    }
}