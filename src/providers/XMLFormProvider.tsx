import { FormPart, IFormProvider } from "./IFormProvider";
import {promises as fsPromises} from 'fs';
import { SampleProvider } from "./SampleProvider";

export class XMLFormProvider implements IFormProvider {
    constructor(){}

    getFormNames(): string[] {
        return ['My Form'];
    }

    getForms(): FormPart[][] {
        // Read XSD File from ./forms/forms.xsd
        // const xsdFile = fs.readFileSync('./forms/forms.xsd', 'utf8');
        fsPromises.readFile('./src/providers/forms/forms.xsd', 'utf8').then((xsd) => {
            fsPromises.readFile('./src/providers/forms/form1.xml', 'utf8').then((xml) => {
                if (!this.validateFile(xsd, xml)){
                    console.log('Invalid file');
                    return;
                }

                console.log('Valid file');
            });
        });

        // Parse XML File

        // Return FormParts
        const ex = new SampleProvider();
        return ex.getForms();
    }

    validateFile(xsd: string, xml: string) : boolean {

        // const validator = require('xsd-schema-validator');
        let valid = false;

        // console.log(xml)

        // validator.validateXML(xml, xsd, function(err: any, result: any) {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     valid = result.valid;
        // });
        return valid;
    }
}