function Table(props) {
  const table = props.table.map(tr => {
    return (
      <tr key={tr.id}>
        <td>{tr.tdBold}</td>
        <td>{tr.td}</td>
      </tr>
    )
  })

  return (
      <div>
        <h2>Завдання 2. Таблиця</h2>

        <table>
          <tbody>
            {table}
          </tbody>
        </table>
      </div>
  );
}

export default Table;