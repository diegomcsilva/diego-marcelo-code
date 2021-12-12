import React from 'react';
import './App.css';

function App() {
  return (
    <div className="code">
      <pre>
        <span className="c-magento">
          import 
        </span> {`{`}
            23 anos,<br/>
            Casado,<br/>
            1 filho e 1 pet,<br/>
            21 - 983620335<br/>
        {`}`} <span className="c-magento">from</span>
        <span className="c-yellow">'Diego Marcelo Costa da Silva'</span>;
      </pre>
      <pre>
        <span className="c-magento">
          import 
        </span> {`{`}
            html,<br/>
            css,<br/>
            js,<br/>
            vtex<br/>
        {`}`} <span className="c-magento">from</span>
        <span className="c-yellow">'front-end'</span>;
      </pre>
    </div>
  );
}

export default App;
