import classes from "./UserList.module.css";

function UserList({ users }) {
  return (
    <>
      {users.length > 0 && (
        <div className={classes.users}>
          <ul>
            {users.map((data) => (
              <li key={data.id}>
                {data.name} ({data.age} year old)
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default UserList;
