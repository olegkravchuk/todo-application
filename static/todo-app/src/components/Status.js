import React, {Component} from 'react'
import {Preloader} from 'react-materialize';


export default class Status extends Component {
    onClick(status){
        this.props.selectedStatus(status)
    }
    render(){
        const {results, loading} = this.props.data;
        return (
            <div>
               <div className='center'><Preloader size='small' active={loading}/></div>
                <ul className="tabs">
                    <li className="tab"><a href='#' onClick={this.onClick.bind(this, '')}>All</a></li>
                    {
                        results.map((status) => <li key={status.id} className="tab "><a href='#' onClick={this.onClick.bind(this, status.code)}>{status.name}</a></li>)
                    }
                </ul>
            </div>
        )
    }
}