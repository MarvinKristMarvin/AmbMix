import "./ProfileMenu.scss";
export default function ProfileMenu() {
  return (
    <div className="ProfileMenu">
      <div>
        <p>Sign up </p>
        <p>or log in</p>
      </div>

      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button>Sign up</button>
      </form>
    </div>
  );
}
