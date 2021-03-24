import {I18nObject} from '../../language/i18n-object';

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

export type ContactInformation = I18nObject<string>; // contentUrl
