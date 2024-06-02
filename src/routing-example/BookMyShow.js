import React, { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Booknavbar from "./Booknavbar";

const Movies = lazy(() => import("./Movies.js"));

const Wrapper = () => {
  return (
    <div>
      <Booknavbar />
      <Outlet />
    </div>
  );
};
const BookMyShow = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="explore" element={<Wrapper />}>
            <Route
              path="movies"
              element={
                <Suspense fallback={<p>loading lazzzy....!</p>}>
                  <Movies />
                </Suspense>
              }
            />

            <Route path="stream" element={<h1>stream page</h1>} />
            <Route path="events" element={<h1>events page</h1>} />
            <Route path="plays" element={<h1>plays page</h1>} />
            <Route path="sports" element={<h1>sports page</h1>} />
            <Route path="activity" element={<h1>activity page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default BookMyShow;
