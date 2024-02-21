// @ts-nocheck
//* Package imports */
import React, { ReactElement } from "react";

import "@Styles/global.css";
import "react-toastify/dist/ReactToastify.min.css";

interface LayoutProps {
  Page: ReactElement;
}

const Layout: FunctionComponent<LayoutProps> = (Page) =>
  class extends React.Component {
    render() {
      const { props } = this.props;
      const property = props !== undefined ? props : this.props;
      return (
        <main>
          <Page {...property} />
        </main>
      );
    }
  };

Layout.displayName = "Sumit Hacker News";

export default Layout;
