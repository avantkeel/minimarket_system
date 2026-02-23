import IdentifierInterface from "../../valueObjects/IdentifierInterface";

export default class SellerEntity {
  id: string;
  userId: IdentifierInterface;
  createdat: Date;
  constructor(id: string, userId: IdentifierInterface, createdat: Date) {
    this.id = id;
    this.userId = userId;
    this.createdat = createdat;
  }
}
