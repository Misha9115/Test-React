import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dData } from './../../store/action/actionProduct'
import { Button } from '@material-ui/core';
import './List.css';


class AdminList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kol: 0,
            sum: 0,
            mid: 0
        };
    }
    sumCost = () => {
        let all = 0
        this.props.product.map((praice) => all += praice.cost);

        return all;
    }
    midelCost = () => {
        let midle = 0;
        midle = this.sumCost() / this.props.product.length;
        return midle.toFixed(2);
    }
    componentDidMount() {
        this.setState({
            kol: this.props.product.length,
            sum: this.sumCost(),
            mid: this.midelCost()
        })

    }


    render() {
      
        return (
            <div className='adminList'>
                <div className='adminList2'>Количество : {this.props.product.length}</div>
                <div className='adminList2'>Сума стоимостей : {this.sumCost()}</div>
                <div className='adminList2'>Средняя цена : {this.midelCost()}</div>
                <div className='adminList2'>
                    {this.props.status ?
                        <Button className='adminList2' variant="contained" color="secondary" onClick={() => { this.props.dData(this.props.product) }}>
                            Удалить
                    </Button> :
                        null}
                </div>

            </div>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ dData: dData }, dispatch)
}

function mapStateToProps(state) {
    return {
        product: state.active.posts,
        status: state.active.statusADMIN
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(AdminList);