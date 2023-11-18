import "./App.css";
import Form from "./components/Form";
import MainText from "./components/MainText";

function App() {
   return (
      <div className="container px-6 sm:mx-auto  flex flex-col sm:px-20  justify-center sm:h-screen">
         <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap mt-6 sm:mt-0 py-6 sm:py-0">
            <div className="flex-1 flex flex-col justify-center text-center sm:text-start">
               <MainText />
            </div>
            <div className="flex-1">
               <Form />
            </div>
         </div>
      </div>
   );
}

export default App;
