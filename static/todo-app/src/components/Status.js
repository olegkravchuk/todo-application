import React, {Component} from 'react'
import {Preloader, Button} from 'react-materialize';


export default class Status extends Component {
    render(){
        console.log(this.props);
        const {results, loading} = this.props.data;
        console.log(results);
        return (
            <div>
               <div className='center'><Preloader size='small' active={loading}/></div>
                {
                    results.map((status) => <Button key={status.id} waves='light'>{status.name}</Button>)
                }
            </div>
        )
    }
}