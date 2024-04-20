import { FormPart } from "./IFormProvider";
import {promises as fsPromises} from 'fs';
import { SampleProvider } from "./SampleProvider";
import {XMLParser, XMLValidator} from 'fast-xml-parser';


export class XMLFormProvider {
    constructor(){}

    getFormNames(): string[] {
        return ['My Form'];
    }

    getForms(): FormPart[][] {
        // Read XSD File from ./forms/forms.xsd
        // const xsdFile = fs.readFileSync('./forms/forms.xsd', 'utf8');
        fsPromises.readFile('./src/providers/forms/forms.xsd', 'utf8').then((xsd) => {
            fsPromises.readFile('./src/providers/forms/form1.xml', 'utf8').then((xml) => {
                const parser = new XMLParser();        

                if (!this.validateFile(xsd, xml)){
                    console.log('Invalid file');
                    return;
                }

                const xsdObj = parser.parse(xsd);
                const xmlObj = parser.parse(xml);

                console.log('Valid file');
            });
        });

        // Parse XML File

        // Return FormParts
        const ex = new SampleProvider();
        return ex.getForms();
    }

    validateFile(xsd: string, xml: string) : boolean {
        let valid = false;
        valid = XMLValidator.validate(xsd) === true;
        valid = valid && XMLValidator.validate(xml) === true;
        
        // const res = xmllint.validateXml({
        //     xml: xml,
        //     schema: xsd
        // });
        // console.log(res);

        return valid;
    }
}