import { API, User } from "api";
import Loading from "components/Loading";
import TableHeader from "components/TableHeader";
import TableRow from "components/TableRow";
import { useEffect, useState } from "react";
import styles from "./Table.module.css";

export default function Table() {
  const [users, setUsers] = useState<User[]>();
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    // this is an IIFE for fetching data from the api file
    (async () => {
      try {
        setloading(true);
        const res = await API.requestUsers();
        setUsers(res);
      } catch (error) {
        console.log("there is a problem");
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <TableHeader />
      </thead>

      <tbody className="ml-auto">
        <tr>
          <td>
            <div
              className="flex px-2 py-1 text-coolGray-700 cursor-pointer rounded-full bg-cyan-500 mb-2 ml-auto text-xs"
              onClick={() => {
                const temp = users && [...users];
                setUsers(
                  temp?.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                );
              }}
            >
              Alphabetic Sort
            </div>
          </td>
        </tr>
      </tbody>

      {loading ? (
        <tbody className="flex justify-center">
          <tr className="flex justify-center">
            <td className="flex justify-center">
              <Loading />
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className={styles.tableBody}>
          {users?.map((user) => (
            <TableRow {...user} key={user.id} />
          ))}
        </tbody>
      )}
    </table>
  );
}
