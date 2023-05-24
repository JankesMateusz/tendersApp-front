class TenderM {
  id: number;
  mdpId: string;
  title: string;
  publicationDate: Date;
  bidDate: Date;
  link: string;
  bidNumber: string;
  status: string;
  budget: string;
  comments: string;

  constructor(
    id: number,
    mdpId: string,
    title: string,
    publicationDate: Date,
    bidDate: Date,
    link: string,
    bidNumber: string,
    status: string,
    budget: string,
    comments: string
  ) {
    this.id = id;
    this.mdpId = mdpId;
    this.title = title;
    this.publicationDate = publicationDate;
    this.bidDate = bidDate;
    this.link = link;
    this.bidNumber = bidNumber;
    this.status = status;
    this.budget = budget;
    this.comments = comments;
  }
}

export default TenderM;
