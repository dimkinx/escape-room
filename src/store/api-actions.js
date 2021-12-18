import { setOrderRequestStatus, setQuest, setQuestRequestStatus, setQuests, setQuestsRequestStatus } from './actions';
import { Endpoint, ErrorMessage, HttpStatusCode, RequestStatus } from '../constants';
import { toast } from 'react-toastify';

const getQuestAction = (id) => (
  async (dispatch)  => {
    dispatch(setQuestRequestStatus(RequestStatus.Loading));
    await fetch(Endpoint.GetQuest(id))
      .then((response) => response.json())
      .then((data) => {
        dispatch(setQuest(data));
        dispatch(setQuestRequestStatus(RequestStatus.Success));
      })
      .catch(({ response }) => {
        dispatch(setQuestRequestStatus(
          response && response.status === HttpStatusCode.NotFound
            ? RequestStatus.NotFound
            : RequestStatus.Fail
        ));
        !response && toast.error(ErrorMessage.FailToLoadQuest);
      });
  }
);

const getQuestsAction = () => (
  async (dispatch)  => {
    dispatch(setQuestsRequestStatus(RequestStatus.Loading));
    await fetch(Endpoint.GetQuests())
      .then((response) => response.json())
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
      body: JSON.stringify(order),
    })
      .then(dispatch(setOrderRequestStatus(RequestStatus.Success)))
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
