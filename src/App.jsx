import AppContextProvider from "./context/app_context";
import Admin from "./Admin";
import { saveToken } from "./util/local";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  // saveToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpveWFsdmJvYmFuLmFkbWluQGxldHRlcnN0b2Ficm9hZC5jb20iLCJ1c2VySWQiOiI2NDdiMmJlODliYzk1ZmI5ZmI2OTkwZDMiLCJmaXJzdE5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsImRwIjoiIiwiaWF0IjoxNjg1Nzk0NjAxLCJleHAiOjE2ODU4ODEwMDF9.plSGt-MVgTOt4X-NorcV2F6tUpGQrA_Jh0Thz63YWbk");
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Admin />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
