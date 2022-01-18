export class MCompany {
    companyName: string;
    companyAddress: string;
    companyContact: string;
    companyLogo: string;
    companyTwitter: string;
    companyLikedin: string;
    companyEmail: string;
    invoiceNotes: string;

    // TODO: check model again
    // jobs: string;
}

export class MCreateCompany extends MCompany { }


export class MUpdateCompany extends MCompany { }