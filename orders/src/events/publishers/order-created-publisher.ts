import { Publisher, OrderCreatedEvent, Subjects } from '@friendlytix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
