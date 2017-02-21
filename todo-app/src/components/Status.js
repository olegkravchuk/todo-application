import React, {Component} from 'react'
import {Preloader, } from 'react-materialize';


export default class Status extends Component {
    onClick(status){
        this.props.selectedStatus(status)
    }

    deleteStatus(status){
        var r = confirm('Are you sure you want to delete the category?. All values in this category will remove!');
        if (r == true) {
            this.props.delete(status);
        }
    }

    render(){
        const {results, loading} = this.props.data;
        return (
            <div>
               <div className='center'><Preloader size='small' active={loading}/></div>
                <ul className="tabs">
                    <li className="tab"><a href='#' onClick={this.onClick.bind(this, '')}><div className="chip">All</div></a></li>
                    {
                        results.map((status) =>
                            <li key={status.id} className="tab ">
                                <a href='#'>
                                    <div className="chip">
                                        <span onClick={this.onClick.bind(this, status.code)}>{status.name}</span>
                                        <i onClick={this.deleteStatus.bind(this, status)} className="material-icons">close</i>
                                    </div>
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}