import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const submit = useSubmit();
  const { state } = useNavigation();

  const { data, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ['events', id] }); // Cancel the ongoing queries data.
  //     const previousEvent = queryClient.getQueryData(['events', id]); // Retrieve the Cached query data.

  //     queryClient.setQueryData(['events', id], newEvent); // manually update a specific query data without making actual request to the server.

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', id]);
  //   },
  // });

  function handleSubmit(formData) {
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to load event. Please check your input and try again later.'
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  const { id } = params;

  return queryClient.fetchQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });
}

export async function action({ request, params }) {
  const { id } = params;

  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id, event: updatedEventData });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
