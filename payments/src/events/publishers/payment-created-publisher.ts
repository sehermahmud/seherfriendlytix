import { Subjects, Publisher, PaymentCreatedEvent } from '@friendlytix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
