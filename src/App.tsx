import * as React from 'react';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  public toOpen() {
    window.open('https://qr.alipay.com/c1x03531g2ynnovdegpoj97')
  }

  public render() {
    const da: any = [
      {
        "name": "Ice Cream Sandwich",
        "number": "4.0-4.0.4",
        "level": "14-15",
      },
      {
        "name": "Jelly Bean",
        "number": "4.1-4.3.1",
        "level": "16-18",
      },
      {
        "name": "KitKat",
        "number": "4.4-4.4.4",
        "level": "19-20",
      },
      {
        "name": "Lollipop",
        "number": "5.0-5.1.1",
        "level": "21-22",
      },
      {
        "name": "Marshmallow",
        "number": "6.0-6.0.1",
        "level": "23",
      },
      {
        "name": "Nougat",
        "number": "7.0-7.1.2",
        "level": "24-25",
      },
      {
        "name": "Oreo",
        "number": "8.0-8.1",
        "level": "26-27",
      },
      {
        "name": "Android P",
        "number": "9",
        "level": "28",
      }
    ];

    return (
      <div className="App">
        <button className="btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.toOpen}>
          领取老婆红包
        </button>
        <Table data={da} />
      </div>
    );
  }
}

export default App;
