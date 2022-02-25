import { getGameApi } from "../../../api/getGame";
import store from "../../store";
import { searchGameAction } from "../actions";

export const fetchGame = async () => {
  const result = await getGameApi();
  console.log(result);
  store.dispatch(searchGameAction());
};
