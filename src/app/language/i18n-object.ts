import {Language} from './language';

export type I18nObject<T> = { [key in Language]: T; };
