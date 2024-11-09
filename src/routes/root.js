import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import RootNavBar from "../components/nav/navbar.js";
import Footer from "../components/nav/footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="nav">
        <RootNavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
