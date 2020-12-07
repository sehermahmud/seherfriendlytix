import { Card, CardContent } from '@material-ui/core';
import Link from 'next/link';
import { MDBDataTable } from 'mdbreact';

const LandingPage = ({ currentUser, tickets }) => {
  const userAttributes = [];
  tickets.forEach((ticket) => {
    userAttributes.push({
      Title: ticket.title,
      Price: `$${ticket.price}`,
      Details: (
        <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
          <a target="_blank">View</a>
        </Link>
      ),
    });
  });

  const data = {
    columns: [
      {
        label: 'Title',
        field: 'Title',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Price',
        field: 'Price',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Details',
        field: 'Details',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: userAttributes,
  };

  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>${ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <Card style={{ margin: '1em', borderRadius: 0 }}>
      <CardContent>
        <div>
          <h2>Tickets</h2>
          <br />
          <MDBDataTable striped bordered data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
