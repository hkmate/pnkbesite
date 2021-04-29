import {I18nObject} from '../../language/i18n-object';

export class OnePercentSupport {
    year: number;
    fullAmount: number;
    spentOnActivity: number;
    spentOnOperation: number;
    description: I18nObject<string>;
}

export type OnePercentSupports = Array<OnePercentSupport>;

export class IndividualSupporter {
    name: string;
    logo?: string; // img url
    url?: string;
}

export type IndividualSupporters = Array<IndividualSupporter>;

export class SupportersDescription {
    contentUrl: I18nObject<string>;
    onePercentageSupports: OnePercentSupports;
    individualSupporters: IndividualSupporters;
}
