import { setOrderRequestStatus, setQuest, setQuestRequestStatus, setQuests, setQuestsRequestStatus } from './actions';
import { Endpoint, ErrorMessage, HttpStatusCode, RequestStatus, SuccessMessage } from '../constants';
import { toast } from 'react-toastify';

const getQuestAction = (id) => (
  async (dispatch)  => {
    dispatch(setQuestRequestStatus(RequestStatus.Loading));
    await fetch(Endpoint.GetQuest(id))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status.toString());
      })
      .then((data) => {
        dispatch(setQuest(data));
        dispatch(setQuestRequestStatus(RequestStatus.Success));
      })
      .catch((error) => {
        dispatch(setQuestRequestStatus(
          error && error.message === HttpStatusCode.NotFound
            ? RequestStatus.NotFound
            : RequestStatus.Fail
        ));
        !error && toast.error(ErrorMessage.FailToLoadQuest);
      });
  }
);

const getQuestsAction = () => (
  async (dispatch)  => {
    dispatch(setQuestsRequestStatus(RequestStatus.Loading));
    await fetch(Endpoint.GetQuests())
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status.toString());
      })
      .then((data) => {
        dispatch(setQuests(data));
        dispatch(setQuestsRequestStatus(RequestStatus.Success));
      })
      .catch(() => {
        dispatch(setQuestsRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToLoadQuests);
      });
  }
);

const postOrderAction = (order) => (
  async (dispatch)  => {
    dispatch(setOrderRequestStatus(RequestStatus.Loading));
    await fetch(Endpoint.PostOrder(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(setOrderRequestStatus(RequestStatus.Success));
          toast.success(SuccessMessage.SuccessToSendOrder);
        } else {
          throw new Error(response.status.toString());
        }
      })
      .catch(() => {
        dispatch(setOrderRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToSendOrder);
      });
  }
);

export {
  getQuestAction,
  getQuestsAction,
  postOrderAction,
};
