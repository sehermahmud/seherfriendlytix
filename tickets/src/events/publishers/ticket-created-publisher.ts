import { Publisher, Subjects, TicketCreatedEvent } from '@friendlytix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
