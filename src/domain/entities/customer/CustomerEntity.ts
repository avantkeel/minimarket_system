import IdentifierInterface from "../../valueObjects/IdentifierInterface";

export class CustomerEntity {
  customerId: string;
  userId: IdentifierInterface;
  createdAt: Date;
  constructor(customerId: string, userId: IdentifierInterface, createdAt: Date) {
    this.customerId = customerId;
    this.userId = userId;
    this.createdAt = createdAt;
  }
}
