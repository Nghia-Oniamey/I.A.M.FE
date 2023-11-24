import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FloatButton} from "antd";
import {AppConfig} from "./AppConfig";
import DashboardBanDaoTao from "./layout/bandaotao/DashboardBanDaoTao";

function App() {
  return (
      <div className="scroll-smooth md:scroll-auto font-sans">
        {/*{data && <GlobalLoading />}*/}

        <BrowserRouter
            // basename={AppConfig.routerBase}
        >
          {/*<Suspense fallback={<GlobalLoading />}>*/}
            <Routes>
              {/*<Route path="*" element={<NotFound />} />*/}
              {/*<Route path="/403" element={<NotAuthen />} />*/}
              {/*<Route path="/401" element={<NotAuthorized />} />*/}
              {/*<Route path="/ooops" element={<Ooops />} />*/}
                <Route path={"*"} element={<DashboardBanDaoTao/>}/>
            </Routes>
          {/*</Suspense>*/}
        </BrowserRouter>
        <FloatButton.BackTop />
      </div>
  );
}

export default App;
