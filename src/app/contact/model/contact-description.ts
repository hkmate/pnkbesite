import {Language} from '../../language/language';

export class ContactDescription {

    fullNameOfAssociation: string;
    presidentName: string;
    phone?: string;
    headquarters: string;
    site?: string;
    emailAddress: string;
    website: string;
    taxNumber: string;
    otherInfo: ContactInformation;
}

export type ContactInformation = {
    [key in Language]: string; // contentUrl
};
