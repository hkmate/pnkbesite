export enum MemberType {
    MEMBER = 'MEMBER',
    PRESIDENT = 'PRESIDENT',
    SECRETARY = 'SECRETARY',
    TECHNICAL_LEADER = 'TECHNICAL_LEADER',
    FOUNDATION_MEMBER = 'FOUNDATION_MEMBER',
    FELLOW = 'FELLOW'
}

export class MemberDescription {
    firstName: string;
    lastName: string;
    types: Array<MemberType>;
    profilePicUrl: string;
}
