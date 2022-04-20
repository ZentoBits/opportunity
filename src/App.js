import './App.css';
import Opportunity from "./components/opportunity/opportunity";

function App() {
    return (
        <div>
            <header className="app-header">
                <img
                    src={require('./assets/Athliance-NIL-Protect-Logo-1500-300x102.png')}
                    width="150"
                    alt="Athliance"
                />
            </header>
            <div>
                <Opportunity />
            </div>
            <footer className="app-footer">
              <span>&copy; 2020-2022 Athliance. All rights reserved. <span>Privacy Policy</span> | <span>Terms of Service</span></span>
              <span>
                <img src={require('./assets/Athliance-A.png')} alt=""/>
              </span>
            </footer>
        </div>
    );
}

export default App;
