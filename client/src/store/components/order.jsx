import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort";
import { sort } from "../actions/index";

export default function Order() {
  const dispatch = useDispatch();
  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }

  return (
    <select name="select" onChange={onSelectChange}>
      <option value={ASCENDENTE}>A-Z</option>
      <option value={DESCENDENTE}>Z-A</option>
    </select>
  );
}
