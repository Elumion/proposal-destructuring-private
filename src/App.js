import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /**
     * We declare class
     */
    class Foo {
      x = 10;
      #y = 15;
      equalsTo(_p) {
        var { x } = _p,
          /**
           * we destructurize it's private property
           */
          y = _p.#y;
        return this.x === x && this.#y === y;
      }
    }

    const foo = new Foo();
    const foo2 = new Foo();

    console.log(foo.equalsTo(foo2));
    foo2.x = 19;
    console.log(foo.equalsTo(foo2));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p>Довгалюк Владислав</p>
          <p>Front-end</p>
          <p>AWS Certified Developer - Associate</p>
          <p>
            Ця програма сертифікації від AWS надає повний огляд послуг та
            інструментів AWS для розробників. Він охоплює такі теми, як AWS
            Lambda, Amazon API Gateway і AWS Elastic Beanstalk, які актуальні
            для front-end розробників, які хочуть створювати безсерверні
            програми.
          </p>
          <a
            className="App-link"
            href="https://github.com/tc39/proposal-destructuring-private#proposal-destructuring-private"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посилання на destructuring-private proposal
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
