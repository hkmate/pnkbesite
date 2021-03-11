export enum MemberType {
    MEMBER = 'MEMBER',
    PRESIDENT = 'PRESIDENT',
    SECRETARY = 'SECRETARY',
    FOUNDATION_MEMBER = 'FOUNDATION_MEMBER',
    FELLOW = 'FELLOW'
}

export class MemberDescription {
    firstName: string;
    lastName: string;
    types: Array<MemberType>;
    profilePicUrl: string;
}
