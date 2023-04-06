import { Toaster as HotToast } from 'react-hot-toast';

const Toaster = () => (
  <HotToast
    reverseOrder={false}
    gutter={8}
    containerClassName=''
    containerStyle={{}}
    toastOptions={{
      position: 'bottom-center',
      success: {
        duration: 2300,
        style: {
          background: '#61C791',
          color: '#fff',
        },
      },
      error: {
        duration: 2300,
        style: {
          background: '#B22222',
          color: '#fff',
        },
      },
    }}
  />
);

export default Toaster;
