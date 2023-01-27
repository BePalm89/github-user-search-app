import "./UserDetails.css";

const UserDatails = ({ user }) => {
  return (
    <div className="container-user-details">
      <figure>
        <img
          src={user.avatar_url}
          alt="avatar-user"
          className="avatar-user-img"
        ></img>
      </figure>
      <div className="user-details">
        <div className="row">
          <h3 className="user-name">{user?.name}</h3>
          <p className="light-grey-text">
            {"Joined " +
              new Date(user?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
          </p>
        </div>
        <div className="row">
          <p className="user-login">{"@" + user.login}</p>
        </div>
        <div className="row">
          <p className="light-grey-text">
            {user.bio ? user.bio : "This profile has no bio"}
          </p>
        </div>

        <div className="row-info-box">
          <div className="row-info title">
            <p>Repos</p>
            <p>Followers</p>
            <p>Following</p>
          </div>
          <div className="row-info">
            <h3>{user.public_repos}</h3>
            <h3>{user.followers}</h3>
            <h3>{user.following}</h3>
          </div>
        </div>

        <p>{user.location}</p>
        <p>{user.twitter_username}</p>
        <p>{user.blog}</p>
        <p>{user.company}</p>
      </div>
    </div>
  );
};

export default UserDatails;
