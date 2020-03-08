

export class Invoice {
  public notes: string;
  public total: number;
  public drinksTotal: number;
  public psNumber: number;
  public dateCreated: Date;
  public lastUpdated: Date;


  constructor(notes: string, total: number, drinksTotal: number) {
    this.notes = notes;
    this.total = total;
    this.drinksTotal = drinksTotal;
  }
}
