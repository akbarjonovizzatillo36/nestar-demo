import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../property/Top";
import Footer from "../property/Footer";
const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id="top">
            <Top />
          </Stack>
          <Stack className={"header-main"}>Header Filter</Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>

          <Stack id="footer">
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;