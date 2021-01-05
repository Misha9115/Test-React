import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteOneProduct } from './../../store/action/actionProduct'

import './List.css';
import ListS from './ListS'


class List extends React.Component {
 
    render() {
        return (
            <div>
                {this.props.product.map(e => {
                   
                    return (<ListS
                        key={e.id}
                        img={e.img}
                        name={e.name}
                        descrip={e.descrip}
                        cost={e.cost}
                        flag={this.props.status}
                        del={() => { this.props.deleteOneProduct(e.id) }}
                    />
                    )
                })}
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ deleteOneProduct: deleteOneProduct  }, dispatch)
}
function mapStateToProps(state) {
    return {
        product: state.active.posts,
        status: state.active.statusADMIN
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(List);
