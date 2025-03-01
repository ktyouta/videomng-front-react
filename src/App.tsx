import { QueryClient, QueryClientProvider } from 'react-query';
import QueryApp from './QueryApp'
import { ReactQueryDevtools } from "react-query/devtools";

function App() {

  //React-Query用
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryApp />
      {/* React-query devtool */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
