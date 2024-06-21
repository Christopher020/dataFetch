import StartFirebase from "../../StartFirebase";
import React from "react";
import {ref, onValue} from "firebase/database";
import {Table} from "react-bootstrap"

const db = StartFirebase();

export class Realtimedata extends React.Component{
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'UserData');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
                console.log(records)
            })
            this.setState({tableData: records});
        })
    }
    

    render(){
        return (
            <Table className="container w-75 " bordered striped variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index) =>{
                        return(
                        <tr>
                            <td>{index}</td>
                            <td>{row.key}</td>
                            <td>{row.data.firstName}</td>
                            <td>{row.data.lastName}</td>
                            <td>{row.data.phoneNumber}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}