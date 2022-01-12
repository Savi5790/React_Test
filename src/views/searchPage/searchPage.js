import * as React from "react";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter_dataSet } from "./reducer/action";


const SearchPage = (props, history) => {
  const dispatch = useDispatch();
  const [strValue, setStrValue] = useState("");
  const onTextChanged = (e) => {
    setStrValue(e.target.value);
    dispatch(Filter_dataSet(e.target.value));
  };

  const loadSearch = useSelector((state) => state.SearchArray.filterOfDataSet);

  return (
    <div>
      <input type="text" onChange={onTextChanged} value={strValue} />
      <div></div>
      <Button>Начать поиск</Button>
      <h3>{loadSearch}</h3>
    </div>
  );
};

export default SearchPage;
