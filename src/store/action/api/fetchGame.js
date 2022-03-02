import { getGameApi } from "../../../api/getGame";
import store from "../../store";
import { searchGameAction } from "../actions";

export const fetchGame = async () => {
  const response = await getGameApi();
  store.dispatch(searchGameAction(response.data.results));
};
