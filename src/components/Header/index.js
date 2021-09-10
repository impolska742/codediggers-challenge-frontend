export const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/" className="nav-link" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/task1" className="nav-link" aria-current="page">
            Task 1
          </a>
        </li>
        <li className="nav-item">
          <a href="/task2" className="nav-link">
            Task 2
          </a>
        </li>
        <li className="nav-item">
          <a href="/task3" className="nav-link">
            Task 3
          </a>
        </li>
      </ul>
    </header>
  );
};
