import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const FavBrand = props => {
  const [cSelected, setCSelected] = useState([]);
  const [userSelected] = useState([]);

  const onCheckboxBtnClick = (e, selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(e.target.innerHTML);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div>
      <h5>Favorite Brand</h5>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={e => onCheckboxBtnClick(e, 1)}
          active={cSelected.includes(1)}
        >
          Nike
        </Button>
        <Button
          color="primary"
          onClick={e => onCheckboxBtnClick(e, 2)}
          active={cSelected.includes(2)}
        >
          Adidas
        </Button>
        <Button
          color="primary"
          onClick={e => onCheckboxBtnClick(e, 3)}
          active={cSelected.includes(3)}
        >
          Air Jordan
        </Button>
        <Button
          color="primary"
          onClick={e => onCheckboxBtnClick(e, 4)}
          active={cSelected.includes(4)}
        >
          Yeezy
        </Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  );
};

export default FavBrand;
