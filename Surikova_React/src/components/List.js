import React from "react";
import City from "./City";
import Image from "./Image";

class List extends React.Component {
  render() {
    return(
      <div>
        <h2>Завдання 4. Масив міст.</h2>

        <select name="cities" id="cities">
          {this.props.data.map(item => <City key={item.id} name={item.name} />)}
        </select>

        {this.props.data.map(item => <Image key={item.id} src={item.image} title={item.name} />)}
      </div>
    )
  }
}

export default List;