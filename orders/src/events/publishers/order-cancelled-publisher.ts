import { Subjects, Publisher, OrderCancelledEvent } from '@friendlytix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
