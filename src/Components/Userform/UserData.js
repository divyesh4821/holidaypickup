import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Table, Button } from "reactstrap";
import { useTable } from "react-table";
import ToastNotification from "../Toast";

const UserData = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userQueries"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQueries(data);
      } catch (error) {
        console.error("Error fetching user queries: ", error);
      }
    };
    fetchQueries();
  }, []);

  const handleDelete = async (queryId) => {
    try {
      await deleteDoc(doc(db, "userQueries", queryId));
      setQueries((prevQueries) =>
        prevQueries.filter((query) => query.id !== queryId)
      );
      // Show success message
      <ToastNotification
        message="User data deleted successfully"
        type="success"
      />;
    } catch (error) {
      console.error("Error removing document: ", error);
      // Show error message
      <ToastNotification message="Failed to delete user data" type="error" />;
    }
  };

  // Define columns for React Table
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        width: 150,
        Cell: ({ value }) => <div className="truncate">{value}</div>,
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => <div className="truncate">{value}</div>,
      },
      {
        Header: "Phone",
        accessor: "phone",
        Cell: ({ value }) => <div className="truncate">{value}</div>,
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ value }) => <div className="truncate">{value}</div>,
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value }) => (
          <Button color="danger" size="sm" onClick={() => handleDelete(value)}>
            Delete
          </Button>
        ),
      },
    ],
    []
  );

  // Use react-table hooks to get table props
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: queries });

  return (
    <div>
      <h2 className="text-center py-3">All User data</h2>
      <Table {...getTableProps()} striped bordered responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserData;
