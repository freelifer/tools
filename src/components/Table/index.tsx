import * as React from 'react';

interface IAndroidVersion {
    Name: string;
    Number: string;
    Level: string;
}

interface IProp {
    data: IAndroidVersion[]
}
class Table extends React.Component<IProp> {

    public createItem = (item: IAndroidVersion) => {
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{item.Name}11</td>
                <td className="mdl-data-table__cell--non-numeric">{item.Number}</td>
                <td className="mdl-data-table__cell--non-numeric">{item.Level}</td>
            </tr>
        )
    }

    public render() {
        const { data } = this.props;
        return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Code Name</th>
                    <th className="mdl-data-table__cell--non-numeric">Version number</th>
                    <th className="mdl-data-table__cell--non-numeric">API level</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return this.createItem(item)
                })}
            </tbody>
        </table>)
    }
}

export default Table